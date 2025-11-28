'use server'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { Resend } from 'resend'
import { db } from '@/lib/db'
import {
  users,
  gameStatuses,
} from '@/lib/schema'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { eq, count } from 'drizzle-orm'
import { RateLimitPresets, RateLimiter } from '@/lib/rate-limit'

// ---------------------------
// Config / helpers
// ---------------------------
const JWT_SECRET = process.env.JWT_SECRET || 'dev_jwt_secret_change_me'
const JWT_EXPIRY = '7d'
const RESEND_API_KEY = process.env.RESEND_API_KEY
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

type SafeUser = {
  id: number
  email: string
  role: string
}


// Verify JWT, return payload or null
function verifyToken(token: string | undefined): SafeUser | null {
  if (!token) return null
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any
    if (!payload || !payload.id) return null
    return { id: payload.id, email: payload.email, role: payload.role }
  } catch (e) {
    return null
  }
}

// Get real IP
async function getIp() {
  const h = await headers()
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    h.get("x-real-ip") ||
    "unknown"
  )
}

// ---------------------------
// AUTH: register / login / logout / current user
// ---------------------------

export async function registerUser(formData: FormData) {
  const email = (formData.get('email') as string || '').trim().toLowerCase()
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters' }
  }

  // Rate limiting (only if Redis is configured)
  if (RateLimitPresets) {
    const ip = await getIp()
    const rl = await RateLimitPresets.ip(ip).limit(`register:${ip}`)
    if (!rl.success) return { error: 'Too many registration attempts. Please try again later.' }

    const spam = await RateLimitPresets.antiSpam(ip).limit(`spamreg:${ip}`)
    if (!spam.success) return { error: 'Too many requests. Please try again later.' }
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10)

    // Try insert directly to avoid a prior SELECT
    const result = await db.insert(users)
      .values({
        email,
        passwordHash,
        role: 'user',
      })
      .onConflictDoNothing()
      .returning({ id: users.id, role: users.role, email: users.email })

    if (!result || result.length === 0) {
      return { error: 'User already exists' }
    }

    const created = result[0] as any
    const token = jwt.sign(
      { id: created.id, email: created.email, role: created.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    )

    const cookieStore = await cookies()
    cookieStore.set({
      name: 'session',
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return { success: true, userId: created.id.toString() }
  } catch (err) {
    console.error('Registration error:', err)
    return { error: 'Failed to register user' }
  }
}

export async function loginUser(formData: FormData) {
  const email = (formData.get('email') as string || '').trim().toLowerCase()
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  // Rate limiting (only if Redis is configured)
  if (RateLimitPresets) {
    const ip = await getIp()

    // LIMITAR 10 por minuto
    const rl = await RateLimitPresets.ip(ip).limit(`login:${ip}`)
    if (!rl.success) {
      return { error: 'Too many login attempts. Please try again later.' }
    }

    // Anti spam extremo (4 intentos cada 30s)
    const spam = await RateLimitPresets.antiSpam(ip).limit(`spam:${ip}`)
    if (!spam.success) {
      return { error: 'Too many requests. Please try again later.' }
    }
  }

  try {
    // read only the fields we need (minimizes bytes/read)
    const result = await db.select({
      id: users.id,
      email: users.email,
      passwordHash: users.passwordHash,
      role: users.role,
    }).from(users).where(eq(users.email, email)).limit(1)

    if (!result || result.length === 0) {
      // don't reveal which part failed
      return { error: 'Invalid credentials' }
    }

    const user = result[0] as any
    const isValidPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isValidPassword) {
      return { error: 'Invalid credentials' }
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    )

    const cookieStore = await cookies()
    cookieStore.set({
      name: 'session',
      value: token,
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return { success: true, userId: user.id }
  } catch (err) {
    console.error('Login error:', err)
    return { error: 'Failed to login' }
  }
}

export async function logoutUser() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
  redirect('/login')
}

// Returns SafeUser or null. This does NOT hit DB (uses JWT)
export async function getCurrentUser() {
  const token = (await cookies()).get('session')?.value
  const payload = verifyToken(token)
  if (!payload) return null
  return payload
}

// ---------------------------
// Admin user creation & management
// ---------------------------

export async function createUserByAdmin(formData: FormData) {
  // allow initial setup (no admin exists) or admin user
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)

  // check if any admin exists
  const admins = await db.select({ count: count(users.id) }).from(users).where(eq(users.role, 'admin'))
  const noAdmins = (admins && (admins as any)[0] && (admins as any)[0].count === 0) || !admins

  if (!noAdmins && (!caller || caller.role !== 'admin')) {
    return { error: 'Unauthorized' }
  }

  const email = (formData.get('email') as string || '').trim().toLowerCase()
  const password = formData.get('password') as string
  const role = (formData.get('role') as string || 'user')

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  if (!['user', 'admin'].includes(role)) {
    return { error: 'Invalid role' }
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10)

    const result = await db.insert(users)
      .values({
        email,
        passwordHash,
        role,
      })
      .onConflictDoNothing()
      .returning({ id: users.id })

    if (!result || result.length === 0) {
      return { error: 'User already exists' }
    }

    return { success: true }
  } catch (err) {
    console.error('Create user error:', err)
    return { error: 'Failed to create user' }
  }
}

export async function getAllUsers() {
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)

  // allow initial setup if no admins
  const admins = await db.select({ count: count(users.id) }).from(users).where(eq(users.role, 'admin'))
  const noAdmins = (admins && (admins as any)[0] && (admins as any)[0].count === 0) || !admins

  if (!noAdmins && (!caller || caller.role !== 'admin')) {
    return { error: 'Unauthorized' }
  }

  try {
    const result = await db.select({
      id: users.id,
      email: users.email,
      role: users.role,
      createdAt: users.createdAt,
    }).from(users).orderBy(users.createdAt)

    return { success: true, users: result }
  } catch (err) {
    console.error('Get users error:', err)
    return { error: 'Failed to get users' }
  }
}

export async function updateUserRole(userId: number, newRole: string) {
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)
  if (!caller || caller.role !== 'admin') {
    return { error: 'Unauthorized' }
  }

  if (!['user', 'admin'].includes(newRole)) {
    return { error: 'Invalid role' }
  }

  try {
    await db.update(users)
      .set({ role: newRole })
      .where(eq(users.id, userId))

    return { success: true }
  } catch (err) {
    console.error('Update user role error:', err)
    return { error: 'Failed to update user role' }
  }
}

// ---------------------------
// Password reset flow
// ---------------------------

export async function requestPasswordReset(formData: FormData) {
  const email = (formData.get('email') as string || '').trim().toLowerCase()
  if (!email) return { error: 'Email is required' }

  // Rate limiting - Máximo 3 intentos cada 10 min
  const ip = await getIp()
  const rl = await new RateLimiter('pwdreset', 3, 600).limit(ip)

  if (!rl.success) {
    return { error: 'Too many password reset requests. Please try again later.' }
  }

  try {
    // Check if user exists (only needed to decide update)
    const found = await db.select({ id: users.id }).from(users).where(eq(users.email, email)).limit(1)
    if (!found || found.length === 0) {
      // For security, return success message even if not found
      return { success: true, message: 'If an account with that email exists, a password reset link has been sent.' }
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpires = Math.floor(Date.now() / 1000) + (15 * 60) // 15 minutes

    await db.update(users)
      .set({
        resetToken,
        resetTokenExpires,
      })
      .where(eq(users.email, email))

    // Try to send email; if send fails, don't reveal to user — just log.
    if (resend) {
      const resetLink = `${BASE_URL}/reset-password?token=${resetToken}`
      try {
        await resend.emails.send({
          from: 'Panel Hyper Soporte <noreply@hypersoporte.com>',
          to: [email],
          subject: 'Reset your password',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #9333ea;">Reset your password</h2>
              <p>You requested a password reset for your Panel HyperPlay account.</p>
              <p>Click the link below to reset your password:</p>
              <a href="${resetLink}" style="background-color: #9333ea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 16px 0;">Reset Password</a>
              <p>This link will expire in 15 minutes.</p>
            </div>
          `,
        })
      } catch (sendErr) {
        console.error('Failed to send reset email (Resend):', sendErr)
        // Continue — don't expose email failures to caller
      }
    } else {
      console.warn('Resend not configured; skipping email send.')
    }

    return { success: true, message: 'If an account with that email exists, a password reset link has been sent.' , resetToken } // token returned for dev/testing
  } catch (err) {
    console.error('Password reset request error:', err)
    return { error: 'Failed to process password reset request' }
  }
}

export async function validateResetToken(token: string) {
  if (!token) return { valid: false }

  try {
    const userResult = await db.select({
      id: users.id,
      email: users.email,
      resetTokenExpires: users.resetTokenExpires,
    }).from(users).where(eq(users.resetToken, token)).limit(1)

    if (!userResult || userResult.length === 0) {
      return { valid: false }
    }

    const u = userResult[0] as any
    if (!u.resetTokenExpires || u.resetTokenExpires < Math.floor(Date.now() / 1000)) {
      return { valid: false, expired: true }
    }

    return { valid: true, email: u.email }
  } catch (err) {
    console.error('Token validation error:', err)
    return { valid: false }
  }
}

export async function resetPassword(formData: FormData) {
  const token = formData.get('token') as string
  const newPassword = formData.get('password') as string

  if (!token || !newPassword) return { error: 'Token and new password are required' }
  if (newPassword.length < 6) return { error: 'Password must be at least 6 characters' }

  try {
    const userResult = await db.select({
      id: users.id,
      resetTokenExpires: users.resetTokenExpires,
    }).from(users).where(eq(users.resetToken, token)).limit(1)

    if (!userResult || userResult.length === 0) {
      return { error: 'Invalid or expired reset token' }
    }

    const u = userResult[0] as any
    if (!u.resetTokenExpires || u.resetTokenExpires < Math.floor(Date.now() / 1000)) {
      return { error: 'Reset token has expired' }
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10)

    await db.update(users)
      .set({
        passwordHash: newPasswordHash,
        resetToken: null,
        resetTokenExpires: null,
      })
      .where(eq(users.id, u.id))

    return { success: true, message: 'Password has been reset successfully' }
  } catch (err) {
    console.error('Password reset error:', err)
    return { error: 'Failed to reset password' }
  }
}

// ---------------------------
// Game statuses
// ---------------------------

export async function getGameStatuses() {
  try {
    const result = await db.select().from(gameStatuses).orderBy(gameStatuses.game)
    return { success: true, statuses: result }
  } catch (err) {
    console.error('Get game statuses error:', err)
    return { error: 'Failed to get game statuses' }
  }
}

export async function updateGameStatus(game: string, status: string, version?: string) {
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)
  if (!caller || caller.role !== 'admin') {
    return { error: 'Unauthorized' }
  }

  // Rate limit ADMIN (only if Redis configured)
  if (RateLimitPresets) {
    const rl = await RateLimitPresets.antiSpamUser(caller.id).limit(`updatestatus:${caller.id}`)
    if (!rl.success) return { error: 'Too many requests. Please try again later.' }
  }

  const validStatuses = ['Testing', 'Detected', 'Use at your own risk', 'Updating', 'Safe to use']
  if (!validStatuses.includes(status)) {
    return { error: 'Invalid status' }
  }

  try {
    await db.insert(gameStatuses).values({
      game,
      status,
      version: version || 'v1.0.0',
      updatedAt: Math.floor(Date.now() / 1000),
    }).onConflictDoUpdate({
      target: gameStatuses.game,
      set: {
        status,
        version: version || undefined,
        updatedAt: Math.floor(Date.now() / 1000),
      },
    })

    return { success: true }
  } catch (err) {
    console.error('Update game status error:', err)
    return { error: 'Failed to update game status' }
  }
}
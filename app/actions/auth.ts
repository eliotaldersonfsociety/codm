'use server'

import bcrypt from 'bcryptjs'
import { db } from '@/lib/db'
import { users } from '@/lib/schema'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { eq } from 'drizzle-orm'
import crypto from 'crypto'

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email))

    if (existingUser.length > 0) {
      return { error: 'User already exists' }
    }

    // All users start as regular users
    const role = 'user'

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Insert user
    const result = await db.insert(users).values({
      email,
      passwordHash,
      role,
    }).returning({ id: users.id })

    const userId = result[0].id

    // Set cookie for session
    const cookieStore = await cookies()
    cookieStore.set('user_id', userId.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })

    return { success: true, userId: userId.toString() }
  } catch (error) {
    console.error('Registration error:', error)
    return { error: 'Failed to register user' }
  }
}

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    // Get user
    const result = await db.select().from(users).where(eq(users.email, email))

    if (result.length === 0) {
      return { error: 'Invalid credentials' }
    }

    const user = result[0]
    const isValidPassword = await bcrypt.compare(password, user.passwordHash)

    if (!isValidPassword) {
      return { error: 'Invalid credentials' }
    }

    // Set cookie
    const cookieStore = await cookies()
    cookieStore.set('user_id', user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7
    })

    return { success: true, userId: user.id }
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'Failed to login' }
  }
}

export async function logoutUser() {
  const cookieStore = await cookies()
  cookieStore.delete('user_id')
  redirect('/login')
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value

  if (!userId) {
    return null
  }

  try {
    const result = await db.select().from(users).where(eq(users.id, parseInt(userId)))

    if (result.length === 0) {
      return null
    }

    return result[0]
  } catch (error) {
    console.error('Get user error:', error)
    return null
  }
}

export async function createUserByAdmin(formData: FormData) {
  const currentUser = await getCurrentUser()

  // Allow creating admin if there are no admins yet (initial setup)
  const hasAdmins = await db.select().from(users).where(eq(users.role, 'admin'))
  const isInitialSetup = hasAdmins.length === 0

  if (!isInitialSetup && (!currentUser || currentUser.role !== 'admin')) {
    return { error: 'Unauthorized' }
  }

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = formData.get('role') as string || 'user'

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  if (!['user', 'admin'].includes(role)) {
    return { error: 'Invalid role' }
  }

  try {
    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email))

    if (existingUser.length > 0) {
      return { error: 'User already exists' }
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10)

    // Insert user
    await db.insert(users).values({
      email,
      passwordHash,
      role,
    })

    return { success: true }
  } catch (error) {
    console.error('Create user error:', error)
    return { error: 'Failed to create user' }
  }
}

export async function getAllUsers() {
  const currentUser = await getCurrentUser()

  // Allow access if user is admin OR if there are no admins yet (initial setup)
  const hasAdmins = await db.select().from(users).where(eq(users.role, 'admin'))
  const isInitialSetup = hasAdmins.length === 0

  if (!isInitialSetup && (!currentUser || currentUser.role !== 'admin')) {
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
  } catch (error) {
    console.error('Get users error:', error)
    return { error: 'Failed to get users' }
  }
}

export async function updateUserRole(userId: number, newRole: string) {
  const currentUser = await getCurrentUser()
  if (!currentUser || currentUser.role !== 'admin') {
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
  } catch (error) {
    console.error('Update user role error:', error)
    return { error: 'Failed to update user role' }
  }
}

export async function requestPasswordReset(formData: FormData) {
  const email = formData.get('email') as string

  if (!email) {
    return { error: 'Email is required' }
  }

  try {
    // Check if user exists
    const existingUser = await db.select().from(users).where(eq(users.email, email))

    if (existingUser.length === 0) {
      // Don't reveal if email exists or not for security
      return { success: true, message: 'If an account with that email exists, a password reset link has been sent.' }
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpires = Math.floor(Date.now() / 1000) + (15 * 60) // 15 minutes

    // Update user with reset token
    await db.update(users)
      .set({
        resetToken,
        resetTokenExpires,
      })
      .where(eq(users.email, email))

    // In a real app, send email here
    console.log(`Password reset token for ${email}: ${resetToken}`)
    console.log(`Reset link: /reset-password?token=${resetToken}`)

    return {
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.',
      resetToken // For development/testing
    }
  } catch (error) {
    console.error('Password reset request error:', error)
    return { error: 'Failed to process password reset request' }
  }
}

export async function resetPassword(formData: FormData) {
  const token = formData.get('token') as string
  const newPassword = formData.get('password') as string

  if (!token || !newPassword) {
    return { error: 'Token and new password are required' }
  }

  if (newPassword.length < 6) {
    return { error: 'Password must be at least 6 characters' }
  }

  try {
    // Find user with valid reset token
    const userResult = await db.select().from(users).where(eq(users.resetToken, token))

    if (userResult.length === 0) {
      return { error: 'Invalid or expired reset token' }
    }

    const user = userResult[0]

    // Check if token is expired
    if (!user.resetTokenExpires || user.resetTokenExpires < Math.floor(Date.now() / 1000)) {
      return { error: 'Reset token has expired' }
    }

    // Hash new password
    const newPasswordHash = await bcrypt.hash(newPassword, 10)

    // Update password and clear reset token
    await db.update(users)
      .set({
        passwordHash: newPasswordHash,
        resetToken: null,
        resetTokenExpires: null,
      })
      .where(eq(users.id, user.id))

    return { success: true, message: 'Password has been reset successfully' }
  } catch (error) {
    console.error('Password reset error:', error)
    return { error: 'Failed to reset password' }
  }
}

export async function validateResetToken(token: string) {
  if (!token) {
    return { valid: false }
  }

  try {
    const userResult = await db.select().from(users).where(eq(users.resetToken, token))

    if (userResult.length === 0) {
      return { valid: false }
    }

    const user = userResult[0]

    // Check if token is expired
    if (!user.resetTokenExpires || user.resetTokenExpires < Math.floor(Date.now() / 1000)) {
      return { valid: false, expired: true }
    }

    return { valid: true, email: user.email }
  } catch (error) {
    console.error('Token validation error:', error)
    return { valid: false }
  }
}
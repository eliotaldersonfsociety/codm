'use server'

import jwt from 'jsonwebtoken'
import { db } from '@/lib/db'
import { orders, orderItems } from '@/lib/schema'
import { eq, desc } from 'drizzle-orm'
import { cookies, headers } from 'next/headers'
import { CartItem } from '@/lib/cart-store'
import { RateLimitPresets, Ratelimit, redis } from '@/lib/rate-limit'

type SafeUser = {
  id: number
  email: string
  role: string
}

// Verify JWT, return payload or null
function verifyToken(token: string | undefined): SafeUser | null {
  if (!token) return null
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev_jwt_secret_change_me') as any
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

export async function saveOrder(formData: FormData) {
  const email = (formData.get('email') as string || '').trim()
  const discordUsername = (formData.get('discordUsername') as string || '').trim()
  const notes = (formData.get('notes') as string || '').trim()
  const total = parseFloat(formData.get('total') as string || '0')
  const proofImage = (formData.get('proofImage') as string || '').trim()
  const itemsJson = formData.get('items') as string

  if (!email || !proofImage || !itemsJson) {
    return { error: 'Missing required fields' }
  }

  let items: CartItem[]
  try {
    items = JSON.parse(itemsJson)
  } catch {
    return { error: 'Invalid items data' }
  }

  if (items.length === 0) return { error: 'No items in order' }

  // Rate limiting
  const ip = await getIp()
  const token = (await cookies()).get('session')?.value
  const payload = verifyToken(token)

  // Max 3 orders per minute per user
  if (payload) {
    const userRl = await RateLimitPresets.antiSpamUser(payload.id).limit(`order:${payload.id}`)
    if (!userRl.success) return { error: 'Too many orders. Please try again later.' }
  }

  // Block IP if 20 fake attempts (sliding window 20 attempts per hour)
  const ipRl = await new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(20, "1 h"),
    prefix: `rl:orderblock:${ip}`,
  }).limit(ip)

  if (!ipRl.success) return { error: 'Too many failed attempts. IP blocked temporarily.' }

  try {
    // derive user id from JWT to avoid extra DB read
    const token = (await cookies()).get('session')?.value
    const payload = verifyToken(token)
    const userId = payload ? payload.id : null

    const orderId = `FL-${Date.now()}`

    await db.transaction(async (tx: typeof db) => {
      const orderResult = await tx.insert(orders).values({
        userId,
        email,
        discordUsername,
        notes,
        total,
        proofImage,
        orderId,
        key: null,
      }).returning({ id: orders.id })

      const orderDbId = (orderResult[0] as any).id

      await tx.insert(orderItems).values(
        items.map(item => ({
          orderId: orderDbId,
          game: item.game,
          duration: item.duration,
          price: item.price,
        }))
      )
    })

    return { success: true, orderId }
  } catch (err) {
    console.error('Save order error:', err)
    return { error: 'Failed to save order' }
  }
}

export async function getUserOrders() {
  const token = (await cookies()).get('session')?.value
  const payload = verifyToken(token)
  if (!payload) return { error: 'Not authenticated' }

  try {
    // use query helpers (minimizes fields)
    const ordersWithItems = await db.query.orders.findMany({
      where: eq(orders.userId, payload.id),
      orderBy: [desc(orders.createdAt)],
      with: {
        items: true,
      },
    })

    return { success: true, orders: ordersWithItems }
  } catch (err) {
    console.error('Get orders error:', err)
    return { error: 'Failed to get orders' }
  }
}

export async function getAllOrders() {
  // admin only
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)
  if (!caller || caller.role !== 'admin') return { error: 'Unauthorized' }

  try {
    const ordersWithItems = await db.query.orders.findMany({
      orderBy: [desc(orders.createdAt)],
      with: {
        items: true,
      },
    })

    return { success: true, orders: ordersWithItems }
  } catch (err) {
    console.error('Get all orders error:', err)
    return { error: 'Failed to get orders' }
  }
}

export async function updateOrder(orderId: string, key: string, status?: string) {
  // admin only (or you could allow order owner)
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)
  if (!caller || caller.role !== 'admin') return { error: 'Unauthorized' }

  try {
    const toUpdate: any = { key }
    if (status) toUpdate.status = status

    await db.update(orders).set(toUpdate).where(eq(orders.orderId, orderId))

    return { success: true }
  } catch (err) {
    console.error('Update order error:', err)
    return { error: 'Failed to update order' }
  }
}

export async function deleteOrder(orderId: string) {
  // admin only
  const token = (await cookies()).get('session')?.value
  const caller = verifyToken(token)
  if (!caller || caller.role !== 'admin') return { error: 'Unauthorized' }

  try {
    const order = await db.query.orders.findFirst({
      where: eq(orders.orderId, orderId),
    })

    if (!order) return { error: 'Order not found' }

    await db.transaction(async (tx: typeof db) => {
      await tx.delete(orderItems).where(eq(orderItems.orderId, order.id))
      await tx.delete(orders).where(eq(orders.id, order.id))
    })

    return { success: true }
  } catch (err) {
    console.error('Delete order error:', err)
    return { error: 'Failed to delete order' }
  }
}
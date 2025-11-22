'use server'

import { db } from '@/lib/db'
import { orders, orderItems } from '@/lib/schema'
import { eq, desc } from 'drizzle-orm'
import { cookies } from 'next/headers'
import { CartItem } from '@/lib/cart-store'

export async function saveOrder(formData: FormData) {
  const email = formData.get('email') as string
  const discordUsername = formData.get('discordUsername') as string
  const notes = formData.get('notes') as string
  const total = parseFloat(formData.get('total') as string)
  const proofImage = formData.get('proofImage') as string
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

  if (items.length === 0) {
    return { error: 'No items in order' }
  }

  try {
    // Get user_id from cookie if logged in
    const cookieStore = await cookies()
    const userIdCookie = cookieStore.get('user_id')?.value
    const userId = userIdCookie ? parseInt(userIdCookie) : null

    // Generate order_id
    const orderId = `FL-${Date.now()}`

    // Insert order
    const orderResult = await db.insert(orders).values({
      userId,
      email,
      discordUsername,
      notes,
      total,
      proofImage,
      orderId,
    }).returning({ id: orders.id })

    const orderDbId = orderResult[0].id

    // Insert order items
    await db.insert(orderItems).values(
      items.map(item => ({
        orderId: orderDbId,
        game: item.game,
        duration: item.duration,
        price: item.price,
      }))
    )

    return { success: true, orderId }
  } catch (error) {
    console.error('Save order error:', error)
    return { error: 'Failed to save order' }
  }
}

export async function getUserOrders() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('user_id')?.value

  if (!userId) {
    return { error: 'Not authenticated' }
  }

  try {
    // Get orders with items
    const ordersWithItems = await db.query.orders.findMany({
      where: eq(orders.userId, parseInt(userId)),
      orderBy: [desc(orders.createdAt)],
      with: {
        items: true,
      },
    })

    return { success: true, orders: ordersWithItems }
  } catch (error) {
    console.error('Get orders error:', error)
    return { error: 'Failed to get orders' }
  }
}
import { db } from '@/lib/db'
import { rateLimits } from '@/lib/schema'
import { eq } from 'drizzle-orm'

// Rate limiting using Turso database
export class RateLimiter {
  private key: string
  private maxAttempts: number
  private windowMs: number

  constructor(key: string, maxAttempts: number, windowMs: number) {
    this.key = key
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
  }

  async limit(identifier: string): Promise<{ success: boolean; remaining: number }> {
    const fullKey = `${this.key}:${identifier}`
    const now = Math.floor(Date.now() / 1000)

    try {
      // Get current record
      const result = await db.select().from(rateLimits).where(eq(rateLimits.key, fullKey)).limit(1)

      if (result.length === 0) {
        // First attempt
        await db.insert(rateLimits).values({
          key: fullKey,
          count: 1,
          updatedAt: now,
        })
        return { success: true, remaining: this.maxAttempts - 1 }
      }

      const record = result[0]
      const timeDiff = now - record.updatedAt

      if (timeDiff >= this.windowMs) {
        // Reset window
        await db.update(rateLimits)
          .set({ count: 1, updatedAt: now })
          .where(eq(rateLimits.key, fullKey))
        return { success: true, remaining: this.maxAttempts - 1 }
      }

      if (record.count >= this.maxAttempts) {
        return { success: false, remaining: 0 }
      }

      // Increment count
      await db.update(rateLimits)
        .set({ count: record.count + 1, updatedAt: now })
        .where(eq(rateLimits.key, fullKey))

      return { success: true, remaining: this.maxAttempts - record.count - 1 }
    } catch (error) {
      console.error('Rate limit error:', error)
      // Allow request on error to avoid blocking users
      return { success: true, remaining: this.maxAttempts }
    }
  }
}

export const RateLimitPresets = {
  // 10 intentos por minuto por IP
  ip: (ip: string) => new RateLimiter('ip', 10, 60),

  // 5 intentos por minuto por usuario (cuando hay sesión)
  antiSpamUser: (userId: string | number) => new RateLimiter('user', 5, 60),

  // Protección extrema (contra bots)
  antiSpam: (key: string) => new RateLimiter('spam', 4, 30),

  // Orders: 3 por minuto por usuario
  ordersUser: (userId: number) => new RateLimiter('orders_user', 3, 60),

  // Orders block: 20 por hora por IP
  ordersBlock: (ip: string) => new RateLimiter('orders_block', 20, 3600),
}

// Error estándar
export class ActionError extends Error {
  code: string
  constructor({ code, message }: { code: string; message?: string }) {
    super(message || code)
    this.code = code
  }
}
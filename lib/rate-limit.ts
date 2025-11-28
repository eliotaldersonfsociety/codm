import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

export { Ratelimit }

export const redis = Redis.fromEnv()

export const RateLimitPresets = {
  // 10 intentos por minuto por IP
  ip: (ip: string) =>
    new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(10, "60 s"),
      prefix: `rl:ip:${ip}`,
    }),

  // 5 intentos por minuto por usuario (cuando hay sesión)
  antiSpamUser: (userId: string | number) =>
    new Ratelimit({
      redis,
      limiter: Ratelimit.fixedWindow(5, "60 s"),
      prefix: `rl:user:${userId}`,
    }),

  // Protección extrema (contra bots)
  antiSpam: (key: string) =>
    new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(4, "30 s"),
      prefix: `rl:spam:${key}`,
    }),
}

// Error estándar
export class ActionError extends Error {
  code: string
  constructor({ code, message }: { code: string; message?: string }) {
    super(message || code)
    this.code = code
  }
}
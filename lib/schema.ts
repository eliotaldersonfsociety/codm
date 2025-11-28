import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { relations, sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').unique().notNull(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').$defaultFn(() => 'user'), // user, admin
  resetToken: text('reset_token'),
  resetTokenExpires: integer('reset_token_expires'),
  createdAt: integer('created_at').notNull().default(sql`(strftime('%s','now'))`),
});

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  email: text('email').notNull(),
  discordUsername: text('discord_username'),
  notes: text('notes'),
  total: real('total').notNull(),
  proofImage: text('proof_image'), // image URL
  status: text('status').$defaultFn(() => 'pending'), // pending, processing, completed, cancelled
  key: text('key'), // license key
  orderId: text('order_id').unique().notNull(),
  createdAt: integer('created_at').notNull().default(sql`(strftime('%s','now'))`),
});

export const orderItems = sqliteTable('order_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  orderId: integer('order_id').references(() => orders.id).notNull(),
  game: text('game').notNull(),
  duration: text('duration').notNull(),
  price: real('price').notNull(),
});

export const gameStatuses = sqliteTable('game_statuses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  game: text('game').unique().notNull(),
  status: text('status').$defaultFn(() => 'Safe to use'), // Testing, Detected, Use at your own risk, Updating, Safe to use
  version: text('version').$defaultFn(() => 'v1.0.0'),
  updatedAt: integer('updated_at').notNull().default(sql`(strftime('%s','now'))`),
});

export const rateLimits = sqliteTable('rate_limits', {
  key: text('key').primaryKey().notNull(),
  count: integer('count').notNull(),
  updatedAt: integer('updated_at').notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }: { many: any }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one, many }: { one: any; many: any }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }: { one: any }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
}));
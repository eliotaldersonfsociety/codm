import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').unique().notNull(),
  passwordHash: text('password_hash').notNull(),
  role: text('role').$defaultFn(() => 'user'), // user, admin
  resetToken: text('reset_token'),
  resetTokenExpires: integer('reset_token_expires'),
  createdAt: integer('created_at').$defaultFn(() => Math.floor(Date.now() / 1000)),
});

export const orders = sqliteTable('orders', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').references(() => users.id),
  email: text('email').notNull(),
  discordUsername: text('discord_username'),
  notes: text('notes'),
  total: real('total').notNull(),
  proofImage: text('proof_image'), // base64 encoded image
  status: text('status').$defaultFn(() => 'pending'), // pending, processing, completed, cancelled
  orderId: text('order_id').unique().notNull(),
  createdAt: integer('created_at').$defaultFn(() => Math.floor(Date.now() / 1000)),
});

export const orderItems = sqliteTable('order_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  orderId: integer('order_id').references(() => orders.id).notNull(),
  game: text('game').notNull(),
  duration: text('duration').notNull(),
  price: real('price').notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one, many }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
  items: many(orderItems),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
}));
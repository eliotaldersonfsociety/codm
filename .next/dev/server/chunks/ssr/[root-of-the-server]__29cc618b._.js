module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/@libsql/client [external] (@libsql/client, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@libsql/client");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/richard/lib/schema.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "orderItems",
    ()=>orderItems,
    "orderItemsRelations",
    ()=>orderItemsRelations,
    "orders",
    ()=>orders,
    "ordersRelations",
    ()=>ordersRelations,
    "users",
    ()=>users,
    "usersRelations",
    ()=>usersRelations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sqlite-core/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sqlite-core/columns/text.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sqlite-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sqlite-core/columns/real.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/relations.js [app-rsc] (ecmascript)");
;
;
const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('users', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('id').primaryKey({
        autoIncrement: true
    }),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('email').unique().notNull(),
    passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('password_hash').notNull(),
    role: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('role').$defaultFn(()=>'user'),
    resetToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('reset_token'),
    resetTokenExpires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('reset_token_expires'),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('created_at').$defaultFn(()=>Math.floor(Date.now() / 1000))
});
const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('orders', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('id').primaryKey({
        autoIncrement: true
    }),
    userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('user_id').references(()=>users.id),
    email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('email').notNull(),
    discordUsername: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('discord_username'),
    notes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('notes'),
    total: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["real"])('total').notNull(),
    proofImage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('proof_image'),
    status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('status').$defaultFn(()=>'pending'),
    orderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('order_id').unique().notNull(),
    createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('created_at').$defaultFn(()=>Math.floor(Date.now() / 1000))
});
const orderItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sqliteTable"])('order_items', {
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('id').primaryKey({
        autoIncrement: true
    }),
    orderId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('order_id').references(()=>orders.id).notNull(),
    game: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('game').notNull(),
    duration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('duration').notNull(),
    price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$real$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["real"])('price').notNull()
});
const usersRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(users, ({ many })=>({
        orders: many(orders)
    }));
const ordersRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(orders, ({ one, many })=>({
        user: one(users, {
            fields: [
                orders.userId
            ],
            references: [
                users.id
            ]
        }),
        items: many(orderItems)
    }));
const orderItemsRelations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(orderItems, ({ one })=>({
        order: one(orders, {
            fields: [
                orderItems.orderId
            ],
            references: [
                orders.id
            ]
        })
    }));
}),
"[project]/richard/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/libsql/driver.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@libsql/client [external] (@libsql/client, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/lib/schema.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const client = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$libsql$2f$client__$5b$external$5d$__$2840$libsql$2f$client$2c$__esm_import$29$__["createClient"])({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
});
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$libsql$2f$driver$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["drizzle"])(client, {
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00824fc64110358ac237a51bb948da87d61f0d5839":"getCurrentUser","00c1ffffe9af7ca2d163e847de771a0943c2cb9b65":"getAllUsers","00e2b77fe8922816ce6377beec75cdaf782e63b874":"logoutUser","4022e16f692235569059d5a041202b9ed9d5298519":"createUserByAdmin","4055fb84a5320aa8abfe1fcc2f512d8a55d65ecc00":"validateResetToken","4061ce3018bb7fb0f6b266bf03311612e9fc7b0e82":"resetPassword","4073451d48d3957b4156f792d90d4d67273a261650":"requestPasswordReset","407d3b17a28c1ed7a11582f5838419db39e9bb25c3":"registerUser","407fe4477a674799f3a7590b1590a785bf93da7eb8":"loginUser","60269552d1ce89b039cf74f48c7f5f6e4c23294d0c":"updateUserRole"},"",""] */ __turbopack_context__.s([
    "createUserByAdmin",
    ()=>createUserByAdmin,
    "getAllUsers",
    ()=>getAllUsers,
    "getCurrentUser",
    ()=>getCurrentUser,
    "loginUser",
    ()=>loginUser,
    "logoutUser",
    ()=>logoutUser,
    "registerUser",
    ()=>registerUser,
    "requestPasswordReset",
    ()=>requestPasswordReset,
    "resetPassword",
    ()=>resetPassword,
    "updateUserRole",
    ()=>updateUserRole,
    "validateResetToken",
    ()=>validateResetToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/lib/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
async function registerUser(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            error: 'Email and password are required'
        };
    }
    try {
        // Check if user exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email));
        if (existingUser.length > 0) {
            return {
                error: 'User already exists'
            };
        }
        // All users start as regular users
        const role = 'user';
        // Hash password
        const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Insert user
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).values({
            email,
            passwordHash,
            role
        }).returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id
        });
        const userId = result[0].id;
        // Set cookie for session
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('user_id', userId.toString(), {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            maxAge: 60 * 60 * 24 * 7 // 7 days
        });
        return {
            success: true,
            userId: userId.toString()
        };
    } catch (error) {
        console.error('Registration error:', error);
        return {
            error: 'Failed to register user'
        };
    }
}
async function loginUser(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    if (!email || !password) {
        return {
            error: 'Email and password are required'
        };
    }
    try {
        // Get user
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email));
        if (result.length === 0) {
            return {
                error: 'Invalid credentials'
            };
        }
        const user = result[0];
        const isValidPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, user.passwordHash);
        if (!isValidPassword) {
            return {
                error: 'Invalid credentials'
            };
        }
        // Set cookie
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        cookieStore.set('user_id', user.id.toString(), {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === 'production',
            maxAge: 60 * 60 * 24 * 7
        });
        return {
            success: true,
            userId: user.id
        };
    } catch (error) {
        console.error('Login error:', error);
        return {
            error: 'Failed to login'
        };
    }
}
async function logoutUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete('user_id');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/login');
}
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const userId = cookieStore.get('user_id')?.value;
    if (!userId) {
        return null;
    }
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id, parseInt(userId)));
        if (result.length === 0) {
            return null;
        }
        return result[0];
    } catch (error) {
        console.error('Get user error:', error);
        return null;
    }
}
async function createUserByAdmin(formData) {
    const currentUser = await getCurrentUser();
    // Allow creating admin if there are no admins yet (initial setup)
    const hasAdmins = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].role, 'admin'));
    const isInitialSetup = hasAdmins.length === 0;
    if (!isInitialSetup && (!currentUser || currentUser.role !== 'admin')) {
        return {
            error: 'Unauthorized'
        };
    }
    const email = formData.get('email');
    const password = formData.get('password');
    const role = formData.get('role') || 'user';
    if (!email || !password) {
        return {
            error: 'Email and password are required'
        };
    }
    if (![
        'user',
        'admin'
    ].includes(role)) {
        return {
            error: 'Invalid role'
        };
    }
    try {
        // Check if user exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email));
        if (existingUser.length > 0) {
            return {
                error: 'User already exists'
            };
        }
        // Hash password
        const passwordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        // Insert user
        await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).values({
            email,
            passwordHash,
            role
        });
        return {
            success: true
        };
    } catch (error) {
        console.error('Create user error:', error);
        return {
            error: 'Failed to create user'
        };
    }
}
async function getAllUsers() {
    const currentUser = await getCurrentUser();
    // Allow access if user is admin OR if there are no admins yet (initial setup)
    const hasAdmins = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].role, 'admin'));
    const isInitialSetup = hasAdmins.length === 0;
    if (!isInitialSetup && (!currentUser || currentUser.role !== 'admin')) {
        return {
            error: 'Unauthorized'
        };
    }
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id,
            email: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].role,
            createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].createdAt
        }).from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).orderBy(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].createdAt);
        return {
            success: true,
            users: result
        };
    } catch (error) {
        console.error('Get users error:', error);
        return {
            error: 'Failed to get users'
        };
    }
}
async function updateUserRole(userId, newRole) {
    const currentUser = await getCurrentUser();
    if (!currentUser || currentUser.role !== 'admin') {
        return {
            error: 'Unauthorized'
        };
    }
    if (![
        'user',
        'admin'
    ].includes(newRole)) {
        return {
            error: 'Invalid role'
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).set({
            role: newRole
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id, userId));
        return {
            success: true
        };
    } catch (error) {
        console.error('Update user role error:', error);
        return {
            error: 'Failed to update user role'
        };
    }
}
async function requestPasswordReset(formData) {
    const email = formData.get('email');
    if (!email) {
        return {
            error: 'Email is required'
        };
    }
    try {
        // Check if user exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email));
        if (existingUser.length === 0) {
            // Don't reveal if email exists or not for security
            return {
                success: true,
                message: 'If an account with that email exists, a password reset link has been sent.'
            };
        }
        // Generate reset token
        const resetToken = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(32).toString('hex');
        const resetTokenExpires = Math.floor(Date.now() / 1000) + 15 * 60 // 15 minutes
        ;
        // Update user with reset token
        await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).set({
            resetToken,
            resetTokenExpires
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].email, email));
        // In a real app, send email here
        console.log(`Password reset token for ${email}: ${resetToken}`);
        console.log(`Reset link: /reset-password?token=${resetToken}`);
        return {
            success: true,
            message: 'If an account with that email exists, a password reset link has been sent.',
            resetToken
        };
    } catch (error) {
        console.error('Password reset request error:', error);
        return {
            error: 'Failed to process password reset request'
        };
    }
}
async function resetPassword(formData) {
    const token = formData.get('token');
    const newPassword = formData.get('password');
    if (!token || !newPassword) {
        return {
            error: 'Token and new password are required'
        };
    }
    if (newPassword.length < 6) {
        return {
            error: 'Password must be at least 6 characters'
        };
    }
    try {
        // Find user with valid reset token
        const userResult = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].resetToken, token));
        if (userResult.length === 0) {
            return {
                error: 'Invalid or expired reset token'
            };
        }
        const user = userResult[0];
        // Check if token is expired
        if (!user.resetTokenExpires || user.resetTokenExpires < Math.floor(Date.now() / 1000)) {
            return {
                error: 'Reset token has expired'
            };
        }
        // Hash new password
        const newPasswordHash = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(newPassword, 10);
        // Update password and clear reset token
        await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].update(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).set({
            passwordHash: newPasswordHash,
            resetToken: null,
            resetTokenExpires: null
        }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].id, user.id));
        return {
            success: true,
            message: 'Password has been reset successfully'
        };
    } catch (error) {
        console.error('Password reset error:', error);
        return {
            error: 'Failed to reset password'
        };
    }
}
async function validateResetToken(token) {
    if (!token) {
        return {
            valid: false
        };
    }
    try {
        const userResult = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["users"].resetToken, token));
        if (userResult.length === 0) {
            return {
                valid: false
            };
        }
        const user = userResult[0];
        // Check if token is expired
        if (!user.resetTokenExpires || user.resetTokenExpires < Math.floor(Date.now() / 1000)) {
            return {
                valid: false,
                expired: true
            };
        }
        return {
            valid: true,
            email: user.email
        };
    } catch (error) {
        console.error('Token validation error:', error);
        return {
            valid: false
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    registerUser,
    loginUser,
    logoutUser,
    getCurrentUser,
    createUserByAdmin,
    getAllUsers,
    updateUserRole,
    requestPasswordReset,
    resetPassword,
    validateResetToken
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerUser, "407d3b17a28c1ed7a11582f5838419db39e9bb25c3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(loginUser, "407fe4477a674799f3a7590b1590a785bf93da7eb8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(logoutUser, "00e2b77fe8922816ce6377beec75cdaf782e63b874", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getCurrentUser, "00824fc64110358ac237a51bb948da87d61f0d5839", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createUserByAdmin, "4022e16f692235569059d5a041202b9ed9d5298519", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllUsers, "00c1ffffe9af7ca2d163e847de771a0943c2cb9b65", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateUserRole, "60269552d1ce89b039cf74f48c7f5f6e4c23294d0c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(requestPasswordReset, "4073451d48d3957b4156f792d90d4d67273a261650", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(resetPassword, "4061ce3018bb7fb0f6b266bf03311612e9fc7b0e82", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(validateResetToken, "4055fb84a5320aa8abfe1fcc2f512d8a55d65ecc00", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/richard/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/richard/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => \"[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "407d3b17a28c1ed7a11582f5838419db39e9bb25c3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerUser"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/richard/.next-internal/server/app/signup/page/actions.js { ACTIONS_MODULE0 => "[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/app/actions/auth.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$signup$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29cc618b._.js.map
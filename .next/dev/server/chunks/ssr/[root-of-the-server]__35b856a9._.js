module.exports = [
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
"[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"00e4842573d6861a61638e5a67320803d4f813f037":"getUserOrders","40870bedd7b9e77a75e667575f1added96759c2a3b":"saveOrder"},"",""] */ __turbopack_context__.s([
    "getUserOrders",
    ()=>getUserOrders,
    "saveOrder",
    ()=>saveOrder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/lib/schema.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/drizzle-orm@0.44.7_@libsql+client@0.15.15/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/node_modules/.pnpm/next@16.0.3_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/headers.js [app-rsc] (ecmascript)");
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
async function saveOrder(formData) {
    const email = formData.get('email');
    const discordUsername = formData.get('discordUsername');
    const notes = formData.get('notes');
    const total = parseFloat(formData.get('total'));
    const proofImage = formData.get('proofImage');
    const itemsJson = formData.get('items');
    if (!email || !proofImage || !itemsJson) {
        return {
            error: 'Missing required fields'
        };
    }
    let items;
    try {
        items = JSON.parse(itemsJson);
    } catch  {
        return {
            error: 'Invalid items data'
        };
    }
    if (items.length === 0) {
        return {
            error: 'No items in order'
        };
    }
    try {
        // Get user_id from cookie if logged in
        const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
        const userIdCookie = cookieStore.get('user_id')?.value;
        const userId = userIdCookie ? parseInt(userIdCookie) : null;
        // Generate order_id
        const orderId = `FL-${Date.now()}`;
        // Insert order
        const orderResult = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orders"]).values({
            userId,
            email,
            discordUsername,
            notes,
            total,
            proofImage,
            orderId
        }).returning({
            id: __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orders"].id
        });
        const orderDbId = orderResult[0].id;
        // Insert order items
        await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].insert(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orderItems"]).values(items.map((item)=>({
                orderId: orderDbId,
                game: item.game,
                duration: item.duration,
                price: item.price
            })));
        return {
            success: true,
            orderId
        };
    } catch (error) {
        console.error('Save order error:', error);
        return {
            error: 'Failed to save order'
        };
    }
}
async function getUserOrders() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const userId = cookieStore.get('user_id')?.value;
    if (!userId) {
        return {
            error: 'Not authenticated'
        };
    }
    try {
        // Get orders with items
        const ordersWithItems = await __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].query.orders.findMany({
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orders"].userId, parseInt(userId)),
            orderBy: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$44$2e$7_$40$libsql$2b$client$40$0$2e$15$2e$15$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$lib$2f$schema$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["orders"].createdAt)
            ],
            with: {
                items: true
            }
        });
        return {
            success: true,
            orders: ordersWithItems
        };
    } catch (error) {
        console.error('Get orders error:', error);
        return {
            error: 'Failed to get orders'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveOrder,
    getUserOrders
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveOrder, "40870bedd7b9e77a75e667575f1added96759c2a3b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$3_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserOrders, "00e4842573d6861a61638e5a67320803d4f813f037", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/richard/.next-internal/server/app/checkout/page/actions.js { ACTIONS_MODULE0 => \"[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/richard/.next-internal/server/app/checkout/page/actions.js { ACTIONS_MODULE0 => \"[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "40870bedd7b9e77a75e667575f1added96759c2a3b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveOrder"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$checkout$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/richard/.next-internal/server/app/checkout/page/actions.js { ACTIONS_MODULE0 => "[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/richard/app/actions/orders.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$checkout$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$richard$2f2e$next$2d$internal$2f$server$2f$app$2f$checkout$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$richard$2f$app$2f$actions$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__35b856a9._.js.map
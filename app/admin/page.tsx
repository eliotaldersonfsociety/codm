"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { ShoppingCart, Mail, User, Clock, ImageIcon, Trash2, Key } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { getCurrentUser } from "@/app/actions/auth"
import { getAllOrders, updateOrder } from "@/app/actions/orders"
import { useRouter } from "next/navigation"

interface Order {
  orderId: string
  email: string
  discordUsername: string
  notes: string
  items: Array<{
    id: string
    name: string
    game: string
    duration: string
    price: number
  }>
  total: number
  proofImage: string
  timestamp: string
  key?: string | null
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuthAndLoadData()
  }, [])

  const checkAuthAndLoadData = async () => {
    const user = await getCurrentUser()
    if (!user || user.role !== 'admin') {
      router.push('/dashboard')
      return
    }

    // Load orders from database
    const ordersResult = await getAllOrders()
    if (ordersResult.success) {
      // Transform database orders to the expected format
      const transformedOrders = ordersResult.orders.map(order => ({
        orderId: order.orderId,
        email: order.email,
        discordUsername: order.discordUsername || '',
        notes: order.notes || '',
        items: order.items.map(item => ({
          id: item.id.toString(),
          name: `${item.game} - ${item.duration}`,
          game: item.game,
          duration: item.duration,
          price: item.price,
        })),
        total: order.total,
        proofImage: order.proofImage || '',
        timestamp: order.createdAt ? new Date(order.createdAt).toISOString() : new Date().toISOString(),
      }))

      // Load keys from localStorage
      const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]")
      const ordersWithKeys = transformedOrders.map(order => {
        const stored = storedOrders.find((s: any) => s.orderId === order.orderId)
        return stored ? { ...order, key: stored.key } : order
      })

      setOrders(ordersWithKeys.reverse())
    }

    setLoading(false)
  }

  const deleteOrder = (orderId: string) => {
    if (confirm("Are you sure you want to delete this order?")) {
      const updatedOrders = orders.filter((order) => order.orderId !== orderId)
      localStorage.setItem("orders", JSON.stringify(updatedOrders.reverse()))
      setOrders(updatedOrders)
      setSelectedOrder(null)
    }
  }

  const updateOrderKey = async (orderId: string, key: string) => {
    const result = await updateOrder(orderId, key, key ? 'completed' : 'pending')
    if (result.success) {
      // Reload orders
      const ordersResult = await getAllOrders()
      if (ordersResult.success) {
        const transformedOrders = ordersResult.orders.map(order => ({
          orderId: order.orderId,
          email: order.email,
          discordUsername: order.discordUsername || '',
          notes: order.notes || '',
          items: order.items.map(item => ({
            id: item.id.toString(),
            name: `${item.game} - ${item.duration}`,
            game: item.game,
            duration: item.duration,
            price: item.price,
          })),
          total: order.total,
          proofImage: order.proofImage || '',
          timestamp: order.createdAt ? new Date(order.createdAt).toISOString() : new Date().toISOString(),
          key: order.key,
        }))
        setOrders(transformedOrders.reverse())
        setSelectedOrder({ ...selectedOrder!, key })
      }
    } else {
      alert('Failed to update key')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="text-center text-white">Loading...</div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20 flex-1">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold dark:text-white text-purple-600">
            Admin{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-gray-400">Manage customer orders and view transaction details</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Orders</p>
                <p className="text-3xl font-bold text-foreground dark:text-white">{orders.length}</p>
              </div>
              <ShoppingCart className="h-12 w-12 text-purple-400" />
            </div>
          </Card>

          <Card className="border-purple-500/20 dark:bg-black bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Revenue</p>
                <p className="text-3xl font-bold text-foreground dark:text-white">
                  ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
                </p>
              </div>
              <svg className="h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Card>

          <Card className="border-purple-500/20 dark:bg-black bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Today's Orders</p>
                <p className="text-3xl font-bold text-foreground dark:text-white">
                  {
                    orders.filter((order) => {
                      const orderDate = new Date(order.timestamp)
                      const today = new Date()
                      return orderDate.toDateString() === today.toDateString()
                    }).length
                  }
                </p>
              </div>
              <Clock className="h-12 w-12 text-purple-400" />
            </div>
          </Card>
        </div>

        {/* Orders List */}
        <Card className="border-purple-500/20 dark:bg-black bg-white">
          <CardContent className="p-6">
            <h2 className="mb-6 text-xl font-bold dark:text-white text-purple-600">Recent Orders</h2>

            {orders.length === 0 ? (
              <div className="py-12 text-center text-gray-400">No orders yet</div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="rounded-lg border border-white/10 dark:bg-black/40 dark:hover:bg-black/60 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                          <Badge className="bg-purple-600 text-white">{order.orderId}</Badge>
                          <span className="text-sm text-gray-400">{new Date(order.timestamp).toLocaleString()}</span>
                        </div>

                        <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                          <Mail className="h-4 w-4" />
                          {order.email}
                        </div>

                        {order.discordUsername && (
                          <div className="mb-2 flex items-center gap-2 text-sm text-gray-300">
                            <User className="h-4 w-4" />
                            {order.discordUsername}
                          </div>
                        )}

                        <div className="mt-3 flex flex-wrap gap-2">
                          {order.items.map((item, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-white/5 text-gray-300">
                              {item.game} - {item.duration}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-400">${order.total.toFixed(2)}</div>
                        <Button variant="ghost" size="sm" className="mt-2 text-purple-400 hover:text-purple-300">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Order Details Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-[#0a0a0a] bg-white border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold dark:text-white text-purple-600">Order Details</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-6">
              {/* Order Info */}
              <div className="rounded-lg border border-white/10 dark:bg-black/40 bg-gray-50 p-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-gray-400">Order ID</p>
                    <p className="font-semibold text-white">{selectedOrder.orderId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="font-semibold text-white">{new Date(selectedOrder.timestamp).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-white">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Discord</p>
                    <p className="font-semibold text-white">{selectedOrder.discordUsername || "Not provided"}</p>
                  </div>
                </div>

                {selectedOrder.notes && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-400">Notes</p>
                    <p className="text-white">{selectedOrder.notes}</p>
                  </div>
                )}
              </div>

              {/* Items */}
              <div className="rounded-lg border border-white/10 dark:bg-black/40 bg-gray-50 p-4">
                <h3 className="mb-4 font-semibold dark:text-white text-purple-600">Items</h3>
                <div className="space-y-2">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-300">
                        {item.game} - {item.duration}
                      </span>
                      <span className="font-semibold text-purple-400">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-purple-400">${selectedOrder.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Proof */}
              <div className="rounded-lg border border-white/10 dark:bg-black/40 bg-gray-50 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-purple-400" />
                  <h3 className="font-semibold dark:text-white text-purple-600">Payment Proof</h3>
                </div>
                <div className="overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={selectedOrder.proofImage || "/placeholder.svg"}
                    alt="Payment proof"
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* License Key */}
              <div className="rounded-lg border border-white/10 dark:bg-black/40 bg-gray-50 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5 text-purple-400" />
                  <h3 className="font-semibold dark:text-white text-purple-600">License Key</h3>
                </div>
                <input
                  type="text"
                  value={selectedOrder.key || ""}
                  onChange={(e) => setSelectedOrder({ ...selectedOrder!, key: e.target.value })}
                  placeholder="Enter license key"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  onClick={() => updateOrderKey(selectedOrder.orderId, selectedOrder.key || "")}
                  className="mt-2 w-full bg-purple-600 hover:bg-purple-700"
                >
                  Update Key
                </Button>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={() => deleteOrder(selectedOrder.orderId)}
                  variant="destructive"
                  className="flex-1 gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete Order
                </Button>
                <Button
                  onClick={() => setSelectedOrder(null)}
                  variant="outline"
                  className="flex-1 border-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-white/5 bg-gray-50 text-purple-600 hover:bg-gray-100"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}

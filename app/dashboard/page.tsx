"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Key, Package } from 'lucide-react'
import Link from "next/link"
import { getCurrentUser, logoutUser } from "@/app/actions/auth"
import { getUserOrders } from "@/app/actions/orders"
import { redirect } from "next/navigation"
import Image from "next/image"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"
import { useState, useEffect } from "react"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const ordersPerPage = 10
  const totalPages = Math.ceil(orders.length / ordersPerPage)
  const startIndex = (currentPage - 1) * ordersPerPage
  const endIndex = startIndex + ordersPerPage
  const currentOrders = orders.slice(startIndex, endIndex)

  useEffect(() => {
    const loadData = async () => {
      const currentUser = await getCurrentUser()
      if (!currentUser) {
        redirect('/login')
        return
      }
      if (currentUser.role === 'admin') {
        redirect('/admin')
        return
      }
      setUser(currentUser)

      const ordersResult = await getUserOrders()
      const allOrders = ordersResult.success ? ordersResult.orders : []
      const userOrders = allOrders.filter(order => order.email === currentUser.email).reverse()
      setOrders(userOrders)
      setLoading(false)
    }
    loadData()
  }, [])

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

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="mb-8 text-3xl font-bold dark:text-white text-purple-600">Dashboard</h1>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <Card className="h-fit border-purple-500/20 dark:bg-black bg-white p-6">
            <div className="space-y-6">
              {/* User Avatar */}
              <div className="flex flex-col items-center space-y-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-3xl font-bold text-white">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">{user.email}</h3>
                  <p className="text-sm text-gray-400">
                    Member since {user.createdAt && user.createdAt > 0
                      ? new Date(user.createdAt * 1000).toLocaleDateString()
                      : 'Date not available'
                    }
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            {/* License Management Section */}
            <Card className="border-purple-500/20 dark:bg-black bg-white">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Your Licenses</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">License Management</h3>
                  <p className="text-sm text-gray-400">View and manage your product licenses.</p>
                </div>

                {currentOrders.length === 0 ? (
                  /* Empty State */
                  <Card className="border-white/10 dark:bg-black/50 bg-gray-50">
                    <CardContent className="flex flex-col items-center justify-center py-16">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10">
                        <AlertCircle className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white">No Orders Found</h3>
                      <p className="mb-6 max-w-md text-center text-sm text-gray-400">
                        You don't have any orders yet. Purchase a product to get started.
                      </p>
                      <Link href="/#featured">
                        <Button className="bg-purple-600 text-white hover:bg-purple-700">
                          View Available Products
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {currentOrders.map((order) => (
                      <Card key={order.id} className="border-white/10 dark:bg-black/50 bg-gray-50">
                        <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Package className="h-5 w-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">Order {order.orderId}</h3>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            order.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                            order.status === 'invalid_capture' ? 'bg-red-500/20 text-red-400' :
                            order.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                            order.status === 'cancelled' ? 'bg-gray-500/20 text-gray-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {order.status === 'paid' ? 'Paid' :
                             order.status === 'invalid_capture' ? 'Invalid Capture' :
                             order.status === 'completed' ? 'Completed' :
                             order.status === 'cancelled' ? 'Cancelled' :
                             'Pending'}
                          </span>
                        </div>
                          <div className="space-y-2 mb-4">
                            {(order.items as { id: string; game: string; duration: string; price: number }[]).map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-gray-400">{item.game} - {item.duration}</span>
                                <span className="text-purple-400">${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                            <div className="border-t border-white/10 pt-2 flex justify-between font-semibold">
                              <span className="text-white">Total:</span>
                              <span className="text-purple-400">${order.total.toFixed(2)}</span>
                            </div>
                
                            <div className="border-t border-white/10 pt-4">
                              <label className="block text-sm font-medium text-gray-300 mb-2">
                                License Key
                              </label>
                              <input
                                type="text"
                                readOnly
                                value={order.key || ""}
                                placeholder="Key will be provided by admin"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">
                            Created at: {order.createdAt && order.createdAt > 0
                              ? new Date(order.createdAt * 1000).toLocaleString()
                              : 'Date not available'
                            }
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-400">
                  Showing {startIndex + 1} to {Math.min(endIndex, orders.length)} of {orders.length} orders
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="border-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-white/5 bg-gray-50 text-purple-600 hover:bg-gray-100"
                  >
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className={
                          currentPage === page
                            ? "bg-purple-600 text-white"
                            : "border-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-white/5 bg-gray-50 text-purple-600 hover:bg-gray-100"
                        }
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="border-white/10 dark:bg-black/40 dark:text-white dark:hover:bg-white/5 bg-gray-50 text-purple-600 hover:bg-gray-100"
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Key, Package } from 'lucide-react'
import Link from "next/link"
import { getCurrentUser, logoutUser } from "@/app/actions/auth"
import { getUserOrders } from "@/app/actions/orders"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/login')
  }

  const ordersResult = await getUserOrders()
  const orders = ordersResult.success ? ordersResult.orders : []
  return (
    <div className="min-h-screen bg-black">
      {/* Dashboard Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.44v6.76L12 17.82l-5.5-3.44V7.62L12 4.18z"/>
                </svg>
              </div>
            </Link>
            
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="#codm" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                CODM
              </Link>
              <Link href="#mlbb" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                MLBB
              </Link>
              <Link href="#freefire" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Free Fire
              </Link>
              <Link href="#status" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                Status
              </Link>
              {user.role === 'admin' && (
                <Link href="/admin/users" className="text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
                  Admin
                </Link>
              )}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              Dashboard
            </Button>
            <form action={logoutUser}>
              <Button type="submit" variant="ghost" className="text-gray-300 hover:text-white">
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="mb-8 text-3xl font-bold text-white">Dashboard</h1>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <Card className="h-fit border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black p-6">
            <div className="space-y-6">
              {/* User Avatar */}
              <div className="flex flex-col items-center space-y-3">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-3xl font-bold text-white">
                  {user.email.charAt(0).toUpperCase()}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">{user.email}</h3>
                  <p className="text-sm text-gray-400">Member since {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="space-y-6">
            {/* License Management Section */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Key className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Your Licenses</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">License Management</h3>
                  <p className="text-sm text-gray-400">View and manage your product licenses.</p>
                </div>

                {orders.length === 0 ? (
                  /* Empty State */
                  <Card className="border-white/10 bg-black/50">
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
                    {orders.map((order) => (
                      <Card key={order.id} className="border-white/10 bg-black/50">
                        <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Package className="h-5 w-5 text-purple-400" />
                            <h3 className="text-lg font-bold text-white">Order {order.orderId}</h3>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                            order.status === 'processing' ? 'bg-blue-500/20 text-blue-400' :
                            order.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {order.status || 'pending'}
                          </span>
                        </div>
                          <div className="space-y-2 mb-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex justify-between text-sm">
                                <span className="text-gray-400">{item.game} - {item.duration}</span>
                                <span className="text-purple-400">${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                            <div className="border-t border-white/10 pt-2 flex justify-between font-semibold">
                              <span className="text-white">Total:</span>
                              <span className="text-purple-400">${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">
                            Ordered on {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : 'Unknown'}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

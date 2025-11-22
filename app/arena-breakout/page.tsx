"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingCartModal } from "@/components/shopping-cart"
import { NavigationMenu } from "@/components/navigation-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"

export default function ArenaBreakoutPage() {
  const { addItem, openCart } = useCartStore()

  const handleAddToCart = (duration: string, price: number) => {
    addItem({
      id: `arena-breakout-${duration}-${Date.now()}`,
      name: "Arena Breakout Cheats",
      game: "Arena Breakout",
      duration,
      price,
    })
    openCart()
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white lg:text-6xl">
              Arena Breakout{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Cheats
              </span>
            </h1>
            <p className="text-lg text-gray-400">Gain the competitive edge with our premium Arena Breakout cheat packages. Available for iOS only</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Daily Plan */}
            <Card className="border-white/10 bg-gradient-to-br from-gray-900/50 to-black">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-white">Daily</h3>
                  <div className="mb-2 text-4xl font-bold text-purple-400">$6.99</div>
                  <p className="text-sm text-gray-400">one-time payment</p>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Aimbot</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ESP Wallhack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Recoil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Spread</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Radar Hack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Anti-Ban Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>24-hour access</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart("1 day", 6.99)}
                  className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy Now - $6.99
                </Button>
              </CardContent>
            </Card>

            {/* Monthly Plan */}
            <Card className="relative border-purple-500 bg-gradient-to-br from-purple-900/20 to-black">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="gap-1 bg-purple-600 text-white">
                  <span className="text-xs">⭐</span>
                  Best Value
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-white">Monthly</h3>
                  <div className="mb-2 text-4xl font-bold text-purple-400">$26.99</div>
                  <p className="text-sm text-gray-400">one-time payment</p>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Aimbot</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ESP Wallhack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Recoil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Spread</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Radar Hack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Anti-Ban Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>30-day continuous access</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart("30 days", 26.99)}
                  className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy Now - $26.99
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Plan */}
            <Card className="border-white/10 bg-gradient-to-br from-gray-900/50 to-black">
              <CardContent className="p-8">
                <div className="mb-6 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-white">Weekly</h3>
                  <div className="mb-2 text-4xl font-bold text-purple-400">$17.99</div>
                  <p className="text-sm text-gray-400">one-time payment</p>
                </div>

                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Aimbot</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>ESP Wallhack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Recoil</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>No Spread</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Radar Hack</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Anti-Ban Protection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>7-day access</span>
                  </div>
                </div>

                <Button
                  onClick={() => handleAddToCart("7 days", 17.99)}
                  className="w-full gap-2 bg-purple-600 hover:bg-purple-700"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy Now - $17.99
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
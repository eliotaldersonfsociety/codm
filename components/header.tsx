"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Moon, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { useMenuStore } from "@/lib/menu-store"

export function Header() {
  const { items, openCart } = useCartStore()
  const { openMenu } = useMenuStore()
  const cartCount = items.length

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.44v6.76L12 17.82l-5.5-3.44V7.62L12 4.18z" />
              </svg>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/codm" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              CODM
            </Link>
            <Link href="/mlbb" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              MLBB
            </Link>
            <Link href="/free-fire" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Free Fire
            </Link>
            <Link href="/status" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
              Status
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" onClick={openMenu}>
            <Menu className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-white" onClick={openCart}>
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Button>

          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
            <Moon className="h-5 w-5" />
          </Button>

          <Link href="/dashboard">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">Dashboard</Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 bg-transparent">
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, ShoppingCart, User, LogOut } from "lucide-react"
import { useCartStore } from "@/lib/cart-store"
import { useMenuStore } from "@/lib/menu-store"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const { items, openCart } = useCartStore()
  const { openMenu } = useMenuStore()
  const { theme, setTheme } = useTheme()
  const cartCount = items.length
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="/icon.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              Home
            </Link>
            <Link href="/codm" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/codm' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              CODM
            </Link>
            <Link href="/mlbb" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/mlbb' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              MLBB
            </Link>
            <Link href="/free-fire" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/free-fire' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              Free Fire
            </Link>
            <Link href="/pubg" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/pubg' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              PUBG
            </Link>
            <Link href="/ball-pool" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/ball-pool' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              Ball Pool
            </Link>
            <Link href="/arena-breakout" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/arena-breakout' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              Arena Breakout
            </Link>
            <Link href="/delta-force" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/delta-force' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
              Delta Force
            </Link>
            <Link href="/status" className={`text-sm font-medium transition-colors hover:text-white ${pathname === '/status' ? 'text-white bg-purple-600 px-2 py-1 rounded' : 'text-gray-300'}`}>
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

          <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link href="/dashboard">
            <Button className="hidden md:flex bg-purple-600 text-white hover:bg-purple-700">Dashboard</Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/login">
            <Button variant="outline" className="hidden md:flex border-white/10 text-white hover:bg-white/5 bg-transparent">
              Logout
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-300 hover:text-white">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

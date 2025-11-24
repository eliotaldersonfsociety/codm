"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMenuStore } from "@/lib/menu-store"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavigationMenu() {
  const { isOpen, closeMenu } = useMenuStore()
  const pathname = usePathname()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={closeMenu} />

      {/* Menu Modal */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-[#0a0a0a] border-l border-white/10 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <h2 className="text-xl font-bold text-white">Navigation</h2>
            <Button variant="ghost" size="icon" onClick={closeMenu} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <p className="text-sm text-gray-400 mb-6">Navigate to page</p>

            <nav className="space-y-2">
              <Link
                href="/"
                onClick={closeMenu}
                className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
              >
                Home
              </Link>
              <Link
                href="https://discord.gg/h89Y27uBu"
                target="_blank"
                onClick={closeMenu}
                className="block rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-colors hover:bg-white/5"
              >
                Discord
              </Link>

              <Link
                href="/payment-methods"
                onClick={closeMenu}
                className="block rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-colors hover:bg-white/5"
              >
                Payment Methods
              </Link>

              <Link
                href="/status"
                onClick={closeMenu}
                className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/status' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
              >
                Status
              </Link>

              <div className="space-y-2">
                <p className="text-sm text-gray-400">Games</p>
                <Link
                  href="/codm"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/codm' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  CODM
                </Link>
                <Link
                  href="/mlbb"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/mlbb' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  MLBB
                </Link>
                <Link
                  href="/free-fire"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/free-fire' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  Free Fire
                </Link>
                <Link
                  href="/pubg"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/pubg' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  PUBG
                </Link>
                <Link
                  href="/ball-pool"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/ball-pool' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  Ball Pool
                </Link>
                <Link
                  href="/arena-breakout"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/arena-breakout' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  Arena Breakout
                </Link>
                <Link
                  href="/delta-force"
                  onClick={closeMenu}
                  className={`block rounded-lg border px-4 py-3 text-white transition-colors ${pathname === '/delta-force' ? 'bg-purple-600 border-purple-600' : 'border-white/10 bg-black/40 hover:bg-white/5'}`}
                >
                  Delta Force
                </Link>
              </div>

              <Link
                href="/dashboard"
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-3 text-center text-white transition-colors ${pathname === '/dashboard' ? 'bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Close Button */}
          <div className="border-t border-white/10 p-6">
            <Button
              onClick={closeMenu}
              variant="outline"
              className="w-full border-white/10 bg-black/40 text-white hover:bg-white/5"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

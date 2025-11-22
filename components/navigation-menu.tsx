"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMenuStore } from "@/lib/menu-store"
import Link from "next/link"

export function NavigationMenu() {
  const { isOpen, closeMenu } = useMenuStore()

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
          <div className="flex-1 p-6">
            <p className="text-sm text-gray-400 mb-6">Navigate to page</p>

            <nav className="space-y-2">
              <Link
                href="https://discord.gg/fluorite"
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
                className="block rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white transition-colors hover:bg-white/5"
              >
                Status
              </Link>

              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="block rounded-lg bg-purple-600 px-4 py-3 text-center text-white transition-colors hover:bg-purple-700"
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

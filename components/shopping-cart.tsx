"use client"

import { X, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/lib/cart-store"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function ShoppingCartModal() {
  const { items, isOpen, closeCart, removeItem } = useCartStore()
  const [couponCode, setCouponCode] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const router = useRouter()

  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const total = subtotal

  const handleCheckout = () => {
    if (!acceptTerms) {
      alert("Please accept the terms and conditions")
      return
    }
    router.push("/checkout")
    closeCart()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={closeCart} />

      {/* Cart Modal */}
      <div className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 shadow-2xl overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div>
              <h2 className="text-xl font-bold text-white">Cart</h2>
              <p className="text-sm text-gray-400 mt-1">Review your items and proceed to secure checkout.</p>
            </div>
            <Button variant="ghost" size="icon" onClick={closeCart} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="h-16 w-16 text-gray-600 mb-4" />
                <p className="text-gray-400 text-center">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Confirm and Pay Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <ShoppingCart className="h-5 w-5" />
                    <h3 className="font-semibold">Confirm and pay</h3>
                  </div>
                  <p className="text-sm text-gray-400">Pay securely with our payment processor</p>

                  {/* Cart Items */}
                  <div className="space-y-3 mt-6">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-white">{item.game}</h4>
                          <p className="text-sm text-gray-400">{item.duration}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-purple-400">${item.price.toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="h-8 w-8 text-gray-400 hover:text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Coupon Code */}
                  <div className="relative mt-6">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="bg-black/60 border-white/10 text-white placeholder:text-gray-500 pr-12"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-400"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </div>

                  {/* Totals */}
                  <div className="space-y-2 border-t border-white/10 pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Subtotal:</span>
                      <span className="text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-purple-400">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="rounded-lg border border-white/10 bg-black/40 p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        className="mt-1 border-white/20"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
                        <span className="text-red-400">Accept Terms</span> (Required)
                        <br />
                        <span className="text-gray-400">
                          By checking this box, you agree to our terms and conditions. You can read our terms and
                          conditions by clicking{" "}
                          <Link href="/terms" className="text-purple-400 hover:underline">
                            Terms and Conditions
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    onClick={handleCheckout}
                    disabled={!acceptTerms || items.length === 0}
                    className="w-full bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed h-12 text-base font-semibold"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Pay ${total.toFixed(2)}
                  </Button>

                  {/* Alternative Payment */}
                  <div className="text-center">
                    <p className="text-sm text-gray-400 mb-3">Or Pay With</p>
                    <Button
                      variant="outline"
                      className="w-full border-white/10 bg-black/40 text-white hover:bg-white/5"
                    >
                      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                      </svg>
                      Crypto
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

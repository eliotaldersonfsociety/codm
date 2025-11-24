"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCartStore } from "@/lib/cart-store"
import { useState, useEffect } from "react"
import { Upload, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { saveOrder } from "@/app/actions/orders"
import { getCurrentUser } from "@/app/actions/auth"
import { uploadImage } from "@/app/actions/upload"

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore()
  const [email, setEmail] = useState("")
  const [discordUsername, setDiscordUsername] = useState("")
  const [notes, setNotes] = useState("")
  const [proofImage, setProofImage] = useState<File | null>(null)
  const [proofPreview, setProofPreview] = useState<string>("")
  const [submitted, setSubmitted] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (items.length === 0) {
      router.push("/")
      return
    }

    const checkUser = async () => {
      const currentUser = await getCurrentUser()
      if (!currentUser) {
        router.push("/signup?redirect=/checkout")
        return
      }
      setUser(currentUser)
      setEmail(currentUser.email)
      setLoading(false)
      setLoading(false)
    }
    checkUser()
  }, [items.length, router])

  const total = items.reduce((sum, item) => sum + item.price, 0)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProofImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setProofPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !proofImage) {
      setError("Please fill in all required fields and upload payment proof")
      return
    }

    try {
      // Upload image to ImageKit
      const bytes = await proofImage.arrayBuffer()
      const proofImageUrl = await uploadImage(bytes, proofImage.name)

      const formData = new FormData()
      formData.append('email', email)
      formData.append('discordUsername', discordUsername)
      formData.append('notes', notes)
      formData.append('total', total.toString())
      formData.append('proofImage', proofImageUrl)
      formData.append('items', JSON.stringify(items))

      const result = await saveOrder(formData)

      if (result.error) {
        setError(result.error)
        return
      }

      setSubmitted(true)
      clearCart()

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    } catch (err: any) {
      if (err.message?.includes("Body exceeded")) {
        setError("The uploaded image is too large. Please upload an image smaller than 1MB.")
      } else {
        setError("An error occurred while submitting your order. Please try again.")
      }
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

  if (submitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <Card className="mx-auto max-w-md border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black p-12 text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="h-20 w-20 text-green-500" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-white">Order Submitted!</h2>
            <p className="mb-6 text-gray-400">
              Su pedido será revisado y en el transcurso del día se envía la key al dashboard de su cuenta y por email.
            </p>
            <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
          </Card>
        </div>
        <Footer />
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">
              Complete Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Purchase
              </span>
            </h1>
            <p className="text-gray-400">Fill in your details and upload payment proof to complete your order</p>
          </div>

          {error && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Summary */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Order Summary</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {item.game} - {item.duration}
                      </span>
                      <span className="font-semibold text-purple-400">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-purple-400">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information - Only show if not logged in */}
            {!user && (
              <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-lg font-bold text-white">Contact Information</h3>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/60 border-white/10 text-white placeholder:text-gray-500"
                    />
                    <p className="text-xs text-gray-500">Your license key will be sent to this email</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="discord" className="text-gray-300">
                      Discord Username (Optional)
                    </Label>
                    <Input
                      id="discord"
                      type="text"
                      placeholder="username#1234"
                      value={discordUsername}
                      onChange={(e) => setDiscordUsername(e.target.value)}
                      className="bg-black/60 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-gray-300">
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requests or questions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="bg-black/60 border-white/10 text-white placeholder:text-gray-500 min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Information */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-bold text-white">Additional Information</h3>

                <div className="space-y-2">
                  <Label htmlFor="discord" className="text-gray-300">
                    Discord Username (Optional)
                  </Label>
                  <Input
                    id="discord"
                    type="text"
                    placeholder="username#1234"
                    value={discordUsername}
                    onChange={(e) => setDiscordUsername(e.target.value)}
                    className="bg-black/60 border-white/10 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-gray-300">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or questions..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="bg-black/60 border-white/10 text-white placeholder:text-gray-500 min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Proof Upload */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-bold text-white">
                  Upload Payment Proof <span className="text-red-500">*</span>
                </h3>
                <p className="text-sm text-gray-400">
                  Please upload a screenshot of your payment transaction. Accepted formats: JPG, PNG, PDF
                </p>

                <div className="space-y-4">
                  <Label
                    htmlFor="proof"
                    className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-purple-500/30 bg-black/40 transition-colors hover:border-purple-500/60 hover:bg-black/60"
                  >
                    {proofPreview ? (
                      <div className="relative h-full w-full p-4">
                        <img
                          src={proofPreview || "/placeholder.svg"}
                          alt="Payment proof"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-purple-400" />
                        <span className="mt-2 text-sm text-gray-400">Click to upload payment proof</span>
                        <span className="mt-1 text-xs text-gray-500">JPG, PNG or PDF (Max 10MB)</span>
                      </>
                    )}
                  </Label>
                  <Input
                    id="proof"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleImageChange}
                    className="hidden"
                    required
                  />
                  {proofImage && (
                    <div className="flex items-center justify-between rounded-lg bg-black/60 p-3">
                      <span className="text-sm text-gray-300">{proofImage.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setProofImage(null)
                          setProofPreview("")
                        }}
                        className="text-red-400 hover:text-red-300"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Payment Instructions */}
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-900/10 to-black">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold text-white">Payment Instructions</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>1. Send ${total.toFixed(2)} USD to one of our payment methods:</p>
                  <div className="ml-4 space-y-2 rounded-lg bg-black/60 p-4">
                    <p className="font-semibold text-purple-400">PayPal:</p>
                    <p className="text-gray-300">Arsilarichars@gmail.com</p>
                    <p className="font-semibold text-purple-400 mt-3">Zelle:</p>
                    <p className="text-gray-300">9549313426 Maikol Ardila</p>
                    <p className="font-semibold text-purple-400 mt-3">Nequi:</p>
                    <p className="text-gray-300">3204417174</p>
                  </div>
                  <p>2. Take a screenshot of the transaction</p>
                  <p>3. Upload it above and submit this form</p>
                  <p>4. We'll process your order within 24 hours and send your license key to your email</p>
                </div>
              </CardContent>
            </Card>

            <Button
              type="submit"
              className="w-full bg-purple-600 text-white hover:bg-purple-700 h-12 text-base font-semibold"
            >
              Submit Order
            </Button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { requestPasswordReset } from "@/app/actions/auth"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setMessage("")

    const formData = new FormData()
    formData.append('email', email)

    const result = await requestPasswordReset(formData)

    if (result.error) {
      setError(result.error)
    } else {
      setMessage(result.message || "Password reset link sent!")
      // For development, show the token
      if (result.resetToken) {
        setMessage(`${result.message}\n\nDevelopment token: ${result.resetToken}\n\nReset link: /reset-password?token=${result.resetToken}`)
      }
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-700">
              <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l5.5 3.44v6.76L12 17.82l-5.5-3.44V7.62L12 4.18z"/>
              </svg>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Forgot password</h1>
              <p className="mt-2 text-sm text-gray-400">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              {message && (
                <div className="text-green-400 text-sm text-center whitespace-pre-line">
                  {message}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send reset link"}
              </Button>

              <p className="text-center text-sm text-gray-400">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="font-medium text-purple-400 hover:text-purple-300"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
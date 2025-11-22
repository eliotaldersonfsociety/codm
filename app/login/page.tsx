"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { loginUser, getCurrentUser } from "@/app/actions/auth"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    const result = await loginUser(formData)

    if (result.error) {
      alert(result.error)
      return
    }

    // Get user role and redirect accordingly
    const user = await getCurrentUser()
    if (user) {
      if (user.role === 'admin') {
        router.push("/admin")
      } else {
        router.push("/dashboard")
      }
    } else {
      router.push("/dashboard") // fallback
    }
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
              <h1 className="text-3xl font-bold text-white">Welcome back</h1>
              <p className="mt-2 text-sm text-gray-400">
                Enter your email to sign in to your account
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

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-purple-400 hover:text-purple-300"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
              >
                Sign in
              </Button>

              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-purple-400 hover:text-purple-300"
                >
                  Sign up
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

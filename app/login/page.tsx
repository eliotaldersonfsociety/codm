"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation'
import { loginUser, getCurrentUser } from "@/app/actions/auth"
import Image from "next/image"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/dashboard"
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
        router.push(redirect)
      }
    } else {
      router.push(redirect) // fallback
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 pt-16">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl overflow-hidden">
              <Image
                src="/icon.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold dark:text-white text-purple-600">Welcome back</h1>
              <p className="mt-2 text-sm text-gray-400">
                Enter your email to sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="dark:text-white text-purple-600">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark:border-white/20 dark:bg-white/5 dark:text-white border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="dark:text-white text-purple-600">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark:border-white/20 dark:bg-white/5 dark:text-white border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500"
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
                  href={`/signup${redirect !== '/dashboard' ? `?redirect=${encodeURIComponent(redirect)}` : ''}`}
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

      <ShoppingCartModal />
      <NavigationMenu />
    </div>
  )
}

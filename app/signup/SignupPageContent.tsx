"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { registerUser } from "@/app/actions/auth";
import { NavigationMenu } from "@/components/navigation-menu";
import { ShoppingCartModal } from "@/components/shopping-cart";
import Image from "next/image";

export default function SignupPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const result = await registerUser(formData);

    if (result.error) {
      alert(result.error);
      return;
    }

    router.push(redirect);
  };

  return (
    <div className="min-h-screen bg-black">
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

          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Create account</h1>
              <p className="mt-2 text-sm text-gray-400">
                Enter your details to create your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
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
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
                  required
                  minLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-white/20 bg-white/5 text-white placeholder:text-gray-500"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                Create account
              </Button>

              <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link href={`/login${redirect !== '/dashboard' ? `?redirect=${encodeURIComponent(redirect)}` : ''}`} className="font-medium text-purple-400 hover:text-purple-300">
                  Sign in
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
  );
}

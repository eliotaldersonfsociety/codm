"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function FeaturedGames() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-lg text-gray-400">Premium, undetectable cheats for the most popular mobile games.</p>
          <p className="text-lg text-gray-400">Dominate the competition!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Mobile Legends Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute left-4 top-4 bg-purple-600 text-white">Most Popular</Badge>
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">Updating</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$30/month</Badge>
              <img
                src="/mobile-legends-bang-bang-character.webp"
                alt="Mobile Legends"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">Mobile Legends</h3>
              <p className="mb-4 text-sm text-gray-400">
                Dominate the Land of Dawn with our advanced Mobile Legends cheats.
              </p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Line/Box
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Auto Retribution
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Drone View
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Streamproof
                  </Badge>
                </div>
              </div>
              <Link href="/mlbb" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Free Fire Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">Testing</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$26.99/month</Badge>
              <img
                src="/free-fire-game-character.jpg"
                alt="Free Fire"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">Free Fire</h3>
              <p className="mb-4 text-sm text-gray-400">
                Become the last one standing with our undetectable Free Fire cheats.
              </p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Hack
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    No Recoil
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Radar Hack
                  </Badge>
                </div>
              </div>
              <Link href="/free-fire" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* CODM Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">Updating</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$25/month</Badge>
              <img
                src="/call-of-duty-mobile-soldier.jpg"
                alt="CODM"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">CODM</h3>
              <p className="mb-4 text-sm text-gray-400">Crush your enemies with our premium CODM cheats and hacks.</p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Hack
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    No Recoil
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Radar Hack
                  </Badge>
                </div>
              </div>
              <Link href="/codm" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* PUBG Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">New</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$50/month</Badge>
              <img
                src="/pubg.webp"
                alt="PUBG"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">PUBG</h3>
              <p className="mb-4 text-sm text-gray-400">
                Dominate the battlegrounds with our premium PUBG cheats. Available for iOS and Android (no root required).
              </p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Hack
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    No Recoil
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Radar Hack
                  </Badge>
                </div>
              </div>
              <Link href="/pubg" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Arena Breakout Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">New</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$50/month</Badge>
              <img
                src="/arena.webp"
                alt="Arena Breakout"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">Arena Breakout</h3>
              <p className="mb-4 text-sm text-gray-400">
                Break through the competition with our premium Arena Breakout cheats. Available for iOS only.
              </p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Hack
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    No Recoil
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Radar Hack
                  </Badge>
                </div>
              </div>
              <Link href="/arena-breakout" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Delta Force Card */}
          <Card className="overflow-hidden border-purple-500/20 bg-white dark:bg-black">
            <div className="relative aspect-video bg-gradient-to-br from-purple-800/30 to-purple-900/30 p-4">
              <Badge className="absolute right-4 top-4 bg-gray-800 text-white">New</Badge>
              <Badge className="absolute bottom-4 right-4 bg-purple-600 text-white">$50/month</Badge>
              <img
                src="/delta.jpg"
                alt="Delta Force"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">Delta Force</h3>
              <p className="mb-4 text-sm text-gray-400">
                Force your way to victory with our advanced Delta Force cheats. Available for Android only.
              </p>
              <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-white">Features:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Aimbot
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    ESP Hack
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    No Recoil
                  </Badge>
                  <Badge variant="secondary" className="bg-white/5 text-xs text-gray-300">
                    Radar Hack
                  </Badge>
                </div>
              </div>
              <Link href="/delta-force" className="block">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  buy
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
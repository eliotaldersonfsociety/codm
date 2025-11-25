"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"
import { useState, useEffect } from "react"
import { getGameStatuses } from "@/app/actions/auth"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"

interface GameStatus {
  id: number
  game: string
  status: string | null
  version: string | null
  updatedAt: number | null
}

export default function StatusPage() {
  const [gameStatuses, setGameStatuses] = useState<GameStatus[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadStatuses = async () => {
      const result = await getGameStatuses()
      if (result.success) {
        const existingStatuses = result.statuses
        const allGames = ['CODM', 'MLBB', 'Free Fire', 'PUBG', 'Ball Pool', 'Arena Breakout', 'Delta Force']
        const completeStatuses = allGames.map(game => {
          const existing = existingStatuses.find(s => s.game === game)
          return existing || {
            id: 0,
            game,
            status: 'Safe to use',
            version: 'v1.0.0',
            updatedAt: Math.floor(Date.now() / 1000)
          }
        })
        setGameStatuses(completeStatuses)
      }
      setLoading(false)
    }
    loadStatuses()
  }, [])

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'Testing': return 'bg-purple-500'
      case 'Detected': return 'bg-red-500'
      case 'Use at your own risk': return 'bg-orange-500'
      case 'Updating': return 'bg-gray-500'
      case 'Safe to use': return 'bg-green-500'
      default: return 'bg-white'
    }
  }

  const handleRefresh = async () => {
    setLoading(true)
    const result = await getGameStatuses()
    if (result.success) {
      const existingStatuses = result.statuses
      const allGames = ['CODM', 'MLBB', 'Free Fire', 'PUBG', 'Ball Pool', 'Arena Breakout', 'Delta Force']
      const completeStatuses = allGames.map(game => {
        const existing = existingStatuses.find(s => s.game === game)
        return existing || {
          id: 0,
          game,
          status: 'Safe to use',
          version: 'v1.0.0',
          updatedAt: Math.floor(Date.now() / 1000)
        }
      })
      setGameStatuses(completeStatuses)
    }
    setLoading(false)
  }
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold dark:text-white text-purple-600 lg:text-6xl">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Hyper Soporte Status
              </span>
            </h1>
          </div>

          <div className="mx-auto max-w-4xl">
            <Card className="border-white/10 bg-white dark:bg-black">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">System Status</h2>
                    <p className="text-sm text-gray-400">Current status of all Fluorite products</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={handleRefresh} disabled={loading}>
                    <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                  </Button>
                </div>

                <div className="space-y-4 border-b border-white/10 pb-6">
                  {loading ? (
                    <div className="text-center text-gray-400">Loading game statuses...</div>
                  ) : gameStatuses.length === 0 ? (
                    <div className="text-center text-gray-400">No game statuses available</div>
                  ) : (
                    gameStatuses.map((gameStatus) => (
                      <div key={gameStatus.game} className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                        <div className="flex items-center gap-4">
                          <span className="font-semibold dark:text-white text-purple-600">{gameStatus.game}</span>
                          <span className="text-sm text-gray-400">{gameStatus.version || 'v1.0.0'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${getStatusColor(gameStatus.status)}`} />
                          <div className={`h-3 w-3 rounded-full ${getStatusColor(gameStatus.status)}`} />
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Status Legend */}
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold dark:text-white text-purple-600">Status Legend</h3>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-start gap-3 text-sm">
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                      </div>
                      <p className="text-gray-300">
                        <span className="font-medium">Testing.</span> We've did a security update and testing if product
                        is safe to use again.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                      </div>
                      <p className="text-gray-300">
                        <span className="font-medium">Detected.</span> Please do not use it until update.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="h-2 w-2 rounded-full bg-orange-500" />
                        <div className="h-2 w-2 rounded-full bg-orange-500" />
                      </div>
                      <p className="text-gray-300">
                        <span className="font-medium">Use at your own risk.</span> We've got ban reports but we aren't
                        able to reproduce them ourselves.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="h-2 w-2 rounded-full bg-gray-500" />
                        <div className="h-2 w-2 rounded-full bg-gray-500" />
                      </div>
                      <p className="text-gray-300">
                        <span className="font-medium">Updating.</span> The game recieved an update so we are working on
                        updating product for the latest patch.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 text-sm md:col-span-2">
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      </div>
                      <p className="text-gray-300">
                        <span className="font-medium">Safe to use.</span> The product works perfectly and we don't have
                        any ban reports on it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-500">
                  <span>Last update: 19/11/2025</span>
                  <span>Refreshed: 18:01:11</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

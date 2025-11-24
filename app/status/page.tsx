import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw } from "lucide-react"

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <RefreshCw className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-4 border-b border-white/10 pb-6">
                  {/* CODM Status */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold dark:text-white text-purple-600">CODM</span>
                      <span className="text-sm text-gray-400">v1.0.50</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-white" />
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* MLBB Status */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold dark:text-white text-purple-600">MLBB</span>
                      <span className="text-sm text-gray-400">v1.9.98</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-white" />
                      <div className="h-3 w-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* FF Status */}
                  <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold dark:text-white text-purple-600">FF</span>
                      <span className="text-sm text-gray-400">v1.114</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500" />
                      <div className="h-3 w-3 rounded-full bg-purple-500" />
                    </div>
                  </div>
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

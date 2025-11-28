"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingCartModal } from "@/components/shopping-cart"
import { NavigationMenu } from "@/components/navigation-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Shield, Wallet, Check, Play, ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import { getRandomAvatars } from "@/app/actions/avatars"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"

const FeaturedGames = dynamic(() => import('@/components/sections/FeaturedGames'), { ssr: false })

export default function HomePage() {
  const [avatars, setAvatars] = useState<string[]>([]);
  const [selectedGame, setSelectedGame] = useState("Mobile Legends");
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
  const timer = setTimeout(() => setVideoLoaded(true), 800) // 1 segundo
  return () => clearTimeout(timer)
}, [])

  useEffect(() => {
    getRandomAvatars(4).then(setAvatars);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight text-foreground lg:text-6xl">
                  Mobile Legends:{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Bang Bang
                  </span>
                </h1>
                <p className="text-lg text-gray-400">
                  Mobile Legends: Bang Bang is a popular mobile MOBA game developed by Moonton. Dominate the Land of
                  Dawn with our premium cheats and gain the competitive edge over your opponents. Our undetectable hacks
                  will help you rank up faster and enjoy a superior gaming experience.
                </p>
              </div>

              <div className="flex items-center gap-2 text-purple-400">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">Trusted by 1,800+ Satisfied Customers</span>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Map Hack
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Drone View
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Auto Aim
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Skill Cooldown
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Enemy Detection
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Auto Retribution
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Radar Hack
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Aimbot
                </Badge>
                <Badge variant="secondary" className="bg-white/5 text-gray-300 hover:bg-white/10">
                  Streamproof
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/mlbb">
                  <Button className="gap-2 bg-purple-600 text-white hover:bg-purple-700">
                    <ShoppingCart className="h-4 w-4" />
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Video Embed */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-black">
              {!videoLoaded && <Skeleton className="absolute inset-0 h-full w-full" />}
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Xp7enikm6V0?modestbranding=1&showinfo=0&rel=0"
                title="Gameplay Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setVideoLoaded(true)}
              />
            </div>
          </div>
        </div>
      </section>

      <FeaturedGames />

      {/* Why Choose Fluorite Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Panel HyperPlay
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Unmatched quality, security, and support for the ultimate gaming advantage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-500">
                  <Clock className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-purple-400">24/7 Support</h3>
              <p className="text-gray-400">
                Our support team is available 24/7. If you have any questions, don't hesitate to contact our support
                team. We are happy to answer your inquiries.
              </p>
            </Card>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-500">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-purple-400">Maximum Security</h3>
              <p className="text-gray-400">
                Panel HyperPlay provides the highest level of protection available, ensuring your account stays safe while
                using our premium cheats.
              </p>
            </Card>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-500">
                  <Wallet className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-purple-400">Affordable Prices</h3>
              <p className="text-gray-400">Our software's excellence is coupled with very reasonable pricing.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Users Say
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Don't just take our word for it. Here's what gamers are saying about Panel HyperPlay Cheats.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-400">1,800+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1 text-4xl font-bold text-purple-400">
                4.8
                <Star className="h-8 w-8 fill-purple-400 text-purple-400" />
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-400">99.2%</div>
              <div className="text-sm text-gray-400">Detection-Free Rate</div>
            </div>
          </div>

          {/* Reviews */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-6">
              <div className="mb-4 flex items-center gap-3">
                <img src={avatars[0] || "/placeholder-user.jpg"} alt="User avatar" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold dark:text-white text-purple-600">@lyrevagoonz</div>
                  <div className="text-sm text-gray-400">Mobile Legends Player</div>
                </div>
              </div>
              <p className="mb-4 italic text-gray-300">
                "ngl i was sus at first cuz ive gotten scammed before but this actually works?? been using for like 3
                weeks and im climbing so fast. epic to mythic in a week and my friends r asking if i got some secret
                coach or smth lmaoo. 10/10 would recommend"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
            </Card>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-6">
              <div className="mb-4 flex items-center gap-3">
                <img src={avatars[1] || "/placeholder-user.jpg"} alt="User avatar" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold dark:text-white text-purple-600">Ghost</div>
                  <div className="text-sm text-gray-400">Free Fire Player</div>
                </div>
              </div>
              <p className="mb-4 italic text-gray-300">
                "bruh the aim is crazy good. took me a bit to figure out the settings ngl but once i got it working my
                kd literally doubled. support actually helped me too which was unexpected. 2 months in and zero problems
                so far"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
            </Card>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-6">
              <div className="mb-4 flex items-center gap-3">
                <img src={avatars[2] || "/placeholder-user.jpg"} alt="User avatar" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold dark:text-white text-purple-600">Y3S0xt</div>
                  <div className="text-sm text-gray-400">CODM Player</div>
                </div>
              </div>
              <p className="mb-4 italic text-gray-300">
                "was scared af about bans tbh. lost 3 accounts before with other stuff but this one hits different. been
                months and still good. sometimes bugs out on specific maps but compared to others this is the safest ive
                used fr"
              </p>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                ))}
                <Star className="h-4 w-4 text-purple-400" />
              </div>
            </Card>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-6">
              <div className="mb-4 flex items-center gap-3">
                <img src={avatars[3] || "/placeholder-user.jpg"} alt="User avatar" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <div className="font-semibold dark:text-white text-purple-600">Hanni</div>
                  <div className="text-sm text-gray-400">Mobile Legends Player</div>
                </div>
              </div>
              <p className="mb-4 italic text-gray-300">
                "drone view is actually insane. can see everything and call shots for my team. went from gm to mythic in
                2 weeks and everyone thinks im suddenly pro lol. auto aim is smooth too. worth the money 100%"
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-purple-400 text-purple-400" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Guides & Tutorials Section */}
      <section className="bg-transparent py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Guides & Tutorials
              </span>
            </h2>
            <p className="text-lg text-gray-400">
              Learn how to use Panel HyperPlay Cheats effectively with our comprehensive guides and tutorials.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mb-8 grid grid-cols-2 gap-2 overflow-x-auto rounded-lg border border-white/10 bg-black/50 p-1 md:grid-cols-3 lg:grid-cols-4 xl:flex xl:gap-2">
              <Button
                className="flex-1"
                variant={selectedGame === "Mobile Legends" ? "default" : "ghost"}
                onClick={() => setSelectedGame("Mobile Legends")}
              >
                Mobile Legends
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "Free Fire" ? "default" : "ghost"}
                onClick={() => setSelectedGame("Free Fire")}
              >
                Free Fire
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "CODM" ? "default" : "ghost"}
                onClick={() => setSelectedGame("CODM")}
              >
                CODM
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "PUBG" ? "default" : "ghost"}
                onClick={() => setSelectedGame("PUBG")}
              >
                PUBG
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "Arena Breakout" ? "default" : "ghost"}
                onClick={() => setSelectedGame("Arena Breakout")}
              >
                Arena Breakout
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "Delta Force" ? "default" : "ghost"}
                onClick={() => setSelectedGame("Delta Force")}
              >
                Delta Force
              </Button>
              <Button
                className="flex-1"
                variant={selectedGame === "8 Ball Pool" ? "default" : "ghost"}
                onClick={() => setSelectedGame("8 Ball Pool")}
              >
                8 Ball Pool
              </Button>
            </div>

            <Card className="border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/5 dark:to-black p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-purple-500">
                  <svg className="h-10 w-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold dark:text-white text-purple-600">{selectedGame} Setup Guide</h3>
              <p className="mb-6 text-gray-400">Coming soon! We're preparing comprehensive guides for {selectedGame}.</p>
              <p className="mb-6 text-sm text-gray-500">
                Our team is currently working on detailed guides for {selectedGame}.
                <br />
                Check back soon or join our Discord for early access.
              </p>
              <Link href="https://discord.gg/h89Y27uBu" target="_blank">
                <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 0 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 0 .078.01c.12-.098.246-.198.373-.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 1-.084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 1 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord for Updates
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-400">Everything you need to know about Panel HyperPlay cheats and services.</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  Are these cheats safe to use?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes! Our cheats use advanced protection methods to remain undetected. We maintain a 99.2%
                  detection-free rate and constantly update our software to stay ahead of anti-cheat systems. However,
                  we always recommend using cheats responsibly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  How do I install the cheats?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  After purchasing, you'll receive detailed installation instructions via email. Our 24/7 support team
                  is also available to guide you through the setup process if needed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We offer a 48-hour refund policy if you experience technical issues that our support team cannot
                  resolve. Please contact support within 48 hours of purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  How often are the cheats updated?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We update our cheats regularly, typically within 24-48 hours after game updates. All active
                  subscribers receive updates automatically at no additional cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  Can I use the cheats on multiple devices?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Each license is tied to one device. If you need to use cheats on multiple devices, you'll need to
                  purchase additional licenses or contact support for multi-device plans.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-purple-500/20">
                <AccordionTrigger className="text-left dark:text-white text-purple-600 hover:text-purple-400">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  We accept various payment methods including credit/debit cards, PayPal, cryptocurrency, and various
                  regional payment options. All transactions are secure and encrypted.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <Card className="mx-auto max-w-xl border-purple-500/20 dark:bg-gradient-to-br dark:from-purple-900/10 dark:to-black p-8">
              <h3 className="mb-4 text-xl font-bold dark:text-white text-purple-600">Still have questions?</h3>
              <Link href="https://discord.gg/h89Y27uBu" target="_blank">
                <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  Join Our Discord
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

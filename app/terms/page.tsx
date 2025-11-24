"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold dark:text-white text-purple-600 lg:text-6xl">
              Terms of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg text-gray-400">Please read these terms carefully before using our services.</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 text-gray-300">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Panel HyperPlay services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">2. Use License</h2>
              <p>
                Permission is granted to temporarily use the cheats for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to decompile or reverse engineer any software contained on our service</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">3. Disclaimer</h2>
              <p>
                The materials on our service are provided on an 'as is' basis. Panel HyperPlay makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">4. Limitations</h2>
              <p>
                In no event shall Panel HyperPlay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our service, even if Panel HyperPlay or a Panel HyperPlay authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on our service could include technical, typographical, or photographic errors. Panel HyperPlay does not warrant that any of the materials on its service are accurate, complete, or current.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">6. Links</h2>
              <p>
                Panel HyperPlay has not reviewed all of the sites linked to its service and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Panel HyperPlay of the site.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">7. Modifications</h2>
              <p>
                Panel HyperPlay may revise these terms of service for its service at any time without notice. By using this service you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
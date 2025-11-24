"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold dark:text-white text-purple-600 lg:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-lg text-gray-400">Your privacy is important to us. Please read this policy carefully.</p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 text-gray-300">
            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, payment information, and any other information you choose to provide.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in the following circumstances:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>In connection with a business transfer</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser, but disabling cookies may limit some functionality.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">7. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-8">
              <h2 className="mb-4 text-2xl font-bold dark:text-white text-purple-600">8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at support@panelhyperplay.com or through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
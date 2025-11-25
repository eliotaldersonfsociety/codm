"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavigationMenu } from "@/components/navigation-menu"
import { ShoppingCartModal } from "@/components/shopping-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Clock } from "lucide-react"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/contact"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const data = new FormData()
    data.append('name', formData.name)
    data.append('email', formData.email)
    data.append('subject', formData.subject)
    data.append('message', formData.message)

    const result = await sendContactEmail(data)

    if (result.error) {
      setSubmitMessage(result.error)
    } else {
      setSubmitMessage("Message sent successfully! We'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCartModal />
      <NavigationMenu />

      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">

          {/* Title */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-5xl font-bold dark:text-white text-purple-600 lg:text-6xl">
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-lg text-gray-400">
              Get in touch with our support team. We're here to help!
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">

              {/* Contact Info */}
              <div className="space-y-6">

                {/* Email */}
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold dark:text-white text-purple-600">Email Support</h3>
                        <p className="text-sm text-gray-400">
                          Get help with your orders and technical issues
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300">support@panelhyperplay.com</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Response time: 24-48 hours
                    </p>
                  </CardContent>
                </Card>

                {/* Live Chat */}
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                        <p className="text-sm text-gray-400">Instant support for urgent issues</p>
                      </div>
                    </div>
                    <p className="text-gray-300">Available 24/7 on our Discord server</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Join our community for real-time help
                    </p>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                        <p className="text-sm text-gray-400">When our team is available</p>
                      </div>
                    </div>
                    <div className="text-gray-300">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>Sunday: Emergency support only</p>
                    </div>
                  </CardContent>
                </Card>

              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">

                    <h3 className="mb-4 text-xl font-semibold text-white">Send us a Message</h3>
                    <p className="text-gray-400 mb-6">
                      Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                          placeholder="How can we help?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                          placeholder="Tell us more about your inquiry..."
                        />
                      </div>

                      {submitMessage && (
                        <div className={`p-3 rounded-lg text-sm ${submitMessage.includes('successfully') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          {submitMessage}
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-center text-3xl font-bold dark:text-white text-purple-600">
                Frequently Asked Questions
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold text-white">How do I install the cheats?</h4>
                    <p className="text-gray-400">
                      After purchase, you'll receive detailed installation instructions via email. Our support team is also available to guide you through the process.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold text-white">Are refunds available?</h4>
                    <p className="text-gray-400">
                      We offer a 48-hour refund policy if you experience technical issues that our support team cannot resolve.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold text-white">How often are cheats updated?</h4>
                    <p className="text-gray-400">
                      We update our cheats regularly, typically within 24-48 hours after game updates. All subscribers receive updates automatically.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-white/10 bg-white/5">
                  <CardContent className="p-6">
                    <h4 className="mb-2 text-lg font-semibold text-white">Is my information secure?</h4>
                    <p className="text-gray-400">
                      Yes, we use industry-standard encryption and security measures to protect your personal information and payment data.
                    </p>
                  </CardContent>
                </Card>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

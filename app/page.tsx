"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import QuoteModal from "@/components/quote-modal"

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  return (
    <main className="w-full">
      <Navigation onOpenQuote={() => setShowQuoteModal(true)} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />

      {showQuoteModal && <QuoteModal onClose={() => setShowQuoteModal(false)} />}
    </main>
  )
}

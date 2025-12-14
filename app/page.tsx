"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import CTAButtons from "@/components/cta-buttons"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import QuoteModal from "@/components/quote-modal"
import PuzzleGame from "@/components/puzzle-game"

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showPuzzleGame, setShowPuzzleGame] = useState(false)

  return (
    <main className="w-full">
      <Navigation onOpenQuote={() => setShowQuoteModal(true)} onOpenPuzzle={() => setShowPuzzleGame(true)} />
      <Hero />
      <CTAButtons onOpenQuote={() => setShowQuoteModal(true)} />
      <Services />
      <Portfolio />
      <About />
      <Contact onOpenPuzzle={() => setShowPuzzleGame(true)} />
      <Footer />

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      {showPuzzleGame && <PuzzleGame onClose={() => setShowPuzzleGame(false)} />}
    </main>
  )
}

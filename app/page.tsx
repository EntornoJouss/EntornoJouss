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
import PuzzleGame from "@/components/puzzle-game"

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showPuzzleGame, setShowPuzzleGame] = useState(false)

  return (
    <main className="w-full">
      <Navigation onOpenQuote={() => setShowQuoteModal(true)} onOpenPuzzle={() => setShowPuzzleGame(true)} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact onOpenPuzzle={() => setShowPuzzleGame(true)} />
      <Footer />

      {showQuoteModal && <QuoteModal onClose={() => setShowQuoteModal(false)} />}
      {showPuzzleGame && <PuzzleGame onClose={() => setShowPuzzleGame(false)} />}

      <div className="w-full py-4 bg-[#059669] text-white text-center">
        <p className="text-sm sm:text-base font-bold">Hecho por Agencia Cayumanque</p>
      </div>
    </main>
  )
}

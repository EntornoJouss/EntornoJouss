"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface CTAButtonsProps {
  onOpenQuote: () => void
}

export default function CTAButtons({ onOpenQuote }: CTAButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState(false)

  return (
    <section className="w-full py-8 sm:py-12 bg-gradient-to-b from-white/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-accent text-accent-foreground rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 text-base sm:text-lg w-full sm:w-auto"
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Cotizar
            <ArrowRight className={`ml-2 transition-transform ${hoveredButton ? "translate-x-1" : ""}`} size={20} />
          </button>
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-primary/90 text-white rounded-full font-bold border-2 border-primary hover:bg-primary transition-all text-base sm:text-lg w-full sm:w-auto"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  )
}

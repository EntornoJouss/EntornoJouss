"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface CTAButtonsProps {
  onOpenQuote: () => void
}

export default function CTAButtons({ onOpenQuote }: CTAButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState(false)

  return (
    <section className="w-full py-8 sm:py-12 bg-gradient-to-b from-white/50 to-transparent tracking-normal leading-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#5622E8] text-white rounded-full font-bold hover:bg-[#4519C0] hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto font-sans sm:py-1 text-2xl"
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Cotizar
            <ArrowRight className={`ml-2 transition-transform ${hoveredButton ? "translate-x-1" : ""}`} size={20} />
          </button>
          <a
            href="#portafolio"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold hover:bg-primary transition-all w-full sm:w-auto sm:py-1 sm:px-4 bg-background border-4 text-chart-3 border-chart-3 text-xl"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  )
}

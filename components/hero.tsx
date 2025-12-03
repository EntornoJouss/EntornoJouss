"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import QuoteModal from "./quote-modal"

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  return (
    <>
      <section
        id="hero"
        className="forest-bg relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2D5016 0%, #4A7C2C 50%, #3D6B23 100%)",
          backgroundImage: 'url("/forest-canopy-misty-background.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Forest overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-20 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 leading-tight animate-title">
                Agencia Digital
              </h1>
              <h2
                className="text-8xl sm:text-8xl lg:text-9xl font-black mb-3 animate-cayumanque"
                style={{ color: "#2D5016" }}
              >
                Cayumanque
              </h2>
              <p className="text-xl sm:text-2xl text-white/95 mb-0 font-semibold animate-title-delay-2">
                Diseño • Marketing • Branding • Productos Corporativos
              </p>
            </div>

            <p className="text-lg text-white/90 mt-4 max-w-2xl fade-in fade-in-delay-1">
              Transformamos tus ideas en experiencias digitales memorables.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center fade-in fade-in-delay-2 mt-6">
              <button
                onClick={() => setShowQuoteModal(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Cotizar
                <ArrowRight className={`ml-2 transition-transform ${hoveredButton ? "translate-x-1" : ""}`} size={20} />
              </button>
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white rounded-full font-bold border border-white/30 hover:bg-white/30 transition-all backdrop-blur-sm"
              >
                Ver Portafolio
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import QuoteModal from "./quote-modal"
import Image from "next/image"

export default function Hero() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Fixed background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ transform: `translateY(${parallaxOffset}px) scale(1.05)` }}
          >
            <Image
              src="/hero-designer-desk.jpg"
              alt="Escritorio de un disenador grafico con materiales de trabajo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12">
          {/* Badge */}
          <div className="fade-in mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <Sparkles className="w-4 h-4 text-secondary" />
              Transformamos ideas en experiencias visuales
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
            {"Tu marca, "}
            <span className="text-secondary">nuestra creatividad</span>
          </h1>

          {/* Description */}
          <p className="fade-in-delay-1 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
            {"Somos la agencia que da vida a tus proyectos. Desde identidad visual hasta campanas publicitarias completas, hacemos que tu marca destaque."}
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-delay-2 flex flex-wrap gap-4">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Cotiza tu proyecto
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Ver portafolio
            </Link>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  )
}

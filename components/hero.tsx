"use client"

import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"
import Image from "next/image"

const SLIDES = [
  {
    image: "/hero-branding-logos.png",
    title: "Branding Profesional",
  },
  {
    image: "/hero-forest-nature.png",
    title: "Creatividad sin Límites",
  },
  {
    image: "/hero-portfolio-grid.png",
    title: "Diseño",
  },
]

const ROTATING_PHRASES = [
  "Páginas web simples",
  "Identidad visual",
  "Contenido digital",
  "Impresión gráfica",
  "Merch textil",
  "Letreros y señalética",
  "Fichas y catálogos",
  "Elementos promocionales",
  "Presentaciones y piezas visuales",
]

export default function Hero() {
  const [hoveredButton, setHoveredButton] = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % ROTATING_PHRASES.length)
    }, 3000)
    return () => clearInterval(phraseTimer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.5
      setParallaxOffset(offset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section id="hero" className="relative w-full min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                transition: "opacity 1000ms ease-in-out",
              }}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/50" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20 w-full flex flex-col justify-between min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight animate-title">
              Agencia
            </h1>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-black text-primary mb-4 sm:mb-8 leading-none animate-glow drop-shadow-[0_0_30px_rgba(45,80,22,0.8)]">
              Cayumanque
            </h1>

            <div className="mb-4 sm:mb-8 fade-in-delay-1 h-[80px] sm:h-[100px] lg:h-[120px] flex items-start relative w-full">
              {ROTATING_PHRASES.map((phrase, index) => (
                <p
                  key={index}
                  className="absolute top-0 left-0 text-xl sm:text-2xl lg:text-4xl text-gray-900 font-bold leading-tight drop-shadow-md transition-opacity duration-500"
                  style={{
                    opacity: currentPhrase === index ? 1 : 0,
                  }}
                >
                  {phrase}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-accent scale-125" : "bg-white/40 hover:bg-white/60"
                }`}
              />
              {currentSlide === index && (
                <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  )
}

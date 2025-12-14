"use client"

import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"
import Image from "next/image"

const SLIDES = [
  {
    image: "/hero-brinda-wine.png",
    title: "BRINDA - Expo Vinos Chillán",
  },
  {
    image: "/hero-um-cafe.png",
    title: "UM Café - Branding",
  },
  {
    image: "/hero-forest-banner.png",
    title: "Diseño Natural",
  },
  {
    image: "/hero-fdll-festival.png",
    title: "Fiesta de la Longaniza",
  },
  {
    image: "/hero-marcas-logos.png",
    title: "Portfolio de Marcas",
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
                className="object-cover object-center"
                priority={index === 0}
                sizes="100vw"
                quality={100}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 w-full flex flex-col justify-between min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2 leading-tight animate-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Agencia
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-none animate-glow drop-shadow-[0_0_30px_rgba(0,0,0,0.9)]">
              Cayumanque
            </h1>

            <div className="mb-6 sm:mb-8 fade-in-delay-1 h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px] flex items-start relative w-full">
              {ROTATING_PHRASES.map((phrase, index) => (
                <p
                  key={index}
                  className="absolute top-0 left-0 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-opacity duration-500"
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

        <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 md:gap-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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

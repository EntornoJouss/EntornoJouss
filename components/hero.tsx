"use client"

import { useState, useEffect } from "react"
import QuoteModal from "./quote-modal"
import Image from "next/image"

const SLIDES = [
  {
    image: "/hero-vintage-60s-new-1.jpg",
    title: "Estudio Creativo",
  },
  {
    image: "/hero-vintage-60s-2.jpg",
    title: "Pop Art Desgastado",
  },
  {
    image: "/hero-vintage-60s-3.jpg",
    title: "Op Art Retro",
  },
  {
    image: "/hero-vintage-60s-4.jpg",
    title: "Flower Power Vintage",
  },
  {
    image: "/hero-vintage-60s-5.jpg",
    title: "Era Espacial Retro",
  },
  {
    image: "/hero-vintage-60s-6.jpg",
    title: "Expresionismo Abstracto",
  },
  {
    image: "/hero-vintage-60s-new-7.jpg",
    title: "Diseno Modernista",
  },
  {
    image: "/hero-vintage-60s-8.jpg",
    title: "Viaje Retro",
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
      <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden">
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
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-24 pb-20 w-full flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-3xl lg:text-6xl mb-1 sm:mb-2 leading-tight animate-title drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-normal leading-7 tracking-normal sm:text-3xl text-left text-[rgba(255,255,255,1)]">
              Somos Agencia  
            </h1>
            <h1 className="text-5xl lg:text-8xl xl:text-9xl text-white mb-4 sm:mb-8 leading-none animate-glow drop-shadow-[0_0_30px_rgba(0,0,0,0.9)] font-semibold sm:text-5xl">
              Cayumanque
            </h1>

            <div className="mb-4 sm:mb-8 fade-in-delay-1 h-[80px] sm:h-[100px] lg:h-[120px] flex items-start relative font-sans font-normal tracking-normal leading-7 w-[104%] border-0">
              {ROTATING_PHRASES.map((phrase, index) => (
                <p
                  key={index}
                  className="absolute top-0 left-0 text-xl sm:text-2xl lg:text-4xl text-white font-bold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] transition-opacity duration-500"
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

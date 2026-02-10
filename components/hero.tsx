"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
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
    title: "Modernista",
  },
  {
    image: "/hero-vintage-60s-8.jpg",
    title: "Viaje Retro",
  },
]

export default function Hero() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section id="hero" className="relative w-full h-screen flex items-center overflow-hidden">
        {/* Background slides */}
        <div className="absolute inset-0">
          {SLIDES.map((slide, index) => (
            <div
              key={index}
              className="absolute inset-0"
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
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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

          {/* CTA Button */}
          <div className="fade-in-delay-2 mb-12">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Cotiza tu proyecto
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide indicators */}
          <div className="fade-in-delay-3 flex gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative"
                aria-label={`Ir a slide ${index + 1}`}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentSlide === index ? "w-10 bg-secondary" : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  )
}

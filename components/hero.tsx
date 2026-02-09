"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react"
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

const FEATURED_PROJECTS = [
  {
    image: "/brinda-logo-purple-illustrations.jpg",
    category: "Identidad Visual",
    title: "BRINDA Expo Vinos",
    description: "Identidad visual completa para la expo de vinos de la region.",
  },
  {
    image: "/longaniza-logo-principal.jpg",
    category: "Branding Evento",
    title: "Fiesta de la Longaniza",
    description: "Marca y material grafico para el festival gastronomico regional.",
  },
  {
    image: "/quinchamali-pattern-black.jpg",
    category: "Arte y Cultura",
    title: "Quinchamali",
    description: "Identidad visual inspirada en la artesania tradicional de Quinchamali.",
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
      <section id="hero" className="relative w-full min-h-screen flex flex-col overflow-hidden">
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
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pt-28 pb-8">
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
          <p className="fade-in-delay-1 text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            {"Somos la agencia que da vida a tus proyectos. Desde identidad visual hasta campanas publicitarias completas, hacemos que tu marca destaque."}
          </p>

          {/* CTA Buttons */}
          <div className="fade-in-delay-2 flex flex-wrap gap-4 mb-12">
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

        {/* Featured project cards */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-8 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FEATURED_PROJECTS.map((project, index) => (
              <Link
                key={index}
                href="/portafolio"
                className={`fade-in-delay-${index + 2} group relative bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Card image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Arrow button */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-secondary/90 text-white text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                {/* Card content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </>
  )
}

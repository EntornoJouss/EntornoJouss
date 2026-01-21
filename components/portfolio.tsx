"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Portafolio organizado por proyecto y coherencia cromatica
const portfolioSlides = [
  // Slide 1: BRINDA - Expo Vinos (Gama purpura/violeta)
  [
    { id: 1, title: "BRINDA - Identidad Visual", image: "/brinda-logo-purple-illustrations.jpg", category: "BRINDA" },
    { id: 2, title: "BRINDA - Brand Board Completo", image: "/brinda-brand-board-complete.jpg", category: "BRINDA" },
    { id: 3, title: "BRINDA - Variantes de Logo", image: "/brinda-logo-color-variations.jpg", category: "BRINDA" },
    { id: 4, title: "BRINDA - Fotografía de Producto", image: "/brinda-wine-pour-purple.jpg", category: "BRINDA" },
    { id: 5, title: "BRINDA - Copas Personalizadas", image: "/brinda-wine-glasses.jpg", category: "BRINDA" },
    { id: 6, title: "BRINDA - Ilustración Viñedo", image: "/brinda-vineyard-illustration.jpg", category: "BRINDA" },
  ],
  // Slide 2: Fiesta de la Longaniza (Gama naranja/rojo)
  [
    { id: 7, title: "Longaniza - Logo Principal", image: "/longaniza-logo-principal.jpg", category: "LONGANIZA" },
    { id: 8, title: "Longaniza - Paleta de Colores", image: "/longaniza-paleta-colores.jpg", category: "LONGANIZA" },
    { id: 9, title: "Longaniza - Layout General", image: "/longaniza-layout-general.jpg", category: "LONGANIZA" },
    { id: 10, title: "Longaniza - Layout del Mapa", image: "/longaniza-layout-map.jpg", category: "LONGANIZA" },
    { id: 11, title: "Longaniza - Vasos Corporativos", image: "/longaniza-cups-collection.jpg", category: "LONGANIZA" },
    { id: 12, title: "Longaniza - Evento Masivo", image: "/longaniza-crowd-night.jpg", category: "LONGANIZA" },
  ],
  // Slide 3: Quinchamali y Um Cafe (Gama tierra/negro/verde)
  [
    { id: 13, title: "Quinchamalí - Patrón Ilustraciones", image: "/quinchamali-pattern-black.jpg", category: "QUINCHAMALI" },
    { id: 14, title: "Quinchamalí - Logo Decorativo", image: "/quinchamali-logo-framed.jpg", category: "QUINCHAMALI" },
    { id: 15, title: "Quinchamalí - Ilustración Chancho", image: "/quinchamali-pig-illustration.jpg", category: "QUINCHAMALI" },
    { id: 16, title: "Um Café - Brand Board", image: "/um-cafe-brand-board.jpg", category: "UM CAFE" },
    { id: 17, title: "Diseños Personalizados", image: "/custom-designs-services.jpg", category: "SERVICIOS" },
    { id: 18, title: "BRINDA - Banner Exterior", image: "/brinda-outdoor-banner.jpg", category: "BRINDA" },
  ],
]

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + portfolioSlides.length) % portfolioSlides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="portafolio" className="w-full py-16 sm:py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-16 fade-in text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-popover-foreground font-medium">Portafolio</h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-2">
            Proyectos que hemos desarrollado con pasión y creatividad
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {portfolioSlides[currentSlide].map((item, index) => (
              <div
                key={item.id}
                className={`fade-in fade-in-delay-${(index % 3) + 1} group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 aspect-square`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all">
                    <h3 className="text-sm sm:text-base md:text-xl font-bold line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground rounded-full p-2 sm:p-3 shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-12 bg-primary text-primary-foreground rounded-full p-2 sm:p-3 shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {portfolioSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-12 bg-primary"
                  : "w-2 sm:w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

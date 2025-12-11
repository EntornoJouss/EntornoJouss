"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const portfolioSlides = [
  [
    { id: 1, title: "Um Café - Brand Board Completo", image: "/um-cafe-brand-board.jpg" },
    { id: 2, title: "BRINDA - Banner Publicitario Exterior", image: "/brinda-outdoor-banner.jpg" },
    { id: 3, title: "BRINDA - Copas de Vino Personalizadas", image: "/brinda-wine-glasses.jpg" },
    { id: 4, title: "Diseños 100% Personalizados", image: "/custom-designs-services.jpg" },
    { id: 5, title: "BRINDA - Ilustración Viñedo Itata", image: "/brinda-vineyard-illustration.jpg" },
    { id: 6, title: "BRINDA - Identidad Visual con Ilustraciones", image: "/brinda-logo-purple-illustrations.jpg" },
  ],
  [
    { id: 7, title: "BRINDA - Brand Board Completo", image: "/brinda-brand-board-complete.jpg" },
    { id: 8, title: "BRINDA - Variantes de Logo en Colores", image: "/brinda-logo-color-variations.jpg" },
    { id: 9, title: "BRINDA - Fotografía de Producto con Vino", image: "/brinda-wine-pour-purple.jpg" },
    { id: 10, title: "Quinchamalí - Patrón de Ilustraciones", image: "/quinchamali-pattern-black.jpg" },
    { id: 11, title: "Quinchamalí - Artesanía en Proceso", image: "/quinchamali-artisan-hands.jpg" },
    { id: 12, title: "Quinchamalí - Logo con Marco Decorativo", image: "/quinchamali-logo-framed.jpg" },
  ],
  [
    { id: 13, title: "Quinchamalí - Ilustración Chancho Decorado", image: "/quinchamali-pig-illustration.jpg" },
    { id: 14, title: "Fiesta de la Longaniza - Layout del Evento", image: "/longaniza-layout-map.jpg" },
    { id: 15, title: "Fiesta de la Longaniza - Variantes Logo", image: "/longaniza-logo-variations.jpg" },
    { id: 16, title: "Fiesta de la Longaniza - Evento Masivo", image: "/longaniza-crowd-night.jpg" },
    { id: 17, title: "Fiesta de la Longaniza - Vasos Corporativos", image: "/longaniza-cups-collection.jpg" },
    { id: 18, title: "BRINDA - Ilustración Viñedo Itata", image: "/brinda-vineyard-illustration.jpg" },
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
    <section id="portafolio" className="w-full py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-4 mb-16 fade-in text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Portafolio</h2>
          <p className="text-xl text-muted-foreground">Proyectos que hemos desarrollado con pasión y creatividad</p>
        </div>

        <div className="relative">
          {/* Grid de 6 imágenes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioSlides[currentSlide].map((item, index) => (
              <div
                key={item.id}
                className={`fade-in fade-in-delay-${(index % 3) + 1} group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 aspect-square`}
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all">
                    <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {portfolioSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-12 bg-primary" : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

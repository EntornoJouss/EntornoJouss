"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "BRINDA Expo Vinos",
    image: "/brinda-logo-purple-illustrations.jpg",
    category: "Identidad Visual",
    description: "Identidad visual completa para la expo de vinos mas importante de la Region de Nuble.",
  },
  {
    id: 2,
    title: "Quinchamali Artesanal",
    image: "/quinchamali-pattern-black.jpg",
    category: "Arte y Cultura",
    description: "Identidad visual inspirada en la artesania tradicional de Quinchamali en greda negra.",
  },
  {
    id: 3,
    title: "Um Cafe Brand",
    image: "/um-cafe-brand-board.jpg",
    category: "Branding Producto",
    description: "Desarrollo de marca y packaging para cafeteria de especialidad con enfoque natural.",
  },
  {
    id: 4,
    title: "BRINDA Material Grafico",
    image: "/brinda-brand-board-complete.jpg",
    category: "Diseno Grafico",
    description: "Brand board completo con variantes de logo, paleta de colores y tipografias.",
  },
  {
    id: 5,
    title: "Quinchamali Ilustraciones",
    image: "/quinchamali-pig-illustration.jpg",
    category: "Ilustracion",
    description: "Ilustraciones personalizadas basadas en los motivos tradicionales de la greda.",
  },
  {
    id: 6,
    title: "BRINDA Fotografia",
    image: "/brinda-wine-pour-purple.jpg",
    category: "Fotografia",
    description: "Fotografia de producto y ambientacion para la campaña visual de la expo.",
  },
]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(portfolioItems.length / itemsPerPage)
  const visibleItems = portfolioItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  return (
    <section id="portafolio" className="w-full py-16 sm:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-16 fade-in text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-foreground font-bold font-sans">Portafolio</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
            Proyectos que hemos desarrollado con pasion y creatividad
          </p>
        </div>

        {/* Cards grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {visibleItems.map((item, index) => (
              <Link
                key={item.id}
                href="/portafolio"
                className={`fade-in fade-in-delay-${(index % 3) + 1} group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Card image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Arrow button */}
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm text-white text-xs font-semibold tracking-wide">
                      {item.category}
                    </span>
                  </div>
                </div>
                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-12 bg-[#1a1a1a] text-white border border-white/10 rounded-full p-2.5 shadow-lg hover:bg-white/10 transition-all z-10"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-12 bg-[#1a1a1a] text-white border border-white/10 rounded-full p-2.5 shadow-lg hover:bg-white/10 transition-all z-10"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Page indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "w-10 bg-secondary"
                    : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir a pagina ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

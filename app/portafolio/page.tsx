"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: "brinda",
    name: "BRINDA - Expo Vinos Chillan",
    category: "Identidad Visual",
    year: "2024",
    color: "#8B5CF6",
    description: "Identidad visual completa para la feria de vinos mas importante de la region de Nuble.",
    images: [
      "/brinda-logo-purple-illustrations.jpg",
      "/brinda-brand-board-complete.jpg",
      "/brinda-logo-color-variations.jpg",
      "/brinda-wine-pour-purple.jpg",
      "/brinda-wine-glasses.jpg",
      "/brinda-vineyard-illustration.jpg",
    ],
  },
  {
    id: "longaniza",
    name: "Fiesta de la Longaniza",
    category: "Branding Evento",
    year: "2024",
    color: "#F97316",
    description: "Identidad visual y senaletica para el festival gastronomico mas tradicional de Chillan.",
    images: [
      "/longaniza-logo-principal.jpg",
      "/longaniza-paleta-colores.jpg",
      "/longaniza-layout-general.jpg",
      "/longaniza-layout-map.jpg",
      "/longaniza-cups-collection.jpg",
      "/longaniza-crowd-night.jpg",
    ],
  },
  {
    id: "quinchamali",
    name: "Quinchamali",
    category: "Identidad Cultural",
    year: "2023",
    color: "#1F2937",
    description: "Marca que rescata la identidad artesanal de la ceramica tradicional de Quinchamali.",
    images: [
      "/quinchamali-pattern-black.jpg",
      "/quinchamali-logo-framed.jpg",
      "/quinchamali-pig-illustration.jpg",
      "/quinchamali-artisan-hands.jpg",
    ],
  },
  {
    id: "umcafe",
    name: "Um Cafe",
    category: "Branding Producto",
    year: "2023",
    color: "#166534",
    description: "Identidad de marca para cafeteria de especialidad con enfoque natural y artesanal.",
    images: [
      "/um-cafe-brand-board.jpg",
      "/custom-designs-services.jpg",
    ],
  },
]

const categories = ["Todos", "Identidad Visual", "Branding Evento", "Identidad Cultural", "Branding Producto"]

export default function PortafolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [lightbox, setLightbox] = useState<{ project: typeof projects[0]; imageIndex: number } | null>(null)

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  const openLightbox = (project: typeof projects[0], imageIndex: number) => {
    setLightbox({ project, imageIndex })
  }

  const closeLightbox = () => setLightbox(null)

  const nextImage = () => {
    if (!lightbox) return
    const newIndex = (lightbox.imageIndex + 1) % lightbox.project.images.length
    setLightbox({ ...lightbox, imageIndex: newIndex })
  }

  const prevImage = () => {
    if (!lightbox) return
    const newIndex = (lightbox.imageIndex - 1 + lightbox.project.images.length) % lightbox.project.images.length
    setLightbox({ ...lightbox, imageIndex: newIndex })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-vintage-60s-3.jpg"
            alt="Portafolio Cayumanque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nuestro Portafolio
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Proyectos que reflejan nuestra pasion por el diseño y la comunicacion visual
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {filteredProjects.map((project) => (
            <div key={project.id} className="space-y-8">
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                    style={{ backgroundColor: project.color }}
                  >
                    {project.category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#222222]">{project.name}</h2>
                  <p className="text-muted-foreground mt-2 max-w-xl">{project.description}</p>
                </div>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>

              {/* Project Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => openLightbox(project, i)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.name} - Imagen ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-video mx-4">
            <Image
              src={lightbox.project.images[lightbox.imageIndex] || "/placeholder.svg"}
              alt={lightbox.project.name}
              fill
              className="object-contain"
            />
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {lightbox.imageIndex + 1} / {lightbox.project.images.length}
          </div>
        </div>
      )}
    </main>
  )
}

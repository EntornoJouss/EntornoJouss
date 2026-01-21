"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Globe, Palette, ImageIcon, FileText, Shirt, MapPin, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "web",
    title: "Paginas Web Simples",
    subtitle: "Presencia digital clara y directa",
    description: "Sitios fijos, claros y modernos para mostrar tu negocio de forma directa. Diseño limpio, estructura ordenada y todo listo para publicar.",
    icon: Globe,
    image: "/services/web-simple.jpg",
    color: "#5622E8",
    features: ["Diseño responsivo", "Optimizado para SEO", "Carga rapida", "Panel de administracion simple"],
  },
  {
    id: "identidad",
    title: "Identidad Visual",
    subtitle: "Tu marca, coherente y memorable",
    description: "Diseño de logo, colores y lineamientos basicos para que tu marca se vea coherente en digital e impresos.",
    icon: Palette,
    image: "/services/identidad-visual.jpg",
    color: "#2E8B57",
    features: ["Logo principal y variantes", "Paleta de colores", "Tipografias", "Manual de uso basico"],
  },
  {
    id: "digital",
    title: "Diseño Grafico Digital",
    subtitle: "Contenido que conecta",
    description: "Piezas visuales para redes sociales, banners y contenidos informativos. Diseños pensados para comunicar de forma clara.",
    icon: ImageIcon,
    image: "/services/diseno-digital.jpg",
    color: "#E85622",
    features: ["Posts para redes sociales", "Stories y reels", "Banners web", "Presentaciones"],
  },
  {
    id: "impresion",
    title: "Impresion Grafica",
    subtitle: "Del digital al papel",
    description: "Diseños listos para imprimir: flyers, tarjetas, afiches, catalogos y material promocional.",
    icon: FileText,
    image: "/services/impresion-grafica.jpg",
    color: "#8B4513",
    features: ["Tarjetas de presentacion", "Flyers y afiches", "Catalogos", "Material corporativo"],
  },
  {
    id: "textil",
    title: "Merch Textil",
    subtitle: "Tu marca en movimiento",
    description: "Diseños para estampado o bordado en poleras, hoodies, uniformes y merchandising.",
    icon: Shirt,
    image: "/services/merch-textil.jpg",
    color: "#DC143C",
    features: ["Poleras y hoodies", "Uniformes corporativos", "Gorras y accesorios", "Merchandising eventos"],
  },
  {
    id: "senaletica",
    title: "Letreros y Senaletica",
    subtitle: "Guia visual en espacios fisicos",
    description: "Diseños de letreros simples y senaletica para espacios fisicos, en archivos listos para produccion.",
    icon: MapPin,
    image: "/services/senaletica.jpg",
    color: "#4169E1",
    features: ["Letreros exteriores", "Senaletica interior", "Totems y banners", "Vinilos decorativos"],
  },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-vintage-60s-2.jpg"
            alt="Servicios Cayumanque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Soluciones de diseño claras y funcionales para dar presencia a tu negocio
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16 sm:gap-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={service.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2 relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div 
                      className="absolute top-4 left-4 p-3 rounded-xl"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: service.color }}>
                        {service.subtitle}
                      </p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <Check className="w-3 h-3" style={{ color: service.color }} />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="mt-4"
                      style={{ backgroundColor: service.color }}
                      asChild
                    >
                      <a href="https://wa.me/56963910730" target="_blank" rel="noopener noreferrer">
                        Cotizar este servicio
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tienes un proyecto en mente?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Conversemos sobre como podemos ayudarte a dar presencia a tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/56963910730" target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <Link href="/">
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import Image from "next/image"
import { Globe, Palette, ImageIcon, FileText, Shirt, MapPin } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Páginas Web Simples",
      description:
        "Sitios fijos, claros y modernos para mostrar tu negocio de forma directa. Diseño limpio, estructura ordenada y todo listo para publicar.",
      icon: Globe,
      color: "primary",
      image: "/services/web-simple.jpg",
    },
    {
      id: 2,
      title: "Identidad Visual",
      description:
        "Diseño de logo, colores y lineamientos básicos para que tu marca se vea coherente en digital e impresos.",
      icon: Palette,
      color: "secondary",
      image: "/services/identidad-visual.jpg",
    },
    {
      id: 3,
      title: "Diseño Gráfico Digital",
      description:
        "Piezas visuales para redes sociales, banners y contenidos informativos. Diseños pensados para comunicar de forma clara.",
      icon: ImageIcon,
      color: "accent",
      image: "/services/diseno-digital.jpg",
    },
    {
      id: 4,
      title: "Impresión Gráfica",
      description: "Diseños listos para imprimir: flyers, tarjetas, afiches, catálogos y material promocional.",
      icon: FileText,
      color: "primary",
      image: "/services/impresion-grafica.jpg",
    },
    {
      id: 5,
      title: "Merch Textil",
      description: "Diseños para estampado o bordado en poleras, hoodies, uniformes y merchandising.",
      icon: Shirt,
      color: "secondary",
      image: "/services/merch-textil.jpg",
    },
    {
      id: 6,
      title: "Letreros y Señalética",
      description:
        "Diseños de letreros simples y señalética para espacios físicos, en archivos listos para producción.",
      icon: MapPin,
      color: "accent",
      image: "/services/senaletica.jpg",
    },
  ]

  return (
    <section id="servicios" className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-4 text-popover-foreground font-normal md:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Ofrecemos soluciones de diseño claras y funcionales para dar presencia a tu negocio. Creamos páginas web
            simples, identidad visual y piezas digitales, además de diseños para impresión, letreros y merch textil.
            Nuestro enfoque es directo: entregar resultados prácticos y bien ejecutados para tus necesidades de
            comunicación visual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClass = {
              primary: "text-primary",
              secondary: "text-secondary",
              accent: "text-accent",
            }[service.color]

            const bgColor = {
              primary: "bg-primary/10",
              secondary: "bg-secondary/10",
              accent: "bg-accent/10",
            }[service.color]

            return (
              <div
                key={service.id}
                className={`fade-in fade-in-delay-${index === 0 ? "1" : index === 1 ? "2" : index === 2 ? "3" : index === 3 ? "4" : index === 4 ? "5" : "6"} card-float w-full max-w-sm`}
              >
                <div className="group relative bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div
                      className={`absolute top-3 left-3 ${bgColor} inline-flex p-2 rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`${colorClass} w-5 h-5`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors text-justify">
                      {service.description}
                    </p>
                  </div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

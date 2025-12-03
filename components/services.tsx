"use client"

import { Palette, TrendingUp as Trending2, Megaphone, Briefcase, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Diseño",
      description: "Creamos identidades visuales únicas y diseños que capturan la esencia de tu marca.",
      icon: Palette,
      color: "primary",
    },
    {
      id: 2,
      title: "Marketing",
      description: "Estrategias digitales que conectan tu marca con tu audiencia de forma efectiva.",
      icon: Trending2,
      color: "secondary",
    },
    {
      id: 3,
      title: "Publicidad",
      description: "Campañas impactantes que generan engagement y convierten visitas en clientes.",
      icon: Megaphone,
      color: "accent",
    },
    {
      id: 4,
      title: "Consultoría",
      description: "Asesoramiento empresarial para optimizar tu presencia digital y crecimiento.",
      icon: Briefcase,
      color: "primary",
    },
    {
      id: 5,
      title: "Páginas Web Económicas",
      description:
        "Sitios simples, modernos y rápidos para emprendedores. Incluyen secciones básicas, WhatsApp directo y formulario de contacto. Podemos configurar para que recibas cotizaciones directo a tu correo, integrar mapas, agregar catálogo básico y optimizar para móviles. Nos encargamos de todo por ti: diseño, textos, configuración y publicación. Te entregamos la página lista para usar.",
      icon: Globe,
      color: "secondary",
    },
  ]

  return (
    <section id="servicios" className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas para transformar tu visión empresarial en realidad digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                className={`fade-in fade-in-delay-${index === 0 ? "1" : index === 1 ? "2" : index === 2 ? "3" : index === 3 ? "4" : "5"} card-float`}
              >
                <div className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`${bgColor} inline-flex p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`${colorClass} w-6 h-6`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
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

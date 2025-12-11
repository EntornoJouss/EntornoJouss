"use client"

import { Palette, TrendingUp as Trending2, Megaphone, Briefcase, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Diseño",
      description:
        "Creamos identidades visuales únicas y sistemas gráficos que fortalecen la presencia de tu empresa. Desde logotipos, paletas cromáticas, tipografías, piezas corporativas y aplicaciones visuales, hasta la creación de universos gráficos completos, construimos una identidad coherente que te permita competir, diferenciarte y posicionarte con claridad en tu mercado.",
      icon: Palette,
      color: "primary",
    },
    {
      id: 2,
      title: "Marketing",
      description:
        "Estrategias digitales que conectan tu marca con tu audiencia de forma efectiva. Desarrollamos planes de marketing que combinan contenido, diseño y comunicación estratégica para lograr alcance real. Optimizamos la presencia de tu marca en redes sociales, creamos campañas digitales alineadas a tus objetivos y generamos mensajes que impactan en el público correcto. Trabajamos con un enfoque orientado a resultados: aumentar visibilidad, generar interacción y fortalecer el posicionamiento digital de tu empresa.",
      icon: Trending2,
      color: "secondary",
    },
    {
      id: 3,
      title: "Publicidad",
      description:
        "Tu marca tiene un potencial enorme cuando sabe cómo mostrarse, crecer y expandir su alcance. La inversión en diseño publicitario te permite comunicar de forma clara, atractiva y profesional en todos tus canales. Creamos piezas gráficas para campañas, banners, contenido promocional, material para redes sociales, anuncios y comunicación comercial. Nuestro objetivo es potenciar tu presencia, ampliar tu audiencia y ayudar a que tu empresa destaque en un entorno competitivo, aumentando el reconocimiento y el valor percibido de tu marca.",
      icon: Megaphone,
      color: "accent",
    },
    {
      id: 4,
      title: "Asesoría Digital / Empresarial",
      description:
        "Diseñamos y guiamos tu proyecto para que tengas soluciones digitales que ordenan, estructuran y profesionalizan tu empresa. Ofrecemos acompañamiento especializado para fortalecer tu marca desde adentro.",
      icon: Briefcase,
      color: "primary",
    },
    {
      id: 5,
      title: "Página Web",
      description:
        "Sitios modernos, rápidos y funcionales para emprendedores, empresas y organizaciones. Creamos páginas web o software que se adaptan a tus necesidades, que pueden incluir: secciones básicas esenciales, botón de WhatsApp directo, formulario de contacto funcional, configuración para recibir cotizaciones directo a tu correo, integración de mapas, catálogo básico de productos o servicios, y software internos. Nos encargamos de todo por ti: diseño, redacción de textos, configuración, optimización y publicación. Te entregamos una página lista para usar desde el primer día.",
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
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Integran diseño, estrategia y visión empresarial para impulsar la digitalización y el posicionamiento de
            negocios y empresas desde la región de Ñuble al país. Desarrollamos páginas web efectivas, construimos
            Identidad Visual Corporativa coherente y profesional, implementamos estrategias de Marketing que fortalecen
            la presencia de tu marca y ofrecemos Consultoría como guía para el desarrollo de tu proyecto digital.
            Nuestro enfoque se centra en crear soluciones que aumenten la visibilidad, mejoren la competitividad y
            permitan que tu negocio destaque en un mercado cada vez más digital y exigente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-items-center">
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
                className={`fade-in fade-in-delay-${index === 0 ? "1" : index === 1 ? "2" : index === 2 ? "3" : index === 3 ? "4" : "5"} card-float w-full max-w-sm`}
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

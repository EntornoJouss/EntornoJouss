"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Target, Eye, Heart, MapPin, Users, Award, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Cada proyecto recibe atencion al detalle y soluciones pensadas para objetivos claros.",
  },
  {
    icon: Eye,
    title: "Claridad",
    description: "Diseños limpios que comunican de forma directa y efectiva.",
  },
  {
    icon: Heart,
    title: "Dedicacion",
    description: "Trabajamos con pasion en cada proyecto, grande o pequeño.",
  },
  {
    icon: Users,
    title: "Cercania",
    description: "Relacion directa con nuestros clientes, entendiendo sus necesidades reales.",
  },
]

const stats = [
  { number: "50+", label: "Proyectos realizados" },
  { number: "30+", label: "Clientes satisfechos" },
  { number: "3", label: "Anos de experiencia" },
  { number: "100%", label: "Compromiso" },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-vintage-60s-4.jpg"
            alt="Equipo Cayumanque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Sobre Nosotros
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Un equipo comprometido con llevar el diseño a Nuble y todo Chile
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-medium">
                <MapPin className="w-4 h-4" />
                Desde Nuble para Chile
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#222222]">
                Acercando la digitalizacion a tu negocio
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Agencia Cayumanque nace como un grupo de profesionales que unen diseño, creatividad y herramientas tecnologicas para acercar la digitalizacion a Nuble, la zona y todo Chile.
                </p>
                <p>
                  Trabajamos con dedicacion y pasion para crear paginas web simples, identidades visuales y piezas graficas que ayuden a los negocios a presentarse mejor, comunicar con claridad y ganar presencia en digital y en impresos.
                </p>
                <p>
                  Nuestro objetivo es entregar soluciones practicas y bien hechas, llevando el diseño a emprendedores y empresas que buscan dar un paso adelante.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/cayumanque-team-illustration.png"
                  alt="Equipo Cayumanque"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <Coffee className="w-8 h-8 mb-2" />
                <p className="font-bold text-lg">Siempre disponibles</p>
                <p className="text-sm text-white/80">para un cafe y conversar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principios que guian cada proyecto y relacion con nuestros clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div 
                  key={i}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-[#222222] mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 sm:py-24 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Orgullosamente de Nuble
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Desde la region de Nuble atendemos a clientes de todo Chile. Creemos en el potencial de nuestra zona y trabajamos para que mas negocios locales tengan presencia profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://wa.me/56963910730" target="_blank" rel="noopener noreferrer">
                Conversemos sobre tu proyecto
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent" asChild>
              <Link href="/portafolio">
                Ver nuestro trabajo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

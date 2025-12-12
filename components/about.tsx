"use client"

export default function About() {
  return (
    <section id="about-section" className="w-full py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="fade-in order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Sobre Nosotros</h2>
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                Agencia Cayumanque nace como un grupo de profesionales que unen diseño, creatividad y herramientas
                tecnológicas para acercar la digitalización a Ñuble, la zona y todo Chile. Trabajamos con dedicación y
                pasión para crear páginas web simples, identidades visuales y piezas gráficas que ayuden a los negocios
                a presentarse mejor, comunicar con claridad y ganar presencia en digital y en impresos.
              </p>
              <p>
                Nuestro objetivo es entregar soluciones prácticas y bien hechas, llevando el diseño a emprendedores y
                empresas que buscan dar un paso adelante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
              <div className="card-float">
                <div className="bg-card rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">50+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Proyectos</p>
                </div>
              </div>
              <div className="card-float">
                <div className="bg-card rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">100%</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Satisfacción</p>
                </div>
              </div>
              <div className="card-float">
                <div className="bg-card rounded-xl p-4 sm:p-6 border border-border text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">24/7</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Soporte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in fade-in-delay-2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-green rounded-3xl transform -rotate-6" />
              <div className="relative bg-card rounded-3xl p-4 sm:p-8 border border-border">
                <img
                  src="/cayumanque-team-illustration.png"
                  alt="Equipo Cayumanque - Diseño y Tecnología"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

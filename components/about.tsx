"use client"

export default function About() {
  return (
    <section id="about-section" className="w-full py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre Nosotros</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
              <p>
                En Agencia Cayumanque somos un estudio de diseño y tecnología especializado en impulsar el crecimiento
                de negocios y empresas a través de soluciones visuales modernas, funcionales y orientadas al
                posicionamiento. Nuestra misión es ayudar a emprendedores y organizaciones de Ñuble y Chile a destacar
                en un entorno competitivo, combinando diseño estratégico, comunicación clara y herramientas digitales
                que fortalecen su presencia en todos sus canales.
              </p>
              <p>
                Creemos en el diseño como un recurso empresarial clave: una marca bien construida comunica confianza,
                orden, profesionalismo y visión. Por eso desarrollamos identidades visuales sólidas, sistemas gráficos
                coherentes, estrategias de marketing efectivas y páginas web optimizadas para conectar con clientes
                reales.
              </p>
              <p>
                Nuestro equipo trabaja con enfoque consultivo, entendiendo la esencia de cada negocio para ofrecer
                soluciones que generen valor, diferencien y aporten resultados concretos. Desde la creación de marcas
                hasta la digitalización completa de tu empresa, estamos aquí para acompañarte en cada etapa y llevar tu
                proyecto al siguiente nivel.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="card-float">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Proyectos</p>
                </div>
              </div>
              <div className="card-float">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">Satisfacción</p>
                </div>
              </div>
              <div className="card-float">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Soporte</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in fade-in-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-green rounded-3xl transform -rotate-6" />
              <div className="relative bg-card rounded-3xl p-8 border border-border">
                <img
                  src="/agencia-digital-creativa-moderno.jpg"
                  alt="Agencia de Diseño Cayumanque"
                  className="w-full h-80 rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

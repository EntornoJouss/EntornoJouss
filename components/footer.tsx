'use client'

import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold mb-4">Cayumanque</h3>
            <p className="text-background/80 mb-6">
              Impulsando la región con diseño y tecnología
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all group"
                  >
                    <Icon className="w-5 h-5 group-hover:text-accent transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div className="fade-in fade-in-delay-1">
            <h4 className="font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#servicios" className="hover:text-accent transition-colors">Diseño</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Marketing</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Publicidad</a></li>
              <li><a href="#servicios" className="hover:text-accent transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="fade-in fade-in-delay-2">
            <h4 className="font-bold mb-4">Explorar</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#portafolio" className="hover:text-accent transition-colors">Portafolio</a></li>
              <li><a href="#nosotros" className="hover:text-accent transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in fade-in-delay-3">
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80 text-sm">
              <div className="flex gap-2 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:cayumanque.spa@gmail.com" className="hover:text-accent transition-colors">
                  cayumanque.spa@gmail.com
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="https://wa.me/56963910730" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +56 9 6391 0730
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-background/60 text-sm">
          <p>© {currentYear} Cayumanque. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0 text-center md:text-right">
            Hecho con amor por <span className="text-accent font-bold">Diseño Cayumanque</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

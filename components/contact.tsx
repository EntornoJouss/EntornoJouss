'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle')

  return (
    <section id="contacto" className="w-full py-24 bg-gradient-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="fade-in text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contáctanos</h2>
            <p className="text-lg text-foreground mb-8">
              ¿Tienes un proyecto en mente? Te encantaría escuchar tus ideas. Contáctanos hoy.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="bg-foreground/10 p-4 rounded-xl group-hover:bg-foreground/20 transition-all">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href="mailto:cayumanque.spa@gmail.com" className="text-foreground hover:text-foreground/70 transition-colors">
                    cayumanque.spa@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div 
                className="flex gap-4 items-start group cursor-pointer"
                onClick={() => window.open('https://wa.me/56963910730', '_blank')}
              >
                <div className="bg-foreground/10 p-4 rounded-xl group-hover:bg-foreground/20 transition-all">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-foreground hover:text-foreground/70 transition-colors">
                    +56 9 6391 0730
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start group cursor-pointer">
                <div className="bg-foreground/10 p-4 rounded-xl group-hover:bg-foreground/20 transition-all">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Ubicación</h3>
                  <p className="text-foreground">Región del Biobío, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="fade-in fade-in-delay-2 text-foreground">
            <div className="bg-foreground/5 backdrop-blur-md rounded-2xl p-8 border border-foreground/20">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Comunícate con Nosotros</h3>
              <p className="text-foreground mb-6">
                Puedes contactarnos a través de nuestro WhatsApp, email o completar un formulario de cotización desde el botón "Cotizar" en la parte superior.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/56963910730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all transform hover:scale-105 text-center"
                >
                  Enviar WhatsApp
                </a>
                <a
                  href="mailto:cayumanque.spa@gmail.com"
                  className="block px-6 py-3 bg-foreground/10 border border-foreground/40 text-foreground rounded-lg font-bold hover:bg-foreground/20 transition-all transform hover:scale-105 text-center"
                >
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Puzzle } from "lucide-react"

export default function Contact({ onOpenPuzzle }: { onOpenPuzzle?: () => void }) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle")

  return (
    <section id="contacto" className="w-full py-16 sm:py-24 bg-gradient-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Info */}
          <div className="fade-in text-foreground">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">Contáctanos</h2>
            <p className="text-base sm:text-lg text-foreground mb-6 sm:mb-8">
              ¿Tienes un proyecto en mente? Te encantaría escuchar tus ideas. Contáctanos hoy.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex gap-3 sm:gap-4 items-start group cursor-pointer">
                <div className="bg-foreground/10 p-3 sm:p-4 rounded-xl group-hover:bg-foreground/20 transition-all flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                  <a
                    href="mailto:cayumanque.spa@gmail.com"
                    className="text-foreground hover:text-foreground/70 transition-colors text-sm sm:text-base break-words"
                  >
                    cayumanque.spa@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex gap-3 sm:gap-4 items-start group cursor-pointer"
                onClick={() => window.open("https://wa.me/56963910730", "_blank")}
              >
                <div className="bg-foreground/10 p-3 sm:p-4 rounded-xl group-hover:bg-foreground/20 transition-all flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">WhatsApp</h3>
                  <p className="text-foreground hover:text-foreground/70 transition-colors text-sm sm:text-base">
                    +56 9 6391 0730
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-3 sm:gap-4 items-start group cursor-pointer">
                <div className="bg-foreground/10 p-3 sm:p-4 rounded-xl group-hover:bg-foreground/20 transition-all flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base">Ubicación</h3>
                  <p className="text-foreground text-sm sm:text-base">Región del Biobío, Chile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="fade-in fade-in-delay-2 text-foreground">
            <div className="bg-foreground/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-foreground/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">Comunícate con Nosotros</h3>
              <p className="text-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Puedes contactarnos a través de nuestro WhatsApp, email o completar un formulario de cotización desde el
                botón "Cotizar" en la parte superior.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/56963910730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
                >
                  Enviar WhatsApp
                </a>
                <a
                  href="mailto:cayumanque.spa@gmail.com"
                  className="block px-6 py-3 bg-foreground/10 border border-foreground/40 text-foreground rounded-lg font-bold hover:bg-foreground/20 transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
                >
                  Enviar Email
                </a>
                {onOpenPuzzle && (
                  <button
                    onClick={onOpenPuzzle}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] text-white rounded-lg font-black hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base flex items-center justify-center gap-2 animate-pulse hover:animate-none"
                  >
                    <Puzzle className="h-5 w-5" />
                    ¡Juega con Nuestro Puzzle!
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

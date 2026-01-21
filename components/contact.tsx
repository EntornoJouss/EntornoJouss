"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Puzzle, Globe, Palette, Printer, Shirt } from "lucide-react"

export default function Contact({ onOpenPuzzle }: { onOpenPuzzle?: () => void }) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle")

  const contactItems = [
    {
      icon: Mail,
      title: "Escríbenos",
      subtitle: "Cuéntanos tu idea por correo",
      value: "cayumanque.spa@gmail.com",
      href: "mailto:cayumanque.spa@gmail.com",
      isLink: true,
    },
    {
      icon: Phone,
      title: "Conversemos",
      subtitle: "Respuesta rápida por WhatsApp",
      value: "+56 9 6391 0730",
      href: "https://wa.me/56963910730",
      isExternal: true,
    },
    {
      icon: MapPin,
      title: "Estamos en Ñuble",
      subtitle: "Atendemos toda la región y Chile",
      value: "Región de Ñuble, Chile",
    },
  ]

  return (
    <section id="contacto" className="w-full py-16 sm:py-24 bg-gradient-green relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Info */}
          <div className="fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#222222]">Contáctanos</h2>
            <p className="text-base sm:text-lg text-[#222222]/80 mb-6 sm:mb-8">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas. Contáctanos hoy.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div className="flex gap-3 sm:gap-4 items-start group cursor-pointer">
                    <div className="bg-[#6B7280] p-3 sm:p-4 rounded-full group-hover:bg-[#4B5563] transition-all flex-shrink-0 shadow-md">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-[#222222] mb-0.5 text-sm sm:text-base">{item.title}</h3>
                      <p className="text-[#222222]/60 text-xs sm:text-sm mb-1">{item.subtitle}</p>
                      <p className="text-[#222222] hover:text-[#222222]/70 transition-colors text-sm sm:text-base break-words font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  )
                }
                return <div key={index}>{content}</div>
              })}
            </div>
          </div>

          {/* Info Section */}
          <div className="fade-in fade-in-delay-2">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#222222]">Comunícate con Nosotros</h3>
              <p className="text-[#222222]/70 mb-4 sm:mb-6 text-sm sm:text-base">
                Puedes contactarnos a través de nuestro WhatsApp, email o completar un formulario de cotización desde el
                botón "Cotizar" en la parte superior.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/56963910730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
                >
                  Enviar WhatsApp
                </a>
                <a
                  href="mailto:cayumanque.spa@gmail.com"
                  className="block px-6 py-3 bg-[#6B7280] text-white rounded-lg font-bold hover:bg-[#4B5563] transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base"
                >
                  Enviar Email
                </a>
                {onOpenPuzzle && (
                  <button
                    onClick={onOpenPuzzle}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D] text-white rounded-lg font-black hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center text-sm sm:text-base flex items-center justify-center gap-2 animate-pulse hover:animate-none"
                  >
                    <Puzzle className="h-5 w-5" />
                    Juega con Nuestro Puzzle
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

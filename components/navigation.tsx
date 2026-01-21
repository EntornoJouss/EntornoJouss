"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Puzzle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation({ onOpenQuote, onOpenPuzzle }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Portafolio", href: "/portafolio" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "https://wa.me/56963910730", external: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center font-bold text-xl text-white hover:opacity-90 transition-opacity -ml-2"
          >
            <div className="w-36 h-16 sm:w-44 sm:h-20 relative">
              <Image src="/logo-blanco.svg" alt="Cayumanque Logo" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold text-sm uppercase tracking-wide hover:text-accent transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white font-bold text-sm uppercase tracking-wide hover:text-accent transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button
              onClick={onOpenPuzzle}
              size="sm"
              variant="outline"
              className="border-white text-white font-bold hover:bg-white hover:text-black bg-transparent uppercase tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              <Puzzle className="h-4 w-4 mr-2" />
              Jugar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-black/90 backdrop-blur-lg rounded-b-xl -mx-2 px-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-white font-bold uppercase tracking-wide hover:text-accent hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-white font-bold uppercase tracking-wide hover:text-accent hover:bg-white/10 transition-colors rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <button
              onClick={() => {
                onOpenPuzzle()
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-3 text-white font-bold uppercase tracking-wide hover:bg-white/10 transition-colors flex items-center gap-2 rounded-lg"
            >
              <Puzzle className="h-4 w-4" />
              Jugar Puzzle
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center font-bold text-xl text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-32 h-14 sm:w-40 sm:h-16 relative">
              <Image src="/logo-blanco.svg" alt="Cayumanque Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors text-sm font-medium drop-shadow-sm"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors text-sm font-medium drop-shadow-sm"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button
              onClick={onOpenPuzzle}
              size="sm"
              variant="outline"
              className="border-white/60 text-white hover:bg-white/20 hover:text-white bg-transparent backdrop-blur-sm"
            >
              <Puzzle className="h-4 w-4 mr-2" />
              Jugar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-black/80 backdrop-blur-lg rounded-b-xl -mx-4 px-4">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-white hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-accent transition-colors"
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
              className="w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors flex items-center gap-2"
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

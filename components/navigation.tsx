"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Puzzle } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation({ onOpenQuote, onOpenPuzzle }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Nosotros", href: "#about-section" },
    { label: "Contacto", href: "https://wa.me/56963910730", external: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="#hero"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:text-secondary transition-colors"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
              <Image src="/cayumanque-full-logo.jpg" alt="Cayumanque Logo" fill className="object-contain" priority />
            </div>
            <span className="hidden sm:inline">Cayumanque</span>
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
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </a>
              ),
            )}
            <Button
              onClick={onOpenPuzzle}
              size="sm"
              variant="outline"
              className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white bg-transparent"
            >
              <Puzzle className="h-4 w-4 mr-2" />
              Jugar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <button
              onClick={() => {
                onOpenPuzzle()
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-2 text-[#8B4513] hover:bg-[#8B4513]/10 transition-colors flex items-center gap-2"
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

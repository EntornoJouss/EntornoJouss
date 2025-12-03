'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Portfolio from '@/components/portfolio'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import QuoteModal from '@/components/quote-modal'

export default function Home() {
  const [portfolioItems, setPortfolioItems] = useState([
    { id: 1, category: 'branding', title: 'Branding Proyecto 1', image: '/dise-o-branding-profesional.jpg' },
    { id: 2, category: 'branding', title: 'Tazas Personalizadas', image: '/branding-tazas-personalizadas.jpeg' },
    { id: 3, category: 'branding', title: 'Diseños 100% Personalizados', image: '/branding-disenos-personalizados.png' },
    { id: 4, category: 'eventos', title: 'Evento Digital 1', image: '/corporate-event.png' },
    { id: 5, category: 'proyectos', title: 'Proyecto 1', image: '/proyecto-digital-creativo.jpg' },
  ])

  const [showQuoteModal, setShowQuoteModal] = useState(false)

  return (
    <main className="w-full">
      <Navigation onOpenQuote={() => setShowQuoteModal(true)} />
      <Hero />
      <Services />
      <Portfolio items={portfolioItems} onItemsChange={setPortfolioItems} />
      <About />
      <Contact />
      <Footer />
      
      {showQuoteModal && <QuoteModal onClose={() => setShowQuoteModal(false)} />}
    </main>
  )
}

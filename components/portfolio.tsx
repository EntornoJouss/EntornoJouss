'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PortfolioItem {
  id: number
  category: string
  title: string
  image: string
}

interface PortfolioProps {
  items: PortfolioItem[]
  onItemsChange: (items: PortfolioItem[]) => void
}

export default function Portfolio({ items, onItemsChange }: PortfolioProps) {
  const [filter, setFilter] = useState('todos')

  const categories = ['todos', 'branding', 'eventos', 'proyectos']

  const filteredItems = filter === 'todos' 
    ? items 
    : items.filter(item => item.category === filter)

  return (
    <section id="portafolio" className="w-full py-24 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 fade-in">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Portafolio</h2>
            <p className="text-xl text-muted-foreground">Proyectos que hemos desarrollado con pasión y creatividad</p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 fade-in fade-in-delay-1">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all capitalize ${
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`fade-in fade-in-delay-${(index % 3) + 1} group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-80`}
            >
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold capitalize">
                    {item.category}
                  </span>
                </div>
                <div className="text-white opacity-0 group-hover:opacity-100 transition-all">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No hay trabajos en esta categoría aún.</p>
          </div>
        )}
      </div>
    </section>
  )
}

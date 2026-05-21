'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Conseil & Stratégie',
      description: 'Solutions de consulting adaptées à votre croissance',
      icon: '🎯',
    },
    {
      title: 'Formation & Expertise',
      description: 'Transfert de compétences et développement des talents',
      icon: '📚',
    },
    {
      title: 'Audits & Certification',
      description: 'Conformité aux normes internationales garantie',
      icon: '✓',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo Slogan */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            REEM Consulting
          </h1>
          <p className="text-xl md:text-2xl text-accent font-semibold mb-2">
            L&apos;exigence au service de votre croissance
          </p>
          <p className="text-lg text-muted-foreground">
            Innover, Auditer, Former : Bâtissons votre futur en toute maîtrise
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16 rounded-lg overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 h-80 md:h-96">
          <div className="relative w-full h-full flex items-center justify-center">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center px-6 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-6xl md:text-8xl mb-4">{slide.icon}</div>
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
                  {slide.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-accent' : 'bg-accent/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* REEM Explanation */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { letter: 'R', title: 'Réflexion', description: 'Conseil stratégique' },
            { letter: 'E', title: 'Examen', description: 'Audit professionnel' },
            { letter: 'E', title: 'Enseignement', description: 'Formation & expertise' },
            { letter: 'M', title: 'Manifestations', description: 'Événements' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                {item.letter}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToBooking}
            className="bg-accent text-white hover:bg-accent/90 px-8 py-6 text-base flex items-center gap-2 mx-auto"
          >
            Contactez-nous
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  )
}

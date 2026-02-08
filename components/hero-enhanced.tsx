'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function HeroEnhanced() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Transformation Stratégique',
      subtitle: 'Conseil et accompagnement pour l\'excellence managériale',
      image: '/strategy-consultation.jpg',
      cta: 'Découvrir'
    },
    {
      title: 'Audit et Certification',
      subtitle: 'Maîtrise des normes ISO et certifications internationales',
      image: '/audit-analysis.jpg',
      cta: 'En savoir plus'
    },
    {
      title: 'Formation Expertise',
      subtitle: 'Transfert de savoir-faire et développement des compétences',
      image: '/training-expertise.jpg',
      cta: 'Nous contacter'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="mb-6 inline-block">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              REEM Consulting
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('services')}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg"
            >
              {slides[currentSlide].cta}
            </Button>
            <Button
              onClick={() => scrollToSection('booking')}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg shadow-lg"
            >
              Réserver une consultation
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-accent w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white" size={24} />
        </div>
      </div>
    </section>
  )
}

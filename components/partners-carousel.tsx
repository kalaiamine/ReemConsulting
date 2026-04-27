'use client'

import React from 'react'
import Image from 'next/image'

const partners = [
  { src: '/logos/image1.png', alt: 'Partenaire 1' },
  { src: '/logos/image2.jpeg', alt: 'Partenaire 2' },
  { src: '/logos/image3.png', alt: 'Partenaire 3' },
  { src: '/logos/image4.png', alt: 'Partenaire 4' },
  { src: '/logos/image5.png', alt: 'Partenaire 5' },
  { src: '/logos/image6.png', alt: 'Partenaire 6' },
  { src: '/logos/image7.png', alt: 'Partenaire 7' },
  { src: '/logos/image8.jpeg', alt: 'Partenaire 8' },
  { src: '/logos/image9.jpeg', alt: 'Partenaire 9' },
  { src: '/logos/image10.jpeg', alt: 'Partenaire 10' },
]

export function PartnersCarousel() {
  // Triple the partners array to ensure it covers more than the screen width
  const allPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-24 overflow-hidden bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Nos Partenaires
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les plus grands organismes pour garantir l'excellence de nos services.
          </p>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* Gradient overlays for smooth fading at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap animate-scroll-reverse hover:[animation-play-state:paused] py-4">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center justify-center min-w-[200px] h-[120px] px-8 py-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={80}
                  className="object-contain max-h-full max-w-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply dark:mix-blend-normal"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

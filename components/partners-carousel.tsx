'use client'

import React from 'react'

const partners = [
  { name: 'AFNOR Certification', category: 'Certification' },
  { name: 'Bureau Veritas', category: 'Inspection' },
  { name: 'SGS', category: 'Vérification' },
  { name: 'TÜV Rheinland', category: 'Certification' },
  { name: 'Lloyd\'s Register', category: 'Management' },
  { name: 'BSI Group', category: 'Normes' },
  { name: 'DEKRA', category: 'Audit' },
  { name: 'Intertek', category: 'Assurance Qualité' },
]

export function PartnersCarousel() {
  // Triple the partners array to ensure it covers more than the screen width
  const allPartners = [...partners, ...partners, ...partners]

  return (
    <section className="py-24 overflow-hidden bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Nos Partenaires & Organismes
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nous collaborons avec les plus grands organismes internationaux pour garantir l'excellence de nos services.
          </p>
        </div>
      </div>

      <div className="relative flex items-center">
        {/* Gradient overlays for smooth fading at the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10"></div>

        <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused] py-4">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="mx-8 flex flex-col items-center justify-center min-w-[200px] px-8 py-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent group"
            >
              <span className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                {partner.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

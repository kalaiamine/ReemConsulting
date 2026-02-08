'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ServicesShowcase() {
  const services = [
    {
      title: 'Conseil & Stratégie',
      description: 'Accompagnement stratégique et opérationnel pour transformer votre organisation et optimiser votre performance',
      image: '/strategy-consultation.jpg',
      highlights: ['Diagnostic d\'entreprise', 'Stratégie business', 'Transformation digitale']
    },
    {
      title: 'Audit & Certification',
      description: 'Audits internes et externes, certifications ISO et accompagnement vers l\'excellence managériale',
      image: '/audit-analysis.jpg',
      highlights: ['Audits certifiés', 'Normes ISO', 'Conformité réglementaire']
    },
    {
      title: 'Formation & Expertise',
      description: 'Programmes de formation personnalisés et transfert de savoir-faire pour développer les compétences de vos équipes',
      image: '/training-expertise.jpg',
      highlights: ['Formation sur mesure', 'Transfert d\'expertise', 'Coaching professionnel']
    }
  ]

  return (
    <section id="services-showcase" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes de conseil adaptées aux besoins spécifiques de votre organisation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group overflow-hidden rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Découvrir
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

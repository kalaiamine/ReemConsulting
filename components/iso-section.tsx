'use client'

import Link from 'next/link'
import { Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const isoList = [
  { id: 'iso-9001', title: 'ISO 9001', tagline: 'Système de management de la qualité' },
  { id: 'iso-14001', title: 'ISO 14001', tagline: 'Système de management environnemental' },
  { id: 'iso-45001', title: 'ISO 45001', tagline: 'Santé et sécurité au travail' },
  { id: 'iso-50001', title: 'ISO 50001', tagline: 'Système de management de l\'énergie' },
  { id: 'iso-27001', title: 'ISO 27001', tagline: 'Sécurité de l\'information' },
  { id: 'iso-22000', title: 'ISO 22000', tagline: 'Sécurité des denrées alimentaires' },
]

export function IsoSection() {
  return (
    <section id="iso" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent mb-4">
            <Award className="w-8 h-8" />
            <span className="font-semibold uppercase tracking-wide text-sm">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Normes ISO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous accompagnons votre organisation dans la mise en place et la certification des normes internationales
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isoList.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/iso/${item.id}`} className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {item.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/#booking" className="mt-4">
                <Button variant="secondary" className="w-full font-medium">
                  Réserver une consultation
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Audit, formation et accompagnement vers la certification
          </p>
          <Link href="/iso">
            <Button variant="outline" className="gap-2">
              <Award className="w-4 h-4" />
              Voir toutes les certifications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

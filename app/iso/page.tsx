'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, ArrowRight } from 'lucide-react'

const isoList = [
  { id: 'iso-9001', title: 'ISO 9001', tagline: 'Système de management de la qualité' },
  { id: 'iso-14001', title: 'ISO 14001', tagline: 'Système de management environnemental' },
  { id: 'iso-45001', title: 'ISO 45001', tagline: 'Santé et sécurité au travail' },
  { id: 'iso-50001', title: 'ISO 50001', tagline: "Système de management de l'énergie" },
  { id: 'iso-27001', title: 'ISO 27001', tagline: "Sécurité de l'information" },
  { id: 'iso-22000', title: 'ISO 22000', tagline: 'Sécurité des denrées alimentaires' },
]

export default function AllCertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <Award className="w-8 h-8" />
              <span className="font-semibold uppercase tracking-wide text-sm">Certifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Toutes les certifications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez l&apos;ensemble des normes ISO que nous accompagnons : audit, formation et certification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {isoList.map((item) => (
              <Link
                key={item.id}
                href={`/iso/${item.id}`}
                className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {item.tagline}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/#booking">
              <Button variant="outline" className="gap-2">
                <Award className="w-4 h-4" />
                Réserver une consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

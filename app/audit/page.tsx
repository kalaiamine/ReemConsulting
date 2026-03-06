'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const auditBlocks = [
  {
    title: 'Audit interne',
    image: '/audit-analysis.jpg',
    imageLeft: true,
    bullets: [
      "Disposer d'un œil objectif et expert",
      "Identification des écarts par rapport à la norme établie",
      "Apport de pistes de progrès",
      "Tous nos auditeurs certifiés IRCA/ICA",
      "Disposer d'une plus-value assurée de vos audits internes",
    ],
  },
  {
    title: 'Audit à blanc',
    image: '/team-collaboration.jpg',
    imageLeft: false,
    bullets: [
      "Objectiver et fiabiliser votre système en amont",
      "Identification des écarts par rapport à la norme établie",
      "Apport de pistes de progrès",
      "Tous nos auditeurs certifiés IRCA/ICA",
      "Disposer d'une plus-value assurée de vos audits internes",
    ],
  },
  {
    title: 'Audit de certification',
    image: '/strategy-consultation.jpg',
    imageLeft: true,
    bullets: [
      "De nombreux secteurs d'activités qualifiés",
      "Auditeurs certifiés IRCA/ICA",
      "Expérience de nos auditeurs",
      "Capacité d'adaptation au contexte",
      "Planning sur mesure",
    ],
  },
  {
    title: 'Audit de vos sous-traitants & fournisseurs',
    image: '/training-expertise.jpg',
    imageLeft: false,
    bullets: [
      "Analyser les performances du fournisseur / sous-traitant",
      "Analyse des spécifications et normes applicables",
      "Analyse du contenu des dernières commandes passées",
      "Audit opérationnel terrain",
      "Remise d'un rapport d'audit et d'un plan d'actions",
    ],
  },
]

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Externalisation de vos audits QSE
            </h1>
            <p className="text-lg text-primary font-semibold">
              Tous nos auditeurs sont diplômés IRCA/ICA
            </p>
          </div>

          {auditBlocks.map((block, index) => (
            <div
              key={block.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={block.imageLeft ? 'md:order-1' : 'md:order-2'}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-muted">
                  <Image
                    src={block.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={block.imageLeft ? 'md:order-2' : 'md:order-1'}>
                <h2 className="text-2xl font-serif font-semibold text-primary mb-6">
                  {block.title}
                </h2>
                <ul className="space-y-3">
                  {block.bullets.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="text-center pt-8">
            <p className="text-xl font-semibold text-primary mb-6">
              Vous souhaitez plus d&apos;informations ? Contactez-nous !
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/#booking">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const auditBlocks = [
  {
    title: 'Audit de Diagnostic',
    image: '/audit_diagnostic_abs.png',
    imageLeft: true,
    bullets: [
      "État des lieux initial avant certification.",
      "Identification précise des écarts par rapport au référentiel visé.",
      "Élaboration d'une feuille de route claire pour la mise en conformité.",
      "Analyse des forces et faiblesses de votre système actuel.",
      "Sensibilisation de vos équipes aux exigences normatives."
    ],
  },
  {
    title: 'Audit Interne',
    image: '/audit_interne_abs.png',
    imageLeft: false,
    bullets: [
      "Vérification de l'efficacité de vos processus.",
      "Disposer d'un œil objectif et expert sur votre organisation.",
      "Apport de pistes de progrès et d'amélioration continue.",
      "Tous nos auditeurs sont certifiés (IRCA/ICA).",
      "Préparation optimale aux audits de certification."
    ],
  },
  {
    title: 'Audit Fournisseur',
    image: '/audit_fournisseur_abs.png',
    imageLeft: true,
    bullets: [
      "Maîtrise de la qualité sur toute votre chaîne de valeur.",
      "Analyser les performances de vos fournisseurs et sous-traitants.",
      "Vérification du respect de vos cahiers des charges et spécifications.",
      "Audit opérationnel sur le terrain (locaux fournisseurs).",
      "Remise d'un rapport détaillé et suivi des plans d'actions."
    ],
  },
  {
    title: 'Veille Réglementaire',
    image: '/veille_reglementaire_abs.png',
    imageLeft: false,
    bullets: [
      "Assurance de conformité légale constante.",
      "Identification des textes réglementaires applicables à votre activité.",
      "Évaluation de votre niveau de conformité (audit réglementaire).",
      "Mise à jour régulière de votre registre réglementaire.",
      "Anticipation des évolutions légales et de leurs impacts."
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

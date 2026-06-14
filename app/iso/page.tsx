'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

const isoFormations = [
  {
    title: 'ISO 9001',
    badge: 'Qualite',
    color: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    dot: 'bg-blue-500',
    description: "Systeme de Management de la Qualite - Ameliorer la satisfaction client, optimiser les processus et structurer la performance de votre organisation.",
    points: [
      'Satisfaction et fidelisation des clients',
      'Amelioration continue des processus',
      'Maitrise des risques et opportunites',
      'Applicable a tous les secteurs',
    ],
  },
  {
    title: 'ISO 45001',
    badge: 'Securite & Sante',
    color: 'from-orange-500/10 to-orange-500/5',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    dot: 'bg-orange-500',
    description: "Systeme de Management de la Sante et Securite au Travail - Prevenir les accidents, proteger vos collaborateurs et reduire les risques professionnels.",
    points: [
      'Reduction des accidents et maladies professionnelles',
      'Conformite legale en matiere de SST',
      'Implication et bien-etre des equipes',
      'Culture de prevention durable',
    ],
  },
  {
    title: 'ISO 14001',
    badge: 'Environnement',
    color: 'from-green-500/10 to-green-500/5',
    border: 'border-green-500/20 hover:border-green-500/50',
    dot: 'bg-green-500',
    description: "Systeme de Management Environnemental - Maitriser vos impacts environnementaux, assurer votre conformite reglementaire et engager votre organisation dans une demarche eco-responsable.",
    points: [
      'Identification et reduction des impacts environnementaux',
      'Conformite reglementaire garantie',
      "Amelioration de l'image et de la reputation",
      'Reduction des couts lies aux dechets et energies',
    ],
  },
  {
    title: 'ISO 50001',
    badge: 'Energie',
    color: 'from-yellow-500/10 to-yellow-500/5',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
    dot: 'bg-yellow-500',
    description: "Systeme de Management de l'Energie - Optimiser votre consommation energetique, reduire votre empreinte carbone et maitriser vos couts d'exploitation.",
    points: [
      'Reduction des consommations et factures energetiques',
      "Diminution des emissions de gaz a effet de serre",
      'Performance operationnelle amelioree',
      'Eligibilite aux certifications et aides energetiques',
    ],
  },
  {
    title: 'ISO 26000',
    badge: 'Responsabilite Societale',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    dot: 'bg-purple-500',
    description: "Responsabilite Societale des Organisations - Integrer les enjeux sociaux, ethiques et environnementaux dans votre strategie pour un developpement durable et responsable.",
    points: [
      'Valorisation de votre demarche RSE',
      'Dialogue renforce avec les parties prenantes',
      'Contribution au developpement durable',
      "Renforcement de la confiance et de l'attractivite",
    ],
  },
  {
    title: 'ISO 17025',
    badge: 'Laboratoire',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    dot: 'bg-cyan-500',
    description: "Competence des Laboratoires d'Essais et d'Etalonnage - Garantir la fiabilite, la precision et la validite de vos resultats d'analyses et d'essais.",
    points: [
      'Reconnaissance internationale de vos resultats',
      'Maitrise de la qualite des essais et etalonnages',
      "Conformite aux exigences d'accreditation",
      'Amelioration de la competence technique',
    ],
  },
  {
    title: 'ISO 22000',
    badge: 'Agroalimentaire',
    color: 'from-lime-500/10 to-lime-500/5',
    border: 'border-lime-500/20 hover:border-lime-500/50',
    dot: 'bg-lime-600',
    description: "Systeme de Management de la Securite des Aliments - Assurer la securite de la chaine alimentaire, maitriser les dangers biologiques, chimiques et physiques tout au long du processus.",
    points: [
      'Securite alimentaire de bout en bout',
      'Conformite HACCP et reglementaire',
      'Confiance des consommateurs et acheteurs',
      'Tracabilite et maitrise des risques alimentaires',
    ],
  },
  {
    title: 'ISO 37001',
    badge: 'Anti-corruption',
    color: 'from-rose-500/10 to-rose-500/5',
    border: 'border-rose-500/20 hover:border-rose-500/50',
    dot: 'bg-rose-500',
    description: "Systeme de Management Anti-Corruption - Prevenir, detecter et combattre la corruption au sein de votre organisation pour securiser vos relations d'affaires.",
    points: [
      'Protection juridique et financiere des dirigeants',
      "Renforcement de l'ethique et de l'integrite",
      'Securisation des transactions commerciales',
      'Valorisation aupres des partenaires et investisseurs',
    ],
  },
  {
    title: 'ISO 17020',
    badge: 'Inspection',
    color: 'from-indigo-500/10 to-indigo-500/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    dot: 'bg-indigo-500',
    description: "Exigences pour le Fonctionnement de differents Types d'Organismes Procedant a l'Inspection - Attester la competence, l'impartialite et la coherence de vos activites d'inspection.",
    points: [
      'Accreditation et reconnaissance nationale/internationale',
      'Impartialite et independance garanties',
      'Competence technique validee',
      "Confiance accrue des clients et donneurs d'ordre",
    ],
  },
]

export default function FormationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-secondary/60 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4 px-4 py-1.5 bg-accent/10 rounded-full">
            Formation
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            Nos Domaines de Formation ISO
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            REEM Consulting vous accompagne dans la maitrise des normes internationales grace a des formations expertes, pragmatiques et adaptees a votre secteur d&apos;activite.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* ISO Cards Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {isoFormations.map((iso) => (
              <div
                key={iso.title}
                className={`bg-gradient-to-br ${iso.color} rounded-2xl border ${iso.border} p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-bold text-primary font-serif">{iso.title}</h2>
                    <span className={`inline-block mt-1 text-xs font-semibold text-white px-3 py-0.5 rounded-full ${iso.dot}`}>
                      {iso.badge}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${iso.dot} opacity-80 group-hover:scale-125 transition-transform`} />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {iso.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {iso.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 items-start">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/80 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
            Pret a vous former ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Nos experts sont disponibles pour vous proposer un programme de formation sur mesure, adapte a vos besoins.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg shadow-lg shadow-accent/20">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

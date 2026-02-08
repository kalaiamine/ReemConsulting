'use client'

import { CheckCircle, TrendingUp, RefreshCw, Search } from 'lucide-react'
import Link from 'next/link'

export function Services() {
  const mainServices = [
    {
      icon: Search,
      title: 'Le Diagnostic',
      description:
        'Évaluation complète de vos pratiques de gestion. Nous identifions vos forces et faiblesses pour établir un plan d\'action efficace.',
    },
    {
      icon: CheckCircle,
      title: 'Mise en place de systèmes de management',
      description:
        'Implémentation de solutions certifiées conformes aux normes ISO. Certification du premier coup, adaptée à vos activités.',
    },
    {
      icon: RefreshCw,
      title: 'Amélioration et simplification',
      description:
        'Transformation de systèmes complexes en solutions pratiques et performantes. Augmentation de l\'efficacité opérationnelle.',
    },
    {
      icon: TrendingUp,
      title: 'Audit interne et audit à blanc',
      description:
        'Services d\'audit complets avec formation de vos auditeurs internes. Garantie de conformité aux normes en vigueur.',
    },
  ]

  const standards = [
    { name: 'ISO 9001', id: 'iso-9001' },
    { name: 'ISO 14001', id: 'iso-14001' },
    { name: 'ISO 45001', id: 'iso-45001' },
    { name: 'ISO 50001', id: 'iso-50001' },
    { name: 'ISO 27001', id: 'iso-27001' },
    { name: 'ISO/IEC 17025', id: 'iso-17025' },
    { name: 'ISO 22000', id: 'iso-22000' },
    { name: 'ISO 26000', id: 'iso-26000' },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Nos Services de Conseil
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solutions complètes en management, audit et formation adaptées à votre maturité et vos besoins
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Standards Section */}
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            Normes Internationales Maîtrisées
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {standards.map((standard, index) => (
              <Link
                key={index}
                href={`/iso/${standard.id}`}
                className="bg-accent/10 p-4 rounded-lg border border-accent/20 text-center font-semibold text-foreground hover:bg-accent/20 hover:shadow-md transition-all cursor-pointer"
              >
                {standard.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Description générale */}
        <div className="mt-12 p-8 bg-primary/5 rounded-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Nos Approches Personnalisées
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong>Coaching, Formation & Support Technique :</strong> Nos experts mettent à votre
              disposition leurs expertise, expériences et compétences pour améliorer la performance
              de votre entreprise.
            </p>
            <p>
              <strong>Expertise Complète :</strong> Nos consultants disposent d&apos;une expérience
              de plus de 10 années dans le domaine du conseil, de l&apos;accompagnement et des
              certifications.
            </p>
            <p>
              <strong>Réseau Spécialisé :</strong> Grâce à notre vaste réseau de consultants
              (Auditeurs ICA et IRCA) agréés par AFNOR, Bureau VERITAS, TÜV et DQS, nous couvrons
              tous les secteurs d&apos;activité et filières métier.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

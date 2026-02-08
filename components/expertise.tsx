'use client'

import { Globe, Award, Users, Target } from 'lucide-react'

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Award,
      title: 'Certifications Reconnues',
      description: 'Certifiés ICA et IRCA par AFNOR, Bureau VERITAS, TÜV et DQS',
    },
    {
      icon: Users,
      title: 'Réseau Spécialisé',
      description:
        'Équipe de consultants experts couvrant tous les secteurs et filières métier',
    },
    {
      icon: Target,
      title: 'Expertise Pointue',
      description:
        'Maîtrise complète des normes et attentes des certificateurs internationaux',
    },
    {
      icon: Globe,
      title: 'Couverture Mondiale',
      description:
        'Intervention France et international : Europe, Balkans, Canada, Moyen Orient, Afrique',
    },
  ]

  return (
    <section id="expertise" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Notre Savoir-Faire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise reconnue et un accompagnement de qualité pour votre succès
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Connaissance Approach */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-border">
          <h3 className="text-2xl font-serif text-foreground mb-6 text-center">
            Notre Approche : Capitalisation de Connaissances
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6 text-center">
            La connaissance est la matière première de chaque domaine d'intervention :
          </p>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-2">R</div>
              <p className="font-semibold text-foreground mb-2">Ressources & Savoirs</p>
              <p className="text-sm text-muted-foreground">
                Capitalisation de vos expériences passées
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-2">E</div>
              <p className="font-semibold text-foreground mb-2">Expertise</p>
              <p className="text-sm text-muted-foreground">
                Connaissance technique pointue
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-2">E</div>
              <p className="font-semibold text-foreground mb-2">Enseignement</p>
              <p className="text-sm text-muted-foreground">
                Transformation des savoirs en formations
              </p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <div className="text-2xl font-bold text-accent mb-2">M</div>
              <p className="font-semibold text-foreground mb-2">Management</p>
              <p className="text-sm text-muted-foreground">
                Organisation et partage du savoir
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

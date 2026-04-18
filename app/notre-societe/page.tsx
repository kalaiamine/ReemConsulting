'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamSection } from '@/components/team-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import { Expertise } from '@/components/expertise'

export default function NotreSociete() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Intro Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Notre Société
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              REEM Consulting est un cabinet d'expertise spécialisé dans l'accompagnement stratégique et opérationnel des entreprises souhaitant optimiser leurs systèmes de management. Notre mission est de transformer les contraintes normatives en véritables leviers de croissance et de compétitivité, en alliant rigueur technique et agilité culturelle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h2 className="text-2xl font-serif text-accent mb-4">Notre Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Apporter une valeur ajoutée mesurable à nos clients en optimisant leurs processus et en garantissant leur conformité aux standards internationaux les plus exigeants.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h2 className="text-2xl font-serif text-accent mb-4">Notre Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Devenir le leader reconnu du conseil en management et audit ISO dans la région, en cultivant l'expertise, l'innovation et la réussite durable de nos partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savoir-faire Section */}
      <Expertise />

      {/* Moved Team Section */}
      <TeamSection />

      {/* Partners Section */}
      <PartnersCarousel />

      <Footer />
    </main>
  )
}

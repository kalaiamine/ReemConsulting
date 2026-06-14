'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TeamSection } from '@/components/team-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import { Expertise } from '@/components/expertise'
import Image from 'next/image'

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
                Devenir le leader reconnu du conseil en management dans la région, en cultivant l'expertise, l'innovation et la réussite durable de nos clients et partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Profile Section */}
      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Image Container */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-full md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-border group transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="/moez.png"
                  alt="Moez NEFFATI - Dirigeant REEM Consulting"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>

            {/* Profile Info Container */}
            <div className="md:col-span-7 flex flex-col justify-center">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                Le Dirigeant
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2 leading-tight">
                Moez NEFFATI
              </h2>
              <p className="text-lg text-accent font-medium mb-6">
                Directeur Général de REEM Consulting
              </p>
              
              <div className="w-16 h-1 bg-accent mb-6"></div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg text-foreground/95 font-medium italic mb-4">
                  « Nous croyons qu'un système de management ne doit pas être une contrainte administrative, mais un véritable levier de performance et de croissance pour votre entreprise. »
                </p>
                <p>
                  Notre mission est de vous simplifier la voie vers la certification.
                </p>
                <p>
                  Grâce à notre expertise en conseil, nous vous accompagnons pas à pas dans la mise en place de vos systèmes de management et la préparation sereine de vos audits. Nous transformons vos exigences réglementaires et normatives en opportunités stratégiques, avec une approche pragmatique et sur mesure.
                </p>
                <p className="font-semibold text-primary">
                  Votre ambition est d'atteindre l'excellence ? Notre engagement est de vous y conduire.
                </p>
                
                <div className="mt-8 pt-4 border-t border-border/80">
                  <p className="font-serif font-bold text-foreground">La Direction</p>
                  <p className="text-accent font-semibold">Moez NEFFATI</p>
                </div>
              </div>
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

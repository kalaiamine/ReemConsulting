'use client'

import Image from 'next/image'

export function BrandingGuide() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Identité Visuelle REEM
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une identité moderne et professionnelle qui reflète nos valeurs d'excellence, d'innovation et de confiance
          </p>
        </div>

        {/* Logo Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Logo Principal</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-12 rounded-lg border border-border flex items-center justify-center">
              <Image
                src="/logo-reem-modern.jpg"
                alt="REEM Consulting Logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre logo moderne représente une approche innovante du conseil. La forme géométrique fluide suggère le mouvement, la transformation et l'excellence. Cette identité communique l'expertise, la fiabilité et la vision prospective de REEM Consulting.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Couleur Principale</p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-primary rounded-lg border border-border" />
                    <span className="text-sm text-muted-foreground">#1e3a5f</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Accent</p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-accent rounded-lg border border-border" />
                    <span className="text-sm text-muted-foreground">#00a99d</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Palette de Couleurs</h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div>
              <div className="w-full h-32 bg-primary rounded-lg mb-4 border border-border" />
              <p className="font-semibold text-foreground text-sm mb-1">Bleu Marine</p>
              <p className="text-xs text-muted-foreground">#1e3a5f</p>
              <p className="text-xs text-muted-foreground mt-2">Professionnel, confiance</p>
            </div>
            <div>
              <div className="w-full h-32 bg-accent rounded-lg mb-4 border border-border" />
              <p className="font-semibold text-foreground text-sm mb-1">Teal Moderne</p>
              <p className="text-xs text-muted-foreground">#00a99d</p>
              <p className="text-xs text-muted-foreground mt-2">Innovation, dynamique</p>
            </div>
            <div>
              <div className="w-full h-32 bg-secondary rounded-lg mb-4 border border-border" />
              <p className="font-semibold text-foreground text-sm mb-1">Gris Clair</p>
              <p className="text-xs text-muted-foreground">#f0f4f8</p>
              <p className="text-xs text-muted-foreground mt-2">Arrière-plan, légèreté</p>
            </div>
            <div>
              <div className="w-full h-32 bg-muted rounded-lg mb-4 border border-border" />
              <p className="font-semibold text-foreground text-sm mb-1">Gris Neutre</p>
              <p className="text-xs text-muted-foreground">#e0e8f0</p>
              <p className="text-xs text-muted-foreground mt-2">Bordures, séparations</p>
            </div>
            <div>
              <div className="w-full h-32 bg-foreground rounded-lg mb-4 border border-border" />
              <p className="font-semibold text-foreground text-sm mb-1">Bleu Foncé</p>
              <p className="text-xs text-muted-foreground">#1e3a5f</p>
              <p className="text-xs text-muted-foreground mt-2">Texte, contenu</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Typographie</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-secondary/30 p-8 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Titres</p>
              <p className="text-4xl font-serif text-foreground mb-4">Geist Serif</p>
              <p className="text-muted-foreground text-sm">Élégance et professionnalisme pour les titres et heading</p>
            </div>
            <div className="bg-secondary/30 p-8 rounded-lg border border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Corps de Texte</p>
              <p className="text-lg font-sans text-foreground mb-4">Geist Sans</p>
              <p className="text-muted-foreground text-sm">Clarté et lisibilité pour le contenu principal</p>
            </div>
          </div>
        </div>

        {/* Design Elements */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Principes de Design</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Minimaliste</h4>
              <p className="text-sm text-muted-foreground">Design épuré et contemporain qui communique clarté et professionnalisme</p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Cohérent</h4>
              <p className="text-sm text-muted-foreground">Identité visuelle uniforme sur tous les supports et matériaux</p>
            </div>
            <div className="border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovant</h4>
              <p className="text-sm text-muted-foreground">Moderne et en avant, reflétant notre vision prospective</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

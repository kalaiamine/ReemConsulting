'use client'

import Image from 'next/image'

export function TeamSection() {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden border border-border shadow-xl">
            <Image
              src="/team-collaboration.jpg"
              alt="REEM Consulting Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
              Notre Équipe
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              Expertise & Collaboration
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Notre équipe compose de plus de 40 consultants spécialisés avec une expertise combinée de 10+ années dans le domaine du conseil, des audits et de la certification. Nous maitrisez les normes internationales et travaillons en étroite collaboration pour garantir le succès de vos projets.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-accent mb-1">40+</p>
                <p className="text-sm text-muted-foreground">Consultants spécialisés</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-accent mb-1">8+</p>
                <p className="text-sm text-muted-foreground">Normes ISO maîtrisées</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-accent mb-1">10+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-accent mb-1">Global</p>
                <p className="text-sm text-muted-foreground">Présence internationale</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              Nous intervenons en France et à l'international (Europe, Pays Balkans, Canada, Moyen Orient, Afrique).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

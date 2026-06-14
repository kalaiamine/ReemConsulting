'use client'

import Image from 'next/image'

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Moez NEFFATI',
      role: 'Directeur Général & Fondateur',
      avatar: '/moez.png',
      description: 'Expert en stratégie et management ISO'
    },
    {
      name: 'Adel',
      role: 'Consultant & Expert QHSE',
      avatar: '/placeholder-user.jpg',
      description: 'Expert en systèmes de management qualité, hygiène, sécurité et environnement'
    },
    {
      name: 'Fahd Cherni',
      role: 'Consultant Senior & Auditeur',
      avatar: '/fahd.png',
      description: 'Spécialiste en audit et systèmes de management'
    },
    {
      name: 'Sarra Gharbi',
      role: 'Consultante & Formatrice',
      avatar: '/sarra.png',
      description: 'Spécialiste en formation et management qualité'
    }
  ]

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
              Notre équipe se compose de consultants spécialisés avec une expertise solide dans le domaine du conseil, des audits et de la certification. Nous maîtrisons les normes internationales et travaillons en étroite collaboration pour garantir le succès de vos projets.
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
              Nous intervenons en France et à l'international (Europe, Canada, Moyen Orient, Afrique).
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mt-20 border-t border-border/50 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Membres Clés de l'Équipe
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Découvrez les experts qui vous accompagnent au quotidien dans la réussite de vos projets.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-card rounded-xl p-6 border border-border shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-accent/30 group"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20 shrink-0">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-foreground leading-snug">
                    {member.name}
                  </h4>
                  <p className="text-sm text-accent font-medium mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg aspect-square flex items-center justify-center">
              <div className="w-full h-full bg-muted/30 flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🎯</span>
                  </div>
                  <p className="text-muted-foreground">Expertise reconnue</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
              À propos de REEM Consulting
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Notre savoir-faire : plus de 10 années d'expérience dans le conseil, l'accompagnement et les certifications. Nous accompagnons les entreprises de toutes tailles vers l'excellence managériale et l'amélioration continue.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nos consultants disposent de compétences multiples et maîtrisent les normes internationales. Auditeurs agréés ICA et IRCA, certifiés par AFNOR, Bureau VERITAS, TÜV et DQS, nous garantissons la réussite de vos démarches.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong>Périmètre géographique :</strong> Nous intervenons en France et à l'international (Europe, Pays Balkans, Canada, Moyen Orient, Afrique). Votre emplacement n'est pas une barrière à notre soutien.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-accent mb-2">10+</h3>
                <p className="text-muted-foreground">Années d'expertise</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent mb-2">8+</h3>
                <p className="text-muted-foreground">Normes ISO maîtrisées</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent mb-2">40+</h3>
                <p className="text-muted-foreground">Consultants spécialisés</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent mb-2">Global</h3>
                <p className="text-muted-foreground">Présence internationale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export function LogoShowcase() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Notre Identité Visuelle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un logo professionnel conçu pour refléter expertise, confiance et innovation
          </p>
        </div>

        {/* Main Logo Display */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Logo on White */}
          <div className="bg-white rounded-lg p-12 flex items-center justify-center border border-border">
            <div className="text-center">
              <Image
                src="/logo-reem-consulting.jpg"
                alt="REEM Consulting Logo"
                width={300}
                height={300}
                className="w-full max-w-xs mx-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">Logo sur fond blanc</p>
            </div>
          </div>

          {/* Logo on Dark */}
          <div className="bg-primary rounded-lg p-12 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/logo-reem-consulting.jpg"
                alt="REEM Consulting Logo"
                width={300}
                height={300}
                className="w-full max-w-xs mx-auto mb-4"
              />
              <p className="text-sm text-primary-foreground">Logo sur fond foncé</p>
            </div>
          </div>
        </div>

        {/* Logo Specifications */}
        <div className="bg-secondary/30 rounded-lg p-8">
          <h3 className="text-2xl font-serif text-foreground mb-6">Spécifications du Logo</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Design Elements */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Éléments de Design</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Forme géométrique moderne :</strong> R stylisée avec compassé intégré</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Symboles d'innovation :</strong> Aiguille de compassé et ampoule</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Proportions équilibrées :</strong> Symétrie pour la confiance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span><strong>Typographie professionnelle :</strong> Sans-serif moderne</span>
                </li>
              </ul>
            </div>

            {/* Color Palette */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Palette de Couleurs</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#2C5AA0] border border-border"></div>
                  <div>
                    <p className="font-semibold text-foreground">Bleu Professionnel</p>
                    <p className="text-sm text-muted-foreground">#2C5AA0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#2a2a2a] border border-border"></div>
                  <div>
                    <p className="font-semibold text-foreground">Charcoal Gris</p>
                    <p className="text-sm text-muted-foreground">#2a2a2a</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#d4a574] border border-border"></div>
                  <div>
                    <p className="font-semibold text-foreground">Accent Doré</p>
                    <p className="text-sm text-muted-foreground">#d4a574</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="mt-8 pt-8 border-t border-border">
            <h4 className="font-semibold text-foreground mb-4">Guidelines d'Utilisation</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Espaces Minimes</p>
                <p>Respectez un espace de 10% autour du logo pour une lisibilité optimale</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Résolutions</p>
                <p>Disponible en haute résolution pour web et print (300 DPI)</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Polyvalence</p>
                <p>Convient pour les cartes de visite, sites web et matériaux marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

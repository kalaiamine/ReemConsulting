'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Info, Settings, ShieldAlert, Monitor, CheckCircle } from 'lucide-react'

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">
            Politique relative aux Cookies
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous utilisons des cookies pour optimiser votre expérience de navigation et analyser l'utilisation de notre plateforme de manière anonyme.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Card: Qu'est-ce qu'un cookie */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Qu'est-ce qu'un Cookie ?</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site internet. Il permet au site de mémoriser vos préférences et certaines données de navigation afin de faciliter vos visites ultérieures et d'améliorer les fonctionnalités du site.
            </p>
          </div>

          {/* Card: Types de cookies utilisés */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Settings className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Cookies Utilisés sur ce Site</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nous utilisons principalement deux catégories de cookies :
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-secondary/30 border border-border rounded-lg">
                <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">1. Cookies Techniques & Fonctionnels (Strictement Nécessaires)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ces cookies sont indispensables au bon fonctionnement du site. Ils permettent de naviguer de manière sécurisée et d'utiliser les fonctionnalités essentielles (comme la mémorisation de votre session de contact). Ils ne stockent aucune donnée personnelle.
                </p>
              </div>
              <div className="p-4 bg-secondary/30 border border-border rounded-lg">
                <h3 className="font-semibold text-primary mb-1 text-sm sm:text-base">2. Cookies de Mesure d'Audience (Analytiques)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ces cookies nous permettent de mesurer l'audience du site (nombre de visites, pages consultées, temps passé) via la plateforme <strong>Vercel Analytics</strong> ou notre traceur interne. Ces données sont anonymisées et servent uniquement à améliorer nos contenus et notre ergonomie.
                </p>
              </div>
            </div>
          </div>

          {/* Card: Comment gérer les cookies */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Monitor className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Gestion des Cookies via votre Navigateur</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Vous pouvez à tout moment configurer votre navigateur pour bloquer, supprimer ou être alerté de l'utilisation des cookies. Notez que la désactivation de certains cookies essentiels peut altérer votre confort de navigation.
            </p>
            <p className="text-muted-foreground leading-relaxed font-semibold">
              Procédure selon les navigateurs :
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm text-muted-foreground">
              <div className="space-y-1">
                <h4 className="font-semibold text-foreground">Google Chrome</h4>
                <p className="text-xs">Menu principal &gt; Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-foreground">Mozilla Firefox</h4>
                <p className="text-xs">Menu principal &gt; Paramètres &gt; Vie privée et sécurité &gt; Cookies et données de sites.</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-foreground">Safari (Mac / iOS)</h4>
                <p className="text-xs">Réglages &gt; Safari &gt; Confidentialité et sécurité &gt; Bloquer tous les cookies (ou gestion avancée).</p>
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-foreground">Microsoft Edge</h4>
                <p className="text-xs">Paramètres &gt; Autorisations du site &gt; Cookies et données de site stockées.</p>
              </div>
            </div>
          </div>

          {/* Card: Alert / Important note */}
          <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold text-primary text-sm sm:text-base">Durée de validité</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Le consentement donné à l'utilisation des cookies est valable pour une période maximale de 13 mois. Passé ce délai, votre accord sera à nouveau sollicité lors de votre visite sur notre site.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

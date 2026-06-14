'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Building, MapPin, Phone, Mail, Globe, Shield, Scale } from 'lucide-react'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">
            Mentions Légales
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conformément aux dispositions légales en vigueur, nous mettons à votre disposition les informations concernant l'éditeur et l'hébergeur du site REEM Consulting.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Card: Editeur & Hebergeur */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Publisher Card */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary rounded-lg text-accent">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-primary">Éditeur du Site</h2>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground text-base">REEM Consulting</p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <span>162, AV.UMA, Omrane Centre La Soukra - Tunisie</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>+216 26 861 817</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>contact@reemconsulting.tn</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                Responsable de la publication : <strong className="text-foreground">Moez NEFFATI</strong>
              </div>
            </div>

            {/* Hosting Card */}
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary rounded-lg text-accent">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-serif font-semibold text-primary">Hébergement</h2>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground text-base">Vercel Inc.</p>
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <span>440 N Barranca Ave #4133, Covina, CA 91723, USA</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-accent transition">
                      https://vercel.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                Plateforme d'hébergement cloud mondialisé hautement sécurisé.
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Propriété Intellectuelle</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              L'ensemble des contenus de ce site (structure, textes, graphismes, logos, images, icônes, vidéos, etc.) est la propriété exclusive de REEM Consulting ou fait l'objet d'une autorisation d'utilisation. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sauf autorisation écrite préalable de REEM Consulting.
            </p>
          </div>

          {/* Responsibility & Terms */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Limitation de Responsabilité</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              REEM Consulting s'efforce de fournir sur son site des informations aussi précises que possible. Toutefois, le cabinet ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Les liens hypertextes mis en place sur le site en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de REEM Consulting.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

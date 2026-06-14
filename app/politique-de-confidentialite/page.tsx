'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Eye, ShieldCheck, Database, Key, CheckCircle, HelpCircle } from 'lucide-react'

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-secondary/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chez REEM Consulting, la protection de vos données personnelles est au cœur de nos engagements de confiance et d'éthique professionnelle.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Card: Introduction */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Engagement de Confidentialité</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              REEM Consulting s’engage à ce que la collecte et le traitement de vos données personnelles soient conformes à la réglementation générale sur la protection des données (RGPD) ainsi qu'à la législation tunisienne en vigueur (notamment la Loi organique n° 2004-63 du 27 juillet 2004 portant sur la protection des données à caractère personnel).
            </p>
          </div>

          {/* Card: Données Collectées */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Database className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Données Collectées et Finalités</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Nous collectons uniquement les données personnelles strictement nécessaires pour répondre à vos demandes :
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground pt-2">
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Formulaires de contact :</strong> Nom, prénom, adresse e-mail, numéro de téléphone, entreprise, contenu du message.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Réservation & Services :</strong> Détails du besoin d'accompagnement ou d'audit (exigences ISO 9001, 14001, etc.).</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Données analytiques :</strong> Adresse IP anonymisée, type de navigateur, parcours utilisateur sur notre site.</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span><strong>Objectif :</strong> Répondre à vos demandes de devis/rencontres, assurer le suivi client et améliorer la performance du site.</span>
              </li>
            </ul>
          </div>

          {/* Card: Conservation & Securite */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Key className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Conservation et Sécurité</h2>
            </div>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                <strong>Durée de conservation :</strong> Les données sont conservées pendant une durée maximale de 3 ans à compter du dernier contact avec l'utilisateur ou le client (sauf obligations contractuelles, comptables ou légales plus strictes).
              </p>
              <p>
                <strong>Mesures de sécurité :</strong> Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées (chiffrement des flux HTTPS, hébergement sécurisé, accès restreint aux seuls collaborateurs concernés) pour prévenir toute altération, perte ou accès non autorisé à vos données.
              </p>
            </div>
          </div>

          {/* Card: Droits des Utilisateurs */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-secondary rounded-lg text-accent">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-primary">Vos Droits</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Conformément à la réglementation sur la protection des données, vous bénéficiez des droits suivants concernant vos données à caractère personnel :
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground pt-1">
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit d'accès et d'information</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit de rectification (mise à jour)</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit à l'effacement (suppression / oubli)</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit à la limitation du traitement</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit d'opposition pour motif légitime</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                <span>Droit à la portabilité des données</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-border/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span>Pour exercer vos droits, écrivez-nous par e-mail :</span>
              </p>
              <a href="mailto:contact@reemconsulting.tn" className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-xs hover:bg-primary/90 transition shadow-sm">
                contact@reemconsulting.tn
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

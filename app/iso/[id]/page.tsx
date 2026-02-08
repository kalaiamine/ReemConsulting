'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, Users, Award, Globe } from 'lucide-react'

const isoDetails: Record<
  string,
  {
    title: string
    fullName: string
    description: string
    benefits: string[]
    implementation: string
    scope: string
    industry: string[]
  }
> = {
  'iso-9001': {
    title: 'ISO 9001',
    fullName: 'Système de management de la qualité',
    description:
      'ISO 9001 est la norme internationale pour les systèmes de management de la qualité. Elle définit les exigences pour que les organisations démontrent leur capacité à fournir des produits et services qui répondent aux attentes des clients.',
    benefits: [
      'Amélioration de la satisfaction client',
      'Augmentation de la rentabilité et de la productivité',
      'Réduction des coûts d\'opération',
      'Meilleure image de marque et compétitivité',
      'Accès à de nouveaux marchés',
      'Conformité réglementaire accrue',
    ],
    implementation:
      'Nous accompagnons votre organisation à travers tous les stades de l\'implémentation : diagnostic initial, conception du système, mise en œuvre, formation et certification.',
    scope: 'Applicable à toutes les organisations, quel que soit leur taille, secteur ou type.',
    industry: ['Manufacture', 'Services', 'Santé', 'Éducation', 'Public'],
  },
  'iso-14001': {
    title: 'ISO 14001',
    fullName: 'Système de management environnemental',
    description:
      'ISO 14001 est la norme internationale pour les systèmes de management environnemental. Elle aide les organisations à améliorer leur performance environnementale et à démontrer leur engagement envers la durabilité.',
    benefits: [
      'Réduction de l\'impact environnemental',
      'Économies de ressources et d\'énergie',
      'Conformité aux réglementations environnementales',
      'Amélioration de la réputation corporate',
      'Accès à des contrats et marchés verts',
      'Réduction des risques environnementaux',
    ],
    implementation:
      'Nous aidons votre organisation à développer une stratégie environnementale intégrée, identifier les aspects environnementaux, et mettre en place des contrôles efficaces.',
    scope: 'Applicable à toutes les organisations désireuses de gérer leurs responsabilités environnementales.',
    industry: ['Industrie', 'Énergie', 'Transport', 'Construction', 'Agriculture'],
  },
  'iso-45001': {
    title: 'ISO 45001',
    fullName: 'Système de management de la santé et sécurité au travail',
    description:
      'ISO 45001 est la norme internationale pour les systèmes de management de la santé et sécurité au travail. Elle aide les organisations à créer des environnements de travail sûrs et sains.',
    benefits: [
      'Réduction des accidents et incidents de travail',
      'Amélioration du bien-être des collaborateurs',
      'Réduction des coûts liés aux accidents',
      'Meilleure productivité et engagement',
      'Conformité légale et réglementaire',
      'Amélioration de la culture de sécurité',
    ],
    implementation:
      'Nous guidons votre organisation dans l\'identification des dangers, l\'évaluation des risques, et la mise en place de contrôles pour éliminer les risques.',
    scope: 'Applicable à toutes les organisations, indépendamment de leur taille ou secteur.',
    industry: ['Construction', 'Manufacture', 'Mines', 'Transport', 'Tous secteurs'],
  },
  'iso-50001': {
    title: 'ISO 50001',
    fullName: 'Système de management de l\'énergie',
    description:
      'ISO 50001 est la norme internationale pour les systèmes de management de l\'énergie. Elle aide les organisations à utiliser l\'énergie de manière plus efficace et durable.',
    benefits: [
      'Réduction de la consommation énergétique',
      'Baisse des coûts énergétiques',
      'Réduction des émissions de carbone',
      'Amélioration de la performance opérationnelle',
      'Accès aux incitations gouvernementales',
      'Démonstration de responsabilité environnementale',
    ],
    implementation:
      'Nous aidons à mettre en place une stratégie énergétique, identifier les opportunités d\'efficacité, et suivre la performance énergétique.',
    scope: 'Applicable à toute organisation consommant de l\'énergie.',
    industry: ['Industrie lourde', 'Énergie', 'Immobilier', 'Transport', 'Services'],
  },
  'iso-27001': {
    title: 'ISO 27001',
    fullName: 'Système de management de la sécurité de l\'information',
    description:
      'ISO 27001 est la norme internationale pour les systèmes de management de la sécurité de l\'information. Elle aide les organisations à protéger leurs actifs informationnels.',
    benefits: [
      'Protection contre les cybermenaces',
      'Conformité aux réglementations (RGPD, etc.)',
      'Réduction des risques de perte de données',
      'Confiance accrue des clients et partenaires',
      'Amélioration de la continuité d\'activité',
      'Gestion proactive des risques de sécurité',
    ],
    implementation:
      'Nous guidons l\'organisation dans l\'évaluation des risques informationnels, la mise en place de contrôles de sécurité, et la gestion des incidents.',
    scope: 'Applicable à toute organisation souhaitant sécuriser ses informations.',
    industry: ['Technologie', 'Finance', 'Santé', 'Public', 'E-commerce'],
  },
  'iso-22000': {
    title: 'ISO 22000',
    fullName: 'Système de management de la sécurité des denrées alimentaires',
    description:
      'ISO 22000 est la norme internationale pour les systèmes de management de la sécurité des denrées alimentaires. Elle s\'applique à toutes les organisations de la chaîne alimentaire.',
    benefits: [
      'Garantie de sécurité alimentaire',
      'Conformité réglementaire alimentaire',
      'Réduction des risques de contamination',
      'Confiance des consommateurs',
      'Accès aux marchés mondiaux',
      'Traçabilité complète des produits',
    ],
    implementation:
      'Nous guidons l\'organisation à travers l\'analyse des risques, la mise en place du HACCP, et l\'établissement de contrôles préventifs.',
    scope: 'Applicable à toutes les organisations de la chaîne alimentaire, du producteur au distributeur.',
    industry: ['Agroalimentaire', 'Restauration', 'Distribution', 'Production', 'Agriculture'],
  },
}

export default function ISODetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const iso = isoDetails[id]

  if (!iso) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-foreground mb-4">ISO non trouvée</h1>
            <p className="text-muted-foreground mb-8">
              La norme ISO que vous recherchez n\'existe pas dans notre base de données.
            </p>
            <Button onClick={() => router.back()} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retourner
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="py-12 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition mb-6 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Retourner
          </button>
        </div>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-serif text-foreground mb-2">{iso.title}</h1>
            <p className="text-2xl text-accent font-semibold mb-6">{iso.fullName}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{iso.description}</p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-foreground">Périmètre d\'application</h3>
              </div>
              <p className="text-muted-foreground">{iso.scope}</p>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-accent" />
                <h3 className="font-semibold text-foreground">Secteurs d\'activité</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {iso.industry.map((sector, index) => (
                  <span key={index} className="bg-accent/20 text-foreground px-3 py-1 rounded-full text-sm">
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-foreground mb-8">Avantages de la certification</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {iso.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation */}
          <div className="mb-12 bg-primary/5 p-8 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-serif text-foreground">Notre accompagnement</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{iso.implementation}</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Prêt à vous engager dans {iso.title} ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nos experts sont disponibles pour discuter de votre projet de certification et définir
              une stratégie adaptée à votre organisation.
            </p>
            <Button asChild>
              <Link href="/#booking">Réserver une consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

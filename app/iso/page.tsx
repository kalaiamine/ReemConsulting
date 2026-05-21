'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, ArrowRight, Search, Settings, TrendingUp, ArrowLeft } from 'lucide-react'
import { certificationsList } from '@/lib/certifications'
import { isoDetailsContent } from '@/lib/iso-details'

const conseilServices = [
  {
    icon: Search,
    title: 'Le diagnostic',
    description:
      "Pour évaluer l'état actuel des pratiques de gestion de votre entreprise, le diagnostic est utilisé afin de repérer les forces et faiblesses et de mettre en place un plan d'action pour améliorer de manière efficace les pratiques de votre système de management.",
    image: '/audit-reem.png',
    imageLeft: true,
  },
  {
    icon: Settings,
    title: 'La mise en place de système de management pour toutes les normes',
    description:
      "Nous sommes en mesure de vous accompagner dans la mise en place et la réalisation rapide d'un système de management personnalisé à votre entreprise, en accord avec les normes requises et en fonction de vos activités et processus. Votre (vos) système(s) de gestion sera (seront) facilement certifié(s) du premier coup par un organisme de certification recommandé.",
    image: '/consultingimage.jpg',
    imageLeft: false,
  },
  {
    icon: TrendingUp,
    title: 'Améliorer, mettre à jour et simplifier votre système de management',
    description:
      "Le système de Management que vous utilisez est lourd et peu performant. Nous avons la capacité de le simplifier et de le rendre extrêmement facile, pratique et efficace pour vos activités.",
    image: '/formation.jpg',
    imageLeft: true,
  },
]

export default function CertificationsPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Button>
      </div>

      {/* Hero Banner */}
      <section className="pt-32 pb-16 px-6 bg-sky-50 dark:bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Nos Services
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Nos Services de Conseil
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nous proposons des services de conseil personnalisés, adaptés aux différents stades de maturité
            de l&apos;entreprise, sous forme de coaching, de formation et/ou de support technique.
          </p>
        </div>
      </section>

      {/* Conseil Service Blocks */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto space-y-24">
          {conseilServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  !service.imageLeft ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-border shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-5 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                  <div className="mt-8">
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-20 px-6 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Nos Domaines de Formation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons spécifiquement sur ces normes pour vos besoins en formation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { id: 'iso-9001', title: 'ISO 9001' },
              { id: 'iso-45001', title: 'ISO 45001' },
              { id: 'iso-14001-certiphyto', title: 'ISO 14001' },
              { id: 'iso-50001', title: 'ISO 50001' },
              { id: 'iso-17025', title: 'ISO 17025' },
              { id: 'iso-22000-ifs-haccp', title: 'ISO 22000' },
              { id: 'iso-17020', title: 'ISO 17020' },
            ].map((item) => (
              <Link
                key={item.id}
                href={`/iso/${item.id}`}
                className="bg-card p-4 rounded-xl border border-border text-center hover:border-accent hover:shadow-md transition-all group"
              >
                <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/nos-certifications">
              <Button variant="outline" className="gap-2">
                <Award className="w-4 h-4" />
                Voir toutes nos certifications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-sky-50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/contact">
            <Button className="gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

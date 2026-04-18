'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, ArrowRight, Search, Settings, TrendingUp } from 'lucide-react'
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
    image: '/consulting-reem.png',
    imageLeft: false,
  },
  {
    icon: TrendingUp,
    title: 'Améliorer, mettre à jour et simplifier votre système de management',
    description:
      "Le système de Management que vous utilisez est lourd et peu performant. Nous avons la capacité de le simplifier et de le rendre extrêmement facile, pratique et efficace pour vos activités.",
    image: '/formation-reem.png',
    imageLeft: true,
  },
]

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

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
                    <Link href="/contact">
                      <Button className="bg-accent hover:bg-accent/90 text-white gap-2">
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-6 bg-sky-50 dark:bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Certifications
            </h2>
            <p className="text-lg text-accent font-medium max-w-3xl mx-auto">
              Mise en place de Systèmes de Management QHSE et Certifications associées
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsList.map((item) => {
              const hasDetail = !!isoDetailsContent[item.id]
              const cardClass = "flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300"
              const content = (
                <>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {hasDetail && (
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-2">
                        Découvrir
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-border bg-muted">
                    <Image
                      src={item.image}
                      alt=""
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              )
              return hasDetail ? (
                <Link
                  key={item.id}
                  href={`/iso/${item.id}`}
                  className={cardClass}
                >
                  {content}
                </Link>
              ) : (
                <div key={item.id} className={cardClass}>
                  {content}
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-white">
                <Award className="w-4 h-4" />
                Réserver une consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, ArrowRight } from 'lucide-react'
import { certificationsList } from '@/lib/certifications'
import { isoDetailsContent } from '@/lib/iso-details'

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-6 bg-sky-50 dark:bg-primary/5 min-h-[80vh]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              Certifications
            </h1>
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
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h2>
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
            <Link href="/#booking">
              <Button variant="outline" className="gap-2">
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

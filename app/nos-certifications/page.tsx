'use client'

import { useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Award, ArrowRight, ArrowLeft } from 'lucide-react'
import { certificationsList } from '@/lib/certifications'
import { isoDetailsContent } from '@/lib/iso-details'

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
            Expertise & Conformité
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Nos Certifications & Normes
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Découvrez l&apos;ensemble des normes internationales et certifications pour lesquelles nous vous accompagnons vers l&apos;excellence opérationnelle.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
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

          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button className="gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
                Contactez-nous pour votre projet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

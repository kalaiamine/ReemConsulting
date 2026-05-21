'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle, ListChecks, Lightbulb } from 'lucide-react'
import { isoDetailsContent } from '@/lib/iso-details'

export default function ISODetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const iso = isoDetailsContent[id]

  if (!iso) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-foreground mb-4">Certification non trouvée</h1>
            <p className="text-muted-foreground mb-8">
              La norme que vous recherchez n&apos;existe pas dans notre base de données.
            </p>
            <Button onClick={() => router.back()} variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const hasStandardSections = iso.objectifs?.length || iso.methodologie?.length || iso.interet?.length

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div className="py-6 px-6 border-b border-border bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition font-semibold py-2 px-3 rounded-lg hover:bg-accent/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </Button>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-2">
              {iso.title} {iso.version && iso.version}
            </h1>
            <p className="text-xl text-accent font-semibold">{iso.subtitle}</p>
          </div>

          {iso.customSections ? (
            <>
              {iso.customSections.map((section, idx) => (
                <div key={idx} className="mb-12">
                  {section.title && (
                    <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                      <ListChecks className="w-6 h-6 text-accent" />
                      {section.title}
                    </h2>
                  )}
                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.paragraphs && section.paragraphs.length > 0 && (
                    <div className="space-y-4">
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            hasStandardSections && (
              <>
                {iso.objectifs && iso.objectifs.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                      <ListChecks className="w-6 h-6 text-accent" />
                      Objectifs de la Norme
                    </h2>
                    <ul className="space-y-3">
                      {iso.objectifs.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {iso.methodologie && iso.methodologie.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                      <ListChecks className="w-6 h-6 text-accent" />
                      Méthodologie
                    </h2>
                    <ul className="space-y-3">
                      {iso.methodologie.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {iso.interet && iso.interet.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 flex items-center gap-2">
                      <Lightbulb className="w-6 h-6 text-accent" />
                      {iso.interetTitle || `Intérêt de l'${iso.title.replace('Norme ', '')} ${iso.version || ''}`.trim()}
                    </h2>
                    <ul className="space-y-3">
                      {iso.interet.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )
          )}

          {(iso.scope || (iso.industry && iso.industry.length > 0)) && (
            <div className="mb-12 p-6 bg-secondary/30 rounded-lg border border-border">
              {iso.scope && (
                <p className="text-muted-foreground mb-4">
                  <span className="font-semibold text-foreground">Périmètre : </span>
                  {iso.scope}
                </p>
              )}
              {iso.industry && iso.industry.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {iso.industry.map((sector, index) => (
                    <span
                      key={index}
                      className="bg-accent/20 text-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="text-center pt-6">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Prêt à vous engager dans {iso.title} ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nos experts sont disponibles pour discuter de votre projet de certification.
            </p>
            <Button asChild>
              <Link href="/#booking">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

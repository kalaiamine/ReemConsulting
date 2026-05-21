'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Award } from 'lucide-react'
import { certificationsList } from '@/lib/certifications'

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-6 bg-sky-50 dark:bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-accent font-medium max-w-3xl mx-auto">
            Mise en place de Systèmes de Management QHSE et Certifications associées
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
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
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/nos-certifications">
            <Button variant="outline" className="gap-2">
              <Award className="w-4 h-4" />
              Voir toutes les certifications
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

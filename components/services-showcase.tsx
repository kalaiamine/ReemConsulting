'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'

const services = [
  { title: 'Consulting', image: '/consultingimage.jpg', href: '/iso' },
  { title: 'Audit', image: '/audit-reem.png', href: '/audit' },
  { title: 'Formation', image: '/formation.jpg', href: '/iso' },
  { title: 'Événement / Conférence', image: '/event.jpg', href: '/contact' },
]

export function ServicesShowcase() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 px-6 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-serif text-foreground mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            Nos Domaines d'Intervention          </h2>
          <p
            className={`text-lg text-accent font-medium transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20 items-end">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col items-center"
              style={{
                animation: visible ? `serviceCircleIn 0.6s ease-out ${index * 120}ms both` : 'none',
              }}
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border bg-muted transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-2xl shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
                />
              </div>
              <div className="mt-4 w-full max-w-[140%] min-w-[120px] h-11 bg-primary flex items-center justify-center shadow-md rounded-md transition-all duration-300 group-hover:bg-primary/95 group-hover:shadow-lg group-hover:scale-105 -mb-1">
                <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
                  {service.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

'use client'

import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dupont",
      role: "PDG, TechVision France",
      content: "ConsultPro a transformé notre approche stratégique. Les résultats dépassent nos attentes d'au moins 40%.",
      rating: 5,
    },
    {
      name: "Jean Leclerc",
      role: "Directeur Général, InnovateLab",
      content: "Une équipe professionnelle, réactive et vraiment expérimentée. Je recommande vivement leurs services.",
      rating: 5,
    },
    {
      name: "Sophie Bernard",
      role: "Fondatrice, GrowthPath",
      content: "Le coaching et l'accompagnement fournis nous ont permis de structurer notre croissance de façon durable.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Témoignages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de notre collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

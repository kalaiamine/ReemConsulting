import { Header } from '@/components/header'
import { HeroEnhanced } from '@/components/hero-enhanced'

import { Footer } from '@/components/footer'
import { VisitorTracker } from '@/components/visitor-tracker'
import { ServicesShowcase } from '@/components/services-showcase'
import { Expertise } from '@/components/expertise'
import { PartnersCarousel } from '@/components/partners-carousel'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <VisitorTracker />
      <Header />
      <HeroEnhanced />
      
      <ServicesShowcase />
      <Expertise />
      <PartnersCarousel />

      <Footer />
    </main>
  )
}

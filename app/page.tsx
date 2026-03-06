import { Header } from '@/components/header'
import { HeroEnhanced } from '@/components/hero-enhanced'
import { TeamSection } from '@/components/team-section'
import { ServicesShowcase } from '@/components/services-showcase'
import { Expertise } from '@/components/expertise'
import { Testimonials } from '@/components/testimonials'
import { Booking } from '@/components/booking'
import { Footer } from '@/components/footer'
import { VisitorTracker } from '@/components/visitor-tracker'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <VisitorTracker />
      <Header />
      <HeroEnhanced />
      <TeamSection />
      <ServicesShowcase />
      <Expertise />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}

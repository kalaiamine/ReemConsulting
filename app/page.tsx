import { Header } from '@/components/header'
import { HeroEnhanced } from '@/components/hero-enhanced'
import { TeamSection } from '@/components/team-section'
import { ServicesShowcase } from '@/components/services-showcase'
import { IsoSection } from '@/components/iso-section'
import { Expertise } from '@/components/expertise'
import { BrandingGuide } from '@/components/branding-guide'
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
      <IsoSection />
      <Expertise />
      <BrandingGuide />
      <Testimonials />
      <Booking />
      <Footer />
    </main>
  )
}

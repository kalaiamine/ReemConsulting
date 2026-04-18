import { Header } from '@/components/header'
import { HeroEnhanced } from '@/components/hero-enhanced'

import { Footer } from '@/components/footer'
import { VisitorTracker } from '@/components/visitor-tracker'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <VisitorTracker />
      <Header />
      <HeroEnhanced />

      <Footer />
    </main>
  )
}

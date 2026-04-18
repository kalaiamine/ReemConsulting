'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Booking } from '@/components/booking'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        <Booking />
      </div>

      <Footer />
    </main>
  )
}

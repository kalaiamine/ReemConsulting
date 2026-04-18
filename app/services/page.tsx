'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServicesShowcase } from '@/components/services-showcase'


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        <ServicesShowcase />
      </div>



      <Footer />
    </main>
  )
}

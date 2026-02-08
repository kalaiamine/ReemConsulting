'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image
            src="/logo-reem-final.jpg"
            alt="REEM Consulting Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold text-foreground hidden sm:inline">REEM Consulting</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            À propos
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection('iso')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Certifications ISO
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Témoignages
          </button>
          <Button
            onClick={() => scrollToSection('booking')}
            className="bg-accent text-white hover:bg-accent/90"
          >
            Réserver
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="flex flex-col gap-4 px-6 py-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection('iso')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Certifications ISO
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Témoignages
            </button>
            <Button
              onClick={() => scrollToSection('booking')}
              className="w-full bg-accent text-white hover:bg-accent/90"
            >
              Réserver
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const servicesDropdownItems = [
  { label: 'Conseil', href: '/iso' },
  { label: 'Audit', href: '/audit' },
  { label: 'Formation', href: '/iso' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              onMouseEnter={() => setIsServicesOpen(true)}
              className={`flex items-center gap-1 text-sm transition ${
                isServicesOpen ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isServicesOpen && (
              <div
                className="absolute left-0 top-full pt-2"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-card border-2 border-accent rounded-md shadow-lg py-2 px-1 flex flex-row gap-0">
                  {servicesDropdownItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent border-b-2 border-transparent hover:border-accent rounded transition whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => scrollToSection('expertise')}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Expertise
          </button>
          <Link
            href="/iso"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Certifications ISO
          </Link>
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
            <div className="flex flex-col gap-1">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition"
              >
                Services
              </button>
              <div className="pl-4 flex flex-col gap-1 border-l-2 border-accent/30 ml-2">
                <Link href="/iso" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent transition">
                  Conseil
                </Link>
                <Link href="/audit" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent transition">
                  Audit
                </Link>
                <Link href="/iso" onClick={() => setIsMenuOpen(false)} className="text-sm text-muted-foreground hover:text-accent transition">
                  Formation
                </Link>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('expertise')}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Expertise
            </button>
            <Link
              href="/iso"
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Certifications ISO
            </Link>
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

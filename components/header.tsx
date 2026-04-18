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
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Accueil
          </Link>
          <Link
            href="/notre-societe"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Notre Société
          </Link>
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Contact
          </Link>
          <Button
            asChild
            className="bg-accent text-white hover:bg-accent/90"
          >
            <Link href="/contact">Contactez-nous</Link>
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
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Accueil
            </Link>
            <Link
              href="/notre-societe"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Notre Société
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-accent text-white hover:bg-accent/90"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contactez-nous</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

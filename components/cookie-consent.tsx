'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent-choice')
    if (!consent) {
      // Small delay for smooth entry animation
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-choice', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent-choice', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-6 relative overflow-hidden">
        {/* Accent glow line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        <div className="flex items-start gap-4">
          <div className="p-2.5 bg-accent/10 text-accent rounded-xl flex-shrink-0 mt-1">
            <Cookie className="w-5 h-5 animate-pulse" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-semibold text-primary text-lg">
                Cookies & Confidentialité
              </h3>
              <button 
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground transition p-1 rounded-lg hover:bg-secondary"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nous utilisons des cookies pour optimiser votre expérience, mesurer notre trafic et améliorer nos services. Vous pouvez accepter ou refuser ces traceurs à tout moment.
            </p>
            
            <p className="text-xs text-muted-foreground">
              En savoir plus sur notre{' '}
              <Link href="/politique-de-confidentialite" className="text-accent hover:underline font-medium">
                Politique de confidentialité
              </Link>{' '}
              et notre{' '}
              <Link href="/cookies" className="text-accent hover:underline font-medium">
                Politique relative aux cookies
              </Link>.
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary text-xs"
              >
                Refuser
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="bg-accent text-white hover:bg-accent/90 shadow-sm text-xs px-4"
              >
                Tout accepter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

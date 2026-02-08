'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function VisitorTracker() {
  const pathname = usePathname()

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
          }),
        })
      } catch (error) {
        console.error('[v0] Visitor tracking failed:', error)
      }
    }

    trackVisitor()
  }, [pathname])

  return null
}

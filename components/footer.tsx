'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Logo transparent.png"
                alt="REEM Consulting"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-semibold">REEM Consulting</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Excellence en conseil, audit et certification pour votre transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition">Accueil</Link></li>
              <li><Link href="/notre-societe" className="text-primary-foreground/80 hover:text-primary-foreground transition">Notre Société</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition">Services</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="text-primary-foreground/80 hover:text-primary-foreground transition">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="text-primary-foreground/80 hover:text-primary-foreground transition">Politique de confidentialité</Link></li>
              <li><Link href="/cookies" className="text-primary-foreground/80 hover:text-primary-foreground transition">Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-primary-foreground/80">+216 26 861 817</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5" />
                <span className="text-primary-foreground/80">contact@reemconsulting.tn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span className="text-primary-foreground/80">162, AV.UMA, Omrane Centre La Soukra- Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 REEM Consulting. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-primary-foreground transition">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-primary-foreground transition">Politique de confidentialité</Link>
            <Link href="/cookies" className="hover:text-primary-foreground transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarIcon, Clock, User, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { PhoneInputField } from './ui/phone-input'

export function Booking() {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    phone: '',
    preferredDate: '',
    serviceType: 'Consulting',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Erreur lors de l’envoi')
        return
      }

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ company: '', contactName: '', email: '', phone: '', preferredDate: '', serviceType: 'Consulting', message: '' })
      }, 5000)
    } catch (err) {
      setError('Erreur lors de l’envoi')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Contactez-nous
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground mb-8">
            <p className="font-medium text-foreground">
              Obtenir un service de conseil, audit ou formation ?
            </p>
            <p>
              Vous voulez améliorer ou simplifier votre système ?
            </p>
            <p className="pt-4">
              Réservez un rendez-vous en ligne via notre système.
            </p>
            <p>
              Pour bénéficier de nos services, sélectionnez un créneau qui vous convient.
            </p>
            <p className="font-semibold text-accent pt-4">
              Nous reviendrons vers vous sous 48h.
            </p>
            <p className="text-base italic">
              Nous serons heureux de discuter de vos besoins et attentes et vous bénéficierez d’un service satisfaisant.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-accent/10 border border-accent rounded-xl p-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
              <span className="text-4xl text-accent">✓</span>
            </div>
            <h3 className="text-3xl font-semibold text-foreground mb-4">
              Demande envoyée !
            </h3>
            <p className="text-muted-foreground text-lg">
              Merci pour votre message. Nous vous contacterons dans les plus brefs délais (sous 48h maximum).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card p-10 rounded-2xl border border-border shadow-lg">
            {error && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
                {error}
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Société (nom de la société)
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Nom de votre entreprise"
                  className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Nom et prénom du contact
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom complet"
                  className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <Mail size={16} className="inline mr-2" />
                  Email professionnel
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@entreprise.com"
                  className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Phone size={16} />
                  Téléphone
                </label>
                <PhoneInputField
                  value={formData.phone}
                  onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  <CalendarIcon size={16} className="inline mr-2" />
                  Date préférée
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Type de service préféré
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
                >
                  <option value="Consulting">Consulting</option>
                  <option value="Audit">Audit</option>
                  <option value="Formation">Formation</option>
                  <option value="Événement / Conférence">Événement / Conférence</option>
                </select>
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-sm font-medium text-foreground mb-3">
                Message & Précisions (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez brièvement vos besoins et attentes..."
                rows={5}
                className="w-full px-5 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white hover:bg-accent/90 py-4 text-lg font-semibold rounded-xl disabled:opacity-50 transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </span>
              ) : (
                'Réserver un rendez-vous'
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

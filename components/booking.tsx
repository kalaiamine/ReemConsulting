'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CalendarIcon, Clock, User, Mail, Phone } from 'lucide-react'

export function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    serviceType: 'Conseil',
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
        setError(data.error || 'Erreur lors de la réservation')
        return
      }

      console.log('[v0] Booking created successfully')
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', date: '', time: '', serviceType: 'Conseil', message: '' })
      }, 3000)
    } catch (err) {
      console.error('[v0] Booking error:', err)
      setError('Erreur lors de la réservation')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Réservez votre consultation en ligne via notre système de planification automatisé
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pour bénéficier de nos services de conseil et de formation, sélectionnez un créneau qui vous convient. Nous serons heureux de discuter de vos besoins spécifiques en matière de conseil et de formation.
          </p>
        </div>

        {submitted ? (
          <div className="bg-accent/10 border border-accent rounded-lg p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-4xl animate-bounce">✓</span>
            </div>
            <h3 className="text-3xl font-semibold text-foreground mb-3 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Rendez-vous confirmé!
            </h3>
            <p className="text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
              Merci pour votre réservation. Nous vous enverrons un e-mail de confirmation avec les détails.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <User size={16} className="inline mr-2" />
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vous@exemple.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+33 6 XX XX XX XX"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <CalendarIcon size={16} className="inline mr-2" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Clock size={16} className="inline mr-2" />
                  Heure préférée
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Sélectionnez une heure</option>
                  <option value="09:00">09:00 - 10:00</option>
                  <option value="10:00">10:00 - 11:00</option>
                  <option value="11:00">11:00 - 12:00</option>
                  <option value="14:00">14:00 - 15:00</option>
                  <option value="15:00">15:00 - 16:00</option>
                  <option value="16:00">16:00 - 17:00</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Type de service
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="Conseil">Conseil & Stratégie</option>
                  <option value="Audit">Audit</option>
                  <option value="Certification">Certification</option>
                  <option value="Formation">Formation</option>
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez brièvement votre situation..."
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-white hover:bg-accent/90 py-3 text-base font-medium disabled:opacity-50 transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Traitement...
                </span>
              ) : (
                'Confirmer la réservation'
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

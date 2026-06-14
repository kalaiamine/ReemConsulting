'use client'

import React from "react"
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Authentication failed')
        return
      }

      router.push('/backoffice')
    } catch (err) {
      setError('Failed to login')
      console.error('[v0] Login error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex justify-center mb-2">
            <Image
              src="/Logo transparent.png"
              alt="REEM Consulting"
              width={64}
              height={64}
              className="w-16 h-16 object-contain rounded-lg"
            />
          </div>
          <CardTitle className="text-center text-2xl">REEM Consulting</CardTitle>
          <p className="text-center text-sm text-muted-foreground mt-2">Accès Backoffice</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="admin@reemconsulting.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Mot de passe
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>

          <div className="mt-4 p-3 bg-secondary rounded-lg text-xs text-muted-foreground">
            <p className="font-semibold mb-1">Changer les identifiants admin :</p>
            <p>Créez un fichier <code className="bg-muted px-1 rounded">.env.local</code> à la racine du projet avec <code className="bg-muted px-1 rounded">ADMIN_EMAIL</code> et <code className="bg-muted px-1 rounded">ADMIN_PASSWORD</code>. Voir <code className="bg-muted px-1 rounded">.env.example</code> ou BACKOFFICE_SETUP.md.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

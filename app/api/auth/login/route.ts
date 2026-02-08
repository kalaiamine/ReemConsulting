import { NextRequest, NextResponse } from 'next/server'
import { setAuthCookie, createToken } from '@/lib/auth'

// Identifiants admin : à modifier ici ou via les variables d'environnement (.env.local)
// Fichier : app/api/auth/login/route.ts
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@reemconsulting.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ReemConsulting2024!'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      )
    }

    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create token
    const token = await createToken(email)
    
    // Set cookie
    await setAuthCookie(token)

    return NextResponse.json(
      { success: true, email },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Login error:', error)
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

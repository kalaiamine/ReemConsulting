import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const SECRET = process.env.BACKOFFICE_SECRET || 'reem-consulting-secret-key-2024'
const secretKey = new TextEncoder().encode(SECRET)

export async function createToken(email: string) {
  const token = await new (require('jose')).SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(secretKey)
  return token
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, secretKey)
    return verified.payload as { email: string }
  } catch {
    return null
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: '/',
  })
}

export async function getAuthToken() {
  const cookieStore = await cookies()
  return cookieStore.get('auth_token')?.value
}

export async function clearAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete('auth_token')
}

export async function getAuthUser() {
  const token = await getAuthToken()
  if (!token) return null
  return await verifyToken(token)
}

import { NextRequest, NextResponse } from 'next/server'
import { addVisitor, getVisitorStats } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { path, userAgent, referrer } = body

    const visitor = await addVisitor({
      timestamp: new Date().toISOString(),
      path: path || '/',
      userAgent: userAgent || '',
      referrer: referrer || undefined,
    })

    return NextResponse.json(visitor, { status: 201 })
  } catch (error) {
    console.error('[v0] Visitor tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track visitor' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getAuthUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const stats = await getVisitorStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error('[v0] Get visitor stats error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch visitor stats' },
      { status: 500 }
    )
  }
}

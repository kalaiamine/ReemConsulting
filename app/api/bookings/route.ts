import { NextRequest, NextResponse } from 'next/server'
import { addBooking, getBookings } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, date, time, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !date || !time || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const booking = await addBooking({
      name,
      email,
      phone,
      date,
      time,
      serviceType,
      message: message || '',
      status: 'pending',
    })

    // TODO: Send confirmation email
    console.log('[v0] New booking created:', booking.id)

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error('[v0] Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to create booking' },
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

    const bookings = await getBookings()
    return NextResponse.json(bookings)
  } catch (error) {
    console.error('[v0] Get bookings error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

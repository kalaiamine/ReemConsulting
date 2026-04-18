import { NextRequest, NextResponse } from 'next/server'
import { addBooking, getBookings } from '@/lib/db'
import { getAuthUser } from '@/lib/auth'

import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { company, contactName, email, phone, preferredDate, serviceType, message } = body

    // Validate required fields
    if (!contactName || !email || !phone || !preferredDate || !serviceType || !company) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    const bookingMessage = `Société : ${company}\n\nMessage :\n${message || 'Aucun message'}`

    // Insert into DB mapping the fields to the existing schema
    const booking = await addBooking({
      name: contactName,
      email,
      phone,
      date: preferredDate,
      time: 'Non spécifié',
      serviceType,
      message: bookingMessage,
      status: 'pending',
    })

    console.log('[v0] New booking created in DB:', booking.id)

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || '"REEM Consulting" <no-reply@reemconsulting.com>',
      to: process.env.ADMIN_EMAIL, // Must be defined in .env
      subject: `Nouvelle demande de réservation - ${serviceType}`,
      text: `Une nouvelle demande a été soumise sur le site REEM Consulting.\n\n` +
            `Détails du contact :\n` +
            `- Société : ${company}\n` +
            `- Nom : ${contactName}\n` +
            `- Email : ${email}\n` +
            `- Téléphone : ${phone}\n\n` +
            `Détails de la demande :\n` +
            `- Service : ${serviceType}\n` +
            `- Date souhaitée : ${preferredDate}\n` +
            `- Message : ${message || 'Aucun'}\n`,
      html: `<h2>Nouvelle demande de réservation</h2>
             <p>Une nouvelle demande a été soumise sur le site REEM Consulting.</p>
             <h3>Détails du contact :</h3>
             <ul>
               <li><strong>Société :</strong> ${company}</li>
               <li><strong>Nom :</strong> ${contactName}</li>
               <li><strong>Email :</strong> <a href="mailto:${email}">${email}</a></li>
               <li><strong>Téléphone :</strong> ${phone}</li>
             </ul>
             <h3>Détails de la demande :</h3>
             <ul>
               <li><strong>Service :</strong> ${serviceType}</li>
               <li><strong>Date souhaitée :</strong> ${preferredDate}</li>
             </ul>
             <h3>Message :</h3>
             <p>${message || '<em>Aucun message supplémentaire</em>'}</p>`
    }

    // Send the email
    try {
      await transporter.sendMail(mailOptions)
      console.log('[v0] Email notification sent to admin')
    } catch (emailError) {
      console.error('[v0] Email sending failed:', emailError)
      // We don't fail the booking if email fails, but we could
    }

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error('[v0] Booking error:', error)
    return NextResponse.json(
      { error: 'Échec lors de la création de la réservation' },
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

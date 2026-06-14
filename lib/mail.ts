import nodemailer from 'nodemailer'

export interface BookingDetails {
  company: string
  serviceType: string
  preferredDate: string
  phone: string
  message?: string
}

/**
 * Envoie un e-mail de confirmation de réservation automatique et stylisé au client.
 * 
 * @param clientEmail Adresse e-mail du client
 * @param clientName Nom de contact du client
 * @param bookingDetails Détails de la réservation (société, service, date, téléphone, message)
 * @returns Un objet indiquant le succès ou l'erreur
 */
export async function sendBookingConfirmation(
  clientEmail: string,
  clientName: string,
  bookingDetails: BookingDetails
): Promise<{ success: boolean; messageId?: string; error?: any }> {
  try {
    // 1. Récupération des configurations SMTP depuis les variables d'environnement
    const host = process.env.SMTP_HOST || 'mail.reemconsulting.tn'
    const port = Number(process.env.SMTP_PORT) || 465
    // Sécurisé par défaut si le port est 465
    const secure = port === 465 || process.env.SMTP_SECURE === 'true'
    const user = process.env.SMTP_USER || 'contact@reemconsulting.tn'
    const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS || 'Yassine1224'

    if (!clientEmail) {
      throw new Error("L'adresse e-mail du client est requise.")
    }

    // 2. Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      // Optionnel : timeouts pour éviter que la requête ne se bloque
      connectionTimeout: 10000, // 10 secondes
      greetingTimeout: 10000,
    })

    // 3. Modèle HTML d'e-mail propre et responsive aux couleurs de REEM Consulting
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation de réservation - REEM Consulting</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            color: #1e3a5f;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(30, 58, 95, 0.08);
            border: 1px solid #e0e8f0;
          }
          .header {
            background-color: #1e3a5f;
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .header p {
            margin: 5px 0 0 0;
            color: #00a99d;
            font-size: 14px;
            font-weight: 600;
          }
          .content {
            padding: 40px 30px;
            line-height: 1.6;
          }
          .content h2 {
            font-size: 20px;
            margin-top: 0;
            color: #1e3a5f;
          }
          .intro-text {
            font-size: 16px;
            color: #4a607a;
            margin-bottom: 30px;
          }
          .details-card {
            background-color: #f8fafc;
            border-left: 4px solid #00a99d;
            border-radius: 6px;
            padding: 20px;
            margin-bottom: 30px;
          }
          .details-card table {
            width: 100%;
            border-collapse: collapse;
          }
          .details-card td {
            padding: 8px 0;
            vertical-align: top;
          }
          .details-card td.label {
            font-weight: 600;
            color: #1e3a5f;
            width: 140px;
          }
          .details-card td.value {
            color: #4a607a;
          }
          .next-steps {
            background-color: #e0f2f1;
            border-radius: 8px;
            padding: 15px 20px;
            margin-bottom: 35px;
            font-size: 14px;
            color: #00796b;
            font-weight: 500;
          }
          .footer {
            background-color: #f8fafc;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #e0e8f0;
            font-size: 12px;
            color: #94a3b8;
          }
          .footer a {
            color: #00a99d;
            text-decoration: none;
            font-weight: 600;
          }
          .btn {
            display: inline-block;
            background-color: #00a99d;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 6px;
            font-weight: 600;
            margin: 10px 0 20px 0;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header Banner -->
          <div class="header">
            <h1>REEM Consulting</h1>
            <p>Expertise, Audits & Accompagnement ISO</p>
          </div>

          <!-- Main Content -->
          <div class="content">
            <h2>Confirmation de votre demande de réservation</h2>
            <p class="intro-text">
              Bonjour <strong>${clientName}</strong>,<br><br>
              Nous vous remercions pour l'intérêt que vous portez à <strong>REEM Consulting</strong>. 
              Votre demande de réservation a été enregistrée avec succès. Voici le récapitulatif des détails fournis :
            </p>

            <!-- Booking Details Table -->
            <div class="details-card">
              <table>
                <tr>
                  <td class="label">Société :</td>
                  <td class="value">${bookingDetails.company}</td>
                </tr>
                <tr>
                  <td class="label">Service demandé :</td>
                  <td class="value"><strong>${bookingDetails.serviceType}</strong></td>
                </tr>
                <tr>
                  <td class="label">Date souhaitée :</td>
                  <td class="value">${bookingDetails.preferredDate}</td>
                </tr>
                <tr>
                  <td class="label">Téléphone :</td>
                  <td class="value">${bookingDetails.phone}</td>
                </tr>
                ${bookingDetails.message ? `
                <tr>
                  <td class="label">Message :</td>
                  <td class="value"><em>${bookingDetails.message.replace(/\n/g, '<br>')}</em></td>
                </tr>
                ` : ''}
              </table>
            </div>

            <!-- Next Steps / Notice -->
            <div class="next-steps">
              💡 <strong>Prochaine étape :</strong> Un de nos consultants experts va examiner votre demande et vous recontactera par téléphone ou e-mail sous 24 à 48 heures pour convenir des modalités de notre entretien.
            </div>

            <p style="margin-bottom: 0;">
              Cordialement,<br>
              <strong>L'équipe REEM Consulting</strong>
            </p>
          </div>

          <!-- Footer Information -->
          <div class="footer">
            <p>
              Ce message est un e-mail automatique de confirmation.<br>
              Pour toute question, vous pouvez nous écrire à <a href="mailto:${user}">${user}</a>.
            </p>
            <p style="margin-top: 15px; font-weight: 600;">
              REEM Consulting &copy; ${new Date().getFullYear()} | <a href="https://reemconsulting.tn">reemconsulting.tn</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // 4. Options d'envoi de l'e-mail
    const mailOptions = {
      from: `"REEM Consulting" <${user}>`,
      to: clientEmail,
      subject: `Confirmation de votre demande de réservation - REEM Consulting`,
      text: `Bonjour ${clientName},\n\nNous vous confirmons la réception de votre demande de réservation pour le service ${bookingDetails.serviceType}.\n\nSociété : ${bookingDetails.company}\nDate souhaitée : ${bookingDetails.preferredDate}\nTéléphone : ${bookingDetails.phone}\n\nUn de nos consultants vous recontactera sous 24 à 48h.\n\nCordialement,\nL'équipe REEM Consulting`,
      html: htmlContent,
    }

    // 5. Envoi
    const info = await transporter.sendMail(mailOptions)
    console.log(`[EmailService] Confirmation email sent successfully to ${clientEmail}. Message ID: ${info.messageId}`)
    
    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (error: any) {
    console.error("[EmailService] Error occurred during SMTP email sending:", error)
    return {
      success: false,
      error: error.message || error,
    }
  }
}

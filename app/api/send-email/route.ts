import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje } = await request.json()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `Bitzencode <${process.env.EMAIL_USER}>`,  // ✅ Nombre profesional
      replyTo: email,  // ✅ Las respuestas van al usuario
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <br>
        <p><em>Enviado desde el sitio web de Bitzencode</em></p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email enviado exitosamente' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }
}
// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bitzencode',
  description: 'Expertos en desarrollo web, aplicaciones móviles y consultoría tecnológica. Transformamos tus ideas en realidad digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/BitLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/BitLogo.png" />
        <link rel="apple-touch-icon" href="/images/BitLogo.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
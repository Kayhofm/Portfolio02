import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { PasswordProvider } from '@/contexts/PasswordContext'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Light, Regular, Bold, Black
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kay Hofmeester - Design Director',
  description: 'Innovative Product Design Director and Strategist | MSc | 20+ Years of Experience Launching Groundbreaking Experiences at Meta, Amazon, and Microsoft | Expert in AI, AR, and Product Innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className}>
        <PasswordProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </PasswordProvider>
      </body>
    </html>
  )
}
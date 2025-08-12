import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { PasswordProvider } from '@/contexts/PasswordContext'
import { Analytics } from "@vercel/analytics/next"

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'], // Light, Regular, Bold, Black
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kay Hofmeester - Design Leader & Product Strategist',
  description: 'Senior Design Leader with 20+ years experience launching innovative products at Meta, Amazon, and Microsoft. Expert in AI/ML design, AR/VR experiences, and scaling design teams. Based in Seattle, WA.',
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
        <Analytics />
      </body>
    </html>
  )
}
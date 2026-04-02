import type { Metadata } from 'next'
import { Playfair_Display, Inter, Heebo } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yael Abramson — Healing is Real',
  description:
    "Healing is real. And it doesn't have to hurt the way people think it does. Yael Abramson — mental health coach, speaker, and living proof.",
  openGraph: {
    title: 'Yael Abramson — Healing is Real',
    description:
      "Healing is real. And it doesn't have to hurt the way people think it does.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${heebo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

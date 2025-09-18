import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'AISHERE - Product Manager & Growth Expert',
    template: '%s | AISHERE'
  },
  description: 'AI Product Strategist building scalable solutions that serve millions. Transforming complex challenges into intuitive experiences through data-driven innovation.',
  keywords: ['ai product manager', 'product strategist', 'machine learning', 'growth expert', 'e-commerce', 'data-driven innovation', 'scalable solutions', 'user experience'],
  authors: [{ name: 'Adnan Shamim' }],
  creator: 'Adnan Shamim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aishere.xyz',
    title: 'AISHERE - AI Product Strategist',
    description: 'AI Product Strategist building scalable solutions that serve millions. Transforming complex challenges into intuitive experiences.',
    siteName: 'AISHERE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AISHERE - AI Product Strategist',
    description: 'AI Product Strategist building scalable solutions that serve millions. Transforming complex challenges into intuitive experiences.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-primary text-primary antialiased`}>
        {children}
      </body>
    </html>
  )
}
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
  description: 'Product manager, cinema lover, and growth expert building scalable solutions.',
  keywords: ['product manager', 'growth expert', 'e-commerce', 'strategy', 'cinema', 'analytics'],
  authors: [{ name: 'Adnan Shamim' }],
  creator: 'Adnan Shamim',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aishere.xyz',
    title: 'AISHERE - Product Manager & Growth Expert',
    description: 'Product manager, cinema lover, and growth expert building scalable solutions.',
    siteName: 'AISHERE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AISHERE - Product Manager & Growth Expert',
    description: 'Product manager, cinema lover, and growth expert building scalable solutions.',
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
      <body className={`${inter.className} min-h-screen bg-netflix-black text-netflix-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
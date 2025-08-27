import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'
import CVClient from './cvClient'

export const metadata: Metadata = {
  title: 'About - Professional Experience',
  description: "Adnan Shamim's professional experience and achievements in product management and growth",
  openGraph: {
    title: 'Professional Experience | AISHERE',
    description: "Adnan Shamim's professional experience and achievements in product management and growth",
  },
}

export default function CVPage() {
  return (
    <>
      <Navigation />
      <CVClient />
    </>
  )
}
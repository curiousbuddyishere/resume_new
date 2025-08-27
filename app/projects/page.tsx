import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'
import ProjectsClient from './projectsClient'

export const metadata: Metadata = {
  title: 'Projects - Innovative Solutions & Research',
  description: 'Innovative projects and research work by Adnan Shamim across different domains',
  openGraph: {
    title: 'Projects | AISHERE',
    description: 'Innovative projects and research work by Adnan Shamim across different domains',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <ProjectsClient />
    </>
  )
}
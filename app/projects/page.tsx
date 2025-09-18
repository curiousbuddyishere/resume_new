import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Projects | Adnan Shamim',
  description: 'Portfolio of projects by Adnan Shamim, Product Manager.',
}

export default function ProjectsPage() {

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-light text-primary tracking-tight mb-4">
              Projects
            </h1>
          </div>

          <div className="space-y-6">
            <Link 
              href="/blog/fintracker"
              className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap justify-between items-start gap-3 sm:gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl font-medium text-primary group-hover:text-accent transition-colors">
                    Family of 3 Vibe Coded Apps
                  </h3>
                  <span className="text-sm text-tertiary">2025</span>
                </div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  A suite of AI-powered applications built with vibe coding approach:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-secondary text-sm"><strong>FinTracker:</strong> AI Finance app for expense tracking and financial insights</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-secondary text-sm"><strong>LifeTracker:</strong> Health and fitness tracking with calorie monitoring</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span className="text-secondary text-sm"><strong>Voyage:</strong> AI-powered trip planning and travel assistant</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">TypeScript</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Gemini</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Deepgram</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Firebase</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Clerk</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">OpenAI</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Vercel</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Google Cloud</span>
                </div>
              </div>
            </Link>

            <a 
              href="https://ott-report.super.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap justify-between items-start gap-3 sm:gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl font-medium text-primary group-hover:text-accent transition-colors">
                    Beyond the Screen
                  </h3>
                  <span className="text-sm text-tertiary">Jun 2022 - Sep 2022</span>
                </div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  Analyzed India's OTT industry, uncovering trends in audience engagement, content strategy, and monetization. Delivered insights to shape product marketing and growth strategies in the streaming sector.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Research</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Analytics</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Market Study</span>
                </div>
              </div>
            </a>

            <a 
              href="https://coherent-cadmium-d66.notion.site/Retention-Report-v1-14db6730d89e8089a6cef205be0266c4?pvs=4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
            >
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap justify-between items-start gap-3 sm:gap-4 mb-3">
                  <h3 className="text-lg sm:text-xl font-medium text-primary group-hover:text-accent transition-colors">
                    Retention Blueprint
                  </h3>
                  <span className="text-sm text-tertiary">Oct 2024 - Dec 2024</span>
                </div>
                <p className="text-secondary mb-4 text-sm leading-relaxed">
                  Evaluated retention strategies to optimize customer engagement through targeted digital communication channels, driving lifecycle improvements and campaign efficiency.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">CRM</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Growth</span>
                  <span className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full">Strategy</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
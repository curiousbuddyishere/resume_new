import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Projects | Adnan Shamim',
  description: 'Portfolio of projects by Adnan Shamim, Product Manager.',
}

export default function ProjectsPage() {

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="space-y-12">
              {/* Header */}
              <div className="text-center space-y-4 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-light text-primary tracking-tight">
                  Projects
                </h1>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-card border border-custom rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium text-primary">Beyond the Screen</h3>
                      <span className="text-sm text-tertiary">Jun 2022 - Sep 2022</span>
                    </div>
                    <p className="text-secondary leading-relaxed">
                      Analyzed India's OTT industry, uncovering trends in audience engagement, content strategy, and monetization. Delivered insights to shape product marketing and growth strategies in the streaming sector.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">Research</span>
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">Analytics</span>
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">Market Study</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-custom rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium text-primary">Retention Blueprint</h3>
                      <span className="text-sm text-tertiary">Oct 2024 - Dec 2024</span>
                    </div>
                    <p className="text-secondary leading-relaxed">
                      Evaluated retention strategies to optimize customer engagement through targeted digital communication channels, driving lifecycle improvements and campaign efficiency.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">CRM</span>
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">Growth</span>
                      <span className="px-3 py-1 bg-tertiary text-tertiary text-sm rounded-full">Strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
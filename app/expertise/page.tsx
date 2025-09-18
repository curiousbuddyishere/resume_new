import type { Metadata } from 'next'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Expertise | Adnan Shamim',
  description: 'Core competencies and areas of expertise.',
}

// Key experiences (6 one-line points)
const keyExperiences = [
  'Built ₹1 TNPL product flow now the standard workflow in most subscription based consumer apps',
  'Strategized quick food delivery platform assortment, GTM and initial launch',
  'Created cross-platform Gen AI tool for market intelligence that cuts insight time from weeks to minutes',
  'Worked on gen AI hiring solution product in 2023, working with AI since 2022',
  'Automated customer support with AI agents',
  'Built products spanning from tier 2/3 India to tier 1 markets'
]

// Skills organized around Technical AI Product Manager focus
const skills = [
  {
    category: 'AI Product Development',
    items: [
      'End-to-end AI product development',
      'GenAI solution design',
      'ML model integration',
      'AI-driven automation'
    ]
  },
  {
    category: 'Technical Expertise',
    items: [
      'Full-stack development',
      'Scalable architecture',
      'Data-driven decisions',
      'Analytics tools'
    ]
  },
  {
    category: 'Product Strategy',
    items: [
      'Product vision & roadmap',
      'User research',
      'Growth strategies',
      'Customer retention'
    ]
  }
]

export default function ExpertisePage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-light text-primary tracking-tight mb-4">
              Expertise
            </h1>
          </div>

          {/* Key Experiences Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl font-medium text-primary mb-6">
              Key Experiences
            </h2>
            <div className="space-y-4">
              {keyExperiences.map((experience, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base">
                    {experience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-10 sm:space-y-12">
            {skills.map((skillCategory, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-medium text-primary mb-5 sm:mb-6">
                  {skillCategory.category}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {skillCategory.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-card border border-custom rounded-lg p-4 hover:border-accent transition-all duration-300 text-center"
                    >
                      <p className="text-secondary leading-relaxed text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
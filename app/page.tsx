import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import Navigation from '@/components/ui/navigation'
import ClientHomeContent from './clientHomeContent'

export const metadata: Metadata = {
  title: 'AI Product Strategist',
  description: 'AI Product Strategist building scalable solutions that serve millions. Transforming complex challenges into intuitive experiences through data-driven innovation.',
  openGraph: {
    title: 'AISHERE - AI Product Strategist',
    description: 'AI Product Strategist building scalable solutions that serve millions. Transforming complex challenges into intuitive experiences through data-driven innovation.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const currentProjects = [
  {
    id: 1,
    title: "AI-Powered Recommendation Engine",
    description: "Machine learning system driving 23% increase in user engagement across 2M+ customers",
    metrics: { impact: "+23%", users: "2M+", status: "Live" },
    category: "AI/ML",
    progress: 95,
    phase: "Performance Optimization",
    gradient: "from-netflix-red to-netflix-accent"
  },
  {
    id: 2,
    title: "Growth Analytics Platform",
    description: "Real-time cohort analysis and predictive modeling for retention strategies",
    metrics: { impact: "+41%", retention: "D30", status: "Scaling" },
    category: "Analytics", 
    progress: 78,
    phase: "Market Expansion",
    gradient: "from-netflix-accent to-netflix-gold"
  },
  {
    id: 3,
    title: "Voice Commerce Interface",
    description: "Next-gen conversational AI for seamless shopping experiences",
    metrics: { conversion: "+67%", satisfaction: "4.8★", status: "Beta" },
    category: "Innovation",
    progress: 85,
    phase: "User Testing",
    gradient: "from-netflix-gold to-netflix-green"
  }
]

const keyInsights = [
  {
    id: 1,
    title: "Market Intelligence Dashboard",
    description: "Real-time competitive analysis and trend prediction across 47 categories",
    impact: "$12M+ revenue protected",
    metric: "47 Categories",
    category: "Strategic Intelligence",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Customer Journey Optimization",
    description: "AI-driven personalization reducing churn by 34% across all touchpoints",
    impact: "34% churn reduction",
    metric: "8 Touchpoints",
    category: "Experience Design",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Emerging Markets Framework",
    description: "Go-to-market strategy for Tier-2/3 Indian cities, scaling to 15M users",
    impact: "15M+ new users",
    metric: "127 Cities",
    category: "Market Expansion",
    icon: "🚀"
  }
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-netflix-black via-netflix-dark to-netflix-black">
          <div className="floating-elements" />
          <div className="hero-overlay" />
        </div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(229,9,20,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: 'shimmer 4s ease-in-out infinite'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-4xl">
            <ClientHomeContent />
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-16 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white">Active Projects</h2>
            <div className="h-px bg-gradient-to-r from-netflix-red via-netflix-accent to-transparent flex-1" />
          </div>
          
          <div className="content-row">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="netflix-card min-w-[380px] w-96 cursor-pointer group relative insight-highlight"
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`bg-gradient-to-r ${project.gradient} text-netflix-white px-3 py-1 text-xs font-medium rounded-full`}>
                        {project.category}
                      </span>
                      <div className="text-right">
                        <div className="text-xs text-netflix-muted">Progress</div>
                        <div className="text-sm font-semibold text-netflix-white">{project.progress}%</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-netflix-white mb-2 group-hover:text-netflix-gold transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-netflix-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      {/* Metrics Row */}
                      <div className="flex justify-between text-xs">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-netflix-white font-semibold">{value}</div>
                            <div className="text-netflix-muted capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="h-2 bg-netflix-gray rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-1000 ease-out`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-netflix-muted">Current Phase</span>
                          <span className="text-xs text-netflix-white font-medium">{project.phase}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white">Strategic Impact</h2>
            <div className="h-px bg-gradient-to-r from-netflix-gold via-netflix-green to-transparent flex-1" />
          </div>
          
          <div className="content-row">
            {keyInsights.map((insight) => (
              <div
                key={insight.id}
                className="metric-card min-w-[320px] w-80 cursor-pointer group insight-highlight"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">{insight.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-netflix-gray text-netflix-muted px-2 py-1 text-xs rounded">
                        {insight.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-netflix-white group-hover:text-netflix-gold transition-colors mb-2">
                      {insight.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-netflix-muted text-sm leading-relaxed mb-4">
                  {insight.description}
                </p>
                
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-netflix-muted mb-1">Business Impact</div>
                    <div className="text-netflix-gold font-bold">{insight.impact}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-netflix-muted mb-1">Scale</div>
                    <div className="text-netflix-white font-semibold">{insight.metric}</div>
                  </div>
                </div>
                
                <div className="mt-4 h-px bg-gradient-to-r from-netflix-red via-netflix-accent to-netflix-gold opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-netflix-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/5 via-transparent to-netflix-gold/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-block ai-gradient text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase mb-4">
              AI-Driven Product Innovation
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-netflix-white mb-6">
              Let's Build the Future
            </h2>
            <p className="text-lg text-netflix-muted mb-2 leading-relaxed max-w-2xl mx-auto">
              Transforming ideas into scalable products that serve millions. 
            </p>
            <p className="text-netflix-muted leading-relaxed max-w-2xl mx-auto">
              Ready to discuss your next breakthrough?
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="netflix-button inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold netflix-glow"
            >
              Explore Portfolio
              <ArrowRight size={20} />
            </Link>
            <a 
              href="mailto:adnanshamim11work@gmail.com"
              className="netflix-button-outline inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              Start Conversation
              <Mail size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ArrowRight, Clock, Bookmark, MoreHorizontal } from 'lucide-react'
import Navigation from '@/components/ui/navigation'
import ClientHomeContent from './clientHomeContent'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Product manager, cinema lover, and growth expert building scalable solutions.',
  openGraph: {
    title: 'AISHERE - Product Manager & Growth Expert',
    description: 'Product manager, cinema lover, and growth expert building scalable solutions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
}

const continueWatching = [
  {
    id: 1,
    title: "E-commerce Growth Analytics",
    description: "Building comprehensive dashboard for user behavior analysis",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
    category: "Product",
    progress: 75,
    timeLeft: "15 min left",
    lastWatched: "2 days ago"
  },
  {
    id: 2,
    title: "Retention Blueprint",
    description: "Customer engagement strategies and lifecycle optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
    category: "Strategy", 
    progress: 45,
    timeLeft: "25 min left",
    lastWatched: "1 week ago"
  },
  {
    id: 3,
    title: "Beyond the Screen",
    description: "India's OTT industry analysis and market insights",
    image: "https://images.unsplash.com/photo-1489599810773-6c6c60eb69c9?w=400&h=225&fit=crop",
    category: "Research",
    progress: 90,
    timeLeft: "5 min left",
    lastWatched: "3 days ago"
  }
]

const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Growth",
    description: "Building scalable solutions for millions of users",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
    category: "Product Management"
  },
  {
    id: 2,
    title: "Bharat Solutions",
    description: "Innovative products for the Indian market",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
    category: "Strategy"
  },
  {
    id: 3,
    title: "Cinema & Culture",
    description: "Exploring storytelling through different mediums",
    image: "https://images.unsplash.com/photo-1489599810773-6c6c60eb69c9?w=400&h=225&fit=crop",
    category: "Personal"
  }
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop"
            alt="Hero background - Innovative workspace"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-2xl">
            <ClientHomeContent />
          </div>
        </div>
      </section>

      {/* Continue Watching Section */}
      <section className="py-16 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">Continue Watching</h2>
          
          <div className="content-row">
            {continueWatching.map((project) => (
              <div
                key={project.id}
                className="netflix-card min-w-[350px] w-96 cursor-pointer group relative"
              >
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-netflix-gray">
                    <div 
                      className="h-full bg-netflix-red transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-netflix-red text-netflix-white px-2 py-1 text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="bg-netflix-white/20 backdrop-blur-sm text-netflix-white p-2 rounded-full hover:bg-netflix-white/40 transition-all duration-200">
                      <Bookmark size={16} />
                    </button>
                    <button className="bg-netflix-white/20 backdrop-blur-sm text-netflix-white p-2 rounded-full hover:bg-netflix-white/40 transition-all duration-200">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-netflix-red text-netflix-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-netflix-white">{project.title}</h3>
                    <span className="text-xs text-netflix-muted bg-netflix-gray px-2 py-1 rounded">
                      {project.progress}%
                    </span>
                  </div>
                  <p className="text-netflix-muted text-sm leading-relaxed mb-3">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-netflix-muted">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{project.timeLeft}</span>
                    </div>
                    <span>Last watched {project.lastWatched}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">Trending Now</h2>
          
          <div className="content-row">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="netflix-card min-w-[300px] w-80 cursor-pointer group"
              >
                <div className="relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={225}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-netflix-red text-netflix-white px-2 py-1 text-xs font-medium rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-netflix-white mb-2">{project.title}</h3>
                  <p className="text-netflix-muted text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-netflix-white mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-netflix-muted mb-8 leading-relaxed">
            Dive deeper into my work, thoughts, and projects. Let's build something amazing together.
          </p>
          <Link 
            href="/projects" 
            className="netflix-button inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
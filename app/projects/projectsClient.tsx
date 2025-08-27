'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, BarChart3, Target, Zap, Play, Plus } from 'lucide-react'
import LoadingSkeleton from '@/components/ui/loadingSkeleton'

interface Project {
  title: string
  period: string
  description: string
  link: string
  category: string
  image: string
  tags: string[]
  featured?: boolean
  metrics?: string[]
}

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  const projects: Project[] = [
    {
      title: "Beyond the Screen",
      period: "June 2024 - Sep 2024",
      description: "Analyzed India's OTT industry, uncovering trends in audience engagement, content strategy, and monetization. Delivered insights to shape product marketing and growth strategies in the streaming sector.",
      link: "https://ott-report.super.site/",
      category: "Research",
      image: "https://images.unsplash.com/photo-1489599810773-6c6c60eb69c9?w=400&h=225&fit=crop",
      tags: ["OTT", "Market Research", "Strategy", "Analytics"],
      featured: true,
      metrics: ["50+ OTT platforms analyzed", "3 key market insights", "Strategic recommendations delivered"]
    },
    {
      title: "Retention Blueprint",
      period: "Oct 2024 - Dec 2024", 
      description: "Evaluated retention strategies to optimize customer engagement through targeted digital communication channels, driving lifecycle improvements and campaign efficiency.",
      link: "https://coherent-cadmium-d66.notion.site/Retention-Report-v1-14db6730d89e8089a6cef205be0266c4?pvs=4",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
      tags: ["Retention", "Customer Engagement", "Lifecycle", "Optimization"],
      featured: true,
      metrics: ["25% improvement strategies", "Multi-channel approach", "Data-driven insights"]
    },
    {
      title: "E-commerce Growth Analytics",
      period: "Jan 2025 - Present",
      description: "Building comprehensive growth analytics dashboard for e-commerce platforms, focusing on user behavior, conversion optimization, and revenue growth strategies.",
      link: "#",
      category: "Product",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      tags: ["Analytics", "Growth", "E-commerce", "Dashboard"],
      metrics: ["Real-time tracking", "10+ KPIs monitored", "Automated insights"]
    },
    {
      title: "Payment System Integration",
      period: "Nov 2023 - Aug 2024",
      description: "Led the integration of multiple payment gateways including UPI Autopay and Juspay SmartConnect, resulting in improved conversion rates and reduced payment failures.",
      link: "#",
      category: "Product",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=225&fit=crop",
      tags: ["Payments", "Integration", "UPI", "Fintech"],
      metrics: ["20% conversion improvement", "5% success rate increase", "Multiple gateway support"]
    }
  ]

  const categories = ['All', 'Research', 'Strategy', 'Product']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  if (isLoading) {
    return (
      <div className="pt-20 bg-netflix-black min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Skeleton */}
          <div className="pb-8">
            <LoadingSkeleton className="h-40 mb-8" />
            <div className="flex justify-center gap-4">
              <LoadingSkeleton className="w-32 h-12" />
              <LoadingSkeleton className="w-32 h-12" />
            </div>
          </div>
          
          {/* Featured Section Skeleton */}
          <div className="py-8">
            <LoadingSkeleton className="h-8 w-48 mb-8" />
            <div className="content-row">
              {[1, 2].map((i) => (
                <LoadingSkeleton key={i} className="min-w-[350px] w-96 h-80" />
              ))}
            </div>
          </div>
          
          {/* Grid Section Skeleton */}
          <div className="py-8">
            <div className="flex gap-4 justify-center mb-8">
              {categories.map((_, i) => (
                <LoadingSkeleton key={i} className="w-24 h-10" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <LoadingSkeleton key={i} className="h-80" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-netflix-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/20 via-transparent to-netflix-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-netflix-white mb-4 text-shadow">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl text-netflix-muted mb-8 max-w-2xl mx-auto">
              Innovative solutions and strategic insights across different domains
            </p>
            <div className="flex justify-center items-center gap-4">
              <button className="netflix-button inline-flex items-center gap-2 px-6 py-3">
                <Play size={20} />
                Watch Highlights
              </button>
              <button className="netflix-button-outline inline-flex items-center gap-2 px-6 py-3">
                <Plus size={20} />
                My List
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="py-8 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">Trending Now</h2>
            
            <div className="content-row">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="min-w-[350px] w-96 netflix-card group cursor-pointer relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Netflix-style gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Video preview effect when hovered */}
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-netflix-red/10 to-transparent"
                      />
                    )}
                    
                    <div className="absolute top-4 left-4">
                      <motion.div 
                        className="bg-netflix-red text-netflix-white px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Zap size={12} />
                        FEATURED
                      </motion.div>
                    </div>
                    
                    {/* Enhanced hover controls */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-netflix-white">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <motion.button
                            className="bg-netflix-white text-netflix-black p-2 rounded-full hover:bg-netflix-muted transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Plus size={16} />
                          </motion.button>
                          <motion.a 
                            href={project.link}
                            className="bg-netflix-red text-netflix-white p-2 rounded-full hover:bg-netflix-red/80 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play size={16} />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Netflix-style hover info panel */}
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-4"
                      >
                        <div className="text-netflix-white space-y-2">
                          <h4 className="font-bold text-lg">{project.title}</h4>
                          <p className="text-sm text-netflix-muted line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="bg-netflix-red px-2 py-1 rounded">{project.category}</span>
                            {project.metrics && (
                              <span className="text-green-400">
                                {project.metrics[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-netflix-white mb-2">{project.title}</h3>
                    <p className="text-netflix-muted text-sm leading-relaxed mb-4">{project.description}</p>
                    {project.metrics && (
                      <div className="space-y-1">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-netflix-muted">
                            <BarChart3 size={12} className="text-netflix-red" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-netflix-white mb-6 text-center">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 ${
                    selectedCategory === category
                      ? 'bg-netflix-red border-netflix-red text-netflix-white shadow-lg shadow-netflix-red/25'
                      : 'bg-transparent border-netflix-gray text-netflix-muted hover:border-netflix-white hover:text-netflix-white hover:bg-netflix-white/5'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.span
                      className="ml-2 inline-block w-2 h-2 bg-netflix-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <span className="text-netflix-muted text-sm">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} 
                {selectedCategory !== 'All' && (
                  <span> in <span className="text-netflix-red font-medium">{selectedCategory}</span></span>
                )}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-8 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">
              {selectedCategory} Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="netflix-card group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
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
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link}
                        className="bg-netflix-white/20 backdrop-blur-sm text-netflix-white p-2 rounded-full hover:bg-netflix-white/40 transition-all duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-netflix-white mb-2">{project.title}</h3>
                    <p className="text-netflix-muted text-sm leading-relaxed mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="bg-netflix-black text-netflix-white px-2 py-1 text-xs rounded border border-netflix-gray"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="space-y-1">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-netflix-muted">
                            <Target size={12} className="text-netflix-red" />
                            {metric}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-netflix-gray">
                      <div className="flex items-center gap-2 text-xs text-netflix-muted">
                        <Calendar size={12} />
                        {project.period}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-netflix-white mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-netflix-muted mb-8 leading-relaxed">
              Interested in collaborating on innovative projects? Let's discuss how we can create impact together.
            </p>
            <a 
              href="mailto:adnanshamim11work@gmail.com"
              className="netflix-button inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold"
            >
              <Plus size={20} />
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
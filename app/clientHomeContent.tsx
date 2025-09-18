'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, Mail } from 'lucide-react'

export default function ClientHomeContent() {
  return (
    <>
      <motion.div className="mb-4">
        <motion.div 
          className="inline-block text-sm font-semibold tracking-wider uppercase mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="ai-gradient text-transparent bg-clip-text">
            AI Product Strategist
          </span>
        </motion.div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-netflix-white mb-6 text-shadow leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className="block">Hi, I'm </span>
        <span className="text-netflix-gold">Adnan</span>
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-netflix-muted mb-6 text-shadow leading-relaxed max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Building <span className="text-netflix-white font-semibold">AI-powered products</span> that serve millions. 
        Transforming complex challenges into intuitive experiences through 
        <span className="text-netflix-gold"> data-driven innovation</span> and strategic thinking.
      </motion.p>
      
      <motion.div 
        className="flex items-center gap-6 mb-8 text-sm text-netflix-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-netflix-green rounded-full animate-pulse" />
          <span>E-commerce Scale: <span className="text-netflix-white font-medium">2M+ Users</span></span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-netflix-gray" />
        <div className="flex items-center gap-2">
          <span>Impact: <span className="text-netflix-gold font-medium">$12M+ Revenue</span></span>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/cv" 
            className="netflix-button flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold netflix-glow"
          >
            <Play size={20} fill="currentColor" />
            Explore Portfolio
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="mailto:adnanshamim11work@gmail.com"
            className="netflix-button-outline flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold hover:border-netflix-gold hover:text-netflix-gold transition-all duration-300"
          >
            <Mail size={20} />
            Start Conversation
          </a>
        </motion.div>
      </motion.div>
    </>
  )
}
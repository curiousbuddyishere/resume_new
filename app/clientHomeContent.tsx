'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Play, Mail } from 'lucide-react'

export default function ClientHomeContent() {
  return (
    <>
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-netflix-white mb-6 text-shadow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Adnan
      </motion.h1>
      
      <motion.p 
        className="text-lg md:text-xl text-netflix-white mb-8 text-shadow leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Product manager, cinema lover, and growth expert. Currently building scalable solutions 
        at an e-commerce giant, previously crafting innovative products for Bharat.
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link 
          href="/cv" 
          className="netflix-button flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold"
        >
          <Play size={20} />
          Learn More
        </Link>
        <a 
          href="mailto:adnanshamim11work@gmail.com"
          className="netflix-button-outline flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold"
        >
          <Mail size={20} />
          Get in Touch
        </a>
      </motion.div>
    </>
  )
}
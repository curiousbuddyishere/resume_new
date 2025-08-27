'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Bell, User, ChevronDown, Gift } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/posts', label: 'Blog' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-netflix bg-netflix-black/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-netflix-red text-2xl font-bold tracking-wider">
              AISHERE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ path, label }) => (
              <motion.div key={path} className="relative">
                <Link
                  href={path}
                  className={`netflix-nav-link text-sm font-medium transition-all duration-200 hover:text-netflix-white relative ${
                    pathname === path ? 'text-netflix-white' : 'text-netflix-muted'
                  }`}
                >
                  {label}
                  {pathname === path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-netflix-red"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <motion.button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-netflix-white hover:text-netflix-red transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={20} />
              </motion.button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 top-12 w-72 bg-netflix-black/95 backdrop-blur-md border border-netflix-gray rounded-lg p-4 shadow-lg"
                  >
                    <input
                      type="text"
                      placeholder="Search projects, posts..."
                      className="w-full bg-netflix-gray text-netflix-white placeholder-netflix-muted px-4 py-2 rounded border-none outline-none focus:ring-2 focus:ring-netflix-red"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <motion.button 
              className="text-netflix-white hover:text-netflix-red transition-colors p-2 relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-netflix-red rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </motion.button>

            {/* Gift/Special */}
            <motion.button 
              className="text-netflix-white hover:text-netflix-red transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={20} />
            </motion.button>

            {/* Profile Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-netflix-white hover:text-netflix-red transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-netflix-red to-red-600 rounded flex items-center justify-center">
                  <User size={16} className="text-netflix-white" />
                </div>
                <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className="absolute right-0 top-12 w-56 bg-netflix-black/95 backdrop-blur-md border border-netflix-gray rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="p-4 border-b border-netflix-gray">
                      <h3 className="text-netflix-white font-medium">Adnan Shamim</h3>
                      <p className="text-netflix-muted text-sm">Product Manager</p>
                    </div>
                    <div className="py-2">
                      {[
                        { label: 'Account', href: '/cv' },
                        { label: 'Help Center', href: '#' },
                        { label: 'Sign out', href: '#' }
                      ].map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 text-netflix-muted hover:text-netflix-white hover:bg-netflix-gray/50 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-netflix-white hover:text-netflix-muted transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-netflix-black/95 backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                {links.map(({ path, label }, index) => (
                  <motion.div
                    key={path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={path}
                      className={`block text-lg font-medium transition-colors ${
                        pathname === path
                          ? 'text-netflix-white'
                          : 'text-netflix-muted hover:text-netflix-white'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-netflix-gray">
                  <div className="flex items-center space-x-4">
                    <button className="text-netflix-muted hover:text-netflix-white transition-colors">
                      <Search size={20} />
                    </button>
                    <button className="text-netflix-muted hover:text-netflix-white transition-colors">
                      <Bell size={20} />
                    </button>
                    <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                      <User size={16} className="text-netflix-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
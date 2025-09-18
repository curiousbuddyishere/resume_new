'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Bell, User, ChevronDown, Gift } from 'lucide-react'

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
    { path: '/blog', label: 'Blog' },
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
            <span className="text-netflix-red text-2xl font-bold tracking-wider hover:text-netflix-gold transition-colors duration-300">
              AI
            </span>
            <span className="text-netflix-white text-2xl font-bold tracking-wider">
              SHERE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ path, label }) => (
              <div key={path} className="relative">
                <Link
                  href={path}
                  className={`netflix-nav-link text-sm font-medium transition-all duration-200 hover:text-netflix-white relative ${
                    pathname === path ? 'text-netflix-white' : 'text-netflix-muted'
                  }`}
                >
                  {label}
                  {pathname === path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-netflix-red" />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-netflix-white hover:text-netflix-red transition-colors p-2"
              >
                <Search size={20} />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-12 w-72 bg-netflix-black/95 backdrop-blur-md border border-netflix-gray rounded-lg p-4 shadow-lg">
                  <input
                    type="text"
                    placeholder="Search projects, posts..."
                    className="w-full bg-netflix-gray text-netflix-white placeholder-netflix-muted px-4 py-2 rounded border-none outline-none focus:ring-2 focus:ring-netflix-red"
                    autoFocus
                  />
                </div>
              )}
            </div>

            {/* Status Indicator */}
            <button
              className="text-netflix-white hover:text-netflix-green transition-colors p-2 relative group"
              title="System Status: All systems operational"
            >
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-netflix-green rounded-full flex items-center justify-center animate-pulse">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
              <div className="absolute -inset-2 bg-netflix-green/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* AI Insights */}
            <button
              className="text-netflix-white hover:text-netflix-gold transition-colors p-2 relative group"
              title="AI Performance Metrics"
            >
              <div className="relative">
                <Gift size={20} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-netflix-gold rounded-full animate-ping" />
              </div>
              <div className="absolute -inset-2 bg-netflix-gold/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-netflix-white hover:text-netflix-red transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-netflix-red via-netflix-accent to-netflix-gold rounded-full flex items-center justify-center ring-2 ring-netflix-gray hover:ring-netflix-gold transition-all duration-300">
                  <User size={16} className="text-netflix-white" />
                </div>
                <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-12 w-56 bg-netflix-black/95 backdrop-blur-md border border-netflix-gray rounded-lg shadow-lg overflow-hidden">
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
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-netflix-white hover:text-netflix-muted transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden overflow-hidden bg-netflix-black/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {links.map(({ path, label }) => (
                <div key={path}>
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
                </div>
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
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
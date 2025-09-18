'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/lists', label: 'Lists' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-custom backdrop-blur-sm bg-primary/90 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1">
            <Link href="/" className="text-xl font-light text-gradient hover:scale-105 transition-transform duration-300">
              AS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-center space-x-8 flex-1">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`text-sm font-medium transition-all duration-300 ${
                  pathname === path
                    ? 'text-accent'
                    : 'text-secondary hover:text-bright hover:text-accent'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden text-secondary hover:text-accent transition-colors hover:scale-110 transform"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-custom pb-4 animate-fade-in">
            <div className="pt-4 space-y-2">
              {links.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    pathname === path
                      ? 'text-accent bg-tertiary'
                      : 'text-secondary hover:text-bright hover:bg-tertiary hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
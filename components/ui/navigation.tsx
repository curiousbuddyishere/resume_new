'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const links = [
    { path: '/', label: 'aishere.xyz' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/lists', label: 'Lists' },
    { path: '/expertise', label: 'Expertise' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-custom backdrop-blur-sm bg-primary/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  pathname === path
                    ? 'text-accent'
                    : 'text-secondary hover:text-bright hover:text-accent'
                }`}
                prefetch={true}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default React.memo(Navigation)
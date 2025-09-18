import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Lists | Adnan Shamim',
  description: 'Curated lists of movies and quotes.',
}

// Mock data for movies and quotes
const lists = [
  {
    id: 'movies',
    title: 'Favorite Movies',
    description: 'A collection of movies that have inspired and influenced my thinking.',
    items: [
      'The Shawshank Redemption (1994)',
      'Inception (2010)',
      'The Dark Knight (2008)',
      'Pulp Fiction (1994)',
      'Interstellar (2014)'
    ]
  },
  {
    id: 'quotes',
    title: 'Inspirational Quotes',
    description: 'Quotes that guide my approach to product management and life.',
    items: [
      '"The best way to predict the future is to invent it." - Alan Kay',
      '"Stay hungry, stay foolish." - Steve Jobs',
      '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
      '"The only way to do great work is to love what you do." - Steve Jobs',
      '"Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill'
    ]
  }
]

export default function ListsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h1 className="text-4xl font-light text-primary tracking-tight mb-4">
              Lists
            </h1>
          </div>

          <div className="space-y-6">
            {lists.map((list) => (
              <Link
                key={list.id}
                href={`/lists/${list.id}`}
                className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <div className="p-6">
                  <h3 className="text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                    {list.title}
                  </h3>
                  
                  {list.description && (
                    <p className="text-secondary mb-4 text-sm leading-relaxed">
                      {list.description}
                    </p>
                  )}
                  
                  <div className="text-tertiary text-sm">
                    {list.items.length} items
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
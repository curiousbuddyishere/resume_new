import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'

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

interface ListPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return lists.map((list) => ({
    id: list.id,
  }))
}

export async function generateMetadata({ params }: ListPageProps): Promise<Metadata> {
  const { id } = await params
  const list = lists.find(l => l.id === id)
  
  if (!list) {
    return {
      title: 'List Not Found',
      description: 'The requested list could not be found.',
    }
  }
  
  return {
    title: `${list.title} | Adnan Shamim`,
    description: list.description,
  }
}

export default async function ListPage({ params }: ListPageProps) {
  const { id } = await params
  const list = lists.find(l => l.id === id)

  if (!list) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-primary pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-light text-primary leading-tight tracking-tight">
                {list.title}
              </h1>
            </div>

            {list.description && (
              <p className="text-secondary mb-8 text-lg leading-relaxed">
                {list.description}
              </p>
            )}
          </div>

          <div className="bg-card border border-custom rounded-xl overflow-hidden">
            <ul className="divide-y divide-custom">
              {list.items.map((item, index) => (
                <li key={index} className="p-6 hover:bg-tertiary/50 transition-colors">
                  <div className="flex items-start">
                    <span className="text-accent font-medium mr-4">#{index + 1}</span>
                    <span className="text-primary">{item}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </>
  )
}
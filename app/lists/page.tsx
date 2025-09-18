import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'
import { lists } from '@/lib/lists'

export const metadata: Metadata = {
  title: 'Lists | Adnan Shamim',
  description: 'Curated lists of movies and reading materials.',
}

export default function ListsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-light text-primary tracking-tight mb-4">
              Lists
            </h1>
          </div>

          <div className="space-y-6">
            {lists.map((list) => (
              <Link
                key={list.id}
                href={`/lists/${list.id}`}
                className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
                prefetch={true}
              >
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                    {list.title}
                  </h3>
                  
                  {list.description && (
                    <p className="text-secondary mb-4 text-sm leading-relaxed">
                      {list.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
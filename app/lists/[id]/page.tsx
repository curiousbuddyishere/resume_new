import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/components/ui/navigation'
import { lists } from '@/lib/lists'

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

// Simple markdown link parser
const renderListItem = (item: string, index: number) => {
  // Check if item is a markdown link format [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/
  const match = item.match(linkRegex)
  
  if (match) {
    const [, text, url] = match
    return (
      <div className="flex items-start">
        <span className="text-accent font-medium mr-3 sm:mr-4">•</span>
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          {text}
        </a>
      </div>
    )
  }
  
  // Regular text item
  return (
    <div className="flex items-start">
      <span className="text-accent font-medium mr-3 sm:mr-4">•</span>
      <span className="text-primary">{item}</span>
    </div>
  )
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
      <div className="min-h-screen bg-primary pt-16 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-light text-primary leading-tight tracking-tight mb-4">
                {list.title}
              </h1>
            </div>

            {list.description && (
              <p className="text-secondary text-base sm:text-lg leading-relaxed">
                {list.description}
              </p>
            )}
          </div>

          <div className="bg-card border border-custom rounded-xl overflow-hidden">
            <ul className="divide-y divide-custom">
              {list.items.map((item, index) => (
                <li key={index} className="p-5 sm:p-6 hover:bg-tertiary/50 transition-colors">
                  {renderListItem(item, index)}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </>
  )
}
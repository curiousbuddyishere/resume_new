import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Adnan Shamim',
  description: 'Thoughts and insights by Adnan Shamim, Product Manager.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-primary pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <h1 className="text-4xl font-light text-primary tracking-tight mb-4">
              Blog
            </h1>
          </div>

          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => {
                // Calculate reading time (approx 200 words per minute)
                const readingTime = Math.ceil(post.content.split(' ').length / 200)
                
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block bg-card border border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-lg"
                  >
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-tertiary mb-3">
                        <time>{post.date}</time>
                        <span>•</span>
                        <span>{readingTime} min read</span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      
                      {post.description && (
                        <p className="text-secondary mb-4 text-sm leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {post.description}
                        </p>
                      )}
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-tertiary text-tertiary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-secondary">No posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
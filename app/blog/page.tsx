import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog - Posts & Articles',
  description: 'Blog posts and articles by Adnan Shamim on product management, growth, and technology',
  openGraph: {
    title: 'Blog | AISHERE',
    description: 'Blog posts and articles by Adnan Shamim on product management, growth, and technology',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">Blog</h1>
            <p className="text-xl text-netflix-muted">
              Thoughts on product management, growth, and technology
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-netflix-muted text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-netflix-gray pb-8">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="flex items-center justify-between mb-2">
                      <time className="text-sm text-netflix-muted">{post.date}</time>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-netflix-gray text-netflix-white px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <h2 className="text-2xl font-medium text-netflix-white mb-3 group-hover:text-netflix-red transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-netflix-muted line-clamp-2">{post.description}</p>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
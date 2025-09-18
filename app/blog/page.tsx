import Link from 'next/link'
import Navigation from '@/components/ui/navigation'
import { getAllPosts } from '@/lib/posts'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-primary pt-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light text-primary tracking-tight mb-4">Blog</h1>
            <p className="text-xl text-secondary leading-relaxed">
              Thoughts on product management, technology, and building things that matter.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-secondary text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-card rounded-lg p-6 border border-custom hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <time className="text-sm text-tertiary">{post.date}</time>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-tertiary text-tertiary px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl font-medium text-primary mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-secondary leading-relaxed mb-4">
                        {post.description}
                      </p>
                    )}
                    <div className="inline-flex items-center gap-1 text-accent group-hover:text-bright transition-colors font-medium">
                      Read more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
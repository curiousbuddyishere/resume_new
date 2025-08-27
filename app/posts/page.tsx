import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'

export const metadata: Metadata = {
  title: 'Posts - Blog & Articles',
  description: 'Blog posts and articles by Adnan Shamim on product management, growth, and technology',
  openGraph: {
    title: 'Blog Posts | AISHERE',
    description: 'Blog posts and articles by Adnan Shamim on product management, growth, and technology',
  },
}

export default function PostsPage() {
  const posts = [
    {
      title: "Under Progress",
      date: "February 24, 2025",
      slug: "about-this-website"
    }
  ]

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-netflix-white mb-12">Posts</h1>
          
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.slug} className="border-b border-netflix-gray pb-4">
                <Link href="/" className="block group">
                  <h2 className="text-xl font-medium text-netflix-white mb-2 group-hover:text-netflix-red transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-netflix-muted">{post.date}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
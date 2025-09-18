import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import Navigation from '@/components/ui/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/posts'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | AISHERE`,
    description: post.description || `Blog post by Adnan Shamim`,
    openGraph: {
      title: `${post.title} | AISHERE`,
      description: post.description || `Blog post by Adnan Shamim`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Adnan Shamim'],
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-netflix-black">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-netflix-muted hover:text-netflix-red transition-colors mb-8 inline-block"
            >
              ← Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-4 text-sm text-netflix-muted">
              <time>{post.date}</time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-netflix-gray text-netflix-white px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-xl text-netflix-muted mb-8">
                {post.description}
              </p>
            )}
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-netflix-white mt-8 mb-4">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-netflix-white mt-6 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold text-netflix-white mt-5 mb-2">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-netflix-white mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-netflix-red hover:text-netflix-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-netflix-gray text-netflix-white px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-netflix-gray text-netflix-white p-4 rounded-lg overflow-x-auto mb-4">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-netflix-red pl-4 italic text-netflix-muted my-4">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-netflix-white mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-netflix-white mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-netflix-white">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-netflix-white">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-netflix-white">
                    {children}
                  </em>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="max-w-md mx-auto my-6 rounded-lg shadow-lg border border-netflix-gray"
                  />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </>
  )
}
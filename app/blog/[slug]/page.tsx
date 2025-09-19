import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-primary pt-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-sm text-tertiary">
              <time>{post.date}</time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-tertiary text-tertiary px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-light text-primary mb-4 leading-tight tracking-tight">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-lg sm:text-xl text-secondary mb-6 sm:mb-8 leading-relaxed">
                {post.description}
              </p>
            )}
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-primary prose-p:text-secondary prose-a:text-accent prose-a:hover:text-primary prose-strong:text-primary prose-code:text-tertiary prose-pre:bg-tertiary prose-blockquote:text-secondary prose-blockquote:border-l-custom">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-2xl sm:text-3xl font-light text-primary mt-8 mb-4 leading-tight tracking-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-xl sm:text-2xl font-light text-primary mt-6 mb-3 leading-tight tracking-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-lg sm:text-xl font-light text-primary mt-5 mb-2 leading-tight tracking-tight">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-secondary mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-accent hover:text-bright transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="bg-tertiary text-tertiary px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-tertiary text-tertiary p-4 rounded-lg overflow-x-auto mb-4 border border-custom">
                    {children}
                  </pre>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-accent pl-4 italic text-secondary my-4">
                    {children}
                  </blockquote>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-secondary mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-secondary mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-primary">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-secondary">
                    {children}
                  </em>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="max-w-full mx-auto my-6 rounded-lg shadow-lg w-full max-w-2xl h-auto max-h-80 object-contain"
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
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostData {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.(md|mdx)$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || '',
        description: matterResult.data.description || '',
        tags: matterResult.data.tags || [],
        content: matterResult.content,
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): PostData | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || '',
      description: matterResult.data.description || '',
      tags: matterResult.data.tags || [],
      content: matterResult.content,
    }
  } catch {
    try {
      const fullPath = path.join(postsDirectory, `${slug}.mdx`)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || '',
        description: matterResult.data.description || '',
        tags: matterResult.data.tags || [],
        content: matterResult.content,
      }
    } catch {
      return null
    }
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.(md|mdx)$/, ''))
}
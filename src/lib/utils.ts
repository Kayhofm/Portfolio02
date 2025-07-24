import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getContentData(contentType: 'projects' | 'blog') {
  const contentDirectory = path.join(process.cwd(), 'src/content', contentType)
  
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    console.log(`Content directory ${contentDirectory} does not exist yet. Create it and add some .mdx files!`)
    return []
  }

  const filenames = fs.readdirSync(contentDirectory)
  const mdxFiles = filenames.filter(name => name.endsWith('.mdx'))
  
  if (mdxFiles.length === 0) {
    console.log(`No .mdx files found in ${contentDirectory}`)
    return []
  }
  
  const posts = mdxFiles.map((filename) => {
    const filePath = path.join(contentDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: filename.replace(/\.mdx$/, ''),
      frontmatter: data,
      content,
    }
  })
  
  return posts.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    }
    return 0
  })
}
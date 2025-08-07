import { notFound } from 'next/navigation'
import { getContentData } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import SimplePDFViewer from '@/components/SimplePDFViewer'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params; // Add this line
  const posts = await getContentData('blog')
  const post = posts.find(p => p.slug === slug) // Use slug instead of params.slug

  if (!post) {
    notFound()
  }

  // Create complete components object with all your MDX features
  const mdxComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200 mt-0">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
        {children}
      </code>
    ),
    pre: ({ children }: any) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }: any) => (
      <ul className="mb-3 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-outside pl-6">
        {children}
      </ul>
    ),
    ol: ({ children }: any) => (
      <ol className="mb-3 space-y-1 text-gray-600 dark:text-gray-300 list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }: any) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    img: ({ src, alt, ...props }: any) => (
      <img 
        src={src || ''} 
        alt={alt || ''} 
        className="w-full rounded-lg my-4 block"
        {...props}
      />
    ),
    // Custom component for tight spacing between bold text and lists
    TightSection: ({ title, children }: any) => (
      <div className="mb-4">
        <strong className="block mb-0 text-gray-900 dark:text-white">{title}</strong>
        <div className="mt-0">
          {children}
        </div>
      </div>
    ),
    // Custom components
    ImageGallery: ({ children }: any) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {children}
      </div>
    ),
    MDXImage: ({ src, alt, width = "full", caption, align = "center" }: any) => {
      let widthClass = "w-full"
      if (width === "1/2") widthClass = "w-1/2"
      if (width === "1/3") widthClass = "w-1/3"
      if (width === "2/3") widthClass = "w-2/3"
      if (width === "1/4") widthClass = "w-1/4"
      if (width === "3/4") widthClass = "w-3/4"
      
      let alignClass = "mx-auto"
      if (align === "left") alignClass = "mr-auto ml-0"
      if (align === "right") alignClass = "ml-auto mr-0"
      
      return (
        <>
          <img 
            src={src} 
            alt={alt} 
            className={`${widthClass} h-auto object-cover rounded-lg mb-4 ${alignClass} block`}
          />
          {caption && (
            <span className={`block text-sm text-gray-600 dark:text-gray-400 mb-6 italic ${
              align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
            }`}>
              {caption}
            </span>
          )}
        </>
      )
    },
    TwoColumn: ({ children }: any) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
        {children}
      </div>
    ),
    TextBlock: ({ children }: any) => (
      <div className="prose-sm">
        {children}
      </div>
    ),
    SimplePDFViewer: ({ src, width, height, className }: any) => (
      <SimplePDFViewer 
        src={src} 
        width={width} 
        height={height} 
        className={className} 
      />
    ),
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Blog Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.frontmatter.title}
          </h1>
          
          {post.frontmatter.description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {post.frontmatter.description}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            {post.frontmatter.author && (
              <span>By {post.frontmatter.author}</span>
            )}
            {post.frontmatter.date && (
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
            )}
            {post.frontmatter.readTime && (
              <span>{post.frontmatter.readTime}</span>
            )}
          </div>

          {/* Tags */}
          {post.frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Blog Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote 
            source={post.content} 
            components={mdxComponents}
          />
        </article>

        {/* More Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            More Posts
          </h2>
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getContentData('blog')
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
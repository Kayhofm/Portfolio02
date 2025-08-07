import Link from 'next/link'
import { getContentData } from '@/lib/utils'

export default async function BlogPage() {
  const posts = await getContentData('blog')

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts on design, AI, and lessons learned along the way.
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 ? (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  {post.frontmatter.date && (
                    <time
                      dateTime={post.frontmatter.date}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  )}
                </div>
                
                {post.frontmatter.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.frontmatter.description}
                  </p>
                )}

                {/* Tags */}
                {post.frontmatter.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
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

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                No blog posts yet
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Get started by creating some .mdx files in src/content/blog/
              </p>
              <div className="mt-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <strong>Quick start:</strong>
                  </p>
                  <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Create the directory: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mkdir -p src/content/blog</code></li>
                    <li>2. Add .mdx files with frontmatter</li>
                    <li>3. Refresh this page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter/CTA Section */}
        {posts.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-emerald-400 to-emerald-400 rounded-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="mb-6 opacity-90">
              Get notified when I publish new articles about web development and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
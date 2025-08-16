import { notFound } from 'next/navigation'
import { getContentData } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import ClientProtectedContent from '@/components/ClientProtectedContent'
import ClickableSpeakerIcon from '@/components/ClickableSpeakerIcon'


interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = await getContentData('projects')
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Add navigation logic
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  const ProtectedContent = (props: any) => <ClientProtectedContent {...props} />

  // Create complete components object with all your MDX features
  const mdxComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-200 mt-0">
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
    // Custom components
    ImageGallery: ({ children }: any) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {children}
      </div>
    ),
    MDXImage: ({ src, alt, width = "full", caption, align = "center", className = "" }: any) => {
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
          <div className={`${className} ${alignClass} mb-4 rounded-lg overflow-hidden`}>
            <img 
              src={src} 
              alt={alt} 
              className={`${widthClass} h-auto object-cover block`}
            />
          </div>
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
    MDXVideo: ({ src, width = "full", caption, autoplay = false, loop = false, muted = true, controls = true, className = "" }: any) => {
      let widthClass = "w-full"
      if (width === "1/2") widthClass = "w-1/2"
      if (width === "1/3") widthClass = "w-1/3"
      if (width === "2/3") widthClass = "w-2/3"
      if (width === "1/4") widthClass = "w-1/4"
      if (width === "3/4") widthClass = "w-3/4"
      
      return (
        <>
          <video 
            className={`${widthClass} h-auto rounded-lg mb-4 mx-auto block ${className}`}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            playsInline
          >
            <source src={src} type="video/mp4" />
            <source src={src.replace('.mp4', '.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {caption && (
            <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mb-6 italic">
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
    OneThirdTwoThird: ({ children }: any) => (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start">
        {children}
      </div>
    ),
    ProtectedContent,
    SpeakerIcon: ({ className = "h-6 w-6" }: any) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    ),
      ClickableSpeakerIcon: ({ audioSrc, label, className }: any) => (
      <ClickableSpeakerIcon audioSrc={audioSrc} label={label} className={className} />
    ),
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {project.frontmatter.title}
          </h1>
          
          {project.frontmatter.description && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {project.frontmatter.description}
            </p>
          )}

          {/* Tech Stack */}
          {project.frontmatter.tech && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.frontmatter.tech.map((technology: string) => (
                <span
                  key={technology}
                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            {project.frontmatter.github && (
              <a
                href={project.frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Code
              </a>
            )}
            
            {project.frontmatter.demo && (
              <a
                href={project.frontmatter.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Project Content */}
        <div className="max-w-none">
          <MDXRemote 
            source={project.content} 
            components={mdxComponents}
          />
        </div>

        {/* Navigation Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            More Projects
          </h2>
          <div className="flex justify-between items-center">
            {/* Previous Project */}
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="text-left">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Previous</div>
                  <div className="font-medium">{previousProject.frontmatter.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {/* View All Projects - Center */}
            <Link
              href="/projects"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              View All Projects
            </Link>

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 text-right"
              >
                <div className="text-right">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Next</div>
                  <div className="font-medium">{nextProject.frontmatter.title}</div>
                </div>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = await getContentData('projects')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}
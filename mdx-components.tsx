"use client"
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePassword } from '@/contexts/PasswordContext'

// Custom image component for MDX content - simplified to avoid nesting issues
function MDXImage({ 
  src, 
  alt, 
  width = "full",
  height = "auto",
  caption,
  className = "",
  align = "center"
}: {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  caption?: string
  className?: string
  align?: "left" | "center" | "right"
}) {
  const isFullWidth = width === "full"
  
  // Handle width classes properly
  let widthClass = "w-full"
  if (!isFullWidth) {
    if (typeof width === "number") {
      widthClass = `w-[${width}px]`
    } else if (width === "1/2") {
      widthClass = "w-1/2"
    } else if (width === "1/3") {
      widthClass = "w-1/3"
    } else if (width === "2/3") {
      widthClass = "w-2/3"
    } else if (width === "1/4") {
      widthClass = "w-1/4"
    } else if (width === "3/4") {
      widthClass = "w-3/4"
    } else {
      widthClass = `w-${width}`
    }
  }

  // Handle alignment classes
  let alignClass = ""
  if (!isFullWidth) {
    if (align === "left") {
      alignClass = "mr-auto ml-0"
    } else if (align === "right") {
      alignClass = "ml-auto mr-0"
    } else {
      alignClass = "mx-auto"
    }
  }

  if (height === "auto") {
    return (
      <>
        <img 
          src={src} 
          alt={alt} 
          className={`${widthClass} h-auto object-cover rounded-lg mb-4 ${alignClass} block ${className}`}
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
  }

  return (
    <>
      <span className={`block relative ${widthClass} rounded-lg overflow-hidden mb-4 ${alignClass}`} style={{ height: typeof height === "number" ? `${height}px` : height }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </span>
      {caption && (
        <span className={`block text-sm text-gray-600 dark:text-gray-400 mb-6 italic ${
          align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
        }`}>
          {caption}
        </span>
      )}
    </>
  )
}

// Two-column image layout
function ImageGallery({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {children}
    </div>
  )
}

// Two-column layout for image + text
function TwoColumn({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start">
      {children}
    </div>
  )
}

// Text block component for use in columns
function TextBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-sm">
      {children}
    </div>
  )
}

// Video component for MDX content
function MDXVideo({ 
  src, 
  width = "full",
  caption,
  autoplay = false,
  loop = false,
  muted = true,
  controls = true
}: {
  src: string
  width?: string | number
  caption?: string
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}) {
  const isFullWidth = width === "full"
  
  // Handle width classes
  let widthClass = "w-full"
  if (!isFullWidth) {
    if (typeof width === "number") {
      widthClass = `w-[${width}px]`
    } else if (width === "1/2") {
      widthClass = "w-1/2"
    } else if (width === "1/3") {
      widthClass = "w-1/3"
    } else if (width === "2/3") {
      widthClass = "w-2/3"
    } else if (width === "1/4") {
      widthClass = "w-1/4"
    } else if (width === "3/4") {
      widthClass = "w-3/4"
    } else {
      widthClass = `w-${width}`
    }
  }

  return (
    <>
      <video 
        className={`${widthClass} h-auto rounded-lg mb-4 ${!isFullWidth ? 'mx-auto block' : ''}`}
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
}

// Protected Video component
function ProtectedVideo({ 
  videoSrc, 
  imageSrc, 
  caption, 
  width = "full" 
}: {
  videoSrc: string
  imageSrc: string
  caption?: string
  width?: string | number
}) {
  const { isAuthenticated, authenticate } = usePassword()
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (authenticate(password)) {
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  if (isAuthenticated) {
    return <MDXVideo src={videoSrc} caption={caption} width={width} />
  }

  return (
    <div className="relative">
      <MDXImage src={imageSrc} alt="Protected content preview" width={width} />
      
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg max-w-sm">
          <h3 className="text-lg font-semibold mb-4">Protected Content</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-3 py-2 border rounded mb-3"
          />
          {showError && (
            <p className="text-red-500 text-sm mb-3">Incorrect password</p>
          )}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Access Content
          </button>
        </form>
      </div>
      
      {caption && (
        <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">
          {caption}
        </span>
      )}
    </div>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 mt-12">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200 mt-8">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-6 space-y-2 text-gray-600 dark:text-gray-300 list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    // Simple image handling that works within paragraphs
    img: ({ src, alt, ...props }) => (
      <img 
        src={src || ''} 
        alt={alt || ''} 
        className="w-full rounded-lg my-4 block"
        {...props}
      />
    ),
    // Make custom components available in MDX
    MDXImage,
    MDXVideo,
    ProtectedVideo,
    ImageGallery,
    TwoColumn,
    TextBlock,
    ...components,
  }
}

// Export individual components for server-side use
export { MDXImage, MDXVideo, ImageGallery, TwoColumn, TextBlock }
"use client";

import { useEffect, useState } from 'react';
import { MDXImage, MDXVideo } from '../../mdx-components';

export default function ProtectedContent({ 
  type = "image",
  protectedSrc, 
  placeholderSrc, 
  alt,
  caption 
}: {
  type?: "image" | "video"
  protectedSrc: string
  placeholderSrc: string  
  alt: string
  caption?: string
}) {
  const [showProtected, setShowProtected] = useState(false);
  
  useEffect(() => {
    const hasAccess = document.cookie.includes('portfolio_review=true');
    setShowProtected(hasAccess);
  }, []);

  if (showProtected) {
    return type === "video" ? 
      <MDXVideo src={protectedSrc} caption={caption} autoplay={true} loop={true} muted={true} /> :
      <MDXImage src={protectedSrc} alt={alt} caption={caption} />
  }

  return (
    <div className="relative">
      <MDXImage src={placeholderSrc} alt={alt} />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-lg">
        <div className="text-white text-center p-4">
          <h3 className="font-semibold mb-2">Content Sample</h3>
          <p className="text-sm opacity-90">Full video/animation available upon request</p>
        </div>
      </div>
      {caption && <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">{caption}</span>}
    </div>
  )
}
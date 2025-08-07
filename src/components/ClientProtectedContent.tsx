"use client";

import React, { useState, useEffect } from 'react';

interface ClientProtectedContentProps {
  type?: "image" | "video"
  protectedSrc: string
  placeholderSrc: string  
  alt: string
  caption?: string
}

export default function ClientProtectedContent({ 
  type = "image",
  protectedSrc, 
  placeholderSrc, 
  alt,
  caption 
}: ClientProtectedContentProps) {
  const [showProtected, setShowProtected] = useState(false);
  
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const hasAccess = document.cookie.includes('portfolio_review=true');
      setShowProtected(hasAccess);
    }
  }, []);

  // Show the actual content if unlocked
  if (showProtected) {
    return type === "video" ? (
      <div>
        <video 
          className="w-full h-auto rounded-lg mb-4 mx-auto block"
          autoPlay={true}
          loop={true}
          muted={true}
          controls={true}
          playsInline
        >
          <source src={protectedSrc} type="video/mp4" />
        </video>
        {caption && <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">{caption}</span>}
      </div>
    ) : (
      <div>
        <img src={protectedSrc} alt={alt} className="w-full h-auto object-cover block rounded-lg mb-4" />
        {caption && <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">{caption}</span>}
      </div>
    );
  }

  // Show placeholder if not unlocked
  return (
    <div>
      <div className="mb-4 rounded-lg overflow-hidden">
        <img 
          src={placeholderSrc} 
          alt={alt} 
          className="w-full h-auto object-cover block"
        />
      </div>
      <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold mb-2">Protected Design Work</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Available for portfolio review</p>
      </div>
      {caption && <span className="block text-center text-sm text-gray-600 dark:text-gray-400 mt-3 italic">{caption}</span>}
    </div>
  )
}
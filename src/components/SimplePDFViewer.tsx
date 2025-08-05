"use client";

import React, { useState } from 'react';

interface SimplePDFViewerProps {
  src: string;
  width?: string;
  height?: string;
  className?: string;
}

const SimplePDFViewer: React.FC<SimplePDFViewerProps> = ({ 
  src, 
  width = "full", 
  height = "600px", 
  className = "" 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // Force iframe reload // Start as false since most PDFs load quickly

  // Width classes for Tailwind - always use full width for better presentation
  let widthClass = "w-full max-w-none"; // max-w-none ensures no width constraints

  const handleIframeLoad = () => {
    console.log('PDF loaded successfully');
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    console.log('PDF failed to load');
    setIsLoading(false);
    setHasError(true);
  };

  // Calculate height based on typical presentation aspect ratio (16:9)
  const getIframeHeight = () => {
    if (height !== "auto") {
      return height; // Use custom height if provided
    }
    
    // For auto height, use responsive aspect ratio
    // This creates a 16:9 aspect ratio container
    return undefined; // Will use CSS aspect ratio instead
  };

  // Create presentation-style PDF URL
  const getPdfUrl = () => {
    // Use PDF viewer parameters for presentation mode
    const params = [
      `page=${currentPage}`,
      'view=FitH',        // Fit to horizontal width
      'zoom=page-width',  // Zoom to page width
      'toolbar=0',        // Hide toolbar
      'navpanes=0',       // Hide navigation panes
      'scrollbar=0',      // Hide scrollbar
      'statusbar=0',      // Hide status bar
      'messages=0',       // Hide messages
      'pagemode=none'     // No page thumbnails
    ].join('&');
    
    return `${src}#${params}`;
  };

  return (
    <div className={`${widthClass} ${className} mb-8`}>
      {/* Error state */}
      {hasError && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4">
          <p className="text-red-600 dark:text-red-400">
            Failed to load PDF. <a href={src} target="_blank" rel="noopener noreferrer" className="underline">Open in new tab</a>
          </p>
        </div>
      )}

      {/* PDF Iframe with responsive aspect ratio */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border">
        <div 
          className={height === "auto" ? "relative w-full" : ""}
          style={height === "auto" ? { paddingBottom: '56.25%' } : {}} // 56.25% = 16:9 aspect ratio
        >
          <iframe
            key={iframeKey} // This forces React to recreate the iframe when key changes
            src={getPdfUrl()}
            width="100%"
            height={getIframeHeight() || "100%"}
            className={`border-0 block w-full ${height === "auto" ? "absolute top-0 left-0 h-full" : ""}`}
            title="PDF Viewer"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ 
              display: hasError ? 'none' : 'block',
              minHeight: height === "auto" ? "auto" : height 
            }}
            allow="fullscreen"
          />
        </div>
      </div>

      {/* Simple Navigation */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => {
            const newPage = Math.max(1, currentPage - 1);
            setCurrentPage(newPage);
            setIframeKey(prev => prev + 1); // Force iframe reload
          }}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {/* 
          <label htmlFor="pageInput" className="text-sm text-gray-600 dark:text-gray-400">
            Page:
          </label>
          */}
          <input
            id="pageInput"
            type="number"
            value={currentPage}
            onChange={(e) => {
              const newPage = Math.max(1, parseInt(e.target.value) || 1);
              setCurrentPage(newPage);
              setIframeKey(prev => prev + 1); // Force iframe reload
            }}
            className="w-16 px-1 py-1 text-sm text-center border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            min="1"
          />
        </div>

        <button
          onClick={() => {
            const newPage = currentPage + 1;
            setCurrentPage(newPage);
            setIframeKey(prev => prev + 1); // Force iframe reload
          }}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Next
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SimplePDFViewer;
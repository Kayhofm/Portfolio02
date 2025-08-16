'use client'

interface ClickableSpeakerIconProps {
  audioSrc: string
  label: string
  className?: string
}

export default function ClickableSpeakerIcon({ audioSrc, label, className = "" }: ClickableSpeakerIconProps) {
  const handleClick = () => {
    const audio = new Audio(audioSrc)
    audio.play().catch(e => console.log('Audio play failed:', e))
  }

  return (
    <button 
      onClick={handleClick}
      className={`w-20 h-20 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center mb-4 transition-colors cursor-pointer ${className}`}
      aria-label={`Play ${label} sound`}
    >
      <svg className="h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
      </svg>
    </button>
  )
}
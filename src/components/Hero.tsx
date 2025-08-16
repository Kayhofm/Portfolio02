'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  // Design images for the top-right circle (smaller)
  const topCircleImages = [
    '/images/MetaGenUX.png',
    '/images/Orion_recipeLossy.webp',
    '/images/MetaRBMInitialApp01Square.webp',
    '/images/EchoHeroSquare.webp',
    '/images/Health_AP_Hero Page Devices-2Square.webp',
    '/images/Agency_HKM_InternationalHome.JPG'
  ]

  // Design images for the bottom-left circle (larger)
  const bottomCircleImages = [
    '/images/MetaCupAnimationLossy.webp',
    '/images/MetaColorcubeLossy.webp',
    '/images/MetaCounterAnimationLossy.webp',
    '/images/MetaButtonPeek.gif',
    '/images/MetaDoorAnimationLossy.webp'
  ]

  const [currentTopImage, setCurrentTopImage] = useState(0)
  const [currentBottomImage, setCurrentBottomImage] = useState(0)

  useEffect(() => {
    const topInterval = setInterval(() => {
      setCurrentTopImage((prev) => (prev + 1) % topCircleImages.length)
    }, 6500)

    const bottomInterval = setInterval(() => {
      setCurrentBottomImage((prev) => (prev + 1) % bottomCircleImages.length)
    }, 5000)

    return () => {
      clearInterval(topInterval)
      clearInterval(bottomInterval)
    }
  }, [topCircleImages.length, bottomCircleImages.length])

  return (
    <section className="bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-gray-900 dark:to-gray-800 pt-20 lg:pt-32 pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                Kay Hofmeester
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              <strong>Product Design Leader</strong> with 20+ years in AI and product innovation at Meta, Amazon, and Microsoft. 
              I define strategy and vision, empower and mentor designers, and partner tightly with Product and Engineering to ship. 
              I scale design systems and stay hands-on to deliver 0→1 launches. 
              30+ patents across AI, voice, AR, and input.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="/projects"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors text-center"
              >
                View My Work
              </a>
              <a
                href="/about"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
              >
                About Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/kayhofm"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/kayhofmeester"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/kayhof"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-square mx-auto max-w-md">
                {/* Circular container with gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                
                {/* Image container - forces circular crop */}
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/images/PortraitKay.jpeg"
                    alt="Kay Hofmeester"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                  />
                </div>
              </div>
              
              {/* Design slideshow circles */}
              <div className="absolute top-4 right-4 w-28 h-28 rounded-full overflow-hidden shadow-lg border-0 border-white/20">
                <Image
                  src={topCircleImages[currentTopImage]}
                  alt="Design work sample"
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="96px"
                />
              </div>
              <div className="absolute bottom-4 left-4 w-36 h-36 rounded-full overflow-hidden shadow-lg border-0 border-white/20">
                <Image
                  src={bottomCircleImages[currentBottomImage]}
                  alt="Design work sample"
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="64px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image?: string
  tech: string[]
  github?: string
  demo?: string
  slug: string
  imageCrop?: 'top' | 'center' | 'bottom' | 'contain'
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  github,
  demo,
  slug,
  imageCrop = 'center'
}: ProjectCardProps) {
  const cropClass = {
    'top': 'object-cover object-top',
    'center': 'object-cover object-center', 
    'bottom': 'object-cover object-bottom',
    'contain': 'object-contain'
  }[imageCrop]

  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Project Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className={cropClass}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400 dark:text-gray-500">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {tech.map((technology) => (
              <span
                key={technology}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
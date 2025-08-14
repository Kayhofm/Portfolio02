import ProjectCard from '@/components/ProjectCard'
import { getContentData } from '@/lib/utils'

export default async function ProjectsPage() {
  const projects = await getContentData('projects')
  
  // Sort projects to show featured first, then by date
  const sortedProjects = projects.sort((a, b) => {
    // Featured projects first
    if (a.frontmatter.featured && !b.frontmatter.featured) return -1
    if (!a.frontmatter.featured && b.frontmatter.featured) return 1
    
    // Then sort by date (newest first)
    return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Strategic design initiatives spanning AI-powered products, emerging technologies, and complex systems, showcasing how thoughtful design leadership accelerates innovation and business growth.
          </p>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.frontmatter.title}
                role={project.frontmatter.role}
                description={project.frontmatter.description}
                image={project.frontmatter.image}
                imageCrop={project.frontmatter.imageCrop}
                tech={project.frontmatter.tech}
                github={project.frontmatter.github}
                demo={project.frontmatter.demo}
                slug={project.slug}
                featured={project.frontmatter.featured}
              />
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
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">
                No projects yet
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Get started by creating some .mdx files in src/content/projects/
              </p>
              <div className="mt-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <strong>Quick start:</strong>
                  </p>
                  <ol className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>1. Create the directory: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mkdir -p src/content/projects</code></li>
                    <li>2. Add .mdx files with frontmatter</li>
                    <li>3. Refresh this page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        {sortedProjects.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <a
                href="/contact"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
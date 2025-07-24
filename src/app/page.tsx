import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import { getContentData } from '@/lib/utils'

export default async function Home() {
  // Get featured projects
  const projects = await getContentData('projects')
  const featuredProjects = projects.filter(project => project.frontmatter.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills and passion for innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  image={project.frontmatter.image}
                  imageCrop={project.frontmatter.imageCrop}  // Add this line
                  tech={project.frontmatter.tech}
                  github={project.frontmatter.github}
                  demo={project.frontmatter.demo}
                  slug={project.slug}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No featured projects yet. Add some MDX files to src/content/projects/
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Skills and technologies I work with to bring ideas to life.<br></br>
              I coded this portfolio using Next.js, React, Tailwind CSS, and MDX.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
              'JavaScript', 'Git'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kayhof@outlook.com"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
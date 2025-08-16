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
              Product experiences I've helped bring to life at Meta, Microsoft, and Amazon.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.length > 0 ? (
              featuredProjects.map((project) => (
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

      {/* Recommendations Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Recommendations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Feedback from designers and leaders I've had the privilege to work with.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recommendation 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 relative">
              <div className="mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "Kay is a one-of-a-kind design leader—someone who not only pushes the boundaries of what’s possible but also ensures every detail is considered along the way. 
                He has a rare ability to obsess over both strategy and execution, making complex ideas feel simple and innovative experiences feel inevitable."
              </blockquote>
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">Oscar Murillo</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Senior Design Director at Oracle</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">2025</div>
              </div>
            </div>

            {/* Recommendation 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 relative">
              <div className="mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "As a designer, Kay is curious and dedicated to his craft ... 
                As a manager, and mentor, Kay fosters growth, curiosity, and excellence. His guidance has significantly impacted my design career. 
                I wholeheartedly endorse Kay as a visionary leader and innovator in whatever industry he pursues."
              </blockquote>
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">Annika Rodrigues</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Product Designer at Meta</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">2025</div>
              </div>
            </div>

            {/* Recommendation 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 relative">
              <div className="mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "As a people leader and mentor, Kay was incredibly impactful for me at the early stage of my career."<br />
                "He led with care and compassion, understood me at a deeper level, and helped me turn around my entire attitude and mindset toward the work and relationships."
              </blockquote>
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <div className="font-semibold text-gray-900 dark:text-white">Gabe Clapper</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Staff UX Designer at Google</div>
                <div className="text-sm text-gray-500 dark:text-gray-500">2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-100 to-lightemerald-700 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Design Philosophy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I believe the best design happens when we combine visionary thinking with rigorous process. Starting with deep user understanding, I develop a compelling vision for what's possible, then cycle through rapid prototyping and collaborative iteration. 
            I create testable solutions early, gather feedback from diverse stakeholders, and refine both the vision and execution until we arrive at experiences that feel both intuitive and impactful.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Strategic design leadership capabilities and emerging technologies I leverage to build AI-powered products and scale design organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Figma', 'Creative Suite', 'Design Systems', 'AI/ML', 'React', 'Next.js', 'Node.js', 'Typescript', 'OpenAI API', 'ProtoPie', 'Jira', 'Miro', 'FigJam', 'Confluence', 'Blender', 'Unity', 'AR/VR', 'Voice UI'
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
            Contact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in new opportunities and design projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
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
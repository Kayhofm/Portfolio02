import { MDXRemote } from 'next-mdx-remote/rsc'

const aboutContent = `

<div className="max-w-4xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div className="lg:col-span-2">
      # About Me

      ### Hello! I'm Kay Hofmeester

      Innovative Design Leader with 20+ years of expertise in product innovation, AI, and managing design organizations at scale. Proven success in defining design strategy and vision, building high-performing design teams, and driving cross-functional excellence with Product and Engineering. Expert in establishing scalable design systems, directly contributing to design execution, championing user-centered design principles, and delivering industry-leading consumer products at Meta, Amazon, and Microsoft that enhance user engagement while maintaining quality.

      **Strategic Vision and Executive Leadership:** Defined long-term design strategy and vision, collaborating with VP- / CEO-level executives (Bezos, Zuckerberg) to drive cross-functional excellence, align design efforts with business objectives at leading tech companies, and enhance user engagement

      **High-Performing Team Leadership:** Built, mentored, and led 12+ multi-disciplinary design teams at scale across product design, prototyping, conversation design, and user research, establishing mature design organizations, including mentoring senior designers and managers

      **User-Centered Innovation:** Delivered industry-leading UX solutions for consumer products including wearable devices, multimodal inputs (touch, voice, hands, gaze), and AI-powered technologies

      **Design Systems and Technology Development:** Filed 30+ patents and drove scalable innovation in AI (vision and activity models), voice (TTS, ASR, NLU), and AR (display and rendering) technologies, establishing design principles and frameworks for consistency across platforms

      **Thought Leadership and Design Excellence:** Presented at leading conferences, authored influential publications, taught user-centered design principles, elevating design craft

      ### Skills

      **Leadership and Management:** Team Building at Scale, Design Org Development, Exec Stakeholder Communication, Cross-Functional Partnership, Resource Planning, Team Mentorship, Adaptability

      **Strategy and Vision:** Design Strategy and Roadmapping, Strategic Vision and Long-Term Planning, Innovation and Emerging Technology, Business Objective Alignment, Product Strategy

      **Design Systems and Quality:** Scalable Design Principles, Design System Development, Design Quality Standards, Platform Consistency, Rapid Prototyping

      **User-Centered Design:** User Research Integration, Data-Informed Decisions, Customer Journey Optimization, Usability, User Engagement and Retention

      **Collaboration and Process:** Agile, Design Process Optimization, Workshop Facilitation, Design Operations

      ### When I'm Not Designing

      Outside of design, you might find me:
      - 🎭 At improv
      - ⛵ On the water sailing or kayaking
      - 🤿 Under water scuba diving
      - 🏋️ At CrossFit
      - ✍️ Writing about design or health

      ### Let's Connect

      I'm always interested in new opportunities, collaborations, or just having a chat about design or technology. Feel free to reach out!
    </div>

    <div className="lg:col-span-1">
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">

        <div className="text-center">

        <a 
          href="/pdfs/KayHofmeester_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-200 text-lg leading-none"
        >Download Resume</a>

        </div>

        <br />

        ### Quick Facts

        **📍 Location:** Seattle, WA  
        **💼 Experience:** 20+ years  
        **🎓 Education:** Delft University of Technology  
        **☕ Favorite Drink:** Coffee  

        ### Current Focus

        - Leading AI design initiatives
        - Building generative UX experiences
        - Mentoring designers
        - Speaking at conferences

        ### Expertise Areas

        <strong>Leadership</strong><br />
        - Team Building at Scale
        - Design Organization Development
        - Executive Communication
        - Cross-Functional Partnership

        <strong>Design</strong><br />
        - Product Strategy
        - User Experience Design
        - Design Systems
        - Prototyping

        <strong>Technology</strong><br />
        - AI/ML Product Design
        - Voice Interfaces
        - AR/VR Experiences
        - Multimodal Interactions
      </div>
    </div>

  </div>
</div>
`

export default function AboutPage() {
  const mdxComponents = {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }: any) => (
      <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="mb-6 space-y-1 text-gray-600 dark:text-gray-300 list-disc list-outside pl-6">
        {children}
      </ul>
    ),
    li: ({ children }: any) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    a: ({ href, children, ...props }: any) => {
      if (href?.includes('Resume') || href?.includes('resume')) {
        return (
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors inline-flex items-center justify-center mb-4 [&>p]:mb-0"
            {...props}
          >
            {children}
          </a>
        )
      }
      // Regular link styling
      return (
        <a 
          href={href}
          className="text-blue-600 hover:text-blue-800 underline"
          {...props}
        >
          {children}
        </a>
      )
    },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <MDXRemote source={aboutContent} components={mdxComponents} />
    </div>
  )
}
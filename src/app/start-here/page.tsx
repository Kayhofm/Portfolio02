import { MDXRemote } from 'next-mdx-remote/rsc'

const startHereContent = `

<div className="max-w-4xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
    <div className="lg:col-span-2">
      # Start Here

      Design Leader & player‑coach — I build v1s, scale design orgs, and prototype the path to launch. Former Meta, Amazon, Microsoft.

      Target roles: Senior Design Manager • Design Director • Head of Design (hands‑on)

      ### What I'm hired to do

      - Ship v1s: take ambiguous 0→1 initiatives to an executive‑fundable product vision and working prototypes.
      - Scale orgs: structure teams, rituals, and quality bars for multi‑team execution.
      - Prototype to decide: reduce risk with coded proofs (React/Node/ProtoPie), design systems, and evaluative studies.

      ### Quick stats

      12+ design/prototyping teams built and led

      30+ patents (AI vision/activity models, voice, AR)

      4 flagship platforms: Alexa • Microsoft Health • Meta AR (Orion/Ray‑Ban) • Microsoft Windows

      Hands‑on: React/Node, prototyping, interaction design, conversation design, vision artifacts, design systems

      Contact: kayhof@outlook.com • LinkedIn /kayhofmeester
      <br />

      <div className="text-center">
        <a 
          href="/pdfs/KayHofmeester_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-7 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-200 text-lg leading-none"
        >Download Resume</a>
      </div>
    </div>

    <div className="lg:col-span-1">
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">

        <MDXImage
          src="/images/Health_AP_Hero Page Devices-2.png"
          alt="Microsoft Band app"
          caption="Microsoft Health - Increased user engagement 10x"
        />

        <MDXImage
          src="/images/AlexaHero.png"
          alt="Alexa app"
          caption="Amazon Alexa - Sold 10x forecast"
        />

        <MDXImage
          src="/images/MetaOrionWomanScreens.webp"
          alt="Scenario overview"
          caption="Meta Orion - 'This might be the best look into the future of tech that I've ever seen.' - MKBHD"
        />
        
      </div>
    </div>

  </div>
</div>
`

// Custom image component for MDX content - simplified to avoid nesting issues
function MDXImage({ 
  src, 
  alt, 
  width = "full",
  height = "auto",
  caption,
  className = "",
  align = "center",
  style = {}
}: {
  src: string
  alt: string
  width?: string | number
  height?: string | number
  caption?: string
  className?: string
  align?: "left" | "center" | "right"
  style?: React.CSSProperties
}) {
  const isFullWidth = width === "full"
  
  // Handle width classes properly
  let widthClass = "w-full"
  if (!isFullWidth) {
    if (typeof width === "number") {
      widthClass = `w-[${width}px]`
    } else if (width === "1/2") {
      widthClass = "w-1/2"
    } else if (width === "1/3") {
      widthClass = "w-1/3"
    } else if (width === "2/3") {
      widthClass = "w-2/3"
    } else if (width === "1/4") {
      widthClass = "w-1/4"
    } else if (width === "3/4") {
      widthClass = "w-3/4"
    } else {
      widthClass = `w-${width}`
    }
  }

  // Handle alignment classes
  let alignClass = ""
  if (!isFullWidth) {
    if (align === "left") {
      alignClass = "mr-auto ml-0"
    } else if (align === "right") {
      alignClass = "ml-auto mr-0"
    } else {
      alignClass = "mx-auto"
    }
  }

  if (height === "auto") {
    return (
      <>
        <div className={`${className} ${alignClass} mb-4 rounded-lg overflow-hidden`} style={style}>
          <img 
            src={src} 
            alt={alt} 
            className={`${widthClass} h-auto object-cover block`}
          />
        </div>
        {caption && (
          <span className={`block text-sm text-gray-600 dark:text-gray-400 mb-6 italic ${
            align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
          }`}>
            {caption}
          </span>
        )}
      </>
    )
  }

  // Return for non-auto height (you had this missing)
  return (
    <>
      <div className={`${className} ${alignClass} mb-4 rounded-lg overflow-hidden`} style={style}>
        <span className={`block relative ${widthClass} rounded-lg overflow-hidden`} style={{ height: typeof height === "number" ? `${height}px` : height }}>
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </span>
      </div>
      {caption && (
        <span className={`block text-sm text-gray-600 dark:text-gray-400 mb-6 italic ${
          align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
        }`}>
          {caption}
        </span>
      )}
    </>
  )
}

export default function StartHerePage() {
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
    MDXImage,
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <MDXRemote source={startHereContent} components={mdxComponents} />
    </div>
  )
}
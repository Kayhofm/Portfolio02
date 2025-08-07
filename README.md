## Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing design leadership work, blog posts, and interactive projects. Features include MDX-powered content management, PDF slideshow integration, and a custom design system.

View Live Portfolio: www.kayhofmeester.com

### Features

- Modern Tech Stack: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- MDX Content Management: Blog posts and project descriptions written in MDX with custom components
- Interactive PDF Viewer: Custom PDF slideshow component for presentations
- Responsive Design: Mobile-first design that works on all devices
- Dark Mode Support: Toggle between light and dark themes
- Static Generation: Fast page loads with Next.js static generation
- SEO Optimized: Built-in SEO features for better search visibility
- Custom Components: Reusable MDX components for rich content layouts

### Tech Stack

- Framework: Next.js 15
- Language: TypeScript
- Styling: Tailwind CSS
- Content: MDX for blog posts and project pages
- Deployment: Vercel
- Font: Lato

### Project Structure

portfolio02/<br />
├── src/<br />
│ ├── app/ # Next.js app directory<br />
│ │ ├── blog/ # Blog pages and dynamic routes<br />
│ │ ├── projects/ # Project pages and dynamic routes<br />
│ │ └── components/ # React components<br />
│ ├── components/ # Reusable UI components<br />
│ ├── content/ # MDX content files<br />
│ │ ├── blog/ # Blog post MDX files<br />
│ │ └── projects/ # Project MDX files<br />
│ └── lib/ # Utility functions<br />
├── public/ # Static assets<br />
│ ├── images/ # Project and blog images<br />
│ └── pdfs/ # PDF presentations<br />
├── mdx-components.tsx # Global MDX component definitions<br />
└── next.config.js # Next.js configuration<br />

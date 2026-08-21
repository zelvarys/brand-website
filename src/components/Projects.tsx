import { useEffect } from 'react'

interface Project {
  icon: string
  title: string
  description: string
  tags: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    icon: 'fa-cloud-download',
    title: 'Media Downloader API',
    description: 'RESTful API to download media from YouTube, TikTok, Instagram, and Facebook using FastAPI and yt-dlp with support for multiple video qualities, audio extraction, and batch processing.',
    tags: ['Python', 'FastAPI', 'yt-dlp', 'HTTPX'],
    github: 'https://github.com/zelvarys/media-downloader',
    live: 'https://api.zelvarys.dev/media',
  },
  {
    icon: 'fa-comment-dots',
    title: 'Python WhatsApp Bot',
    description: 'General-purpose WhatsApp bot built with PyWA for handling messages, commands, and interactive responses with auto-reply, command parsing, and custom callback queries.',
    tags: ['Python', 'PyWA', 'WhatsApp', 'asyncio'],
    github: 'https://github.com/zelvarys/whatsapp-bot',
    live: 'https://wa.me/1234567890',
  },
  {
    icon: 'fa-robot',
    title: 'Automation Suite',
    description: 'Python automation scripts for web scraping, data processing, and task scheduling with cron-based execution, logging, and modular work flows for extracting data from multiple sources.',
    tags: ['Python', 'Selenium', 'Cron', 'Pandas'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-cloud',
    title: 'Deployment Pipeline',
    description: 'CI/CD pipeline with automated testing, building, and deployment to Vercel and cloud platforms using GitHub Actions with multi-environment support and automated rollbacks.',
    tags: ['Docker', 'GitHub Actions', 'Vercel', 'AWS'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-database',
    title: 'Data Processing Tool',
    description: 'ETL pipeline for large datasets using Python, SQLAlchemy, Pandas, and Redis caching with data validation, transformation, and aggregation across multiple database backends.',
    tags: ['Python', 'SQLAlchemy', 'Pandas', 'Redis'],
    github: 'https://github.com/zelvarys/',
    live: '#',
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Modern Brand Website',
    description: 'Responsive brand website built with React and TypeScript featuring dark mode, smooth animations, and optimized performance with SEO optimization and component-based architecture.',
    tags: ['TypeScript', 'React', 'CSS', 'Vite'],
    github: 'https://github.com/zelvarys/brand-website',
    live: 'https://zelvarys.dev',
  },
]

const Projects = () => {
  useEffect(() => {
    const grid = document.getElementById('projectsGrid')
    if (!grid) return

    grid.innerHTML = projects
      .map(
        (project) => `
      <div class="project-card">
        <div class="project-header">
          <div class="project-icon">
            <i class="fas ${project.icon}"></i>
          </div>
          <h3>${project.title}</h3>
        </div>
        <div class="project-body">
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-footer">
          <a href="#" class="btn-link">View Details <i class="fas fa-arrow-right"></i></a>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i></a>
            <a href="${project.live}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
    `
      )
      .join('')
  }, [])

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2>Projects Archive</h2>
          <p>
            Diverse collection of projects that showcase my ability to build
            and maintain production-ready software.
          </p>
        </div>
        <div className="projects-grid" id="projectsGrid"></div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Got a project in mind?</h2>
          <p>Let's collaborate and build something great together.</p>
          <a href="#contact" className="btn btn-primary">
            <i className="fas fa-comment"></i> Let's talk
          </a>
        </div>
      </section>
    </>
  )
}

export default Projects
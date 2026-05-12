import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Hotel Management TFL',
    desc: 'A web-based hotel management system developed to manage bookings and guest services efficiently, improving operational workflow at Thanima Farm Life.',
    tech: ['Html'],
    category: 'Full Stack',
    color: '#c8f04c',
    image: 'https://imgs.search.brave.com/aGNGQXC3kJlv_0rXlRsnh6uJgqXhttbWicROnYYl4-Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbm5v/dmF0aXZlLWhvdGVs/LW1hbmFnZW1lbnQt/c29sdXRpb25zLW1v/ZGVybi1lbnRlcnBy/aXNlcy1mZWF0dXJp/bmctc21hcnQtdGVj/aG5vbG9neS1lZmZp/Y2llbnQtZGlzdHJp/YnV0aW9uLXN5c3Rl/bXMtcXVhcmstNDQw/NjI1MjE0LmpwZw',
    github: 'https://github.com/aswinachuz/hotel-management-tfl',
    demo: 'https://aswinachuz.github.io/hotel-management-tfl/',
  },
  {
    id: 2,
    title: 'Marriage Invitation',
    desc: 'A modern digital wedding invitation built using React.js, designed to share wedding details in an elegant and interactive way. The website includes sections like the couple’s introduction, event details, photo gallery, and RSVP, all presented with smooth navigation and responsive design.',
    tech: ['React', 'CSS', 'JavaScript'],
    category: 'FrontEnd',
    color: '#6ee7f7',
    image: 'https://imgs.search.brave.com/t8FFRHnyGFMA5VAChnk7rMDpZMxxThUm_ZTYrXBnTFY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wdW5h/cnZpdmFoYW0uaW4v/cHVibGljL2ltYWdl/cy9nYWxsZXJ5L3Nl/Y29uZC1tYXJyaWFn/ZS1tYXRyaW1vbnkt/a2VyYWxhLmpwZw',
    github: 'https://vercel.com/aswins-projects-76e27c23?repo=https://github.com/aswinachuz/aswinachuz-Aswin-Sandhra-Wedding-Invitation',
    demo: 'https://aswin-sandhra-wedding-invitation.vercel.app/',
  },
  {
    id: 3,
    title: 'Security Report Management System',
    desc: 'A web-based application designed to manage and track security-related reports efficiently. The system allows users to create, update, and monitor incident reports while maintaining organized records for better security management and decision-making. It helps streamline reporting processes, improve accountability, and ensure quick access to critical security data.',
    tech: ['Html'],
    category: 'FrontEnd',
    color: '#f7a46e',
    image: 'https://imgs.search.brave.com/VGdlhewB-r7eRgmmKUSUNRY_xdrkWHKbYjUx92KPAYQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rZXlz/dG9uZWNvcnAuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI1/LzA3L1RoZS1TdHJ1/Y3R1cmUtb2YtYW4t/SVQtU2VjdXJpdHkt/TWFuYWdlbWVudC1T/eXN0ZW0ud2VicA',
    github: 'https://github.com/aswinachuz/Security-report-management',
    demo: 'https://github.com/aswinachuz/Security-report-management',
  },
  {
    id: 4,
    title: 'Love You Ammu – Digital Love Website',
    desc: 'A romantic React-based web app designed to creatively express love through animations, personalized messages, and an interactive user experience.',
    tech: ['React','html','CSS'],
    category: 'FrontEnd',
    color: '#b96ef7',
    image: 'https://imgs.search.brave.com/4-Lv9YPYXHKQW44cpTH7FMAWQLFFV9klJQvEO6OniqM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbG92/ZS1waWN0dXJlcy03/a2Y5c3RmaWI1OWZu/Y3JoLmpwZw',
    github: 'https://aswinachuz.github.io/love-you-ammu/',
    demo: 'https://vercel.com/aswins-projects-76e27c23/love-you-ammu/Cn3gMq1Br2JRavcUoPHTgmP9nj7P',
  },
  // {
  //   id: 5,
  //   title: 'PulseAPI',
  //   desc: 'A high-throughput REST + GraphQL API gateway with rate limiting, JWT auth, and auto-generated OpenAPI docs.',
  //   tech: ['Node.js', 'GraphQL', 'Docker', 'PostgreSQL', 'Redis'],
  //   category: 'Backend',
  //   color: '#6ee7f7',
  //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  // },
  // {
  //   id: 6,
  //   title: 'WeatherWave',
  //   desc: 'A beautiful weather PWA with animated conditions, hourly forecasts, and location-based alerts. Installable on any device.',
  //   tech: ['React', 'PWA', 'OpenWeather API', 'Framer Motion'],
  //   category: 'Frontend',
  //   color: '#c8f04c',
  //   image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
  //   github: 'https://github.com',
  //   demo: 'https://example.com',
  // },
]

const filters = []

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <PageTransition>
      <section className="projects section">
        <div className="container">
          <p className="section-label">My Work</p>
          <div className="projects-header">
            <h1 className="section-title">Projects I've built</h1>

            <div className="filter-bar">
              {filters.map(f => (
                <button
                  key={f}
                  className={`filter-btn ${active === f ? 'active' : ''}`}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <motion.div className="projects-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      className="project-card"
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
        />
        <div className="card-image-overlay" style={{ opacity: hovered ? 1 : 0 }}>
          <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-btn">
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn outline">
            GitHub ↗
          </a>
        </div>
        <span className="card-category" style={{ '--cat-color': project.color }}>
          {project.category}
        </span>
      </div>

      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p className="card-desc">{project.desc}</p>

        <div className="card-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="card-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="card-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="card-link accent">
            Live Demo →
          </a>
        </div>
      </div>
    </motion.article>
  )
}

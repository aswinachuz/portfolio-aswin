import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'CSS / Tailwind', level: 90 },
      { name: 'Framer Motion', level: 45 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python / FastAPI', level: 80 },
      { name: 'Express.js', level: 86 },
      { name: 'MongoDB', level: 85 },
      { name: 'GraphQL', level: 87 },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠',
    skills: [
      { name: 'VSCode', level: 95 },
      { name: 'Postman', level: 80 },
      { name: 'MongoDB Compass', level: 82 },
      { name: 'React DevTools', level: 85 },
      { name: 'Node.js Package Manager', level: 88 },
    ],
  },
]

const techIcons = [
  'Git', 'GitHub', 'Figma', 'Node', 'Python', 'Go',
  'Docker', 'Kubernetes', 'AWS', 'Firebase', 'PostgreSQL', 'Redis',
]

function SkillBar({ name, level, index }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-meta">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={visible ? { width: `${level}%` } : {}}
          transition={{ duration: 0.8, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <PageTransition>
      <section className="skills section">
        <div className="container">
          <p className="section-label">My Skills</p>
          <h1 className="section-title" style={{ marginBottom: '60px' }}>
            Technologies I work with
          </h1>

          <div className="skills-grid">
            {categories.map(({ label, icon, skills }) => (
              <div className="skill-category" key={label}>
                <div className="category-header">
                  <span className="category-icon">{icon}</span>
                  <h2>{label}</h2>
                </div>
                <div className="skill-bars">
                  {skills.map((s, i) => (
                    <SkillBar key={s.name} {...s} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tech chip cloud */}
          <div className="tech-cloud">
            <p className="section-label" style={{ marginBottom: '20px' }}>Also familiar with</p>
            <div className="tech-chips">
              {techIcons.map((t, i) => (
                <motion.span
                  key={t}
                  className="tech-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, borderColor: 'var(--accent)' }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

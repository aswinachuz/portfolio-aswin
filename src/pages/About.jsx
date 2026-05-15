import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const highlights = [
  { icon: '🎓', title: 'Education', desc: 'B.Tech in Information Technology, MESCE Kuttipuram, 2019' },
  { icon: '💼', title: 'Experience', desc: '3+ years building scalable web apps and APIs' },
  { icon: '🌍', title: 'Location', desc: 'Kerala, India — Open to remote' },
  { icon: '🚀', title: 'Passion', desc: 'AI Integration & Developer Ecosystem' },
]

function RevealCard({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <PageTransition>
      <section className="about section">
        <div className="container">
          <div className="about-header">
            <p className="section-label">About Me</p>
            <h1 className="section-title">Crafting digital<br />experiences that last</h1>
          </div>

          <div className="about-body">
            <div className="about-left">
              <div className="about-photo-wrap">
                <img
                  src="Assests/Aswinphoto.jpeg"
                  alt="Aswin U"
                  className="about-photo"
                />
                <div className="about-photo-accent" />
              </div>
            </div>

            <div className="about-right">
              <RevealCard>
                <div className="about-intro">
                  <h2>Hey, I'm Aswin — a  MERN Stack Developer based in Kerala.</h2>
                  <p>
                    I've spent the last 3 years turning complex problems into clean, fast,
                    and intuitive software. I love the full spectrum: from designing pixel-perfect
                    UIs to architecting distributed backend systems.
                  </p>
                  <p>
                    When I'm not coding, I'm probably reading about distributed systems,
                    contributing to open source, or experimenting with generative design tools.
                  </p>
                </div>
              </RevealCard>

              <RevealCard delay={0.1}>
                <div className="about-objective">
                  <h3>Career Objective</h3>
                  <p>
                    To join a product-driven team where I can contribute to building systems
                    that scale globally — while continuing to grow as both an engineer and a
                    product thinker. I'm most energised by work that sits at the intersection
                    of great engineering and great user experience.
                  </p>
                </div>
              </RevealCard>

              <div className="about-highlights">
                {highlights.map(({ icon, title, desc }, i) => (
                  <RevealCard key={title} delay={0.1 * i}>
                    <div className="highlight-card">
                      <span className="highlight-icon">{icon}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </RevealCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

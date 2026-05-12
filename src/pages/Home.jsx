import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import './Home.css'

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Home() {
  return (
    <PageTransition>
      <section className="home section">
        <div className="container">
          <div className="home-grid">
            {/* Text side */}
            <motion.div
              className="home-text"
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              <motion.p className="home-greeting" variants={fadeUp}>
                👋 Hello, I'm
              </motion.p>

              <motion.h1 className="home-name" variants={fadeUp}>
                Aswin<br />
              </motion.h1>

              <motion.div className="home-tagline-wrap" variants={fadeUp}>
                <span className="home-tagline">MERN Stack Developer</span>
              </motion.div>

              <motion.p className="home-bio" variants={fadeUp}>
                I craft high-performance digital experiences — from elegant interfaces
                to robust backend systems. Obsessed with clean code and great design.
              </motion.p>

              <motion.div className="home-cta" variants={fadeUp}>
                <Link to="/projects" className="btn btn-primary">
                  View Projects →
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Let's Talk
                </Link>
              </motion.div>

              <motion.div className="home-stats" variants={fadeUp}>
                {[
                  { n: '2+', label: 'Years Exp.' },
                  { n: '08+', label: 'Projects' },
                  { n: '03+', label: 'Clients' },
                ].map(({ n, label }) => (
                  <div className="stat" key={label}>
                    <span className="stat-num">{n}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image side */}
            <motion.div
              className="home-image-wrap"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="home-image-ring">
                <img
                  src="src\aaa.jpeg"
                  alt="Profile"
                  className="home-avatar"
                />
              </div>
              <div className="home-badge badge-1">
                <span>⚡</span> React
              </div>
              <div className="home-badge badge-2">
                <span>🛠</span> Node.js
              </div>
              <div className="home-badge badge-3">
                <span>🎨</span> Figma
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </section>
    </PageTransition>
  )
}

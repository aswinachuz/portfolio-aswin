import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import './Contact.css'

const socials = [
  {
    name: 'GitHub',
    handle: '@aswinachuz',
    href: 'https://github.com/aswinachuz',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Aswin Kumar U ',
    href: 'www.linkedin.com/in/aswin-kumar-u',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    handle: '@Aswin1804',
    href: 'https://x.com/Aswin1804',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSent(true)
  }

  const handleChange = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(err => ({ ...err, [field]: '' }))
  }

  return (
    <PageTransition>
      <section className="contact section">
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className="section-title" style={{ marginBottom: '16px' }}>
            Let's build something<br />together
          </h1>
          <p className="contact-subtitle">
            Whether you have a project in mind, a role to fill, or just want to say hi —
            my inbox is always open.
          </p>

          <div className="contact-grid">
            {/* Form */}
            <motion.div
              className="contact-form-wrap"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {!sent ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group ${errors.name ? 'error' : ''}`}>
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange('name')}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className={`form-group ${errors.email ? 'error' : ''}`}>
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="abc@gmail.com"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label>Message</label>
                    <textarea
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      value={form.message}
                      onChange={handleChange('message')}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send Message →
                  </button>
                </form>
              ) : (
                <motion.div
                  className="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                  <button className="btn btn-outline" onClick={() => { setSent(false); setForm({ name:'', email:'', message:'' }) }}>
                    Send another
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Info side */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a href="mailto:aswin2690@gmail.com" className="detail-value">aswin2690@gmail.com</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Kerala, India</span>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Availability</span>
                <span className="detail-value avail">
                  <span className="avail-dot" /> Open to opportunities
                </span>
              </div>

              <div className="social-section">
                <p className="section-label" style={{ marginBottom: '16px' }}>Find me on</p>
                <div className="social-links">
                  {socials.map(({ name, handle, href, icon }) => (
                    <a key={name} href={href} target="_blank" rel="noreferrer" className="social-card">
                      <span className="social-icon">{icon}</span>
                      <div>
                        <div className="social-name">{name}</div>
                        <div className="social-handle">{handle}</div>
                      </div>
                      <span className="social-arrow">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

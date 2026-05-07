import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="about-page">
      <section className="section">
        <h2>About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '40px' }}>
          <div>
            <p style={{ fontSize: '1.2rem' }}>
              I’m a passionate and curious developer who enjoys building clean, user-friendly web applications. I love learning new technologies and turning ideas into practical digital solutions.
            </p>
          </div>
          <div className="muted">
            <p>Email: itshooroasad@gmail.com</p>
            <p>Location: Lahore, Pakistan</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          CONTACT ME
        </motion.h2>
        
        <div className="contact-links" style={{ alignItems: 'center' }}>
          <a href="mailto:itshooroasad@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: 'none' }}>
            <span style={{ fontSize: '1.5rem' }}>✉️</span>
            <span>EMAIL</span>
          </a>
          <a href="https://www.linkedin.com/in/hoorulain-asad-b69924396/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: 'none' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{ width: '40px', height: '40px' }} />
            <span>LINKEDIN</span>
          </a>
          <a href="https://github.com/HoorulainAsad" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', border: 'none' }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{ width: '40px', height: '40px', filter: 'invert(0)' }} />
            <span>GITHUB</span>
          </a>
        </div>
      </section>
    </div>
  )
}

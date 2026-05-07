import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-text">RESUME</div>
      
      <div className="spinning-text-container">
        <div className="spinning-text">
          <svg viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
            <text>
              <textPath xlinkHref="#circlePath" style={{ fontSize: '7.5px', fontFamily: 'var(--font-body)', fontWeight: '900', letterSpacing: '2.5px' }}>
                HOORULAIN ASAD • CREATIVE DEVELOPER • HOORULAIN ASAD • 
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <h1>HOORULAIN ASAD</h1>
      
      <div className="intro">
        <p>What makes my work unique is the combination of technical expertise and a personal touch.</p>
      </div>

      <motion.div 
        className="photo-container"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={`${import.meta.env.BASE_URL}assets/profile.jpeg`} alt="Profile" className="photo" />
      </motion.div>

      <div className="intro-right">
        <p>Immerse yourself in a world where each line of code tells a story, capturing the beauty of the ordinary and the extraordinary.</p>
      </div>
    </section>
  )
}

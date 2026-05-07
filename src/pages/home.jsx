import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/hero'

export default function Home() {
  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" }
  ];

  const education = [
    { year: "Ongoing", title: "BS Lateral in Computer Science", school: "Virtual University of Pakistan" },
    { year: "2023", title: "ADP Computer Science", school: "Virtual University of Pakistan" },
    { year: "2021", title: "FSc Pre-Medical", school: "Unique College" },
    { year: "2019", title: "Matriculation", school: "Fatima Science Girls High School" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Hero />

      <section className="section">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Studies
        </motion.h2>

        <div className="studies-container">
          <motion.div 
            className="studies-image-wrapper"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <img src={`${import.meta.env.BASE_URL}assets/education.png`} alt="Education Aesthetic" />
          </motion.div>

          <div className="edu-list">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className="edu-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <div className="year" style={{ fontSize: '1rem', opacity: 0.6 }}>{edu.year}</div>
                <h3>{edu.title}</h3>
                <p className="muted">{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <h2 style={{ color: 'var(--accent-color)' }}>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

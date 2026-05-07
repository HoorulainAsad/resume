import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/projectcard'
import { getProjects } from '../utils/persistence'

export default function Projects() {
  const [projectsList, setProjectsList] = useState([])

  useEffect(() => {
    setProjectsList(getProjects())
  }, [])

  return (
    <div className="section">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Works
      </motion.h2>
      
      <p className="muted" style={{ marginBottom: '60px', maxWidth: '600px' }}>
        Browse through a diverse works showcasing a blend of candid moments, stunning landscapes, and captivating portraits. The world through the eyes of a dedicated visual storyteller.
      </p>

      <motion.div 
        className="timeline-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {projectsList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

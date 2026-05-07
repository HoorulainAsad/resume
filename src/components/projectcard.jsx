import React from 'react'
import { getAssetPath } from '../utils/assets'

export default function ProjectCard({ project, index }) {
  const {
    title,
    description,
    technologies = [],
    liveLink,
    image
  } = project || {}

  return (
    <a 
      href={liveLink || '#'} 
      className="timeline-item" 
      target="_blank" 
      rel="noreferrer"
    >
      <div className="img-container">
        {image && <img src={getAssetPath(image)} alt={title} className="project-img" />}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', marginTop: '5px', opacity: 0.6 }}>
          {technologies.join(' / ')}
        </div>
      </div>
      <div className="discover-btn">Discover</div>
    </a>
  )
}

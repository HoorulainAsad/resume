import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  // Fallback if data is missing
  const {
    id,
    title,
    description,
    technologies = [],
    liveLink,
    image
  } = project || {}

  return (
    <article className="project-card">
      {/* 1. Image Area (User to customize) */}
      <div className="project-image-area">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <span>Project Preview</span>
        )}
      </div>

      <div className="project-content">
        {/* 2. Title & Description */}
        <h3>{title || "Project Title"}</h3>
        <p>{description || "Short description of the project goes here. Explain what you built and why."}</p>

        {/* 3. Technologies Used */}
        <div className="tech-section">
          <h4>Technologies Used</h4>
          <div className="tech">
            {technologies.length > 0 ? (
              technologies.map((t, i) => (
                <span className="tag" key={i}>{t}</span>
              ))
            ) : (
              <span className="tag">Tech 1</span>
            )}
          </div>
        </div>

        {/* 4. Live Link Button */}
        <a
          className="live-link-btn"
          href={liveLink || '#'}
          target="_blank"
          rel="noreferrer"
        >
          Live Link
        </a>
      </div>
    </article>
  )
}

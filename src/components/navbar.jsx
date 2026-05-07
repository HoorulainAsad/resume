import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/projects">Works</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/about">Contact</Link>
      </div>
    </nav>
  )
}

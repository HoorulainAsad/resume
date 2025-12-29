import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-brand">
        <div style={{ width: 12, height: 12, background: '#ffb4b4', borderRadius: 6 }}></div>
        <div>Hoorulain Asad</div>
      </div>
      <nav className="nav-links">
        <Link className="btn" to="/">Home</Link>
        <Link className="btn" to="/projects">Projects</Link>
        <Link className="btn" to="/certifications">Certifications</Link>
        <Link className="btn" to="/about">About</Link>
      </nav>
    </header>
  )
}

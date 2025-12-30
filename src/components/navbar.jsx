import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-nav">
      <div className="nav-brand">
        <div style={{ width: 12, height: 12, background: '#ffb4b4', borderRadius: 6 }}></div>
        <div>Hoorulain Asad</div>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link className="btn" to="/" onClick={closeMenu}>Home</Link>
        <Link className="btn" to="/projects" onClick={closeMenu}>Projects</Link>
        <Link className="btn" to="/certifications" onClick={closeMenu}>Certifications</Link>
        <Link className="btn" to="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="photo-container">
        <img src={`${import.meta.env.BASE_URL}assets/profile.jpeg`} alt="Profile" className="photo" />
      </div>
      <div className="intro">
        <h1>Hoorulain Asad</h1>
        <p className="muted">Hello, I'm Hoorulain Asad. I am a dedicated student with a growing skill set in web development and a strong interest in building modern, responsive applications. I am actively seeking opportunities to apply my knowledge, enhance my technical abilities, and grow professionally. Please feel free to check out my site to explore the projects i have made and to get to know me better.</p>
        <div className="btn-row">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/projects">Projects</Link>
          <Link className="btn" to="/about">About</Link>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Hero from '../components/hero'
import Skills from '../components/skills'

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="section">
        <h2>Studies</h2>
        <div className="education-list">
          <div className="edu-item">
            <h3>BS Lateral in Computer Science (Ongoing)</h3>
            <p>Virtual University of Pakistan</p>
          </div>
          <div className="edu-item">
            <h3>ADP Computer Science</h3>
            <p>Virtual University of Pakistan</p>
          </div>
          <div className="edu-item">
            <h3>FSc Pre-engineering</h3>
            <p>Unique College</p>
          </div>
          <div className="edu-item">
            <h3>Matriculation</h3>
            <p>Fatima Science Girls High School</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <Skills items={["JavaScript", "React", "CSS", "HTML", "Git&GitHub", "Node.js", "XAMPP", "MYSQL", "Python", "C++"]} />
      </section>

      <section className="section">
        <h2>Hobbies</h2>
        <p className="muted">In my free time, I enjoy learning new technologies and improving my technical skills. I also have an interest in creative activities like crocheting , sketching, painting and poetry.</p>
      </section>
    </div>
  )
}

import React from 'react'

export default function About() {
  return (
    <div>
      <section className="section">
        <h2>About / Contact</h2>
        <p className="muted">This is my contact details section. Feel free to approach for professional or personal inquiries.</p>
        <ul>
          <li>
            <a href="mailto:itshooroasad@gmail.com">
              itshooroasad@gmail.com
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/hoorulain-asad-b69924396/" target="_blank">
              LinkedIn Profile
            </a>
          </li>

          <li>Location: Lahore, Pakistan</li>

        </ul>
      </section>

      <section className="section">
        <h2>Bio</h2>
        <p className="muted">“I’m a passionate and curious developer who enjoys building clean, user-friendly web applications. I love learning new technologies and turning ideas into practical digital solutions.” 😊</p>
      </section>
    </div>
  )
}

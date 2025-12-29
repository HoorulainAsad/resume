import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/projectcard'

const defaultProjects = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A revolutionary app that helps users track their productivity with pastel charts.',
    technologies: ['React', 'Node.js', 'Vite'],
    liveLink: '#',
    image: '',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An interactive mapping dashboard for visualizing global climate data.',
    technologies: ['Leaflet', 'D3.js', 'GeoJSON'],
    liveLink: '#',
    image: '',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A social photo sharing platform focused on minimalist aesthetics.',
    technologies: ['React', 'Firebase', 'Tailwind'],
    liveLink: '#',
    image: '',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'Command line tool for scaffolding pastel-themed React applications.',
    technologies: ['Node.js', 'Ink', 'CLI'],
    liveLink: '#',
    image: '',
  },
  {
    id: 5,
    title: 'Project Epsilon',
    description: 'E-commerce storefront template with dynamic cart functionality.',
    technologies: ['Next.js', 'Stripe', 'Zustand'],
    liveLink: '#',
    image: '',
  },
  {
    id: 6,
    title: 'Project Zeta',
    description: 'Real-time collaborative whiteboard for remote teams.',
    technologies: ['Socket.io', 'Canvas API', 'Express'],
    liveLink: '#',
    image: '',
  }
]

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    liveLink: '',
    imagePreview: null
  })

  useEffect(() => {
    const saved = localStorage.getItem('projects')
    if (saved) {
      setProjects(JSON.parse(saved))
    } else {
      setProjects(defaultProjects)
    }
  }, [])

  useEffect(() => {
    if (projects.length > 0 || localStorage.getItem('projects')) {
      localStorage.setItem('projects', JSON.stringify(projects))
    }
  }, [projects])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      alert('Image too large (max 2MB)')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imagePreview: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProject = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(t => t),
      liveLink: formData.liveLink,
      image: formData.imagePreview
    }

    setProjects([newProject, ...projects])

    setFormData({
      title: '',
      description: '',
      technologies: '',
      liveLink: '',
      imagePreview: null
    })
    setShowForm(false)
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this project?')) {
      const updated = projects.filter(p => p.id !== id)
      setProjects(updated)
    }
  }

  return (
    <div>
      <section className="section">
        <div className="cert-header"> {/* Reusing flex header style */}
          <div>
            <h2>My Work</h2>
            <p className="muted">Here are some of the projects I've updated.</p>
          </div>
          <button className="btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancel' : '+ Add Project'}
          </button>
        </div>

        {showForm && (
          <div className="cert-form-container"> {/* Reusing container style */}
            <form onSubmit={handleSubmit} className="cert-form">
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Portfolio Website"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  required
                  rows="3"
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the project..."
                  style={{
                    padding: '12px 16px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div className="form-group">
                <label>Technologies (comma separated)</label>
                <input
                  type="text"
                  required
                  value={formData.technologies}
                  onChange={e => setFormData({ ...formData, technologies: e.target.value })}
                  placeholder="React, CSS, Node.js"
                />
              </div>

              <div className="form-group">
                <label>Live Link URL</label>
                <input
                  type="url"
                  required
                  value={formData.liveLink}
                  onChange={e => setFormData({ ...formData, liveLink: e.target.value })}
                  placeholder="https://..."
                />
              </div>

              <div className="form-group">
                <label>Project Image (Optional)</label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                {formData.imagePreview && (
                  <div className="file-preview">
                    <img src={formData.imagePreview} alt="Preview" />
                  </div>
                )}
              </div>

              <button type="submit" className="btn">Save Project</button>
            </form>
          </div>
        )}

        <div className="grid">
          {projects.map((project) => (
            <div key={project.id} style={{ position: 'relative' }}>
              <ProjectCard project={project} />
              <button
                onClick={() => handleDelete(project.id)}
                className="delete-project-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/projectcard'
import { getProjects, saveProjects } from '../utils/persistence'
import { useAdmin } from '../context/AdminContext'

export default function Projects() {
  const [projectsList, setProjectsList] = useState([])
  const { isAdmin } = useAdmin()
  const [showForm, setShowForm] = useState(false)

  // Form State
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    liveLink: '',
    image: ''
  })

  useEffect(() => {
    setProjectsList(getProjects())
  }, [])

  const handleAddProject = (e) => {
    e.preventDefault()
    const projectToAdd = {
      ...newProject,
      id: Date.now(),
      technologies: newProject.technologies.split(',').map(t => t.trim())
    }
    const updatedList = [...projectsList, projectToAdd]
    setProjectsList(updatedList)
    saveProjects(updatedList)
    setShowForm(false)
    setNewProject({ title: '', description: '', technologies: '', liveLink: '', image: '' })
  }

  const handleDeleteProject = (id) => {
    if (window.confirm('Delete this project?')) {
      const updatedList = projectsList.filter(p => p.id !== id)
      setProjectsList(updatedList)
      saveProjects(updatedList)
    }
  }

  return (
    <div>
      <section className="section">
        <div className="cert-header">
          <div>
            <h2>My Work</h2>
            <p className="muted">Here are some of the projects I've built.</p>
          </div>
          {isAdmin && (
            <button className="btn" onClick={() => setShowForm(!showForm)}>
              {showForm ? 'Cancel' : 'Add Project'}
            </button>
          )}
        </div>

        {isAdmin && showForm && (
          <div className="cert-form-container">
            <form onSubmit={handleAddProject} className="cert-form">
              <div className="form-group">
                <label>Project Title</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  value={newProject.description}
                  onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Technologies (comma separated)</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value })}
                  placeholder="React, CSS, Node.js"
                />
              </div>
              <div className="form-group">
                <label>Live URL</label>
                <input
                  type="text"
                  value={newProject.liveLink}
                  onChange={(e) => setNewProject({ ...newProject, liveLink: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Image Path (e.g. /assets/p1.png)</label>
                <input
                  type="text"
                  value={newProject.image}
                  onChange={(e) => setNewProject({ ...newProject, image: e.target.value })}
                />
              </div>
              <button type="submit" className="btn submit-btn">Save Project</button>
            </form>
          </div>
        )}

        <div className="grid">
          {projectsList.map((project) => (
            <div key={project.id} style={{ position: 'relative' }}>
              <ProjectCard project={project} />
              {isAdmin && (
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#ff4d4d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}
                  title="Delete Project"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

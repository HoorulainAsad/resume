import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/project'
import Certifications from './pages/certifications'

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

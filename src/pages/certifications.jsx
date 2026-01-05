import React, { useState, useEffect } from 'react'
import { getCertifications, saveCertifications } from '../utils/persistence'
import { useAdmin } from '../context/AdminContext'
import { getAssetPath } from '../utils/assets'

export default function Certifications() {
    const [certsList, setCertsList] = useState([])
    const { isAdmin } = useAdmin()
    const [showForm, setShowForm] = useState(false)

    // Form State
    const [newCert, setNewCert] = useState({
        title: '',
        issuer: '',
        date: '',
        link: '',
        image: ''
    })

    useEffect(() => {
        setCertsList(getCertifications())
    }, [])

    const handleAddCert = (e) => {
        e.preventDefault()
        const certToAdd = {
            ...newCert,
            id: Date.now()
        }
        const updatedList = [...certsList, certToAdd]
        setCertsList(updatedList)
        saveCertifications(updatedList)
        setShowForm(false)
        setNewCert({ title: '', issuer: '', date: '', link: '', image: '' })
    }

    const handleDeleteCert = (id) => {
        if (window.confirm('Delete this certification?')) {
            const updatedList = certsList.filter(c => c.id !== id)
            setCertsList(updatedList)
            saveCertifications(updatedList)
        }
    }

    return (
        <div>
            <section className="section">
                <div className="cert-header">
                    <div>
                        <h2>My Certifications</h2>
                        <p className="muted">Licenses and certifications I have earned.</p>
                    </div>
                    {isAdmin && (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                className="btn"
                                onClick={() => {
                                    const json = JSON.stringify(certsList, null, 2);
                                    navigator.clipboard.writeText(json);
                                    alert('Certifications data copied to clipboard! Please send this to me.');
                                    console.log('Certifications JSON:', json);
                                }}
                                style={{ backgroundColor: '#6c5ce7', color: 'white' }}
                            >
                                Export Certifications
                            </button>
                            <button className="btn" onClick={() => setShowForm(!showForm)}>
                                {showForm ? 'Cancel' : 'Add Certification'}
                            </button>
                        </div>
                    )}
                </div>

                {isAdmin && showForm && (
                    <div className="cert-form-container">
                        <form onSubmit={handleAddCert} className="cert-form">
                            <div className="form-group">
                                <label>Certification Name</label>
                                <input
                                    type="text"
                                    value={newCert.title}
                                    onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Issuer</label>
                                <input
                                    type="text"
                                    value={newCert.issuer}
                                    onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="text"
                                    value={newCert.date}
                                    onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
                                    placeholder="e.g. 2024"
                                />
                            </div>
                            <div className="form-group">
                                <label>Credential Link (optional)</label>
                                <input
                                    type="text"
                                    value={newCert.link}
                                    onChange={(e) => setNewCert({ ...newCert, link: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Certificate Image Path (e.g. /assets/cert1.png)</label>
                                <input
                                    type="text"
                                    value={newCert.image}
                                    onChange={(e) => setNewCert({ ...newCert, image: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn submit-btn">Save Certification</button>
                        </form>
                    </div>
                )}

                {certsList.length === 0 ? (
                    <div className="empty-state">
                        <p>No certifications to display yet.</p>
                    </div>
                ) : (
                    <div className="cert-grid">
                        {certsList.map((cert) => (
                            <div key={cert.id} className="cert-card-linkedin" style={{ position: 'relative' }}>
                                <div className="cert-thumbnail">
                                    {cert.image ? (
                                        <a href={getAssetPath(cert.image)} target="_blank" rel="noopener noreferrer">
                                            <img src={getAssetPath(cert.image)} alt={cert.title} className="cert-preview-img" />
                                        </a>
                                    ) : (
                                        <div className="placeholder-logo">
                                            {cert.issuer.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="cert-details">
                                    <h3>{cert.title}</h3>
                                    <p className="issuer">{cert.issuer}</p>
                                    <p className="date">Issued {cert.date}</p>
                                    <div className="cert-actions-btns">
                                        <a href={getAssetPath(cert.image || cert.link)} target="_blank" rel="noopener noreferrer" className="view-credential-btn">
                                            View Certificate
                                        </a>
                                    </div>
                                </div>
                                {isAdmin && (
                                    <button
                                        onClick={() => handleDeleteCert(cert.id)}
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            backgroundColor: '#ff4d4d',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '24px',
                                            height: '24px',
                                            cursor: 'pointer',
                                            zIndex: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '12px'
                                        }}
                                        title="Delete Certification"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

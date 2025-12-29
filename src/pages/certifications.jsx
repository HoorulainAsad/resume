import React, { useState, useEffect } from 'react'

export default function Certifications() {
    const [certifications, setCertifications] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        file: null,
        filePreview: null,
        fileType: null
    })

    // Load certifications from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('certifications')
        if (saved) {
            setCertifications(JSON.parse(saved))
        }
    }, [])

    // Save certifications to localStorage whenever they change
    useEffect(() => {
        if (certifications.length > 0) {
            localStorage.setItem('certifications', JSON.stringify(certifications))
        }
    }, [certifications])

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        // Validate file type
        const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp']
        if (!validTypes.includes(file.type)) {
            alert('Please upload a PDF or image file (JPG, PNG, WEBP)')
            return
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert('File is too large. Please choose a file under 2MB.')
            return
        }

        // Create file preview
        const reader = new FileReader()
        reader.onloadend = () => {
            setFormData({
                ...formData,
                file: file,
                filePreview: reader.result,
                fileType: file.type
            })
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.title || !formData.filePreview) {
            alert('Please fill in all fields')
            return
        }

        const newCertification = {
            id: Date.now(),
            title: formData.title,
            filePreview: formData.filePreview,
            fileType: formData.fileType,
            uploadedAt: new Date().toLocaleDateString()
        }

        setCertifications([...certifications, newCertification])

        // Reset form
        setFormData({
            title: '',
            file: null,
            filePreview: null,
            fileType: null
        })
        setShowForm(false)
    }

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this certification?')) {
            const updated = certifications.filter(cert => cert.id !== id)
            setCertifications(updated)
            localStorage.setItem('certifications', JSON.stringify(updated))
        }
    }

    const handleDownload = (cert) => {
        const link = document.createElement('a')
        link.href = cert.filePreview
        link.download = `${cert.title}.${cert.fileType.includes('pdf') ? 'pdf' : 'jpg'}`
        link.click()
    }

    return (
        <div>
            <section className="section">
                <div className="cert-header">
                    <h2>My Certifications</h2>
                    <button
                        className="btn add-cert-btn"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? '✕ Cancel' : '+ Add Certification'}
                    </button>
                </div>

                {showForm && (
                    <div className="cert-form-container">
                        <form onSubmit={handleSubmit} className="cert-form">
                            <div className="form-group">
                                <label htmlFor="cert-title">Certification Title</label>
                                <input
                                    id="cert-title"
                                    type="text"
                                    placeholder="e.g., AWS Certified Developer"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cert-file">Upload Certificate (PDF or Image)</label>
                                <div className="file-upload-area">
                                    <input
                                        id="cert-file"
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png,.webp"
                                        onChange={handleFileChange}
                                        required
                                    />
                                    {formData.filePreview && (
                                        <div className="file-preview">
                                            {formData.fileType === 'application/pdf' ? (
                                                <div className="pdf-preview">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>PDF Selected</span>
                                                </div>
                                            ) : (
                                                <img src={formData.filePreview} alt="Preview" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button type="submit" className="btn submit-btn">
                                Save Certification
                            </button>
                        </form>
                    </div>
                )}

                {certifications.length === 0 && !showForm && (
                    <div className="empty-state">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p>No certifications added yet</p>
                        <p className="muted">Click "Add Certification" to upload your first certificate</p>
                    </div>
                )}

                {certifications.length > 0 && (
                    <div className="cert-grid">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="cert-card">
                                <div className="cert-preview">
                                    {cert.fileType === 'application/pdf' ? (
                                        <div className="pdf-display">
                                            <embed
                                                src={cert.filePreview}
                                                type="application/pdf"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                    ) : (
                                        <img src={cert.filePreview} alt={cert.title} />
                                    )}
                                </div>
                                <div className="cert-info">
                                    <h3>{cert.title}</h3>
                                    <p className="cert-date">Uploaded: {cert.uploadedAt}</p>
                                    <div className="cert-actions">
                                        <button
                                            className="btn-icon download-btn"
                                            onClick={() => handleDownload(cert)}
                                            title="Download"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                        </button>
                                        <button
                                            className="btn-icon delete-btn"
                                            onClick={() => handleDelete(cert.id)}
                                            title="Delete"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}

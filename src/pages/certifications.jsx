import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getCertifications } from '../utils/persistence'
import { getAssetPath } from '../utils/assets'

export default function Certifications() {
    const [certsList, setCertsList] = useState([])
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        setCertsList(getCertifications())
    }, [])

    return (
        <div className="section" style={{ minHeight: '100vh', overflow: 'hidden' }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                Gallery
            </motion.h2>

            <motion.div 
                className="stacked-cards-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ perspective: '1000px' }}
            >
                {certsList.map((cert, index) => {
                    const rotation = isHovered ? (index - (certsList.length - 1) / 2) * 12 : 0;
                    const xOffset = isHovered ? (index - (certsList.length - 1) / 2) * 80 : 0;
                    
                    return (
                        <motion.div
                            key={cert.id}
                            className="stacked-card"
                            initial={{ x: 0, rotate: 0 }}
                            animate={{ 
                                rotate: rotation,
                                x: xOffset,
                                zIndex: isHovered ? index : 1
                            }}
                            whileHover={{ 
                                scale: 1.1, 
                                y: -50, 
                                zIndex: 1000,
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                            style={{ 
                                cursor: 'pointer',
                                pointerEvents: 'auto'
                            }}
                        >
                            <div style={{ width: '100%', height: '220px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {cert.image ? (
                                    <img src={getAssetPath(cert.image)} alt={cert.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                ) : (
                                    <span className="muted">No Preview</span>
                                )}
                            </div>
                            <div style={{ padding: '20px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px', color: 'var(--accent-color)' }}>{cert.title}</h3>
                                <p className="muted" style={{ fontSize: '0.85rem', marginBottom: '10px' }}>{cert.issuer}</p>
                                <a 
                                    href={cert.image ? getAssetPath(cert.image) : '#'} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    style={{ 
                                        display: 'block',
                                        marginTop: 'auto',
                                        textDecoration: 'none', 
                                        color: 'var(--bg-color)',
                                        backgroundColor: 'var(--accent-color)',
                                        padding: '10px',
                                        borderRadius: '8px',
                                        fontSize: '0.8rem',
                                        fontWeight: '900',
                                        textAlign: 'center',
                                        textTransform: 'uppercase',
                                        position: 'relative',
                                        zIndex: 1001
                                    }}
                                >
                                    Open Certificate
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    )
}

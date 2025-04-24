import React from 'react'
import './ProjektePage.css'

const ProjektePage: React.FC = () => {
  return (
    <div className="projekte-page">
      <div className="projekte-hero">
        <h1>Unsere Projekte</h1>
        <p>Entdecken Sie unsere vielfältigen Arbeiten</p>
      </div>
      
      <div className="projekte-grid">
        {/* Example project items - replace with your actual projects */}
        <div className="projekt-item">
          <div className="projekt-image" style={{ backgroundImage: 'url(/path-to-project-1.jpg)' }}>
            <div className="projekt-overlay">
              <h3>Projekt Name</h3>
              <p>Kurze Beschreibung des Projekts</p>
            </div>
          </div>
        </div>
        {/* Add more project items as needed */}
      </div>
    </div>
  )
}

export default ProjektePage 
import React from 'react';
import '../styles/ProjektePage.css';

const ProjektePage: React.FC = () => {
  return (
    <div className="projekte-page">
      <div className="projekte-hero">
        <h1>Unsere Projekte</h1>
        <p>Entdecken Sie unsere vielfältigen Arbeiten.</p>
      </div>
      
      <div className="projekte-grid">
        {/* Project items will be added here */}
      </div>
    </div>
  );
};

export default ProjektePage; 
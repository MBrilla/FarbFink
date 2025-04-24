import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="homepage-container">
      <section 
        className="hero"
        style={{ backgroundPositionY: `${scrollOffset * 0.5}px` }}
      >
        <div className="hero-content">
          <div className="animated-text">
            <span>Kunst</span>
            <span>Konzept</span>
            <span>Kontrast</span>
          </div>
          <h2>Kreative Lösungen für Ihre Vision</h2>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h1>Willkommen bei Highlightz</h1>
          <p>
            Wir sind ein kreatives Studio, das sich auf die Entwicklung einzigartiger
            visueller Identitäten und digitaler Erlebnisse spezialisiert hat.
            Mit Leidenschaft für Design und Innovation bringen wir Ihre Ideen zum Leben.
          </p>
          <Link to="/projekte" className="cta-button">
            Projekte entdecken
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage 
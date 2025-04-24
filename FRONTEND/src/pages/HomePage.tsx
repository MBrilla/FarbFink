import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="animated-text-container">
            <div className="word-animation">
              <span>Kunst.</span>
              <span>Konzept.</span>
              <span>Kontrast.</span>
            </div>
          </div>
          <h2>Individuelle Gestaltung für Raum & Objekt.</h2>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <h1>
            WIR SIND FARBFINK.<br />
            DIE GRAFFITI AGENTUR<br />
            MIT DEM BLICK FÜRS DETAIL.
          </h1>
          <h2>
            Unsere Graffitikünstler realisieren kreative Ideen, großflächige Wandbemalungen
            und Graffitiaufträge. Hereinspaziert in unsere Welt der Formen & Farben!
          </h2>
          <Link to="/projekte" className="cta-button">
            Projekte entdecken
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage; 
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img src="/Farbfinklogo.svg" alt="Farbfink" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Farbfink – Art & Design</p>
          <p>Umut Yildirim</p>
          <p>Kampstraße 1</p>
          <p>48336 Sassenberg</p>
        </div>
        <div className="footer-section">
          <h3>Rechtliches</h3>
          <nav>
            <Link to="/impressum" onClick={() => window.scrollTo(0, 0)}>Impressum</Link>
            <Link to="/datenschutz" onClick={() => window.scrollTo(0, 0)}>Datenschutzerklärung</Link>
            <Link to="/agb" onClick={() => window.scrollTo(0, 0)}>AGB</Link>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <nav>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Farbfink. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
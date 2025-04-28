import React from 'react';
import { useForm } from '@formspree/react';
import '../styles/Kontakt.css';

const Kontakt: React.FC = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/mnndqebw"); // Replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <div className="kontakt-page">
        <div className="success-message">
          <h2>Vielen Dank für Ihre Nachricht!</h2>
          <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="kontakt-page">
      <div className="kontakt-hero">
        <h1>Kontakt</h1>
        <p>Lassen Sie uns gemeinsam Ihre Vision verwirklichen.</p>
      </div>

      <div className="kontakt-content">
        <div className="kontakt-info">
          <div className="info-section">
            <h2>Kontaktieren Sie uns</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Adresse</h3>
                <p>Farbfink – Fassadengestaltung</p>
                <p>Kampstraße 1</p>
                <p>48336 Sassenberg</p>
              </div>
              <div className="contact-item">
                <h3>Kontakt</h3>
                <p>Telefon: +49 163 151 3330</p>
                <p>E-Mail: farbfink.info@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-image">
            <img src="/contact-image.jpg" alt="Farbfink Studio" />
          </div>
        </div>

        <div className="contact-form">
          <h2>Schreiben Sie uns</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Ihr Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-Mail *</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Ihre E-Mail"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Ihre Telefonnummer"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nachricht *</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Ihre Nachricht"
                rows={6}
              />
            </div>

            <div className="form-group">
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "Wird gesendet..." : "Nachricht senden"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt; 
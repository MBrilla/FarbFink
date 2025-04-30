import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LeistungenPage.css';

const LeistungenPage: React.FC = () => {
  const processSteps = [
    {
      id: 'contact',
      title: 'HERE WE GO',
      description: 'Wir konnten Ihr Interesse wecken? Dann treten Sie ganz einfach mit uns in Kontakt. Wir stehen Ihnen gerne per E-Mail oder auch telefonisch für jede Art von Fragen zur Verfügung und erstellen ein kostenloses Angebot.'
    },
    {
      id: 'meeting',
      title: 'ALRIGHT OKAY',
      description: 'Wenn Sie uns beauftragen möchten, vereinbaren wir einen Termin zur Besichtigung und weiteren Beratung. Wir verschaffen uns einen Eindruck vor Ort, besprechen gemeinsam Ihre Vorstellungen.'
    },
    {
      id: 'design',
      title: 'LOOKS GOOD',
      description: 'Wir fertigen einen Entwurf mit digitaler Vorschau an, den Sie per E-Mail erhalten. Nach der Einsichtnahme geben Sie uns Ihr OK bzw. äußern Korrektur- oder Ergänzungswünsche.'
    },
    {
      id: 'execution',
      title: 'YIPPIYO',
      description: 'Wir malen Ihr persönliches Kunstwerk! Aufgrund unserer jahrelangen Erfahrung können Sie sich auf einen reibungslosen Ablauf und Zeitangaben zur Fertigstellung verlassen.'
    }
  ];

  return (
    <div className="leistungen-page">
      <section className="hero-section">
        <h1>
          <span>NICHT NUR IRGENDEINE</span>
          <span className="highlight">LEISTUNG</span>
        </h1>
        <p className="hero-description">
          Ob abstrakt oder fotorealistisch, ob im Comicstil oder als Illusionsmalerei − unsere künstlerischen Darstellungsmöglichkeiten sind vielfältig! Bei der Anfertigung eines Entwurfs legen wir neben der Liebe für Details auch besonderen Wert auf das große Ganze.
        </p>
      </section>

      <section className="services-section">
        {/* Full width image 1 */}
        <div className="service-item">
          <div className="service-full-image">
            <img src="./Leistungen/tigerGRAD.png" alt="Fassaden Vollbild" />
          </div>
        </div>

        {/* Split layout 1 */}
        <div className="service-item">
          <div className="service-split">
            <div className="service-icon">
              <img src="./auschenwande.png" alt="Fassaden Icon" />
            </div>
            <div className="service-content">
              <h2>FASSADEN</h2>
              <p>Mit unserer Hilfe könnte Ihre Fassade zu einem farbenfrohen Blickfang werden! Ob zu Verschönerungs- oder Werbezwecken – eine großflächige künstlerische Fassadengestaltung besitzt für den Betrachter einen hohen Wiedererkennungswert.</p>
              <div className="cta-button-wrapper">
                <Link to="/projekte" className="cta-button">
                  <img src="./projekte button.png" alt="Zu unseren Projekten" style={{ width: 'clamp(200px, 30vw, 320px)' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full width image 2 */}
        <div className="service-item">
          <div className="service-full-image">
            <img src="./Leistungen/minions2GRAD.png" alt="Innenräume Vollbild" />
          </div>
        </div>

        {/* Split layout 2 */}
        <div className="service-item">
          <div className="service-split">
            <div className="service-icon">
              <img src="./innen.png" alt="Innenräume Icon" />
            </div>
            <div className="service-content">
              <h2>INNENRÄUME</h2>
              <p>Warum nicht Ihren privaten, geschäftlichen oder gastronomischen Räumlichkeiten ein angenehmes Ambiente verleihen? Gerade für Umgebungen, in denen man sich längere Zeit aufhält, erweist sich eine interessante und ansprechende Optik als besonders wichtig.</p>
              <div className="cta-button-wrapper">
                <Link to="/projekte" className="cta-button">
                  <img src="./projekte button.png" alt="Zu unseren Projekten" style={{ width: 'clamp(200px, 30vw, 320px)' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full width image 3 */}
        <div className="service-item">
          <div className="service-full-image">
            <img src="./Leistungen/kingfisherGRAD.png" alt="Workshops Vollbild" />
          </div>
        </div>

        {/* Split layout 3 */}
        <div className="service-item">
          <div className="service-split">
            <div className="service-icon">
              <img src="./objekte.png" alt="Workshops Icon" />
            </div>
            <div className="service-content">
              <h2>WORKSHOPS</h2>
              <p>Sie suchen ein kreatives Highlight für Ihr Firmenevent oder eine Veranstaltung Ihrer Jugendeinrichtung? Mit einem Graffitiworkshop bieten wir Ihnen individuelle Möglichkeiten und eine interessante Performance: Teambuilding und Abwechslung vom Arbeitsalltag auf die bunte Art!</p>
              <div className="cta-button-wrapper">
                <Link to="/projekte" className="cta-button">
                  <img src="./projekte button.png" alt="Zu unseren Projekten" style={{ width: 'clamp(200px, 30vw, 320px)' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Full width image 4 */}
        <div className="service-item">
          <div className="service-full-image">
            <img src="./Leistungen/canvasGRAD.png" alt="Leinwände Vollbild" />
          </div>
        </div>

        {/* Split layout 4 */}
        <div className="service-item">
          <div className="service-split">
            <div className="service-icon">
              <img src="./leinwande.png" alt="Leinwände Icon" />
            </div>
            <div className="service-content">
              <h2>LEINWÄNDE</h2>
              <p>Unsere künstlerische Expertise erstreckt sich auch auf die Gestaltung von Leinwänden. Mit canvasGRAD bieten wir Ihnen einzigartige, handgefertigte Kunstwerke, die Ihren Raum in etwas Besonderes verwandeln.</p>
              <div className="cta-button-wrapper">
                <Link to="/projekte" className="cta-button">
                  <img src="./projekte button.png" alt="Zu unseren Projekten" style={{ width: 'clamp(200px, 30vw, 320px)' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>
          <span>WIE LÄUFT SO EIN</span>
          <span className="highlight">AUFTRAG EIGENTLICH AB?</span>
        </h2>
        
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>KONTAKTIEREN SIE UNS!</h2>
        <Link to="/kontakt" className="contact-button">Anfrage stellen</Link>
      </section>
    </div>
  );
};

export default LeistungenPage; 
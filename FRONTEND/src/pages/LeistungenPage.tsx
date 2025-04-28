import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LeistungenPage.css';

const LeistungenPage: React.FC = () => {
  const services = [
    {
      id: 'fassaden',
      title: 'FASSADEN',
      description: 'Mit unserer Hilfe könnte Ihre Fassade zu einem farbenfrohen Blickfang werden! Ob zu Verschönerungs- oder Werbezwecken – eine großflächige künstlerische Fassadengestaltung besitzt für den Betrachter einen hohen Wiedererkennungswert.',
      icon: '/Leistungen/Auschenwande.svg',
      image: '/Leistungen/tigerGRAD.png',
    },
    {
      id: 'innenraume',
      title: 'INNENRÄUME',
      description: 'Warum nicht Ihren privaten, geschäftlichen oder gastronomischen Räumlichkeiten ein angenehmes Ambiente verleihen? Gerade für Umgebungen, in denen man sich längere Zeit aufhält, erweist sich eine interessante und ansprechende Optik als besonders wichtig.',
      icon: '/Leistungen/Innen.svg',
      image: '/Leistungen/minions2GRAD.png',
    },
    {
      id: 'workshops',
      title: 'WORKSHOPS',
      description: 'Sie suchen ein kreatives Highlight für Ihr Firmenevent oder eine Veranstaltung Ihrer Jugendeinrichtung? Mit einem Graffitiworkshop bieten wir Ihnen individuelle Möglichkeiten und eine interessante Performance: Teambuilding und Abwechslung vom Arbeitsalltag auf die bunte Art!',
      icon: '/Leistungen/objekte.svg',
      image: '/Leistungen/kingfisherGRAD.png',
    },
    {
      id: 'energiestationen',
      title: 'ENERGIESTATIONEN',
      description: 'Man sieht sie in einer Stadt an jeder Ecke: Kleine mehr oder weniger unscheinbare Gas-, Energie- und Telekommunikationsstationen. Somit prägen sie vielfach in nicht unerheblicher Art und Weise das Stadtbild.',
      icon: '/Leistungen/objekte.svg',
      image: '/Leistungen/tigerGRAD.png',
    },
    {
      id: 'leinwande',
      title: 'LEINWÄNDE',
      description: 'Unsere künstlerische Expertise erstreckt sich auch auf die Gestaltung von Leinwänden. Mit canvasGRAD bieten wir Ihnen einzigartige, handgefertigte Kunstwerke, die Ihren Raum in etwas Besonderes verwandeln.',
      icon: '/Leistungen/Leinwande.svg',
      image: '/Leistungen/canvasGRAD.png',
    }
  ];

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
          <span>MEHR ALS FARBE AUF MAUERN.</span>
        </h1>
        <p className="hero-description">
        Ob Fotorealismus, Graffiti-und Streetart, Comicstil oder weitere – wir gestalten Flächen, die beeindrucken.
Unser Fokus liegt auf der perfekten Abstimmung zwischen Design und Umfeld: Raumwirkung, Umgebung, Architektur und Details greifen bei jedem Projekt harmonisch ineinander.

Wir verwenden ausschließlich hochwertige Farben und Materialien, die brillante Ergebnisse und hohe Beständigkeit garantieren.
Selbstverständlich bereiten wir jede Fläche fachgerecht und professionell vor – von der Grundierung bis zur abschließenden Klarlackierung.

Für Unternehmen integrieren wir mithilfe von Schablonen alle Logos, Slogans und Corporate Designs exakt und markengerecht in das Gesamtkonzept – für einen überzeugenden Auftritt nach außen.
        </p>
      </section>

      <section className="services-section">
        {services.map((service, index) => (
          <div key={service.id} className="service-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="service-icon">
              <img src={service.icon} alt={`${service.title} Icon`} />
            </div>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <Link to="/projekte" className="cta-button">ZUM BEISPIEL {'>'}</Link>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </section>

      <section className="process-section">
        <h2>
          <span>WIE LÄUFT SO EIN</span>
          <span className="highlight">AUFTRAG EIGENTLICH AB?</span>
        </h2>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={step.id} className="process-step" data-aos="fade-up" data-aos-delay={index * 100}>
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
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LeistungenPage.css';

const services = [
  {
    title: 'FASSADEN',
    description: 'Mit unserer Hilfe könnte Ihre Fassade zu einem farbenfrohen Blickfang werden! Ob zu Verschönerungs- oder Werbezwecken – eine großflächige künstlerische Fassadengestaltung besitzt für den Betrachter einen hohen Wiedererkennungswert. Egal, ob Sie Ihre Hausfassade, Ihren Firmensitz, Ihre Privaträume oder andere Projekte realisieren lassen möchten: Wir freuen uns auf Ihre Anfrage und neue kreative Herausforderungen.',
    cta: 'Anfrage stellen',
    image: '/fassaden-placeholder.png',
  },
  {
    title: 'INNENRÄUME',
    description: 'Warum nicht Ihren privaten, geschäftlichen oder gastronomischen Räumlichkeiten ein angenehmes Ambiente verleihen? Gerade für Umgebungen, in denen man sich längere Zeit aufhält, erweist sich eine interessante und ansprechende Optik als besonders wichtig. Wo sich ein Mensch wohl fühlt, möchte er auch gerne verweilen! Ob Ihr Anliegen auf eine ansprechende optische Außendarstellung Ihres Unternehmens oder einfach auf die Schaffung einer einladenden Atmosphäre abzielt: Wir haben die passende Lösung für Sie.',
    cta: 'Anfrage stellen',
    image: '/innenraeume-placeholder.png',
  },
  {
    title: 'WORKSHOPS',
    description: 'Sie suchen ein kreatives Highlight für Ihr Firmenevent oder eine Veranstaltung Ihrer Jugendeinrichtung? Mit einem Graffitiworkshop bieten wir Ihnen individuelle Möglichkeiten und eine interessante Performance: Teambuilding und Abwechslung vom Arbeitsalltag auf die bunte Art! Die TeilnehmerInnen erhalten unter professioneller Anleitung die Möglichkeit, eine moderne Technik der Malerei kennen zu lernen und erste Erfahrungen im Umgang mit der Farbsprühdose zu sammeln.',
    cta: 'Anfrage stellen',
    image: '/workshops-placeholder.png',
  },
  {
    title: 'ENERGIESTATIONEN',
    description: 'Man sieht sie in einer Stadt an jeder Ecke: Kleine mehr oder weniger unscheinbare Gas-, Energie- und Telekommunikationsstationen. Somit prägen sie vielfach in nicht unerheblicher Art und Weise das Stadtbild. Häufig bieten diese Versorgungsanlagen jedoch keinen schönen Anblick. Dass man daran etwas ändern kann, haben wir bereits an vielen verschiedenen Standorten gezeigt.',
    cta: 'Anfrage stellen',
    image: '/energiestationen-placeholder.png',
  },
];

const LeistungenPage: React.FC = () => {
  return (
    <div className="leistungen-page">
      <h1 className="leistungen-title">NICHT NUR IRGENDEINE <span>LEISTUNG</span></h1>
      <div className="leistungen-list">
        {services.map((service, idx) => (
          <div className="leistungen-section animated-section" style={{ animationDelay: `${idx * 0.2 + 0.2}s` }} key={service.title}>
            <div className="leistungen-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="leistungen-content">
              <h2 className="leistungen-section-title">{service.title}</h2>
              <p className="leistungen-section-desc">{service.description}</p>
              <Link to="/kontakt" className="leistungen-cta">{service.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeistungenPage; 
import React from 'react';
import '../styles/AboutUsPage.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className="aboutus-page">
      <div className="aboutus-hero">
        <img src="\Farbfink\umutmalt3GRAD.png" alt="Lebron Mural by Umut Yilgenci" className="aboutus-hero-img" />
        <div className="aboutus-hero-overlay"></div>
        <div className="aboutus-hero-content">
          <h1>FARBFINK</h1>
          <h2>Umut Yilgenci</h2>
          <p>Kunst. Konzept. Kontrast.</p>
        </div>
      </div>
      <div className="aboutus-content">
        <h2>Über Uns</h2>
        <p>
          Farbfink ist das kreative Studio von <strong>Umut Yilgenci</strong>, einem Künstler, der für seine einzigartigen Fassaden- und Innenraumgestaltungen bekannt ist. Mit einer Leidenschaft für urbane Kunst, innovative Konzepte und mutige Farbkombinationen verwandelt Umut graue Flächen in lebendige Kunstwerke. Jedes Projekt ist ein Unikat – von großflächigen Murals bis zu detailverliebten Workshops.
        </p>
        <p>
          Unsere Mission ist es, Räume zu inspirieren, Menschen zu verbinden und mit Kunst neue Perspektiven zu schaffen. Ob öffentliche Gebäude, Unternehmen oder private Räume – wir begleiten Sie von der ersten Idee bis zum fertigen Kunstwerk.
        </p>
        <div className="aboutus-highlight">
          <h3>"Kunst ist mehr als Farbe – sie ist ein Statement."</h3>
        </div>
        <p>
          Lassen Sie sich von unseren Projekten inspirieren oder nehmen Sie direkt Kontakt auf. Wir freuen uns auf Ihre Vision!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage; 
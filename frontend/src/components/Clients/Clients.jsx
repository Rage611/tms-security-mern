import React from 'react';
import './Clients.css';

// 1. You MUST import them here, otherwise Vercel won't package the images!
import adidasLogo from '../../assets/images/clients/adidas-logo.png';
import hdfcLogo from '../../assets/images/clients/hdfc-logo.png';
import iciciLogo from '../../assets/images/clients/icici-logo.png';
import pvrLogo from '../../assets/images/clients/pvr-logo.png';
import reebokLogo from '../../assets/images/clients/reebok-logo.png';
import waveLogo from '../../assets/images/clients/wave-infratech-logo.png'; // Capital L matching your file
import woodlandLogo from '../../assets/images/clients/woodland-logo.png'; // Lowercase l matching your file

const Clients = () => {
  // 2. Use the variables without quotes, NOT the text strings
  const logos = [
    { id: 1, src: adidasLogo, alt: "Adidas" },
    { id: 2, src: hdfcLogo, alt: "HDFC" },
    { id: 3, src: iciciLogo, alt: "ICICI Bank" },
    { id: 4, src: pvrLogo, alt: "PVR Cinemas" },
    { id: 5, src: reebokLogo, alt: "Reebok" },
    { id: 6, src: waveLogo, alt: "Wave Infratech" },
    { id: 7, src: woodlandLogo, alt: "Woodland" },
  ];

  // We double the array so the animation never shows a blank space
  const displayLogos = [...logos, ...logos];

  return (
    <section className="clients-section">
      <div className="container">
        <h2 style={{ textAlign: 'center', color: '#1a1a1a', fontSize: '2.5rem' }}>
          OUR TRUSTED <span style={{ color: '#d97706' }}>PARTNERS</span>
        </h2>
        
        <div className="logo-slider">
          <div className="logo-track">
            {displayLogos.map((logo, index) => (
              <div key={index} className="client-logo">
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
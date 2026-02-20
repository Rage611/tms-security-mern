import React from 'react';
import './Clients.css';

// 1. Explicitly import every logo so Vite bundles them
import adidasLogo from '../../assets/images/clients/adidas-logo.png';
import hdfcLogo from '../../assets/images/clients/hdfc-logo.png';
import iciciLogo from '../../assets/images/clients/icici-logo.png';
import pvrLogo from '../../assets/images/clients/pvr-logo.png';
import reebokLogo from '../../assets/images/clients/reebok-logo.png';
import waveLogo from '../../assets/images/clients/Wave-Infratech-Logo.png';
import woodlandLogo from '../../assets/images/clients/woodland-Logo.png';

const Clients = () => {
  // 2. Pass the imported variables (NOT strings) into your array
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
                {/* 3. Uses the custom alt text we added above */}
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
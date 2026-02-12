import React from 'react';
import './Clients.css';

// Import your client logos here
// import client1 from '../../assets/images/clients/client1.png';

const Clients = () => {
  // Add your actual logo imports to this array
  const logos = [
    { id: 1, src: "src/assets/images/clients/adidas-logo.png" },
    { id: 2, src: "src/assets/images/clients/hdfc-logo.png" },
    { id: 3, src: "src/assets/images/clients/icici-logo.png" },
    { id: 4, src: "src/assets/images/clients/pvr-logo.png" },
    { id: 5, src: "src/assets/images/clients/reebok-logo.png" },
    { id: 6, src: "src/assets/images/clients/Wave-Infratech-Logo.png" },
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
                <img src={logo.src} alt={`Client ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
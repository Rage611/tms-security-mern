import React from 'react';
import './Clients.css';

import adidasLogo from '../../assets/images/clients/adidas-logo.png';
import hdfcLogo from '../../assets/images/clients/hdfc-logo.png';
import iciciLogo from '../../assets/images/clients/icici-logo.png';
import pvrLogo from '../../assets/images/clients/pvr-logo.png';
import reebokLogo from '../../assets/images/clients/reebok-logo.png';
import waveLogo from '../../assets/images/clients/wave-infratech-logo.png';
import woodlandLogo from '../../assets/images/clients/woodland-logo.png';

const logos = [
    { id: 1, src: adidasLogo, alt: "Adidas", width: 120, height: 60 },
    { id: 2, src: hdfcLogo, alt: "HDFC Bank", width: 120, height: 60 },
    { id: 3, src: iciciLogo, alt: "ICICI Bank", width: 120, height: 60 },
    { id: 4, src: pvrLogo, alt: "PVR Cinemas", width: 120, height: 60 },
    { id: 5, src: reebokLogo, alt: "Reebok", width: 120, height: 60 },
    { id: 6, src: waveLogo, alt: "Wave Infratech", width: 120, height: 60 },
    { id: 7, src: woodlandLogo, alt: "Woodland", width: 120, height: 60 },
];

const displayLogos = [...logos, ...logos];

const Clients = () => {
    return (
        <section className="clients-section">
            <div className="container">
                <h2 style={{ textAlign: 'center', color: '#1a1a1a', fontSize: '2.5rem' }}>
                    OUR TRUSTED <span style={{ color: '#d97706' }}>PARTNERS</span>
                </h2>

                <div className="logo-slider">
                    <div className="logo-track">
                        {displayLogos.map((logo, index) => (
                            <div key={`${logo.id}-${index}`} className="client-logo">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;

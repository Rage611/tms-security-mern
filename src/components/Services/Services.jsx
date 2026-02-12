import React from 'react';
import Stats from './Stats';
import ServicesCard from './ServicesCard'; // Import your card template
import './Services.css';

import guardImg from '../../assets/images/hero/hero-1.png';
import escortImg from '../../assets/images/hero/hero-2.png';
import bouncerImg from '../../assets/images/hero/hero-3.png';

const Services = () => {
  const services = [
    { title: "Manpower Security", img: guardImg },
    { title: "Personal Escorts", img: escortImg },
    { title: "Bouncer Services", img: bouncerImg }
  ];

  return (
    <>
      <section className="services-section">
        <div className="container">
          <h2 className="services-title">OUR <span className="highlight">SERVICES</span></h2>
          <p className="services-subtitle">Elite protection tailored for your specific needs.</p>
          
          <div className="services-grid">
            {services.map((s, i) => (
              /* Use your component here instead of raw divs */
              <ServicesCard 
                key={i} 
                title={s.title} 
                image={s.img} 
              />
            ))}
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
};

export default Services;
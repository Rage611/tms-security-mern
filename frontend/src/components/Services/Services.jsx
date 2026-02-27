import React from 'react';
import { useInView } from 'react-intersection-observer';
import Stats from './Stats';
import ServicesCard from './ServicesCard'; 
import './Services.css';

import guardImg from '../../assets/images/hero/hero-1.png';
import escortImg from '../../assets/images/hero/hero-2.png';
import bouncerImg from '../../assets/images/hero/hero-3.png';
import housekeepingImg from '../../assets/images/hero/hero-3.png'; 

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, 
  });

  const services = [
    { 
      title: "Manpower Security", 
      description: "Highly trained personnel deployed to protect corporate and physical assets with absolute vigilance.",
      img: guardImg, 
      delay: "0.1s" 
    },
    { 
      title: "Personal Escorts", 
      description: "Discreet, elite close-protection professionals ensuring safe transit for high-net-worth individuals.",
      img: escortImg, 
      delay: "0.3s" 
    },
    { 
      title: "Bouncer Services", 
      description: "Tactical crowd control and event security specialists trained in advanced conflict de-escalation.",
      img: bouncerImg, 
      delay: "0.5s" 
    },
    { 
      title: "Housekeeping", 
      description: "Premium facility management ensuring pristine, secure, and fully operational commercial environments.",
      img: housekeepingImg, 
      delay: "0.7s" 
    }
  ];

  return (
    <>
      <section className={`services-section ${inView ? 'is-visible' : ''}`} ref={ref}>
        <div className="services__inner">
          
          <div className="services-header">
            <div className="section-tagline">OUR EXPERTISE</div>
            <h2 className="section-title">Elite Protection. Tailored For You.</h2>
          </div>
          
          <div className="services-grid">
            {services.map((s, i) => (
              <ServicesCard 
                key={i} 
                title={s.title} 
                description={s.description}
                image={s.img} 
                delay={s.delay}
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
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Stats from './Stats';
import ServicesCard from './ServicesCard'; 
import './Services.css';

import guardImg from '../../assets/images/hero/hero-1.png';
import escortImg from '../../assets/images/hero/hero-2.png';
import bouncerImg from '../../assets/images/hero/hero-3.png';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15, 
  });

  const services = [
    { title: "Manpower Security", img: guardImg, delay: "0.1s" },
    { title: "Personal Escorts", img: escortImg, delay: "0.3s" },
    { title: "Bouncer Services", img: bouncerImg, delay: "0.5s" }
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
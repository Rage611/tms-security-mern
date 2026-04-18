import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutLogo from '../../assets/images/Logo.webp'; 

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 🎯 1. THE TACTICAL SCROLL FUNCTION
  const scrollToCapabilities = () => {
    // Looks for the specific ID on the page
    const target = document.getElementById('capabilities-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Target 'capabilities-section' not found. Make sure the ID is in your Services component.");
    }
  };

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about__inner">
        
        <div className="about__content">
          <div className="section-tagline">India's Premier Security Partner</div>
          
          <h2 className="section-title">
            Uncompromising Protection.<br />Absolute Certainty.
          </h2>
          
          <p className="section-text">
            We engineer bespoke security architectures for corporate, governmental, and elite commercial enterprises.
          </p>

          <p className="section-text">
             From rapid-response tactical teams to advanced digital surveillance, our mandate is total asset protection.
          </p>
          
          {/* 🎯 2. ATTACH THE TRIGGER TO YOUR BUTTON */}
          <button className="btn-dark" onClick={scrollToCapabilities}>
            EXPLORE OUR CAPABILITIES <span className="arrow">&#8594;</span>
          </button>
        </div>

        <div className="about__image-box">
          <img src={aboutLogo} alt="TMS Shield Logo" />
        </div>

      </div>
    </section>
  );
};

export default About;
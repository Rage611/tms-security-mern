import React from 'react';
import './About.css';
import aboutLogo from '../../assets/images/Logo.png'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about__inner">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="about__content">
          <div className="section-tagline">#1 Security Services in India</div>
          <h2 className="section-title">WHO WE ARE</h2>
          <p className="section-text">
            We provide the most reliable and efficient security services and solutions, especially for Corporate, Governmental, and Institutional bodies.
          </p>

          <p className="section-text">
            We are a professional agency providing customized security arrangements to industrial, commercial, and business houses. Besides guarding, we specialize in rapid response and surveillance.
          </p>
          <button className="btn-dark">READ MORE </button>
        </div>

        {/* RIGHT SIDE: LOGO */}
        <div className="about__image-box">
          <img src={aboutLogo} alt="TMS Shield Logo" />
        </div>

      </div>
    </section>
  );
};

export default About;
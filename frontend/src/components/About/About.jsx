import React from 'react';
import './About.css';
import aboutLogo from '../../assets/images/Logo.png'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about__inner">
        
        {/* LEFT SIDE: TEXT CONTENT */}
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
          
          <button className="btn-dark">
            EXPLORE OUR CAPABILITIES <span className="arrow">&#8594;</span>
          </button>
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
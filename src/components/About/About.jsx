import React from 'react';
import './About.css';
import aboutLogo from '../../assets/images/logo.png'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about__inner">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="about__content">
          <div className="section-tagline">Elite Protection</div>
          <h2 className="section-title">WHO WE ARE</h2>
          <p className="section-text">
            TMS Group is a premier security provider dedicated to safeguarding 
            what matters most. With a focus on professionalism and advanced 
            protection strategies, we ensure peace of mind for our clients 
            through elite manpower and cutting-edge technology.
          </p>
          <button className="btn-dark">LEARN MORE ABOUT TMS</button>
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
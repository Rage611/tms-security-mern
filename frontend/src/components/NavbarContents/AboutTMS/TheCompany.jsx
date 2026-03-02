import React from 'react';
import './TheCompany.css';
import companyBanner from '../../../assets/images/hero/hero-2.png'; 

const TheCompany = () => {
  return (
    <div className="company-page">
      <div className="company-hero" style={{ backgroundImage: `url(${companyBanner})` }}>
        <div className="overlay"></div>
        <h1>THE COMPANY</h1>
      </div>
      
      <div className="content-container">
        <div className="text-content">
          <h2 className="section-title text-theme-dark">WHO WE ARE</h2>
          <p>
            <strong>TMS Security Services</strong> is a premier security agency committed to providing 
            top-tier protection. We treat every client's safety as our own.
          </p>
          <p>
            Our guards are rigorously trained to handle diverse scenarios, from corporate 
            reception management to high-risk emergency response.
          </p>
        </div>
        
        <div className="sidebar">
          <div className="contact-widget">
            <h3>PARTNER WITH US</h3>
            <p className="contact-widget-text">Secure your enterprise with our elite guarding solutions today.</p>
            <button type="button" className="submit-btn">GET A QUOTE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCompany;
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // <-- 1. Must import this
import { HashLink } from 'react-router-hash-link';
import './TheCompany.css';
import companyBanner from '../../../assets/images/Headingbg.webp/'; 

const TheCompany = () => {
  // 🎯 2. THIS IS THE MISSING LINE THAT CAUSED THE CRASH:
  const { pathname } = useLocation();

  // Snaps the page to the top when it loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div id="company-section" className="company-page" key={pathname}>
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
            
            <HashLink smooth to="/contact#contact-section" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              GET A QUOTE
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCompany;
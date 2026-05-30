import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HashLink } from 'react-router-hash-link';
import './TheCompany.css';
import companyBanner from '../../../assets/images/Headingbg.webp';

const TheCompany = () => {
  return (
    <div id="company-section" className="company-page">
      <Helmet>
        <title>About TMS Security | Premier Security Agency Delhi NCR</title>
        <meta name="description" content="Learn about TMS Security Services — India's premier security agency with 15+ years of excellence in corporate guarding, facility management and manpower solutions." />
        <link rel="canonical" href="https://tmssecurity.in/company" />
      </Helmet>

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
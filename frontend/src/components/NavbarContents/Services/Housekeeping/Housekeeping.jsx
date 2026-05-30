import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../SharedServiceLayout.css';

import serviceBanner from '../../../../assets/images/Headingbg.webp';
import houseImg from '../../../../assets/images/NavbarServices/Housekeeping.webp';

const Housekeeping = () => {
  return (
    <div className="service-page full-width">
      <Helmet>
        <title>Professional Housekeeping Services Delhi | TMS Security</title>
        <meta name="description" content="TMS Security provides military-grade housekeeping and environmental management for corporate offices and elite commercial spaces across India." />
        <link rel="canonical" href="https://tmssecurity.in/housekeeping" />
      </Helmet>

      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>HOUSEKEEPING SERVICES</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          <img src={houseImg} alt="Professional Housekeeping Operations" className="service-featured-image" />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">PROFESSIONAL HOUSEKEEPING</h2>

            <p className="service-body-text">
              TMS provides comprehensive environmental management for corporate headquarters and elite commercial spaces.
              Our protocols are engineered to provide your personnel with a fresh, sterile, and clinically clean environment
              that reflects the prestige of your organization.
            </p>

            <blockquote className="elite-quote text-theme-dark">
              "We implement the rigorous changes required to take environmental standards one generation ahead."
            </blockquote>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Operational Supervision</h3>
              <p className="service-body-text">
                Every facility is assigned a dedicated executive responsible for directly supervising tactical operations.
                By employing modern mechanized tools and military-grade discipline, we ensure work areas are not just
                attractive, but operationally healthy for your staff.
              </p>
            </div>

            <div className="service-text-block" style={{ marginTop: '40px' }}>
              <h3 className="text-theme-dark">OUR STRENGTHS</h3>
              <ul className="tactical-list">
                <li>Specific and clear operational viewpoints to provide superior results.</li>
                <li>In-house training and continuous technological upgradation.</li>
                <li>A trained, committed, and high-discipline workforce.</li>
                <li>Quarterly executive-level training for all management tiers.</li>
                <li>Heavy machine infrastructure for advanced mechanized cleaning.</li>
                <li>24/7 tactical connectivity with Supervisors and Office Control Room.</li>
                <li>Full compliance with Contract Labour Act and regulatory frameworks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
            <h2 className="text-theme-dark">ELEVATE YOUR ENVIRONMENT</h2>
            <p>Deploy TMS Elite Housekeeping protocols for your commercial space.</p>
            <div style={{ marginTop: '40px' }}>
              <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                REQUEST A DEPLOYMENT
              </Link>
            </div>
          </div>

          <div className="service-nav-footer">
            <h4>EXPLORE MORE SERVICES</h4>
            <div className="nav-links">
              <Link to="/facility-management">Facility Management</Link>
              <Link to="/security-guards">Security Guards</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Housekeeping;
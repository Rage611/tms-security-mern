import React from 'react';
import SEOHead from '../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../SharedServiceLayout.css';

import serviceBanner from '../../../../assets/images/Headingbg.webp';
import houseImg from '../../../../assets/images/NavbarServices/Housekeeping.webp';

const Housekeeping = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Professional Housekeeping Services Delhi NCR | Commercial Cleaning | TMS Security"
        description="Hire trained housekeeping staff for corporate offices, hospitals, malls & commercial buildings in Delhi NCR. ISO 9001:2015 certified cleaning operations — TMS Security."
        canonical="https://tmssecurity.in/housekeeping"
      />

      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>HOUSE KEEPING</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          <img
            src={houseImg}
            alt="Professional Housekeeping Operations"
            className="service-featured-image"
            fetchPriority="high"
            loading="eager"
          />

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

      <div className="trust-badge-strip">
        <div className="trust-badge">
          <span className="trust-badge__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.74 9 12 5.25-1.26 9-6.75 9-12V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className="trust-badge__label">ISO 9001:2015 Certified</span>
        </div>
      </div>

      <div className="service-cta-banner">
        <strong>Ready to Transform Your Facility's Cleanliness Standards?</strong>
        <p>Get a customized housekeeping plan tailored to your commercial space — backed by ISO-certified operations.</p>
        <div className="service-cta-banner__actions">
          <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
          <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
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
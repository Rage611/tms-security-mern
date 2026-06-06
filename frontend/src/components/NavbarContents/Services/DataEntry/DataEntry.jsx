import React from 'react';
import SEOHead from '../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../SharedServiceLayout.css';

import heroImage from '../../../../assets/images/Headingbg.webp';
import featuredImage from '../../../../assets/images/NavbarServices/DEO.webp';

const DataEntry = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Data Entry Operator Services Delhi NCR | Back-Office Staffing | TMS Security"
        description="Hire vetted data entry operators and back-office staff for corporate enterprises in Delhi NCR. Verified personnel with strict confidentiality protocols — TMS Security."
        canonical="https://tmssecurity.in/data-entry-operators"
      />

      <div className="service-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay"></div>
        <h1>DATA ENTRY OPERATORS</h1>
      </div>

      <div className="content-container">
        <img src={featuredImage} alt="TMS Data Entry Specialist" className="service-featured-image" fetchPriority="high" loading="eager" />

        <h2 className="section-title text-theme-dark">Expanded Administrative Support</h2>
        <p className="service-body-text">
          Reliable, accurate, and secure data management personnel. Let TMS handle your administrative
          staffing so you can focus on core business operations, knowing your data is being managed
          by vetted professionals.
        </p>

        <blockquote className="elite-quote text-theme-dark">
          "As a security-first company, we bring the same rigorous vetting and confidentiality protocols
          to our back-office staff as we do to our frontline guards."
        </blockquote>

        <div className="service-details-grid">
          <div className="service-text-block">
            <h3 className="text-theme-dark">Uncompromising Accuracy</h3>
            <p className="service-body-text">
              Our operators are rigorously tested for typing speed and precision. We minimize error
              rates to ensure your databases, inventory logs, and CRM systems remain pristine and reliable.
            </p>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Data Security</h3>
            <p className="service-body-text">
              TMS enforces strict confidentiality agreements. Our operators are thoroughly vetted to
              handle your most sensitive financial, operational, and client information safely.
            </p>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Flexible Deployment</h3>
            <p className="service-body-text">
              Whether you need temporary support for a major digitization project or permanent on-site
              administrative staff, we scale our team to meet your operational demands.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '60px' }}>
          <h2 className="section-title text-theme-dark">Operational Scope</h2>
          <p className="service-body-text">
            TMS Data Entry Operators are trained across multiple industry standards and software
            environments, providing seamless integration into your existing workflows:
          </p>
          <ul className="tactical-list">
            <li>CRM &amp; Database Updating and Maintenance</li>
            <li>Inventory, Invoice, and Receipt Digitization</li>
            <li>Offline to Online Data Migration Projects</li>
            <li>Document Formatting, Processing, and Filing</li>
            <li>General Administrative Back-Office Support</li>
          </ul>
        </div>
      </div>

      <div className="trust-badge-strip">
        <div className="trust-badge">
          <span className="trust-badge__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className="trust-badge__label">ISO 9001:2015 Certified</span>
        </div>
      </div>

      <div className="service-cta-banner">
        <h2>Need Reliable Back-Office Staffing Solutions?</h2>
        <p>Get vetted data entry operators deployed to your facility within 48 hours.</p>
        <div className="service-cta-banner__actions">
          <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
          <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
        </div>
      </div>

      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
            <h2 className="text-theme-dark">Streamline Your Operations</h2>
            <p>Contact our team to discuss your specific data management requirements and receive a customized deployment plan.</p>
            <div style={{ marginTop: '40px' }}>
              <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                REQUEST A CONSULTATION
              </Link>
            </div>
          </div>

          <div className="service-nav-footer">
            <h4>EXPLORE OTHER SERVICES</h4>
            <div className="nav-links">
              <Link to="/facility-management">Facility Management</Link>
              <Link to="/housekeeping">Housekeeping</Link>
              <Link to="/security-guards">Manned Guarding</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataEntry;
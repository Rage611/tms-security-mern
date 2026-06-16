import React from 'react';
import SEOHead from '../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../SharedServiceLayout.css';

import PageHeader from '../../../PageHeader/PageHeader';
import facilityImg from '../../../../assets/images/NavbarServices/facilitymanagement.webp';

const FacilityManagement = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Facility Management Services Delhi NCR | Office Maintenance | TMS Security"
        description="End-to-end facility management for corporate offices, commercial complexes & industrial plants in Delhi NCR. ISO 9001:2015 certified operations — TMS Security."
        canonical="https://tmssecurity.in/facility-management"
      />

      <PageHeader title="Facility Management" eyebrow="Integrated Solutions" bgImage="/header-facility.webp" />

      <div className="content-container">
        <div className="service-content-main">
          <img src={facilityImg} alt="Facility Management Services Delhi NCR" className="service-featured-image" fetchPriority="high" loading="eager" />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">FACILITY MANAGEMENT SERVICES</h2>

            <p className="service-body-text">
              Catering to the demands of a community which has come to expect a very high standard
              in the provision of facility management. TMS meets the customers' wants in a cost-effective
              manner while maintaining absolute operational superiority.
            </p>

            <blockquote className="elite-quote text-theme-dark">
              "We do not compromise on protocols. Every facility under our command is managed with the same rigorous discipline as a high-value asset."
            </blockquote>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Offices / Building Maintenance</h3>
              <p className="service-body-text">
                Maintenance of your system requires a clear and complete understanding of technical details.
                TMS deploys highly experienced engineers to meticulously plan and execute activities for routine,
                planned, and preventive maintenance architectures.
              </p>
            </div>

            <div className="trust-badge-strip">
              <div className="trust-badge">
                <span className="trust-badge__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="trust-badge__label">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="service-cta-banner">
        <div className="cta-inner">
          <h2>OPTIMIZE YOUR FACILITY OPERATIONS</h2>
          <p>Trusted by 100+ corporate clients across India. Deploy TMS Facility Management for uncompromising operational standards.</p>
          <div className="cta-btn-group">
            <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
            <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
          </div>
        </div>
      </section>

      <section className="service-action-section">
        <div className="action-container">
          <div className="service-nav-footer">
            <h4>EXPLORE MORE SERVICES</h4>
            <div className="nav-links">
              <Link to="/housekeeping">Housekeeping</Link>
              <Link to="/security-guards">Security Guards</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilityManagement;
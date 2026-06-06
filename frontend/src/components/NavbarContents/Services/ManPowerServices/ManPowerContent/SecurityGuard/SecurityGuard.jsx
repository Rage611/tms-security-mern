import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../../../../SEOHead/SEOHead';
import '../../../SharedServiceLayout.css';

import serviceBanner from '../../../../../../assets/images/Headingbg.webp';
import guardTeam from '../../../../../../assets/images/NavbarServices/securityguard.webp';

const SecurityGuards = () => {
  return (
    <div className="service-page full-width">

      <SEOHead
        title="Security Guard Services in Delhi NCR | Hire Trained Guards | TMS Security"
        description="Hire PSARA-licensed, ex-servicemen security guards for corporate offices, factories, warehouses & residential complexes in Delhi NCR. TMS Security — 500+ guards deployed, ISO 9001:2015 certified."
        canonical="https://tmssecurity.in/security-guards"
      />

      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>SECURITY GUARDS</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          <img
            src={guardTeam}
            alt="TMS Security Guard Team"
            className="service-featured-image"
            fetchPriority="high"
            loading="eager"
          />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">SECURITY GUARD SERVICES</h2>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Education & Physical Standard</h3>
              <p className="service-body-text">
                In order to ensure quality in our guarding services, we have prescribed strict standards.
                Our guards act as the first line of defense. We ensure a minimum height of 5'7" and
                healthy physical fitness. Verification of character and antecedents is undertaken by
                police authorities to ensure the right persons are enrolled.
              </p>
            </div>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Ex-Servicemen</h3>
              <p className="service-body-text">
                Our panel of officers comprises personnel who have experience serving in the Defense Services
                or Para-military forces. While ASO & Head Guards are not required to have a service background,
                it is highly preferred for them to have adequate tactical experience in Security Services.
              </p>
            </div>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Professional Training</h3>
              <p className="service-body-text">
                TMS lays great stress on planning, organizing, and conducting professional training for
                all security staff. This includes definitions, aims, types & scope of security, understanding
                various threats, fire fighting, and preventive measures.
              </p>
            </div>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Guarding Services Scope</h3>
              <ul className="tactical-list">
                <li>Intellectual property and piracy protection protocols.</li>
                <li>Verification of Employees, Staff, and Private Individuals.</li>
                <li>Visa Verification for Embassies and Consulates.</li>
                <li>Insurance claims investigation – Both Public & Private Sector.</li>
                <li>Surveillance operations for individual and corporate investigation needs.</li>
                <li>Verification of character and antecedents for Matrimonial needs.</li>
              </ul>
            </div>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Key Functions</h3>
              <ul className="tactical-list">
                <li>Rounds of Inspection, Access Control & Reception</li>
                <li>Fire Fighting & First Aid Rapid Response</li>
                <li>Supervision & 24-hours Control Room Monitoring</li>
                <li>Quality Control and Assurance (QCA) Checks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-badge-strip">
        <div className="trust-badge">
          <span className="trust-badge__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <span className="trust-badge__label">PSARA Licensed</span>
        </div>
        <div className="trust-badge">
          <span className="trust-badge__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M7 8h10" />
              <path d="M7 12h4" />
              <circle cx="16" cy="16" r="3" />
              <path d="M15 15l2 2" />
            </svg>
          </span>
          <span className="trust-badge__label">ISO 9001:2015 Certified</span>
        </div>
      </div>

      <section className="service-cta-banner">
        <div className="action-container">
          <h2>Secure Your Premises With Trained Security Guards</h2>
          <p>500+ guards deployed across Delhi NCR — trusted by leading corporates, factories, and residential complexes.</p>
          <div className="cta-btn-group">
            <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
            <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
          </div>
        </div>
      </section>

      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
            <h2 className="text-theme-dark">DEPLOY ELITE SECURITY PERSONNEL</h2>
            <p>Contact our team to discuss your security requirements and receive a customized deployment plan.</p>
            <div style={{ marginTop: '40px' }}>
              <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                REQUEST A DEPLOYMENT
              </Link>
            </div>
          </div>

          <div className="service-nav-footer">
            <h4>EXPLORE MANNED GUARDING SOLUTIONS</h4>
            <div className="nav-links">
              <Link to="/bouncer">Tactical Bouncers</Link>
              <Link to="/pso">Personal Security Officer</Link>
              <Link to="/trained-gunman">Trained Gunman</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SecurityGuards;
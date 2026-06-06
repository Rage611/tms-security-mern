import React from 'react';
import SEOHead from '../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import './TheCompany.css';
import companyBanner from '../../../assets/images/Headingbg.webp';

const TheCompany = () => {
  return (
    <div id="company-section" className="company-page">
      <SEOHead
        title="About TMS Security | PSARA Licensed Security Agency Delhi NCR | 15+ Years"
        description="TMS Security Group is a PSARA-licensed, ISO 9001:2015 certified security agency with 15+ years of experience. 500+ guards deployed across India for corporate, industrial & residential security."
        canonical="https://tmssecurity.in/company"
      />

      <div className="company-hero" style={{ backgroundImage: `url(${companyBanner})` }}>
        <div className="overlay"></div>
        <h1>THE COMPANY</h1>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">15+</span>
          <span className="stat-label">Years of Operations</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">500+</span>
          <span className="stat-label">Guards Deployed</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">100+</span>
          <span className="stat-label">Corporate Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">PAN</span>
          <span className="stat-label">India Coverage</span>
        </div>
      </div>

      <div className="content-container">
        <div className="text-content">
          <h2 className="section-title text-theme-dark">WHO WE ARE</h2>
          <p>
            <strong>TMS Security Services</strong> is a premier security agency committed to providing
            top-tier protection across India. Established with a foundation of military-grade discipline
            and operational excellence, we treat every client's safety as our own.
          </p>
          <p>
            Our guards are rigorously trained to handle diverse scenarios, from corporate
            reception management to high-risk emergency response. We have built an uncompromising
            reputation across Delhi NCR and beyond through consistent performance, strict
            compliance, and zero-tolerance for lapses.
          </p>
          <p>
            Operating across sectors including corporate offices, industrial plants, residential
            complexes, hospitals, schools, and retail chains, TMS Security delivers scalable
            manpower solutions tailored to the unique risk profile of each client.
          </p>
        </div>

        <div className="sidebar">
          <div className="contact-widget">
            <h3>PARTNER WITH US</h3>
            <p className="contact-widget-text">Secure your enterprise with our elite guarding solutions today.</p>
            <Link to="/contact" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2 className="section-title text-theme-dark" style={{ textAlign: 'center', marginBottom: '50px' }}>CORE OPERATIONAL VALUES</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Discipline First</h3>
            <p>Every TMS operative is trained with military-grade protocols. Punctuality, uniform standards, and situational awareness are non-negotiable.</p>
          </div>
          <div className="value-card">
            <h3>Zero Compromise</h3>
            <p>Background verification, police clearance, and physical fitness testing are mandatory for every deployed guard. No exceptions.</p>
          </div>
          <div className="value-card">
            <h3>Client Centricity</h3>
            <p>Dedicated account managers, 24/7 control room support, and real-time incident reporting ensure absolute transparency with every client.</p>
          </div>
          <div className="value-card">
            <h3>Scalable Deployment</h3>
            <p>From a single guard for a retail outlet to a 200-person deployment for an industrial zone, our infrastructure scales without compromising quality.</p>
          </div>
          <div className="value-card">
            <h3>Continuous Training</h3>
            <p>Monthly refresher drills, fire safety certifications, and crisis management workshops keep our force perpetually ready.</p>
          </div>
          <div className="value-card">
            <h3>Regulatory Compliance</h3>
            <p>Full compliance with PSARA regulations, minimum wage mandates, EPF/ESI contributions, and all applicable labour laws.</p>
          </div>
        </div>
      </div>

      <div className="compliance-section">
        <h2>CERTIFICATIONS &amp; COMPLIANCE</h2>
        <div className="compliance-badges">
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="badge-text">PSARA Licensed</span>
            <span className="badge-detail">Private Security Agencies Regulation Act compliant across all operational states</span>
          </div>
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M9 12l2 2 4-4" />
                <path d="M7 8h10" />
              </svg>
            </div>
            <span className="badge-text">ISO 9001:2015</span>
            <span className="badge-detail">Quality Management System certified for security service delivery and operations</span>
          </div>
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span className="badge-text">EPF &amp; ESI Compliant</span>
            <span className="badge-detail">Full statutory compliance for all deployed personnel including provident fund and insurance</span>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>READY TO SECURE YOUR OPERATIONS?</h2>
        <p>Get a tailored security proposal from our operations team within 24 hours.</p>
        <div className="cta-btn-row">
          <Link to="/contact" className="cta-btn-gold">GET A FREE QUOTE</Link>
          <a href="tel:+919717763351" className="cta-btn-outline">CALL: +91-971-776-3351</a>
        </div>
      </div>
    </div>
  );
};

export default TheCompany;
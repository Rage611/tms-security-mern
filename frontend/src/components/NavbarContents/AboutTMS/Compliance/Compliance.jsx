import React from 'react';
import SEOHead from '../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import './Compliance.css';
import complianceBanner from '../../../../assets/images/Headingbg.webp';

const certifications = [
  {
    id: 'iso-9001',
    title: 'ISO 9001:2015',
    body: 'Bureau of Indian Standards',
    scope: 'Quality Management System for Security, Housekeeping, and Manpower Services',
    status: 'Active',
    asset: '/certificates/iso-9001-certification.pdf'
  },
  {
    id: 'nsic',
    title: 'NSIC Enlistment Certificate',
    body: 'National Small Industries Corporation',
    scope: 'Government Purchase Certificate with ₹187 Lakh Monetary Limit',
    status: 'Active',
    asset: '/certificates/nsic-enlistment-certificate.pdf'
  },
  {
    id: 'msme',
    title: 'MSME Udyam Registration',
    body: 'Ministry of MSME, Government of India',
    scope: 'Udyam Number: UDYAM-DL-11-0033859',
    status: 'Active',
    asset: '/certificates/msme-udyam-registration.pdf'
  }
];

const psaraLicenses = [
  {
    state: 'Haryana',
    license: 'PSA/L/44/HR/2025/OCT/3/1539',
    validity: 'Valid through October 2030',
    status: 'Active'
  },
  {
    state: 'Uttar Pradesh',
    license: 'PSA/L/93/UP/2021/DEC/3/330',
    validity: 'Valid through December 2026',
    status: 'Active'
  },
  {
    state: 'Delhi',
    license: 'Renewal Under Process',
    validity: 'Active Operations Authorized',
    status: 'Renewal'
  }
];

const Compliance = () => {
  return (
    <div className="compliance-page">
      <SEOHead
        title="Certifications & Compliance | PSARA Licensed | ISO 9001:2015 | TMS Security"
        description="Verify TMS Security's active certifications — ISO 9001:2015 QMS, PSARA licenses (Haryana, UP, Delhi), NSIC enlistment, and MSME Udyam registration. Fully compliant security operations across India."
        canonical="https://tmssecurity.in/compliance"
      />

      <div className="compliance-hero" style={{ backgroundImage: `url(${complianceBanner})` }}>
        <div className="overlay"></div>
        <h1>COMPLIANCE &amp; CERTIFICATIONS</h1>
      </div>

      <div className="compliance-intro-strip">
        <div className="intro-inner">
          <p>
            TMS Security maintains full regulatory compliance across every state of operation.
            All certifications listed below are independently verifiable and subject to periodic audit.
          </p>
        </div>
      </div>

      <section className="compliance-section-block">
        <div className="compliance-container">
          <h2 className="compliance-section-title">PSARA OPERATIONAL LICENSES</h2>
          <p className="compliance-section-subtitle">Private Security Agencies Regulation Act — State-Wise Authorization</p>

          <div className="psara-grid">
            {psaraLicenses.map((item) => (
              <div key={item.state} className={`psara-card ${item.status === 'Renewal' ? 'psara-card--renewal' : ''}`}>
                <div className="psara-card-header">
                  <span className="psara-state">{item.state}</span>
                  <span className={`psara-status-badge ${item.status === 'Renewal' ? 'badge--renewal' : 'badge--active'}`}>
                    {item.status === 'Renewal' ? 'RENEWAL IN PROGRESS' : 'ACTIVE'}
                  </span>
                </div>
                <div className="psara-card-body">
                  <div className="psara-detail-row">
                    <span className="psara-label">LICENSE NO.</span>
                    <span className="psara-value">{item.license}</span>
                  </div>
                  <div className="psara-detail-row">
                    <span className="psara-label">VALIDITY</span>
                    <span className="psara-value">{item.validity}</span>
                  </div>
                </div>
                {item.status === 'Renewal' && (
                  <div className="psara-renewal-notice">
                    Operations continue under existing authorization during renewal proceedings
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance-section-block compliance-section-block--light">
        <div className="compliance-container">
          <h2 className="compliance-section-title">CORPORATE CERTIFICATIONS</h2>
          <p className="compliance-section-subtitle">Quality Standards, Government Registrations &amp; Industry Credentials</p>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card">
                <div className="cert-card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-body">{cert.body}</p>
                <p className="cert-card-scope">{cert.scope}</p>
                <div className="cert-card-footer">
                  <span className="cert-status-badge">VERIFIED</span>
                  <a
                    href={cert.asset}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    VIEW CERTIFICATE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="compliance-cta-section">
        <div className="compliance-container">
          <h2>NEED COMPLIANCE DOCUMENTATION?</h2>
          <p>Request certified copies of any license or registration for your vendor onboarding process.</p>
          <div className="compliance-cta-row">
            <Link to="/contact" className="compliance-cta-btn-gold">REQUEST DOCUMENTS</Link>
            <a href="tel:+919717763351" className="compliance-cta-btn-outline">CALL: +91-971-776-3351</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;

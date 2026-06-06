import React from 'react';
import SEOHead from '../../../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../../../SharedServiceLayout.css';

import serviceBanner from '../../../../../../assets/images/Headingbg.webp';
import psoImg from '../../../../../../assets/images/NavbarServices/pso.webp';

const PSO = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Personal Security Officer (PSO) Services Delhi | Executive Protection | TMS Security"
        description="Hire elite PSO & close protection officers for C-suite executives, VIPs & high-net-worth individuals across India. PSARA licensed, ex-servicemen — TMS Security."
        canonical="https://tmssecurity.in/pso"
      />

      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>PSO</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          <img src={psoImg} alt="Personal Security Officer Executive Protection" className="service-featured-image" fetchPriority="high" loading="eager" />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">PERSONAL SECURITY OFFICERS (PSO)</h2>

            <p className="service-body-text">
              TMS Security provides elite Close Protection Specialists for C-Suite executives, high-net-worth
              individuals, diplomats, and VIPs. Our PSOs operate with the highest level of discretion, blending
              seamlessly into corporate or social environments while maintaining a 360-degree security perimeter.
            </p>

            <blockquote className="elite-quote text-theme-dark">
              "Executive protection is an art of invisibility. We secure your life and mobility without disrupting your lifestyle."
            </blockquote>

            <div className="service-details-grid">
              <div className="service-text-block">
                <h3 className="text-theme-dark">Advance Planning &amp; Reconnaissance</h3>
                <p className="service-body-text">
                  A successful protection detail relies on intelligence. Our PSOs conduct thorough advance
                  reconnaissance of travel routes, venues, and meeting locations to identify vulnerabilities,
                  establish choke points, and map out immediate emergency extraction routes.
                </p>
              </div>

              <div className="service-text-block">
                <h3 className="text-theme-dark">Covert &amp; Overt Protection</h3>
                <p className="service-body-text">
                  Depending on the threat matrix, our officers can provide an overt, highly visible presence
                  to deter hostile action, or operate covertly in business attire to provide low-profile,
                  unobtrusive security that respects your privacy.
                </p>
              </div>
            </div>

            <div className="service-text-block" style={{ marginTop: '50px' }}>
              <h3 className="text-theme-dark">Executive Protection Protocols</h3>
              <ul className="tactical-list">
                <li>24/7 dedicated close protection and mobility security.</li>
                <li>Threat assessment and real-time risk mitigation.</li>
                <li>Evasive driving and secure transit management.</li>
                <li>Media crowd control and aggressive paparazzi management.</li>
                <li>Absolute adherence to Non-Disclosure Agreements (NDAs) and confidentiality.</li>
              </ul>
            </div>

            <div className="trust-badge-strip">
              <div className="trust-badge">
                <span className="trust-badge__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <span className="trust-badge__label">PSARA Licensed</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M9 12l2 2 4-4" />
                    <path d="M7 8h10" />
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
          <h2>SECURE YOUR PRINCIPALS TODAY</h2>
          <p>Contract a TMS Executive Protection detail for uncompromising personal safety and discretion.</p>
          <div className="cta-btn-group">
            <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
            <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
          </div>
        </div>
      </section>

      <section className="service-action-section">
        <div className="action-container">
          <div className="service-nav-footer">
            <h4>EXPLORE MANNED GUARDING SOLUTIONS</h4>
            <div className="nav-links">
              <Link to="/bouncer">Tactical Bouncers</Link>
              <Link to="/trained-gunman">Armed Tactical Response</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSO;
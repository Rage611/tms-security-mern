import React from 'react';
import SEOHead from '../../../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../../../SharedServiceLayout.css';

import serviceBanner from "../../../../../../assets/images/Headingbg.webp";
import tacticalImg from "../../../../../../assets/images/NavbarServices/bouncer.webp";

const Bouncer = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Professional Bouncer Services in Delhi NCR | Event Security | TMS Security"
        description="Hire elite bouncers and crowd control specialists for nightclubs, weddings, corporate events & VIP gatherings in Delhi NCR. PSARA licensed, ISO 9001:2015 certified — TMS Security."
        canonical="https://tmssecurity.in/bouncer"
      />

      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>BOUNCER</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          <img
            src={tacticalImg}
            alt="Elite Event Security Personnel"
            className="service-featured-image"
            fetchPriority="high"
            loading="eager"
          />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">ELITE BOUNCER & ACCESS CONTROL SERVICES</h2>

            <p className="service-body-text">
              TMS Security provides highly trained physical intervention and crowd management specialists
              for premium venues, high-profile corporate events, and exclusive private gatherings. We
              deploy personnel who command respect through professional presence, not just physical force.
            </p>

            <blockquote className="elite-quote text-theme-dark">
              "True security is the ability to maintain absolute order and neutralize threats discreetly, before they ever escalate."
            </blockquote>

            <div className="service-details-grid">
              <div className="service-text-block">
                <h3 className="text-theme-dark">Psychological & Physical Superiority</h3>
                <p className="service-body-text">
                  Our bouncers undergo rigorous training in crowd psychology, threat assessment, and conflict
                  de-escalation. While they possess the physical capability to handle immediate physical threats,
                  their primary objective is to maintain a seamless, secure environment for your guests and VIPs without disruption.
                </p>
              </div>

              <div className="service-text-block">
                <h3 className="text-theme-dark">High-Value Deployment Scenarios</h3>
                <p className="service-body-text">
                  We specialize in securing environments where brand reputation and guest safety are paramount.
                  This includes elite hospitality venues, red-carpet premieres, executive corporate retreats,
                  and high-risk crowd environments requiring strict access control.
                </p>
              </div>
            </div>

            <div className="service-text-block" style={{ marginTop: '50px' }}>
              <h3 className="text-theme-dark">Operational Capabilities</h3>
              <ul className="tactical-list">
                <li>Strict perimeter defense and credential-based access control.</li>
                <li>Advanced threat detection and pre-emptive neutralization techniques.</li>
                <li>Expertise in VIP escorting and secure pathway clearing.</li>
                <li>Rapid-response physical intervention and safe extraction protocols.</li>
                <li>Uncompromising adherence to client confidentiality and discretion.</li>
              </ul>
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
                    <path d="M7 12h10" />
                    <path d="M7 16h6" />
                  </svg>
                </span>
                <span className="trust-badge__label">ISO 9001:2015 Certified</span>
              </div>
            </div>

            <div className="service-cta-banner">
              <h2>Secure Your Venue With Elite Bouncer Protection</h2>
              <p>Deploy industry-leading crowd control specialists trained in threat assessment, conflict de-escalation, and VIP protection.</p>
              <div className="cta-btn-group">
                <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
                <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="service-action-section">
        <div className="action-container">
          <div className="service-nav-footer">
            <h4>EXPLORE MANNED GUARDING SOLUTIONS</h4>
            <div className="nav-links">
              <Link to="/trained-gunman">Trained Gunman</Link>
              <Link to="/pso">Personal Security Officer (PSO)</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bouncer;
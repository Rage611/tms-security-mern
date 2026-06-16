import React from 'react';
import SEOHead from '../../../../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import '../../../SharedServiceLayout.css';

import PageHeader from '../../../../../PageHeader/PageHeader';
import armedImg from '../../../../../../assets/images/NavbarServices/gunman.webp';

const TrainedGunman = () => {
  return (
    <div className="service-page full-width">
      <SEOHead
        title="Licensed Trained Gunman Services Delhi NCR | Armed Security | TMS Security"
        description="Deploy fully licensed armed security guards for banks, ATMs, cash-in-transit & high-risk facilities across Delhi NCR. PSARA licensed, ex-servicemen — TMS Security."
        canonical="https://tmssecurity.in/trained-gunman"
      />

      <PageHeader title="Trained Gunman" eyebrow="Armed Response" bgImage="/header-tactical.webp" />

      <div className="content-container">
        <div className="service-content-main">
          <img
            src={armedImg}
            alt="Licensed Armed Security Personnel"
            className="service-featured-image"
            fetchPriority="high"
            loading="eager"
          />

          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">LICENSED ARMED SECURITY PERSONNEL</h2>

            <p className="service-body-text">
              Certain high-risk assets, financial institutions, and sensitive corporate installations require
              a definitive layer of physical deterrence. TMS Security provides fully licensed, rigorously vetted
              armed personnel trained in tactical response and crisis neutralization.
            </p>

            <blockquote className="elite-quote text-theme-dark">
              "Armed security is not about the presence of a weapon; it is about the extreme discipline, restraint, and tactical judgment of the operator holding it."
            </blockquote>

            <div className="service-details-grid">
              <div className="service-text-block">
                <h3 className="text-theme-dark">Weapon Proficiency & Licensing</h3>
                <p className="service-body-text">
                  We deploy personnel who have historically proven their capability, often drawing from
                  Ex-Servicemen and retired law enforcement. Every armed guard carries fully verified,
                  valid all-India or state-specific weapon licenses with zero tolerance for compliance errors.
                </p>
              </div>

              <div className="service-text-block">
                <h3 className="text-theme-dark">Rules of Engagement</h3>
                <p className="service-body-text">
                  Our gunmen are trained in strict rules of engagement (ROE). They act as a supreme visual
                  deterrent while possessing the psychological conditioning to remain calm under pressure,
                  ensuring the absolute safety of your personnel and physical assets.
                </p>
              </div>
            </div>

            <div className="service-text-block" style={{ marginTop: '50px' }}>
              <h3 className="text-theme-dark">Deployment Capabilities</h3>
              <ul className="tactical-list">
                <li>Protection of high-value cash logistics and transit operations.</li>
                <li>Static armed defense for banks, ATMs, and secure corporate vaults.</li>
                <li>Armed escort for highly sensitive intellectual property or materials.</li>
                <li>Perimeter lockdown for high-threat industrial and manufacturing zones.</li>
                <li>Rapid emergency response and threat containment protocols.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="trust-badge-strip">
        <div className="trust-badge">
          <svg className="trust-badge__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span className="trust-badge__label">PSARA Licensed</span>
        </div>
        <div className="trust-badge">
          <svg className="trust-badge__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <span className="trust-badge__label">ISO 9001:2015</span>
        </div>
      </div>

      <div className="service-cta-banner">
        <h2>Deploy Licensed Armed Security — Across Delhi NCR</h2>
        <p>Get PSARA-compliant trained gunman services tailored for your facility. Rapid deployment, ex-servicemen operators, and 24/7 armed coverage.</p>
        <div className="service-cta-banner__actions">
          <Link to="/contact" className="cta-btn cta-btn--primary">GET A FREE QUOTE</Link>
          <a href="tel:+919717763351" className="cta-btn cta-btn--secondary">CALL NOW: +91-971-776-3351</a>
        </div>
      </div>

      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
            <h2 className="text-theme-dark">SECURE YOUR HIGH-VALUE ASSETS</h2>
            <p>Deploy TMS Armed Tactical Personnel for uncompromising physical defense.</p>
            <div style={{ marginTop: '40px' }}>
              <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                REQUEST ARMED DEPLOYMENT
              </Link>
            </div>
          </div>

          <div className="service-nav-footer">
            <h4>EXPLORE MANNED GUARDING SOLUTIONS</h4>
            <div className="nav-links">
              <Link to="/bouncer">Tactical Bouncers</Link>
              <Link to="/pso">Personal Security Officer (PSO)</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainedGunman;
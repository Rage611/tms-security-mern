import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../../SharedServiceLayout.css';
// Pre-applied the deep nesting fix for your image paths!
import serviceBanner from '../../../../../../assets/images/Headingbg.webp/'; 
import armedImg from '../../../../../../assets/images/NavbarServices/gunman.png'; 

const TrainedGunman = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page full-width" key={pathname}>
      
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>ARMED TACTICAL RESPONSE</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          
          <img src={armedImg} alt="Licensed Armed Security Personnel" className="service-featured-image" />
          
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
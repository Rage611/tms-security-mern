import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Bouncer.css';

import serviceBanner from "../../../../../../assets/images/hero/hero-1.png"; 
import tacticalImg from "../../../../../../assets/images/NavbarServices/bouncer.png";

const Bouncer = () => {
  const { pathname } = useLocation();

  // Route Reset: Snaps to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page full-width" key={pathname}>
      
      {/* 1. Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>TACTICAL CROWD CONTROL</h1>
      </div>

      {/* 2. Main Narrative Content */}
      <div className="content-container">
        <div className="service-content-main">
          
          <img src={tacticalImg} alt="Elite Event Security Personnel" className="service-featured-image" />
          
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

          </div>
        </div>
      </div>

      {/* 3. Bottom CTA Section (Matching your theme) */}
      <section className="service-action-section">
        <div className="action-container">
          
          <div className="contact-full-box">
             <h2 className="text-theme-dark">SECURE YOUR VENUE</h2>
             <p>Deploy TMS tactical bouncers and crowd control specialists for your next high-profile requirement.</p>
             <div style={{ marginTop: '40px' }}>
                <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                  REQUEST A DEPLOYMENT CONSULTATION
                </Link>
             </div>
          </div>

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
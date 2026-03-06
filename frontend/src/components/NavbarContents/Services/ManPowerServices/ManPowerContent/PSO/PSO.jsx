import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PSO.css';

// Pre-applied the deep nesting fix for your image paths!
import serviceBanner from '../../../../../../assets/images/hero/hero-3.png'; 
import psoImg from '../../../../../../assets/images/hero/hero-2.png'; 

const PSO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page full-width" key={pathname}>
      
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>EXECUTIVE PROTECTION</h1>
      </div>

      <div className="content-container">
        <div className="service-content-main">
          
          <img src={psoImg} alt="Close Protection Executive Security" className="service-featured-image" />
          
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
                <h3 className="text-theme-dark">Advance Planning & Reconnaissance</h3>
                <p className="service-body-text">
                  A successful protection detail relies on intelligence. Our PSOs conduct thorough advance 
                  reconnaissance of travel routes, venues, and meeting locations to identify vulnerabilities, 
                  establish choke points, and map out immediate emergency extraction routes.
                </p>
              </div>

              <div className="service-text-block">
                <h3 className="text-theme-dark">Covert & Overt Protection</h3>
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

          </div>
        </div>
      </div>

      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
             <h2 className="text-theme-dark">SECURE YOUR PRINCIPALS</h2>
             <p>Contract a TMS Executive Protection detail for uncompromising personal safety and discretion.</p>
             <div style={{ marginTop: '40px' }}>
                <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                  REQUEST EXECUTIVE PROTECTION
                </Link>
             </div>
          </div>

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
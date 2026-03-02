import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';

import contactBanner from '../../../assets/images/hero/hero-2.png'; 

const Contact = () => {
  const { pathname } = useLocation();

  // Route Reset: Snaps to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact-page full-width" key={pathname}>
      
      {/* 1. Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="overlay"></div>
        <h1>CONTACT US</h1>
      </div>

      {/* 2. Main Content Grid */}
      <div className="contact-container">
        <div className="contact-flex-wrapper">
          
          {/* Left Side: Corporate Intel */}
          <div className="office-details-section">
            <h2 className="office-heading">CORPORATE HEADQUARTERS</h2>
            <p className="contact-body-text">
              For operational inquiries, strategic partnerships, or immediate security deployments, 
              reach out to our command center.
            </p>
            
            <div className="info-block">
              <h3 className="gold-heading">Delhi Office</h3>
              <ul className="tactical-info-list">
                <li>
                  <strong>ADDRESS:</strong><br />
                  526, Ground Floor, Opp Metro Pillar No. 623,<br />
                  Site-1, Vikas Puri, New Delhi, 110018
                </li>
                <li>
                  <strong>DIRECT LINE:</strong><br />
                  +91 9717763351
                </li>
                <li>
                  <strong>SECURE FAX:</strong><br />
                  +91 11 4140 1113
                </li>
              </ul>
            </div>

            <div className="info-block">
              <h3 className="gold-heading">National Presence</h3>
              <p className="contact-body-text">
                Operating with a comprehensive network across major metropolitan hubs and strategic industrial zones nationwide.
              </p>
            </div>
          </div>

          {/* Right Side: Secure Inquiry Portal */}
          <div className="contact-form-section">
            <div className="portal-header-small">
              <h2>SECURE INQUIRY PORTAL</h2>
            </div>
            
            <form className="elite-contact-form">
              <div className="input-row">
                <input type="text" placeholder="Your Name*" required />
              </div>

              <div className="input-row">
                <input type="email" placeholder="Your Email*" required />
              </div>

              <div className="input-row">
                <input type="text" placeholder="Subject" />
              </div>

              {/* Upgraded Elite Dropdown */}
              <div className="input-row">
                <select required defaultValue="">
                  <option value="" disabled>Select Service*</option>
                  <option value="guarding">Guarding Services</option>
                  <option value="facility">Facility Management</option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="electronic">Electronic Security</option>
                </select>
              </div>

              <div className="input-row">
                <textarea placeholder="Your Message" rows="6"></textarea>
              </div>

              <button type="button" className="contact-send-btn">TRANSMIT MESSAGE</button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. Tactical Map Section (Using your custom invert filter) */}
      <div className="map-section">
        <iframe 
          title="TMS Office Location"
          src="https://www.google.com/maps?q=500,+Shankar+Garden,+Vikaspuri,+New+Delhi,+Delhi,+110018&output=embed"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
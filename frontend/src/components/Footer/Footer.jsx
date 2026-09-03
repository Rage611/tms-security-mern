import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';
import logo from '../../assets/images/Logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="top-bar-content">
          <img src={logo} alt="TMS Security Logo" className="footer-logo-small" width="70" height="70" loading="lazy" decoding="async" />
          <p>A Market Leader in Security, Facility Management and Manpower Solutions</p>
          <HashLink smooth to="/contact#contact-section" className="get-in-touch-btn">
            GET IN TOUCH
          </HashLink>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-column">
          <h3>ABOUT TMS GROUP</h3>
          <p>TMS Security Services is a premier Indian security provider with operations across the nation. We are the #1 choice for Corporate, Governmental, and Institutional security solutions.</p>
          <div className="trust-badges">
            <span className="badge badge-gold">PSARA Licensed Agency</span>
            <span className="badge badge-blue">ISO 9001:2015 Certified</span>
          </div>
        </div>
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company">About Us</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/compliance">Compliance &amp; Licenses</Link></li>
            <li><Link to="/career">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><Link to="/security-guards">Security Guards</Link></li>
            <li><Link to="/bouncer">Bouncer</Link></li>
            <li><Link to="/pso">PSO</Link></li>
            <li><Link to="/trained-gunman">Trained Gunman</Link></li>
            <li><Link to="/facility-management">Facility Management</Link></li>
            <li><Link to="/housekeeping">Housekeeping</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <p className="contact-item"><strong>Address:</strong> 526, Ground Floor, Opp Metro Pillar No. 623, Site-1, Vikas Puri, New Delhi, 110018</p>
          <p className="contact-item"><strong>Phone:</strong> +91-9717763351</p>
          <p className="contact-item"><strong>Email:</strong> ajaytmsgroup10@gmail.com</p>
        </div>
      </div>
      <div className="footer-areas-bar">
        <div className="footer-areas-inner">
          <div className="footer-areas-title">
            <span className="footer-areas-heading">AREAS WE SERVE (DELHI NCR &amp; REGIONAL OPERATIONS)</span>
            <span className="footer-areas-sub">PSARA Licensed Multi-State Security Deployments</span>
          </div>
          <div className="footer-areas-list">
            <div className="footer-state-col">
              <strong className="footer-state-name">Delhi (NCT):</strong>
              <Link to="/security-services/delhi" className="footer-area-link">Delhi</Link>
            </div>
            <div className="footer-state-col">
              <strong className="footer-state-name">Haryana:</strong>
              <Link to="/security-services/gurgaon" className="footer-area-link">Gurgaon</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/faridabad" className="footer-area-link">Faridabad</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/hisar" className="footer-area-link">Hisar</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/rohtak" className="footer-area-link">Rohtak</Link>
            </div>
            <div className="footer-state-col">
              <strong className="footer-state-name">Uttar Pradesh:</strong>
              <Link to="/security-services/noida" className="footer-area-link">Noida</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/greater-noida" className="footer-area-link">Greater Noida</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/ghaziabad" className="footer-area-link">Ghaziabad</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/lucknow" className="footer-area-link">Lucknow</Link>
              <span className="footer-area-sep">•</span>
              <Link to="/security-services/varanasi" className="footer-area-link">Varanasi</Link>
            </div>
            <div className="footer-state-col">
              <strong className="footer-state-name">Bihar:</strong>
              <Link to="/security-services/patna" className="footer-area-link">Patna</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TMS Security Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
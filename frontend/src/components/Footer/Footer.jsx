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
          <img src={logo} alt="TMS Logo" className="footer-logo-small" />
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
          <div className="trust-badges" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '15px' }}>
            <span className="badge" style={{ backgroundColor: '#ffcc00', color: '#000', padding: '5px 10px', fontWeight: 'bold', borderRadius: '4px', display: 'inline-block', width: 'fit-content' }}>PSARA Licensed Agency</span>
            <span className="badge" style={{ backgroundColor: '#0056b3', color: '#fff', padding: '5px 10px', fontWeight: 'bold', borderRadius: '4px', display: 'inline-block', width: 'fit-content' }}>ISO 9001:2015 Certified</span>
          </div>
        </div>
        <div className="footer-column">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/career">CAREER</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
            <li><Link to="/company">ABOUT US</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>OUR SOLUTIONS</h3>
          <ul>
            <li><Link to="/security-guards">Security Guards</Link></li>
            <li><Link to="/bouncer">Bouncer</Link></li>
            <li><Link to="/pso">PSO</Link></li>
            <li><Link to="/trained-gunman">Trained Gunman</Link></li>
            <li><Link to="/facility-management">Facility Management</Link></li>
            <li><Link to="/housekeeping">Housekeeping</Link></li>
            <li><Link to="/data-entry-operators">Data Entry Operators</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CORPORATE &amp; LEGAL</h3>
          <ul>
            <li><Link to="/compliance">Compliance &amp; Licenses</Link></li>
            <li><Link to="/company">The Company</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/career">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <p><strong>Address:</strong> 526, Ground Floor, Opp Metro Pillar No. 623, Site-1, Vikas Puri, New Delhi, 110018</p>
          <p><strong>Phone:</strong> +91-9717763351</p>
          <p><strong>Email:</strong> contact@tmssecurity.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
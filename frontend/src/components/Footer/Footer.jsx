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
          <p>
            TMS Security Services is a premier Indian security provider with 
            operations across the nation. We are the #1 choice for Corporate, 
            Governmental, and Institutional security solutions.
          </p>
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
            <li><Link to="/data-entry-operators">Data Entry Operators</Link></li>
            <li><Link to="/trained-gunman">Trained Gunman</Link></li>
            <li><Link to="/housekeeping">Housekeeping</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <p><strong>Address:</strong> 526, Ground Floor, Opp Metro Pillar No. 623, Site-1, Vikas Puri, New Delhi, 110018</p>
          <p><strong>Phone:</strong> +91-9717763351</p>
          <p><strong>Email:</strong> ajaytmsgroup10@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
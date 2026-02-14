import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="top-bar-content">
          <img src={logo} alt="TMS Logo" className="footer-logo-small" />
          <p>A Market Leader in Security, Facility Management and Cash Logistics</p>
          <button className="get-in-touch-btn">GET IN TOUCH</button>
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/career">Career</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>OUR SOLUTIONS</h3>
          <ul>
            <li>Security Solutions India</li>
            <li>Industrial Guarding</li>
            <li>Surveillance & CCTV</li>
            <li>Cash Logistics</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>CONTACT DETAILS</h3>
          <p><strong>Address:</strong> Greater Noida, Uttar Pradesh, India</p>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          <p><strong>Email:</strong> info@tmssecurity.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
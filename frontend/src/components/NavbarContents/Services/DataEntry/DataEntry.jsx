import React from 'react';
import { Link } from 'react-router-dom';

// Import your shared CSS file here (adjust the path to match your folder structure)
import '../SharedServiceLayout.css'; 
import heroImage from '../../../../assets/images/Headingbg.webp';
import featuredImage from '../../../../assets/images/NavbarServices/DEO.png';


const DataEntry = () => {
  return (
    <div className="service-page">
      
      {/* --- HERO BANNER --- */}
      <section 
        className="service-hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <h1>Data Entry Operator</h1>
      </section>

      {/* --- MAIN NARRATIVE CONTENT --- */}
      <div className="content-container">
        
        {/* Placeholder for a professional office/typing image */}
        <img 
          src={featuredImage} 
          alt="TMS Data Entry Specialist" 
          className="service-featured-image" 
        />

        <h2 className="section-title">Expanded Administrative Support</h2>
        <p className="service-body-text">
          Reliable, accurate, and secure data management personnel. Let TMS handle your administrative 
          staffing so you can focus on core business operations, knowing your data is being managed 
          by vetted professionals.
        </p>

        <blockquote className="elite-quote">
          "As a security-first company, we bring the same rigorous vetting and confidentiality protocols 
          to our back-office staff as we do to our frontline guards."
        </blockquote>

        {/* --- FEATURES GRID --- */}
        <div className="service-details-grid">
          
          <div className="service-text-block">
            <h3>Uncompromising Accuracy</h3>
            <p className="service-body-text">
              Our operators are rigorously tested for typing speed and precision. We minimize error 
              rates to ensure your databases, inventory logs, and CRM systems remain pristine and reliable.
            </p>
          </div>

          <div className="service-text-block">
            <h3>Data Security</h3>
            <p className="service-body-text">
              TMS enforces strict confidentiality agreements. Our operators are thoroughly vetted to 
              handle your most sensitive financial, operational, and client information safely.
            </p>
          </div>

          <div className="service-text-block">
            <h3>Flexible Deployment</h3>
            <p className="service-body-text">
              Whether you need temporary support for a major digitization project or permanent on-site 
              administrative staff, we scale our team to meet your operational demands.
            </p>
          </div>

        </div>

        {/* --- TACTICAL SCOPE LIST --- */}
        <div style={{ marginTop: '60px' }}>
          <h2 className="section-title">Operational Scope</h2>
          <p className="service-body-text">
            TMS Data Entry Operators are trained across multiple industry standards and software 
            environments, providing seamless integration into your existing workflows:
          </p>
          
          <ul className="tactical-list">
            <li>CRM & Database Updating and Maintenance</li>
            <li>Inventory, Invoice, and Receipt Digitization</li>
            <li>Offline to Online Data Migration Projects</li>
            <li>Document Formatting, Processing, and Filing</li>
            <li>General Administrative Back-Office Support</li>
          </ul>
        </div>

      </div>

      {/* --- FULL WIDTH CTA SECTION --- */}
      <section className="service-action-section">
        <div className="action-container">
          
          <div className="contact-full-box">
            <h2>Streamline Your Operations</h2>
            <p>
              Contact our team to discuss your specific data management requirements and receive 
              a customized deployment plan.
            </p>
            <br />
            <Link to="/contact">
              <button className="submit-btn-gold">Request a Consultation</button>
            </Link>
          </div>

          {/* --- FOOTER NAVIGATION --- */}
          <div className="service-nav-footer">
            <h4>EXPLORE OTHER SERVICES</h4>
            <div className="nav-links">
              <Link to="/facility-management">Facility Management</Link>
              <Link to="/housekeeping">Housekeeping</Link>
              <Link to="/security-guards">Manned Guarding</Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default DataEntry; 
import React from 'react';
import { Link } from 'react-router-dom';
import './FacilityManagement.css';

// Using 4 sets of dots to go back to src/ assets
import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import facilityImg from '../../../../assets/images/hero/hero-3.png'; 

const FacilityManagement = () => {
  return (
    <div className="service-page">
      {/* 1. Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>FACILITY MANAGEMENT</h1>
      </div>

      <div className="content-container">
        
        {/* 2. Main Content (Left) */}
        <div className="service-content">
          <div className="top-section">
            <img src={facilityImg} alt="Facility Management" className="content-image-small" />
            <div className="intro-text">
              <h2 className="main-heading">FACILITY MANAGEMENT SERVICES</h2>
              <p>
                Catering to the demands of a community which has come to expect a very high standard 
                in the provision of facility management. TMS meets the customers' wants in a cost-effective 
                manner.
              </p>
            </div>
          </div>
          
          <p className="highlight-text">
            "The bitterness of poor quality remains long after the sweetness of low price has been forgotten."
          </p>

          <div className="text-block">
            <h3>Offices / Building Maintenance</h3>
            <p>
              Maintenance of your system requires clear and complete understanding of technical details. 
              TMS has experienced engineers to plan and execute maintenance activities for routine, 
              planned, and preventive maintenance.
            </p>
          </div>

          <div className="text-block">
            <h3>Outsource Manpower/Recruitment Services</h3>
            <p>
              The Manpower management division is uniquely placed to bring highly qualified staff 
              for direct placement or placement on contract basis.
            </p>
          </div>
        </div>

        {/* 3. Sidebar (Right) */}
        <div className="sidebar">
          <div className="services-nav">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/manpower">Manned Guarding</Link></li>
              <li><Link to="/facility" className="active">Facility Management</Link></li>
              <li><Link to="/housekeeping">Housekeeping</Link></li>
            </ul>
          </div>

          <div className="contact-widget">
            <h3>GET IN TOUCH</h3>
            <form className="widget-form">
              <input type="text" placeholder="Name*" className="form-input" />
              <input type="email" placeholder="Email*" className="form-input" />
              <textarea placeholder="Message" rows="4" className="form-input"></textarea>
              <button type="button" className="submit-btn">SEND</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FacilityManagement;
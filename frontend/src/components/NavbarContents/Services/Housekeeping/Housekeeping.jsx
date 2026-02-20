import React from 'react';
import { Link } from 'react-router-dom';
import './Housekeeping.css';

// Using 4 sets of dots to reach the assets folder from your deep sub-folder
import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import houseImg from '../../../../assets/images/hero/hero-2.png'; 

const Housekeeping = () => {
  return (
    <div className="service-page">
      {/* Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>HOUSEKEEPING SERVICES</h1>
      </div>

      <div className="content-container">
        {/* Main Content (Left) */}
        <div className="service-content">
          <div className="top-section">
            <img src={houseImg} alt="Housekeeping" className="content-image-small" />
            <div className="intro-text">
              <h2 className="main-heading">PROFESSIONAL HOUSEKEEPING</h2>
              <p>
                TMS provides complete house keeping facilities for offices. The services are 
                designed to provide your employees fresh, clean and germ free environment.
              </p>
              <p>
                Each office is assigned to an executive with the responsibility of directly 
                supervising operations. TMS employs modern tools making work areas healthy 
                and attractive for your staff.
              </p>
            </div>
          </div>
          
          <div className="text-block">
            <p>
                Though the cleaning industry has come a long way, still a lot remains to be 
                done. At TMS, we have a lot of determination, dedication, and a strong will 
                to implement changes required to take standards one generation ahead.
            </p>
          </div>

          <div className="strengths-section">
            <h3>OUR STRENGTHS</h3>
            <ul className="strength-list">
              <li>Specific and clear view points to provide best services.</li>
              <li>In-house training and upgradation capabilities.</li>
              <li>Trained and committed work force.</li>
              <li>Continuous training up to the level of Managers every 3 months.</li>
              <li>Adequate machine infrastructure for mechanized cleaning solutions.</li>
              <li>24/7 connectivity with Supervisors, Managers, and Office Control Room.</li>
              <li>Full compliance with Contract Labour Act rules and regulations.</li>
            </ul>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <div className="sidebar">
          <div className="services-nav">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/manpower">Manned Guarding</Link></li>
              <li><Link to="/facility-management">Facility Management</Link></li>
              <li><Link to="/housekeeping" className="active">Housekeeping</Link></li>
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

export default Housekeeping;
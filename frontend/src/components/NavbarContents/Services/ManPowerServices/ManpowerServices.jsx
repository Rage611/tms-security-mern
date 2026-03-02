import React from 'react';
import { Link } from 'react-router-dom';
import './ManpowerServices.css';

import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import guardTeam from '../../../../assets/images/hero/hero-2.png';

const ManpowerServices = () => {
  return (
    <div className="service-page">
      
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>MANNED GUARDING</h1>
      </div>

      <div className="content-container">
        
        <div className="service-content">
          
          <img src={guardTeam} alt="TMS Security Guard Team" className="service-featured-image" />
          
          <h2 className="section-title text-theme-dark">SECURITY GUARD SERVICES</h2>
          
          <div className="service-text-block">
            <h3 className="text-theme-dark">Education & Physical Standard</h3>
            <p className="service-body-text">
              In order to ensure quality in our guarding services, we have prescribed strict standards. 
              Our guards act as the first line of defense. We ensure a minimum height of 5'7" and 
              healthy physical fitness. Verification of character and antecedents is undertaken by 
              police authorities to ensure the right persons are enrolled.
            </p>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Ex-Servicemen</h3>
            <p className="service-body-text">
              Our panel of officers comprises personnel who have experience serving in the Defense Services 
              or Para-military forces. While ASO & Head Guards are not required to have a service background, 
              it is highly preferred for them to have adequate tactical experience in Security Services.
            </p>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Professional Training</h3>
            <p className="service-body-text">
              TMS lays great stress on planning, organizing, and conducting professional training for 
              all security staff. This includes definitions, aims, types & scope of security, understanding 
              various threats, fire fighting, and preventive measures.
            </p>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Guarding Services Scope</h3>
            <ul className="tactical-list">
              <li>Intellectual property and piracy protection protocols.</li>
              <li>Verification of Employees, Staff, and Private Individuals.</li>
              <li>Visa Verification for Embassies and Consulates.</li>
              <li>Insurance claims investigation – Both Public & Private Sector.</li>
              <li>Surveillance operations for individual and corporate investigation needs.</li>
              <li>Verification of character and antecedents for Matrimonial needs.</li>
            </ul>
          </div>

          <div className="service-text-block">
            <h3 className="text-theme-dark">Key Functions</h3>
            <ul className="tactical-list">
              <li>Rounds of Inspection, Access Control & Reception</li>
              <li>Fire Fighting & First Aid Rapid Response</li>
              <li>Supervision & 24-hours Control Room Monitoring</li>
              <li>Quality Control and Assurance (QCA) Checks</li>
            </ul>
          </div>

        </div>

        <div className="sidebar">
          
          <div className="services-side-nav">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/manpower" className="active">Manned Guarding</Link></li>
              <li><Link to="/facility">Facility Management</Link></li>
              <li><Link to="/housekeeping">Housekeeping</Link></li>
            </ul>
          </div>

          <div className="contact-widget">
            <h3>GET IN TOUCH</h3>
            <form className="widget-form">
              <div className="form-group">
                <input type="text" placeholder="Name*" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="4"></textarea>
              </div>
              <button type="button" className="submit-btn">SEND</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ManpowerServices;
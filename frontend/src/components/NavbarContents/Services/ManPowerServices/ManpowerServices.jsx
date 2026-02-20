import React from 'react';
import { Link } from 'react-router-dom';
import './ManpowerServices.css';
// You might need 4 sets of dots instead of 3:
import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import guardTeam from '../../../../assets/images/hero/hero-2.png';

const ManpowerServices = () => {
  return (
    <div className="service-page">
      
      {/* 1. Hero Banner */}
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>MANNED GUARDING</h1>
      </div>

      <div className="content-container">
        
        {/* 2. Main Content (Left Side) */}
        <div className="service-content">
          
          <img src={guardTeam} alt="TMS Security Guard Team" className="content-image" />
          
          <h2 className="main-heading">SECURITY GUARD SERVICES</h2>
          
          <div className="text-block">
            <h3>Education & Physical Standard:</h3>
            <p>
              In order to ensure quality in our guarding services, we have prescribed strict standards. 
              Our guards act as the first line of defense. We ensure a minimum height of 5'7" and 
              healthy physical fitness. Verification of character and antecedents is undertaken by 
              police authorities to ensure the right persons are enrolled.
            </p>
          </div>

          <div className="text-block">
            <h3>Ex-Servicemen:</h3>
            <p>
              Our panel of officers comprises personnel who have experience serving in the Defense Services 
              or Para-military forces. While ASO & Head Guards are not required to have a service background, 
              it is preferred for them to have adequate experience in Security Services.
            </p>
          </div>

          <div className="text-block">
            <h3>Professional Training:</h3>
            <p>
              TMS lays great stress on planning, organizing, and conducting professional training for 
              all security staff. This includes definitions, aims, types & scope of security, understanding 
              various threats, fire fighting, and preventive measures.
            </p>
          </div>

          <div className="text-block">
            <h3>Guarding Services Scope:</h3>
            <ul className="service-list">
              <li>Intellectual property/piracy protection.</li>
              <li>Verification of Employees / Staff / Private Individuals.</li>
              <li>Visa Verification (Embassies/ Consulates).</li>
              <li>Insurance claims – Both Public & Private Sector.</li>
              <li>Surveillance: Individual and corporate investigation needs.</li>
              <li>Verification of characters and antecedents for Matrimonial needs.</li>
            </ul>
          </div>

          <div className="text-block">
            <h3>Key Functions:</h3>
            <ul className="service-list">
              <li>Rounds of Inspection, Access Control & Reception</li>
              <li>Fire Fighting & First Aid</li>
              <li>Supervision & 24-hours Control Room</li>
              <li>Quality Control and Assurance (QCA) Checks</li>
            </ul>
          </div>

        </div>

        {/* 3. Sidebar (Right Side) */}
        <div className="sidebar">
          
          {/* Services Navigation List */}
          <div className="services-nav">
            <h3>OUR SERVICES</h3>
            <ul>
              <li><Link to="/manpower" className="active">Manned Guarding</Link></li>
              <li><Link to="/housekeeping">Housekeeping</Link></li>
              <li><Link to="/facility-management">Facility Management</Link></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="contact-widget">
            <h3>GET IN TOUCH</h3>
            <form className="widget-form">
              <div className="form-group">
                <label>Name*</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4"></textarea>
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
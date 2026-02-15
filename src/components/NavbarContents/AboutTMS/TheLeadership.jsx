import React from 'react';
import './TheLeadership.css';
import leadershipBanner from '../../../assets/images/hero/hero-3.png'; 
// You will need to upload real photos of the 2 leaders later. 
// For now, I am using the hero image as a placeholder.
import leader1 from '../../../assets/images/hero/hero-1.png'; 
import leader2 from '../../../assets/images/hero/hero-2.png';

const TheLeadership = () => {
  return (
    <div className="leadership-page">
      
      {/* Banner Section */}
      <div className="leadership-hero" style={{ backgroundImage: `url(${leadershipBanner})` }}>
        <div className="overlay"></div>
        <h1>THE LEADERSHIP</h1>
      </div>

      <div className="content-container">
        
        {/* Left Column: Leaders List */}
        <div className="leaders-list">
          
          {/* LEADER 1 (e.g., Your Father) */}
          <div className="leader-card">
            <div className="leader-image-box">
              <img src={leader1} alt="Managing Director" />
            </div>
            <div className="leader-bio">
              <h2 className="leader-name">NAME OF DIRECTOR</h2>
              <h4 className="leader-title">Managing Director (Ex-Defense)</h4>
              <p>
                A visionary leader with over 25 years of experience in security and defense. 
                After serving the nation with distinction, he founded TMS Security Services to 
                bring military-grade discipline to the private security sector.
              </p>
              <p>
                His hands-on approach and commitment to integrity have been the driving force 
                behind the company's rapid growth and reputation for reliability.
              </p>
            </div>
          </div>

          <hr className="divider" />

          {/* LEADER 2 (The Second Person) */}
          <div className="leader-card">
            <div className="leader-image-box">
              <img src={leader2} alt="Director" />
            </div>
            <div className="leader-bio">
              <h2 className="leader-name">NAME OF DIRECTOR</h2>
              <h4 className="leader-title">Joint Managing Director</h4>
              <p>
                A dynamic professional responsible for the strategic operations and technological 
                advancements of the company. With a keen eye for detail, he ensures that 
                TMS stays ahead of the curve by integrating modern surveillance systems with 
                traditional guarding.
              </p>
              <p>
                He is dedicated to client satisfaction and maintaining the highest standards 
                of service delivery across all sites.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Contact Widget (Kept same as reference) */}
        <div className="sidebar">
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

export default TheLeadership;
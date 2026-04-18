import React from 'react';
import './TheLeadership.css';
import leadershipBanner from '../../../assets/images/Headingbg.webp/'; 
import leader1 from '../../../assets/images/leadership/owner-logo.jpeg'; 
import leader2 from '../../../assets/images/hero/hero-2.webp';

const TheLeadership = () => {
  return (
    <div className="leadership-page">
      
      <div className="leadership-hero" style={{ backgroundImage: `url(${leadershipBanner})` }}>
        <div className="overlay"></div>
        <h1>THE LEADERSHIP</h1>
      </div>

      <div className="content-container">
        
        <div className="leaders-list">
          
          <div className="leader-card">
            <div className="leader-image-box">
              <img src={leader1} alt="Managing Director" />
            </div>
            <div className="leader-bio">
              <h2 className="leader-name">Mr. Ajay Kumar Singh</h2>
              <h4 className="leader-title">Managing Director </h4>
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
        </div>   

      </div>
    </div>
  );
};

export default TheLeadership;
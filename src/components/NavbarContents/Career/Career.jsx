import React from 'react';
import './Career.css';

// Using 3 sets of dots to reach assets from src/components/NavbarContents/Career/
import careerBanner from '../../../assets/images/hero/hero-3.png'; 
import guardTeam from '../../../assets/images/hero/hero-1.png';

const Career = () => {
  return (
    <div className="career-page">
      {/* Hero Banner Section */}
      <div className="career-hero" style={{ backgroundImage: `url(${careerBanner})` }}>
        <div className="overlay"></div>
        <h1>CAREER IN TMS</h1>
      </div>

      <div className="career-container">
        <div className="career-content-wrapper">
          
          {/* Left Side: Application Form */}
          <div className="career-form-section">
            <h2 className="career-title">CAREER & EMPLOYMENT</h2>
            <form className="career-main-form">
              <div className="form-input-group">
                <label>Your Name*</label>
                <input type="text" required />
              </div>

              <div className="form-input-group">
                <label>Your Email*</label>
                <input type="email" required />
              </div>

              <div className="form-input-group">
                <label>Your Phone no.</label>
                <input type="tel" />
              </div>

              <div className="form-input-group">
                <label>Your Message</label>
                <textarea rows="6"></textarea>
              </div>

              <button type="submit" className="career-submit-btn">Send</button>
            </form>
          </div>

          {/* Right Side: Representative Image */}
          <div className="career-image-section">
            <img src={guardTeam} alt="TMS Security Personnel" className="career-display-img" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Career.css';

import careerBanner from '../../../assets/images/hero/hero-3.png'; 
import guardTeam from '../../../assets/images/hero/hero-1.png';

const Career = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="career-page full-width" key={pathname}>
      
      <div className="career-hero" style={{ backgroundImage: `url(${careerBanner})` }}>
        <div className="overlay"></div>
        <h1>CAREERS AT TMS</h1>
      </div>

      <div className="content-container">
        <div className="career-content-main">
          
          <img src={guardTeam} alt="TMS Security Officer" className="career-featured-image" />
          
          <div className="career-text-wrap">
            <h2 className="section-title text-theme-dark">JOIN THE ELITE VANGUARD</h2>
            
            <p className="career-body-text">
              TMS Security Services is continuously seeking highly disciplined, driven, and capable individuals 
              to join our ranks. We operate at the highest echelons of corporate and institutional security, 
              which means our recruitment standards are uncompromising.
            </p>
            
            <blockquote className="elite-quote text-theme-dark">
              "We do not just hire guards; we forge security professionals capable of maintaining absolute operational superiority."
            </blockquote>

            <div className="career-details-grid">
               <div className="career-text-block">
                <h3 className="text-theme-dark">Who We Look For</h3>
                <p className="career-body-text">
                  Our core operational philosophy is built on defense legacy and tactical precision. 
                  We highly value candidates with backgrounds in the Armed Forces, Paramilitary, or 
                  specialized law enforcement, though exceptional civilian professionals are also evaluated.
                </p>
              </div>

              <div className="career-text-block">
                <h3 className="text-theme-dark">Minimum Requirements</h3>
                <ul className="tactical-list">
                  <li>Minimum height of 5'7" with verified physical fitness.</li>
                  <li>Flawless background verification and police clearance.</li>
                  <li>High aptitude for situational awareness and crisis management.</li>
                  <li>Commitment to continuous training and strict protocols.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="application-portal-section">
        <div className="portal-container">
          
          <div className="portal-header">
             <h2>APPLICATION PORTAL</h2>
             <p>Submit your details for preliminary evaluation by our recruitment division.</p>
          </div>

          <form className="elite-application-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name*</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-group">
                <label>Email Address*</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label>Phone Number*</label>
                <input type="tel" placeholder="Enter your contact number" required />
              </div>

              {/* NEW ELITE DROPDOWN */}
              <div className="form-group">
                <label>Position Applied For*</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a position...</option>
                  <option value="Security Guard">Security Guard</option>
                  <option value="Field Officer">Field Officer</option>
                  <option value="Housekeeping">Housekeeping</option>
                </select>
              </div>
            </div>

            {/* Shifted Previous Experience to Full-Width for perfect symmetry */}
            <div className="form-group full-width-input">
              <label>Previous Experience / Service Background</label>
              <input type="text" placeholder="e.g., Ex-Army, 5 yrs Corporate Security" />
            </div>

            <div className="form-group full-width-input">
              <label>Cover Letter / Additional Details</label>
              <textarea placeholder="State why you are a fit for TMS Security..." rows="5"></textarea>
            </div>

            <button type="button" className="submit-btn-gold">SUBMIT APPLICATION</button>
          </form>

        </div>
      </section>

    </div>
  );
};

export default Career;
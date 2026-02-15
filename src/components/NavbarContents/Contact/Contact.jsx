import React from 'react';
import './Contact.css';
// Make sure this path is correct based on your folder structure (3 dots vs 4 dots)
import contactBanner from '../../../assets/images/hero/hero-2.png'; 

const Contact = () => {
  return (
    <div className="contact-page">
      {/* 1. Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="overlay"></div>
        <h1>CONTACT US</h1>
      </div>

      {/* 2. Main Content */}
      <div className="contact-container">
        <div className="contact-flex-wrapper">
          
          {/* Left Side: Office Details */}
          <div className="office-details-section">
            <h2 className="office-heading">Delhi (Corporate Office)</h2>
            
            <div className="contact-info-item">
              <span className="icon">📍</span>
              <p>57, Rajdhani Enclave, Pritampura New Delhi - 110034</p>
            </div>

            <div className="contact-info-item">
              <span className="icon">📞</span>
              <p>011 - 45150000, 27191569</p>
            </div>

            <div className="contact-info-item">
              <span className="icon">📠</span>
              <p>011 - 27101546</p>
            </div>

            <h2 className="presence-heading">We are Present at:</h2>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="contact-form-section">
            <h2 className="form-heading">Get In Touch With Us</h2>
            <form className="main-contact-form">
              <div className="input-row">
                <input type="text" placeholder="Your Name*" required />
              </div>

              <div className="input-row">
                <input type="email" placeholder="Your Email*" required />
              </div>

              <div className="input-row">
                <input type="text" placeholder="Subject" />
              </div>

              <div className="input-row">
                <label className="select-label">Select Service*</label>
                <select required>
                  <option value="guarding">Guarding Services</option>
                  <option value="facility">Facility Management</option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="electronic">Electronic Security</option>
                </select>
              </div>

              <div className="input-row">
                <textarea placeholder="Your Message" rows="6"></textarea>
              </div>

              <button type="submit" className="contact-send-btn">Send</button>
            </form>
          </div>

        </div>
      </div>

      {/* 3. NEW: Google Map Section */}
      <div className="map-section">
        <iframe 
          title="TMS Office Location"
          src="https://www.google.com/maps?q=57,+Rajdhani+Enclave,+Pitampura,+New+Delhi,+110034&output=embed"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Update this path based on where your SharedServiceLayout.css is located!
import '../SharedServiceLayout.css'; 

import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import facilityImg from '../../../../assets/images/NavbarServices/facilitymanagement.png'; 
 
const FacilityManagement = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="service-page full-width" key={pathname}>
      
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>FACILITY MANAGEMENT</h1>
      </div>

      <div className="content-container">
        {/* Added the proper layout wrappers here */}
        <div className="service-content-main">
          <img src={facilityImg} alt="Facility Management" className="service-featured-image" />
          
          <div className="service-text-wrap">
            <h2 className="section-title text-theme-dark">FACILITY MANAGEMENT SERVICES</h2>
            
            <p className="service-body-text">
              Catering to the demands of a community which has come to expect a very high standard 
              in the provision of facility management. TMS meets the customers' wants in a cost-effective 
              manner while maintaining absolute operational superiority.
            </p>
            
            <blockquote className="elite-quote text-theme-dark">
              "We do not compromise on protocols. Every facility under our command is managed with the same rigorous discipline as a high-value asset."
            </blockquote>

            <div className="service-text-block">
              <h3 className="text-theme-dark">Offices / Building Maintenance</h3>
              <p className="service-body-text">
                Maintenance of your system requires a clear and complete understanding of technical details. 
                TMS deploys highly experienced engineers to meticulously plan and execute activities for routine, 
                planned, and preventive maintenance architectures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Added the unified Call To Action footer */}
      <section className="service-action-section">
        <div className="action-container">
          <div className="contact-full-box">
             <h2 className="text-theme-dark">MAINTAIN OPERATIONAL SUPERIORITY</h2>
             <p>Deploy TMS Facility Management for your corporate infrastructure.</p>
             <div style={{ marginTop: '40px' }}>
                <Link to="/contact" className="submit-btn-gold" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
                  REQUEST A CONSULTATION
                </Link>
             </div>
          </div>

          <div className="service-nav-footer">
             <h4>EXPLORE MORE SERVICES</h4>
             <div className="nav-links">
                <Link to="/housekeeping">Housekeeping</Link>
                <Link to="/security-guard">Security Guards</Link>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FacilityManagement;
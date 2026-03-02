import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FacilityManagement.css';

import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import facilityImg from '../../../../assets/images/hero/hero-3.png'; 

const FacilityManagement = () => {
  const { pathname } = useLocation();

  // This ensures every page load or link click snaps perfectly to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    /* The key={pathname} forces React to load a completely fresh page every time, fixing the invisible text bug! */
    <div className="service-page" key={pathname}>
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>FACILITY MANAGEMENT</h1>
      </div>

      <div className="content-container">
        <div className="service-content">
          <img src={facilityImg} alt="Facility Management" className="service-featured-image" />
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

        <div className="sidebar">
          <div className="services-side-nav">
            <h3>OUR SERVICES</h3>
            <ul>
              <li>
                <Link to="/manpower" className={pathname === '/manpower' ? 'active' : ''}>
                  Manned Guarding
                </Link>
              </li>
              <li>
                <Link to="/facility-management" className={pathname === '/facility-management' ? 'active' : ''}>
                  Facility Management
                </Link>
              </li>
              <li>
                <Link to="/housekeeping" className={pathname === '/housekeeping' ? 'active' : ''}>
                  Housekeeping
                </Link>
              </li>
            </ul>
          </div>

          <div className="contact-widget">
            <h3>GET IN TOUCH</h3>
            <form className="widget-form">
              <div className="form-group"><input type="text" placeholder="Name*" required /></div>
              <div className="form-group"><input type="email" placeholder="Email*" required /></div>
              <div className="form-group"><textarea placeholder="Message" rows="4"></textarea></div>
              <button type="button" className="submit-btn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityManagement;
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FacilityManagement.css';

import serviceBanner from '../../../../assets/images/hero/hero-1.png'; 
import facilityImg from '../../../../assets/images/NavbarServices/facilitymanagement.png'; 
 

const FacilityManagement = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // THE SAFETY CATCH: Prevents the router from crashing if you click the active page
  const handleSafeLink = (e, targetPath) => {
    if (pathname === targetPath) {
      e.preventDefault();
    }
  };

  return (
    <div className="service-page">
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
      </div>
    </div>
  );
};

export default FacilityManagement;
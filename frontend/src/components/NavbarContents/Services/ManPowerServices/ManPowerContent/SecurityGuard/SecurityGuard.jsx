import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./SecurityGuard.css";

import serviceBanner from "../../../../../../assets/images/Headingbg.webp/";
import guardTeam from "../../../../../../assets/images/NavbarServices/securityguard.jpg";

const SecurityGuards = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleSafeLink = (e, targetPath) => {
    if (pathname === targetPath) {
      e.preventDefault();
    }
  };

  return (
    <div className="service-page">
      <div className="service-hero" style={{ backgroundImage: `url(${serviceBanner})` }}>
        <div className="overlay"></div>
        <h1>SECURITY GUARDS</h1>
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

      </div>
    </div>
  );
};

export default SecurityGuards;
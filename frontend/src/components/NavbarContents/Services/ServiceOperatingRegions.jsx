import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceOperatingRegions.css';

const ServiceOperatingRegions = ({ serviceName = "Security Services" }) => {
  return (
    <section className="service-regions-section" aria-label={`Operational Regions for ${serviceName}`}>
      <div className="service-regions-container">
        <div className="service-regions-header">
          <span className="service-regions-eyebrow">REGIONAL DEPLOYMENT NETWORK</span>
          <h3 className="service-regions-title">Key Operating Regions for {serviceName}</h3>
          <p className="service-regions-desc">
            TMS Security maintains PSARA-licensed operations, dedicated rapid response units, and active deployments across commercial, IT, and industrial corridors in North and Eastern India:
          </p>
        </div>

        <div className="service-regions-grid">
          {/* Delhi (NCT) */}
          <div className="service-region-col">
            <h4 className="service-region-state">Delhi (NCT)</h4>
            <div className="service-region-links">
              <Link to="/security-services/delhi" className="service-region-link">
                Delhi (Command HQ)
              </Link>
            </div>
          </div>

          {/* Haryana */}
          <div className="service-region-col">
            <h4 className="service-region-state">Haryana</h4>
            <div className="service-region-links">
              <Link to="/security-services/gurgaon" className="service-region-link">Gurgaon (Gurugram)</Link>
              <Link to="/security-services/faridabad" className="service-region-link">Faridabad</Link>
              <Link to="/security-services/hisar" className="service-region-link">Hisar</Link>
              <Link to="/security-services/rohtak" className="service-region-link">Rohtak</Link>
            </div>
          </div>

          {/* Uttar Pradesh */}
          <div className="service-region-col">
            <h4 className="service-region-state">Uttar Pradesh</h4>
            <div className="service-region-links">
              <Link to="/security-services/noida" className="service-region-link">Noida</Link>
              <Link to="/security-services/greater-noida" className="service-region-link">Greater Noida</Link>
              <Link to="/security-services/ghaziabad" className="service-region-link">Ghaziabad</Link>
              <Link to="/security-services/lucknow" className="service-region-link">Lucknow</Link>
              <Link to="/security-services/varanasi" className="service-region-link">Varanasi</Link>
            </div>
          </div>

          {/* Bihar */}
          <div className="service-region-col">
            <h4 className="service-region-state">Bihar</h4>
            <div className="service-region-links">
              <Link to="/security-services/patna" className="service-region-link">
                Patna Regional Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOperatingRegions;

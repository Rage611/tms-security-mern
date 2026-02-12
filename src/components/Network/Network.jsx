import React from 'react';
import './Network.css';
import tmsMap from '../../assets/images/tms-map.png'; 

const Network = () => {
  // Add as many locations as you want here
  const beacons = [
    { id: 1, city: "Delhi", top: "35%", left: "75%", status: "Main HQ" },
    { id: 2, city: "Mumbai", top: "58%", left: "70%", status: "Operational Hub" },
    { id: 3, city: "Bangalore", top: "78%", left: "73%", status: "Rapid Response" },
    { id: 4, city: "Kolkata", top: "45%", left: "85%", status: "Regional Office" },
  ];

  return (
    <section className="network-section">
      <div className="container">
        <h2 className="services-title">OUR <span className="highlight">REACH</span></h2>
        <p className="services-subtitle">
          Strategic presence across the country to ensure elite security is always within range. 
          Hover over the beacons to see our local operations.
        </p>

        <div className="map-container">
          {/* The high-tech glowing map */}
          <img src={tmsMap} alt="TMS Network Map" className="map-image" />
          
          {/* Mapping the pulsing dots onto the map */}
          {beacons.map((beacon) => (
            <div 
              key={beacon.id} 
              className="map-beacon" 
              style={{ top: beacon.top, left: beacon.left }}
            >
              <div className="pulse"></div>
              <div className="beacon-label">
                {beacon.city} <br />
                <span>{beacon.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
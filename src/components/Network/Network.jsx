import React from 'react';
import './Network.css';
import tmsMap from '../../assets/images/tms-map.png'; 

const Network = () => {
  const beacons = [
    { id: 1, city: "Delhi", top: "28%", left: "31%" },
    { id: 2, city: "Haryana", top: "27%", left: "28%" },
    { id: 3, city: "Patna", top: "38%", left: "60%" },
    { id: 4, city: "Noida", top: "30%", left: "35%" },
    { id: 5, city: "Greater Noida", top: "33%", left: "38%" },

    { id: 6, city: "Chandigarh", top: "21%", left: "30%" },
  ];

  return (
    <section className="network-section">
      <div className="network__inner">
        {/* Consistent Header Style */}

        <div className="map-container">
          <img src={tmsMap} alt="TMS Network Map" className="map-image" />
          
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
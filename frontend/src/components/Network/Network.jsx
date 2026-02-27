import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Network.css';
import tmsMap from '../../assets/images/tms-map.png'; 

const SiteMarker = ({ top, left, vDir, hDir, title, description, index, tier }) => {
  const baseDelay = index * 0.2;

  return (
    <div className={`marker-container ${tier} ${vDir} ${hDir}`} style={{ top, left }}>
      <div className="marker-dot" style={{ transitionDelay: `${baseDelay}s` }}></div>
      <div className="marker-line-v" style={{ transitionDelay: `${baseDelay}s` }}></div>
      <div className="marker-line-h" style={{ transitionDelay: `${baseDelay + 0.3}s` }}></div>
      <div className="marker-box" style={{ transitionDelay: `${baseDelay + 0.5}s` }}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Network = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4, 
  });

  const beacons = [
    { id: 1, city: "Delhi", top: "28%", left: "31%", vDir: "down", hDir: "left", tier: "tier-1", desc: "National Command Hub & Corporate Operations." },
    { id: 2, city: "Haryana", top: "27%", left: "28%", vDir: "up", hDir: "left", tier: "tier-2", desc: "Industrial Security & Asset Protection." },
    { id: 6, city: "Chandigarh", top: "21%", left: "30%", vDir: "up", hDir: "left", tier: "tier-1", desc: "Northern Sector Tactical Coordination." },
    { id: 4, city: "Noida", top: "30%", left: "35%", vDir: "up", hDir: "right", tier: "tier-1", desc: "Commercial IT Park Facility Management." },
    { id: 5, city: "Greater Noida", top: "33%", left: "38%", vDir: "up", hDir: "right", tier: "tier-2", desc: "Logistics Hub & Rapid Response Center." },
    { id: 3, city: "Patna", top: "38%", left: "60%", vDir: "down", hDir: "right", tier: "tier-1", desc: "Regional Deployment & Surveillance." },
  ];

  return (
    <section className={`network-section ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="network__inner">
        <div className="map-container">
          <img src={tmsMap} alt="TMS Network Map" className="map-image" />
          
          {beacons.map((beacon, index) => (
            <SiteMarker 
              key={beacon.id}
              top={beacon.top}
              left={beacon.left}
              vDir={beacon.vDir}
              hDir={beacon.hDir}
              title={beacon.city}
              description={beacon.desc}
              index={index}
              tier={beacon.tier}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Network;
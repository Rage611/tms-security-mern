import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Network.css';
import tmsMap from '../../assets/images/tms-map.png';

const ActiveBeacon = ({ top, left, label, isHQ, labelDir, index, inView }) => (
  <div
    className={`beacon beacon--active ${inView ? 'beacon--visible' : ''}`}
    style={{ top, left, '--entry-delay': `${0.1 + index * 0.14}s` }}
    aria-label={isHQ ? `${label} — Headquarters` : label}
  >
    <span className="beacon__ring" style={{ '--ring-delay': `${index * 0.25}s` }} />
    <span className="beacon__ring" style={{ '--ring-delay': `${0.6 + index * 0.25}s` }} />
    <span className="beacon__ring" style={{ '--ring-delay': `${1.2 + index * 0.25}s` }} />

    <span className="beacon__core" />

    <div className={`beacon__label beacon__label--${labelDir}`}>
      {isHQ && <span className="beacon__hq-badge">HQ</span>}
      <span className="beacon__city-name">{label}</span>
    </div>
  </div>
);

const ExpansionBeacon = ({ top, left, label, labelDir, index, inView }) => (
  <div
    className={`beacon beacon--expansion ${inView ? 'beacon--visible' : ''}`}
    style={{ top, left, '--entry-delay': `${0.75 + index * 0.16}s` }}
    aria-label={`${label} — Upcoming`}
  >
    <span className="beacon__ring beacon__ring--exp" style={{ '--ring-delay': `${index * 0.4}s` }} />
    <span className="beacon__core beacon__core--exp" />
    <div className={`beacon__label beacon__label--${labelDir}`}>
      <span className="beacon__city-name beacon__city-name--exp">{label}</span>
      <span className="beacon__upcoming-tag">UPCOMING</span>
    </div>
  </div>
);

// ─── FORCE PROJECTION ARCS (SVG) ──────────────────────────────────────────────
const NetworkArcs = () => (
  <svg className="network-arcs" viewBox="0 0 100 100" preserveAspectRatio="none">
    <defs>
      {/* Gold Active Glow */}
      <linearGradient id="arc-glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d4af37" stopOpacity="1" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.4" />
      </linearGradient>

      {/* FIXED: Uniform Ice-Blue Glow */}
      <linearGradient id="arc-glow-blue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />       {/* Bright Cyan */}
        <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />   {/* Fading Deep Blue */}
      </linearGradient>
    </defs>

    {/* --- PHASE 1: ACTIVE ROUTES (Gold Lasers - Simultaneous Launch) --- */}
    <path className="arc-line" d="M 32 29 Q 36 28 38 33.5" />         {/* Noida */}
    <path className="arc-line" d="M 32 29 Q 30 26 28 27.5" />        {/* Haryana */}
    <path className="arc-line" d="M 32 29 Q 35 22 28.5 19.5" />      {/* Chandigarh */}
    <path className="arc-line" d="M 32 29 Q 46 20 59.5 37.5" /> 
         {/* Bihar */}

    {/* --- PHASE 2: EXPANSION TARGETS (HQ launch first, then dotted flow) --- */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 36 26 35 23" />      {/* Uttarakhand */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 25 30 22 36" />      {/* Rajasthan */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 36 38 33 49" />      {/* MP */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 45 34 59 46" />      {/* Jharkhand */}
    
    {/* The South - Fanned out and perfectly synced! */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 12 45 16.5 62" />    {/* Mumbai */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 25 50 37 66" />      {/* Hyderabad */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 18 55 29 82.5" />    {/* Bengaluru */}
    <path className="arc-line-exp-launch" pathLength="100" d="M 32 29 Q 28 22 24 22" />      {/* Punjab */}

    <path className="arc-line-exp" d="M 32 29 Q 36 26 35 23" />      {/* Uttarakhand */}
    <path className="arc-line-exp" d="M 32 29 Q 25 30 22 36" />      {/* Rajasthan */}
    <path className="arc-line-exp" d="M 32 29 Q 36 38 33 49" />      {/* MP */}
    <path className="arc-line-exp" d="M 32 29 Q 45 34 59 46" />      {/* Jharkhand */}
    <path className="arc-line-exp" d="M 32 29 Q 12 45 16.5 62" />    {/* Mumbai */}
    <path className="arc-line-exp" d="M 32 29 Q 25 50 37 66" />      {/* Hyderabad */}
    <path className="arc-line-exp" d="M 32 29 Q 18 55 29 82.5" />    {/* Bengaluru */}
    <path className="arc-line-exp" d="M 32 29 Q 28 22 24 22" />      {/* Punjab */}
  </svg>
);


// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Network = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  const activeBeacons = [
    { id: 'delhi-ncr', label: 'DELHI NCR', top: '29%', left: '32%', isHQ: true, labelDir: 'bottom', index: 0 },
    
    { id: 'greater-noida', label: 'UTTAR PRADESH', top: '33.5%', left: '38%',   isHQ: false, labelDir: 'right', index: 2 },
    { id: 'haryana',       label: 'HARYANA', top: '27.5%', left: '28%',   isHQ: false, labelDir: 'left',  index: 3 },
    { id: 'chandigarh', label: 'CHANDIGARH', top: '19.5%', left: '28.5%', isHQ: false, labelDir: 'right', index: 4 },
    { id: 'patna',      label: 'BIHAR',      top: '37.5%', left: '59.5%', isHQ: false, labelDir: 'right', index: 5 },
  ];

  const expansionBeacons = [
    { id: 'uttarakhand', label: 'UTTARAKHAND', top: '23%',   left: '35%',   labelDir: 'right', index: 0 },
    { id: 'rajasthan',   label: 'RAJASTHAN',   top: '36%',   left: '22%',   labelDir: 'left',  index: 1 }, 
    { id: 'mp',          label: 'MADHYA PRADESH', top: '49%', left: '33%',  labelDir: 'right', index: 2 },
    { id: 'jharkhand',   label: 'JHARKHAND',   top: '46%',   left: '59%',   labelDir: 'right', index: 3 },
    { id: 'mumbai',      label: 'Mumbai',      top: '62%',   left: '16.5%', labelDir: 'left',  index: 4 },
    { id: 'hyderabad',   label: 'Hyderabad',   top: '66%',   left: '37%',   labelDir: 'right', index: 5 },
    { id: 'bangalore',   label: 'Bengaluru',   top: '82.5%', left: '29%',   labelDir: 'left',  index: 6 },
    { id: 'punjab',      label: 'PUNJAB',      top: '22%',   left: '24%',   labelDir: 'left',  index: 7 },
  ];

  return (
    <section className={`network-section ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="network__scanlines" aria-hidden="true" />
      <div className="network__inner">
        <div className={`network__header ${inView ? 'network__header--visible' : ''}`}>
          <p className="network__overline">
            <span className="overline__dot" />
            Live Deployment Grid
          </p>
          <h2 className="network__title">Operational Network</h2>
          <div className="network__rule" />
        </div>

        <div className="map-container">
          <img src={tmsMap} alt="India map" className="map-image" />
          <NetworkArcs />
          {activeBeacons.map((b) => <ActiveBeacon key={b.id} {...b} inView={inView} />)}
          {expansionBeacons.map((b) => <ExpansionBeacon key={b.id} {...b} inView={inView} />)}
        </div>

        <div className={`network__legend ${inView ? 'network__legend--visible' : ''}`}>
          <div className="legend__item">
            <span className="legend__pip legend__pip--active" />
            <span className="legend__text">Active Deployment</span>
          </div>
          <span className="legend__sep" />
          <div className="legend__item">
            <span className="legend__pip legend__pip--exp" />
            <span className="legend__text">Upcoming Expansion</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;

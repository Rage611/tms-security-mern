import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Network.css';
import tmsMap from '../../assets/images/tms-map.png';

// ─── ACTIVE BEACON ────────────────────────────────────────────────────────────
// Gold sonar beacon for deployed cities. Three concentric rings pulse outward
// at offset delays, simulating a live radar sweep.

const ActiveBeacon = ({ top, left, label, isHQ, labelDir, index, inView }) => (
  <div
    className={`beacon beacon--active ${inView ? 'beacon--visible' : ''}`}
    style={{
      top,
      left,
      '--entry-delay': `${0.1 + index * 0.14}s`,
    }}
    aria-label={isHQ ? `${label} — Headquarters` : label}
  >
    {/* Three concentric pulse rings — CSS-only, no SVG */}
    <span className="beacon__ring" style={{ '--ring-delay': `${index * 0.25}s` }} />
    <span className="beacon__ring" style={{ '--ring-delay': `${0.6 + index * 0.25}s` }} />
    <span className="beacon__ring" style={{ '--ring-delay': `${1.2 + index * 0.25}s` }} />

    {/* Solid gold core dot */}
    <span className="beacon__core" />

    {/* Floating label — text-shadow keeps it readable over any map color */}
    <div className={`beacon__label beacon__label--${labelDir}`}>
      {isHQ && <span className="beacon__hq-badge">HQ</span>}
      <span className="beacon__city-name">{label}</span>
    </div>
  </div>
);

// ─── EXPANSION BEACON ─────────────────────────────────────────────────────────
// Stealth blue/grey pulse for upcoming expansion cities.

const ExpansionBeacon = ({ top, left, label, labelDir, index, inView }) => (
  <div
    className={`beacon beacon--expansion ${inView ? 'beacon--visible' : ''}`}
    style={{
      top,
      left,
      '--entry-delay': `${0.75 + index * 0.16}s`,
    }}
    aria-label={`${label} — Upcoming`}
  >
    <span className="beacon__ring beacon__ring--exp" style={{ '--ring-delay': `${index * 0.4}s` }} />

    {/* Dim blue core */}
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
      {/* GLOW FIX: Opacities pumped to 1 and 0.5 for a bright, heavy laser */}
      <linearGradient id="arc-glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d4af37" stopOpacity="1" />
        <stop offset="100%" stopColor="#d4af37" stopOpacity="0.5" />
      </linearGradient>

      {/* NEW: Tactical Blue glow for projected expansion routes */}
      <linearGradient id="arc-glow-blue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    {/* --- ACTIVE ROUTES (Gold Lasers) --- */}
    <path className="arc-line arc-delay-1" d="M 32 29 Q 35 22 28.5 19.5" />
    <path className="arc-line arc-delay-2" d="M 32 29 Q 46 20 59.5 37.5" />
    <path className="arc-line arc-delay-3" d="M 32 29 Q 28 23 22 25.5" />
    <path className="arc-line arc-delay-4" d="M 32 29 Q 36 28 38 33.5" />

    {/* --- EXPANSION TARGETS (Blue Dashed Lines) --- */}
    <path className="arc-line-dashed arc-delay-5" d="M 32 29 Q 20 40 19.5 52" />   {/* Mumbai */}
    <path className="arc-line-dashed arc-delay-5" d="M 32 29 Q 45 35 45 48" />     {/* Nagpur */}
    <path className="arc-line-dashed arc-delay-6" d="M 32 29 Q 20 45 33 61" />     {/* Hyderabad */}
    <path className="arc-line-dashed arc-delay-7" d="M 32 29 Q 15 50 29 70.5" />   {/* Bengaluru */}
    <path className="arc-line-dashed arc-delay-7" d="M 32 29 Q 50 50 40 72.5" />   {/* Chennai */}
  </svg>
);


// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Network = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.6 });

  const activeBeacons = [
    { id: 'delhi-ncr', label: 'DELHI NCR', top: '29%', left: '32%', isHQ: true, labelDir: 'left', index: 0 },
    { id: 'noida',         label: '', top: '30%',   left: '35%',   isHQ: false, labelDir: 'right', index: 1 },
    { id: 'greater-noida', label: '', top: '33.5%', left: '38%',   isHQ: false, labelDir: 'right', index: 2 },
    { id: 'hisar',         label: '', top: '25.5%', left: '22%',   isHQ: false, labelDir: 'left',  index: 3 },
    { id: 'chandigarh', label: 'CHANDIGARH', top: '19.5%', left: '28.5%', isHQ: false, labelDir: 'right', index: 4 },
    { id: 'patna',      label: 'PATNA',      top: '37.5%', left: '59.5%', isHQ: false, labelDir: 'right', index: 5 },
  ];

  const expansionBeacons = [
    { id: 'mumbai',    label: 'Mumbai',    top: '52%',   left: '19.5%', labelDir: 'left',  index: 0 },
    { id: 'nagpur',    label: 'NAGPUR',    top: '48%',   left: '45%',   labelDir: 'right', index: 1 }, 
    { id: 'hyderabad', label: 'Hyderabad', top: '61%',   left: '33%',   labelDir: 'right', index: 2 },
    { id: 'bangalore', label: 'Bengaluru', top: '70.5%', left: '29%',   labelDir: 'left',  index: 3 },
    { id: 'chennai',   label: 'Chennai',   top: '72.5%', left: '40%',   labelDir: 'right', index: 4 },
  ];

  return (
    <section
      className={`network-section ${inView ? 'is-visible' : ''}`}
      ref={ref}
      aria-label="TMS Security Deployment Network"
    >
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
          <img
            src={tmsMap}
            alt="India deployment map — TMS Security"
            className="map-image"
          />

          <NetworkArcs />

          {activeBeacons.map((b) => (
            <ActiveBeacon key={b.id} {...b} inView={inView} />
          ))}

          {expansionBeacons.map((b) => (
            <ExpansionBeacon key={b.id} {...b} inView={inView} />
          ))}
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
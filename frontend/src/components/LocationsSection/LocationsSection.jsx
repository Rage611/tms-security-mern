import React from 'react';
import { Link } from 'react-router-dom';
import './LocationsSection.css';

const LOCATIONS = [
  { slug: 'delhi',         city: 'Delhi',         state: 'Delhi NCR',       icon: '🏛️' },
  { slug: 'noida',         city: 'Noida',         state: 'Uttar Pradesh',   icon: '🏢' },
  { slug: 'gurgaon',       city: 'Gurgaon',       state: 'Haryana',         icon: '🌆' },
  { slug: 'faridabad',     city: 'Faridabad',     state: 'Haryana',         icon: '🏭' },
  { slug: 'greater-noida', city: 'Greater Noida', state: 'Uttar Pradesh',   icon: '🏗️' },
  { slug: 'ghaziabad',     city: 'Ghaziabad',     state: 'Uttar Pradesh',   icon: '🚛' },
];

const LocationsSection = () => (
  <section id="locations-we-serve" className="locs-section" aria-label="Locations we serve">
    <div className="locs-container">
      <header className="locs-header">
        <p className="locs-eyebrow">Coverage Area</p>
        <h2 className="locs-title">Security Services Across NCR</h2>
        <p className="locs-desc">
          PSARA-licensed deployments across all major Delhi NCR districts. Select your city for a tailored security proposal.
        </p>
      </header>
      <div className="locs-grid">
        {LOCATIONS.map(({ slug, city, state, icon }) => (
          <Link
            key={slug}
            to={`/security-services/${slug}`}
            className="locs-card"
            id={`locs-card-${slug}`}
            aria-label={`Corporate security services in ${city}, ${state}`}
          >
            <span className="locs-card__icon" aria-hidden="true">{icon}</span>
            <div className="locs-card__body">
              <strong className="locs-card__city">{city}</strong>
              <span className="locs-card__state">{state}</span>
            </div>
            <span className="locs-card__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;

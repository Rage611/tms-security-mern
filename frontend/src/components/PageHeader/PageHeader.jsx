import React, { useEffect, useRef, useState } from 'react';
import './PageHeader.css';

const PageHeader = ({ title, eyebrow, bgImage, stats }) => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`ph${stats && stats.length > 0 ? ' ph--has-stats' : ''}`} ref={heroRef}>
      <div className="ph__bg-wrap">
        {bgImage && (
          <img
            src={bgImage}
            alt=""
            className="ph__bg-img"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        )}
        <div className="ph__overlay" />
        <div className="ph__grain" aria-hidden="true" />
      </div>

      <div className={`ph__content ${isVisible ? 'ph__content--visible' : ''}`}>
        {eyebrow && <span className="ph__eyebrow">{eyebrow}</span>}
        <h1 className="ph__title">{title}</h1>
        <div className="ph__accent-line" />
      </div>

      {stats && stats.length > 0 && (
        <div className={`ph__stats ${isVisible ? 'ph__stats--visible' : ''}`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="ph__stat-card"
              style={{ '--stat-delay': `${0.3 + i * 0.12}s` }}
            >
              <span className="ph__stat-value">{stat.value}</span>
              <span className="ph__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageHeader;

import React from 'react';
import './Services.css';

const Stats = () => {
  const statsData = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Guards Deployed" },
    { number: "100+", label: "Happy Clients" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="stats-section">
      <div className="stats__inner">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
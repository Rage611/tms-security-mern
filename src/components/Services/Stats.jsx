import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only happens once
    threshold: 0.3,    // Starts when 30% of the section is visible
  });

  const statsData = [
    { number: 10, suffix: "+", label: "YEARS EXPERIENCE" },
    { number: 500, suffix: "+", label: "GUARDS DEPLOYED" },
    { number: 100, suffix: "+", label: "HAPPY CLIENTS" },
    { number: 24, suffix: "/7", label: "SUPPORT" },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="stats__inner">
        <div className="stats__header">
          <div className="section-tagline">
            <span className="line"></span>
            OUR MILESTONES
          </div>
          <h2 className="section-title">OUR ACHIEVEMENTS</h2>
        </div>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">
                {inView ? (
                  <CountUp 
                    start={0} 
                    end={stat.number} 
                    duration={2.5} 
                    suffix={stat.suffix} 
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
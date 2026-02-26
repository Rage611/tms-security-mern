import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3,    
  });

  const statsData = [
    { number: 10, suffix: "+", label: "YEARS EXPERIENCE", delay: "0.1s" },
    { number: 500, suffix: "+", label: "GUARDS DEPLOYED", delay: "0.3s" },
    { number: 100, suffix: "+", label: "HAPPY CLIENTS", delay: "0.5s" },
    { number: 24, suffix: "/7", label: "SUPPORT", delay: "0.7s" },
  ];

  return (
    <section className={`stats-section ${inView ? 'is-visible' : ''}`} ref={ref}>
      <div className="stats__inner">
        
        <div className="stats__header">
          <div className="section-tagline">OUR MILESTONES</div>
          <h2 className="section-title" style={{ marginBottom: '60px' }}>OUR ACHIEVEMENTS</h2>
        </div>

        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item"
              style={{ transitionDelay: stat.delay }}
            >
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
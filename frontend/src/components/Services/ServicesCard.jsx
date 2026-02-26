import React from 'react';
import './Services.css';

const ServicesCard = ({ title, image, delay }) => {
  return (
    <div className="service-card" style={{ transitionDelay: delay }}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay"></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <span className="card-arrow">&#8594;</span>
      </div>
    </div>
  );
};

export default ServicesCard;
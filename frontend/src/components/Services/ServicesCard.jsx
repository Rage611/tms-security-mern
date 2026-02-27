import React from 'react';
import './Services.css';

const ServicesCard = ({ title, description, image, delay }) => {
  return (
    <div className="service-card" style={{ transitionDelay: delay }}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-overlay"></div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-text-wrapper">
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
import React from 'react';
import './Services.css';

const ServicesCard = ({ title, image }) => {
  return (
    <div className="service-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-label">
        {title}
      </div>
    </div>
  );
};

export default ServicesCard;
import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/images/hero/hero-1.png';
import hero2 from '../../assets/images/hero/hero-2.png';
import hero3 from '../../assets/images/hero/hero-3.png';
import './Hero.css';

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero__slider-frame">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`hero__slide ${index === currentIndex ? 'active' : ''}`}
            alt="Security"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
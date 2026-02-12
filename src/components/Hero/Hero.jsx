import React, { useState, useEffect } from 'react';
import hero1 from "../../assets/images/hero/hero-1.png";
import hero2 from "../../assets/images/hero/hero-2.png";
import hero3 from "../../assets/images/hero/hero-3.png";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds to match your slow zoom CSS transition
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          
          {/* Left Side: Text Content */}
          <div className="hero__content">
            <h1 style={{ color: '#fbbf24', fontSize: '3.5rem', marginBottom: '1rem' }}>
              SECURE YOUR FUTURE
            </h1>
            <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '2rem' }}>
              Professional security services tailored for your safety and peace of mind. 
              TMS Group provides elite protection for assets and individuals.
            </p>
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              LEARN MORE
            </button>
          </div>

          {/* Right Side: Image Slider */}
          <div className="hero__slider-frame">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Security Slide ${index}`}
                className={`hero__slide ${index === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
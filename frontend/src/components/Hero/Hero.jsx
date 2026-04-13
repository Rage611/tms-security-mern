import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async'; // <-- 🛡️ 1. ACTIVATED IMPORT
import hero1 from '../../assets/images/hero/hero-1.webp';
import hero2 from '../../assets/images/hero/hero-2.webp';
import hero3 from '../../assets/images/hero/hero-3.webp';
import './Hero.css';

const Hero = () => {
  const slides = [
    {
      img: hero1,
      title: "TMS Security Services",
      subtitle: "Your safety is our primary commitment.",
      layout: "left-align" // Keeps text on the left for the guard image
    },
    {
      img: hero2,
      title: "Advanced Surveillance",
      subtitle: "State-of-the-art monitoring for complete peace of mind.",
      layout: "left-align lower-text"
    },
    {
      img: hero3, // The Manned Guarding / Car image
      title: "Manned Guarding",
      subtitle: "Highly trained professionals protecting your assets 24/7.",
      layout: "right-align lower-text" // Moves text to the right vacant space
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); 
    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <section className="hero">
      
      {/* 🛡️ 2. INJECT PRIMARY HOME PAGE SEO METADATA HERE */}
      <Helmet>
        {/* 🎯 TACTICAL TITLE: Targets main keyword + brand + broad location */}
        <title>TMS Security Group | Best Security Services in India & Delhi NCR</title>
        
        {/* 📝 Compelling summary to increase Click-Through Rate (CTR) from Google results */}
        <meta name="description" content="Looking for the best security services? TMS Group provides elite industrial guarding, trained gunmen, and facility management solutions across India. Trusted protection for your enterprise." />
        
        {/* 🔗 Primary Canonical Link for the root domain */}
        <link rel="canonical" href="https://tmssecurity.in/" />
      </Helmet>

      <button className="hero__arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="hero__arrow right" onClick={nextSlide}>&#10095;</button>

      <div className="hero__slider-frame">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <img
              src={slide.img}
              className={`hero__slide ${index === currentIndex ? 'active' : ''}`}
              alt={`TMS Security ${slide.title}`} // Improved alt tag for image SEO
            />
            {/* DYNAMIC CLASS: This now uses the 'layout' property 
              from your slides array to position the text.
            */}
            <div className={`hero__text-overlay ${slide.layout} ${index === currentIndex ? 'active' : ''}`}>
              <h1 className="hero__title">{slide.title}</h1>
              <p className="hero__subtitle">{slide.subtitle}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Hero;

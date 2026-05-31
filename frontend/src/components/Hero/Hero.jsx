import React, { useState, useEffect, useCallback, useRef } from 'react';
import hero1 from '../../assets/images/hero/hero-1.webp';
import hero2 from '../../assets/images/hero/hero-2.webp';
import hero3 from '../../assets/images/hero/hero-3.webp';
import './Hero.css';

const slides = [
  {
    img: hero1,
    title: "TMS Security Services",
    subtitle: "Your safety is our primary commitment.",
    layout: "left-align"
  },
  {
    img: hero2,
    title: "Advanced Surveillance",
    subtitle: "State-of-the-art monitoring for complete peace of mind.",
    layout: "left-align lower-text"
  },
  {
    img: hero3,
    title: "Manned Guarding",
    subtitle: "Highly trained professionals protecting your assets 24/7.",
    layout: "right-align lower-text"
  }
];

const SLIDE_COUNT = slides.length;
const AUTO_ADVANCE_MS = 8000;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, AUTO_ADVANCE_MS);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_COUNT);
    resetTimer();
  }, [resetTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDE_COUNT - 1 : prev - 1));
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  return (
    <section className="hero">
      <button className="hero__arrow left" onClick={prevSlide}>&#10094;</button>
      <button className="hero__arrow right" onClick={nextSlide}>&#10095;</button>

      <div className="hero__slider-frame">
        {slides.map((slide, index) => (
          <React.Fragment key={index}>
            <img
              src={slide.img}
              className={`hero__slide ${index === currentIndex ? 'active' : ''}`}
              alt={`TMS Security ${slide.title}`}
            />
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
import React, { useState, useEffect, useCallback, useRef } from 'react';
import hero1 from '../../assets/images/hero/hero-1.webp';
import hero2 from '../../assets/images/hero/hero-2.webp';
import hero3 from '../../assets/images/hero/hero-3.webp';
import hero4 from '../../assets/images/hero/hero-4.webp';
import './Hero.css';

const slides = [
    {
        img: hero1,
        eyebrow: "Elite Protection",
        title: "TMS Security Services",
        subtitle: "Your safety is our primary commitment. We deploy highly trained personnel to protect your most valuable assets.",
        layout: "layout-far-left"
    },
    {
        img: hero2,
        eyebrow: "Manned Guarding",
        title: "Corporate Security",
        subtitle: "Professional, PSARA-licensed guards ensuring safe, secure, and seamless corporate environments 24/7.",
        layout: "layout-bottom"
    },
    {
        img: hero3,
        eyebrow: "Command Center",
        title: "Rapid Response",
        subtitle: "Our central command operations guarantee swift, decisive action during critical security incidents.",
        layout: "layout-bottom"
    },
    {
        img: hero4,
        eyebrow: "Risk Mitigation",
        title: "Advanced Surveillance",
        subtitle: "State-of-the-art monitoring and strategic deployment for complete peace of mind.",
        layout: "layout-bottom"
    }
];

const SLIDE_COUNT = slides.length;
const AUTO_ADVANCE_MS = 8000;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);
    const progressRef = useRef(null);

    const resetTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        // Reset CSS animation for progress bar
        if (progressRef.current) {
            progressRef.current.style.animation = 'none';
            void progressRef.current.offsetWidth; // trigger reflow
            progressRef.current.style.animation = `progressFill ${AUTO_ADVANCE_MS}ms linear forwards`;
        }

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDE_COUNT);
        }, AUTO_ADVANCE_MS);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        resetTimer();
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [resetTimer]);

    return (
        <section className="hero">
            <div className="hero__slider-frame">
                {slides.map((slide, index) => (
                    <div 
                        key={index}
                        className={`hero__slide-wrap ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img
                            src={slide.img}
                            className="hero__slide-bg"
                            alt={slide.title}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            fetchpriority={index === 0 ? 'high' : 'low'}
                            decoding={index === 0 ? 'sync' : 'async'}
                        />
                        <div className="hero__overlay" />
                    </div>
                ))}
            </div>

            <div className="hero__content-container">
                {slides.map((slide, index) => (
                    <div 
                        key={`content-${index}`} 
                        className={`hero__content-box ${slide.layout} ${index === currentIndex ? 'active' : ''}`}
                    >
                        <span className="hero__eyebrow">{slide.eyebrow}</span>
                        <h1 className="hero__title">{slide.title}</h1>
                        <p className="hero__subtitle">{slide.subtitle}</p>
                    </div>
                ))}
            </div>

            <div className="hero__indicators">
                {slides.map((_, index) => (
                    <div 
                        key={`nav-${index}`} 
                        className={`hero__nav-item ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    >
                        <span className="hero__nav-number">0{index + 1}</span>
                        <div className="hero__nav-track">
                            {index === currentIndex && (
                                <div className="hero__nav-fill" ref={progressRef} />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="hero__bottom-gradient" />
        </section>
    );
};

export default Hero;
// import React from 'react';
// import './About.css';
// import aboutLogo from '../../assets/images/Logo.png'; 

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="about__inner">
        
//         {/* LEFT SIDE: TEXT CONTENT */}
//         <div className="about__content">
//           <div className="section-tagline">India's Premier Security Partner</div>
          
//           <h2 className="section-title">
//             Uncompromising Protection.<br />Absolute Certainty.
//           </h2>
          
//           <p className="section-text">
//             We engineer bespoke security architectures for corporate, governmental, and elite commercial enterprises.
//           </p>

//           <p className="section-text">
//              From rapid-response tactical teams to advanced digital surveillance, our mandate is total asset protection.
//           </p>
          
//           <button className="btn-dark">
//             EXPLORE OUR CAPABILITIES <span className="arrow">&#8594;</span>
//           </button>
//         </div>

//         {/* RIGHT SIDE: LOGO */}
//         <div className="about__image-box">
//           <img src={aboutLogo} alt="TMS Shield Logo" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutLogo from '../../assets/images/Logo.png'; 

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about__inner">
        
        <div className="about__content">
          <div className="section-tagline">India's Premier Security Partner</div>
          
          <h2 className="section-title">
            Uncompromising Protection.<br />Absolute Certainty.
          </h2>
          
          <p className="section-text">
            We engineer bespoke security architectures for corporate, governmental, and elite commercial enterprises.
          </p>

          <p className="section-text">
             From rapid-response tactical teams to advanced digital surveillance, our mandate is total asset protection.
          </p>
          
          <button className="btn-dark">
            EXPLORE OUR CAPABILITIES <span className="arrow">&#8594;</span>
          </button>
        </div>

        <div className="about__image-box">
          <img src={aboutLogo} alt="TMS Shield Logo" />
        </div>

      </div>
    </section>
  );
};

export default About;
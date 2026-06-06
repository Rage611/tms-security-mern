import React from 'react';
import SEOHead from '../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import './TheLeadership.css';
import leadershipBanner from '../../../assets/images/Headingbg.webp';
import leader1 from '../../../assets/images/leadership/owner-logo.jpeg';

const TheLeadership = () => {
  return (
    <div className="leadership-page">
      <SEOHead
        title="Leadership Team | TMS Security Services | Visionary Security Experts"
        description="Meet the leadership behind TMS Security Group. Industry veterans with 15+ years of experience managing 500+ security personnel and corporate security operations across India."
        canonical="https://tmssecurity.in/leadership"
      />

      <div className="leadership-hero" style={{ backgroundImage: `url(${leadershipBanner})` }}>
        <div className="overlay"></div>
        <h1>THE LEADERSHIP</h1>
      </div>

      <div className="credentials-strip">
        <div className="credential-item">
          <span className="cred-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </span>
          <span className="cred-text">PSARA Licensed</span>
        </div>
        <div className="credential-item">
          <span className="cred-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <path d="M9 12l2 2 4-4" />
              <path d="M7 8h10" />
            </svg>
          </span>
          <span className="cred-text">ISO 9001:2015</span>
        </div>
        <div className="credential-item">
          <span className="cred-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </span>
          <span className="cred-text">15+ Years Experience</span>
        </div>
        <div className="credential-item">
          <span className="cred-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 00-3-3.87" />
              <path d="M16 3.13a4 4 0 010 7.75" />
            </svg>
          </span>
          <span className="cred-text">500+ Personnel</span>
        </div>
      </div>

      <div className="content-container">
        <div className="leaders-list">
          <div className="leader-card">
            <div className="leader-image-box">
              <img src={leader1} alt="Mr. Ajay Kumar Singh - Managing Director TMS Security" fetchPriority="high" loading="eager" />
            </div>
            <div className="leader-bio">
              <h2 className="leader-name">Mr. Ajay Kumar Singh</h2>
              <h4 className="leader-title">Managing Director</h4>
              <p>
                A visionary entrepreneur with over 15 years of experience in the private
                security and facility management industry. Mr. Singh identified a critical
                gap in quality-driven security services across India and founded TMS Security
                Services to deliver corporate-grade protection built on discipline, compliance,
                and relentless operational standards.
              </p>
              <p>
                His hands-on leadership style and deep understanding of enterprise security
                requirements have been the driving force behind the company's rapid growth
                and reputation for reliability. Under his direction, TMS has expanded from a
                single-city operation to a pan-India security enterprise serving 100+ corporate
                clients across diverse sectors.
              </p>
              <p>
                Mr. Singh personally oversees recruitment standards, training protocols, and
                client satisfaction metrics, ensuring that every TMS deployment meets the
                highest professional benchmarks in the industry. His commitment to PSARA
                compliance and ISO-certified operations has set a new standard for the
                private security sector.
              </p>
              <div className="leader-achievements">
                <span className="achievement-tag">Industry Pioneer</span>
                <span className="achievement-tag">15+ Years in Security</span>
                <span className="achievement-tag">PSARA Compliance</span>
                <span className="achievement-tag">ISO Certified Operations</span>
                <span className="achievement-tag">Pan-India Operations</span>
              </div>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>

      <section className="vision-section">
        <div className="vision-inner">
          <h2>CORPORATE VISION</h2>
          <p>
            To establish TMS Security as India's most trusted name in private security
            by delivering uncompromising service standards, investing in our people,
            and maintaining absolute regulatory compliance.
          </p>
          <p>
            We believe that security is not a cost center — it is an investment in
            operational continuity, asset protection, and corporate reputation.
          </p>
          <blockquote>
            "Discipline is the bridge between goals and accomplishment. At TMS, we build
            that bridge with trained professionals, proven systems, and unwavering commitment."
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default TheLeadership;
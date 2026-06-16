import React from 'react';
import SEOHead from '../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import './TheLeadership.css';
import PageHeader from '../../PageHeader/PageHeader';
import leader1 from '../../../assets/images/leadership/owner-logo.jpeg';

const TheLeadership = () => {
  return (
    <div className="leadership-page">
      <SEOHead
        title="Leadership Team | TMS Security Services | Visionary Security Experts"
        description="Meet the leadership behind TMS Security Group. Industry veterans with 15+ years of experience managing 500+ security personnel and corporate security operations across India."
        canonical="https://tmssecurity.in/leadership"
      />

      <PageHeader
        title="The Leadership"
        eyebrow="Meet The Visionaries"
        bgImage="/header-leadership.webp"
        stats={[
          { value: 'PSARA', label: 'Licensed' },
          { value: 'ISO', label: '9001:2015' },
          { value: '15+', label: 'Years Experience' },
          { value: '500+', label: 'Personnel' },
        ]}
      />

      <div className="content-container" style={{ paddingTop: '60px' }}>
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
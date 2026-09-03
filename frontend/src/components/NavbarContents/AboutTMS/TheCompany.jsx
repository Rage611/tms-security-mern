import React from 'react';
import SEOHead from '../../SEOHead/SEOHead';
import { Link } from 'react-router-dom';
import './TheCompany.css';
import PageHeader from '../../PageHeader/PageHeader';

const TheCompany = () => {
  return (
    <div id="company-section" className="company-page">
      <SEOHead
        title="About TMS Security | PSARA Licensed Security Agency Delhi NCR | 15+ Years"
        description="TMS Security Group is a PSARA-licensed, ISO 9001:2015 certified security agency with 15+ years of experience. 500+ guards deployed across India for corporate, industrial & residential security."
        canonical="https://tmssecurity.in/company"
      />

      <PageHeader
        title="The Company"
        eyebrow="Discover Our Legacy"
        bgImage="/header-corporate.webp"
        stats={[
          { value: '15+', label: 'Years of Operations' },
          { value: '500+', label: 'Guards Deployed' },
          { value: '100+', label: 'Corporate Clients' },
          { value: 'PAN', label: 'India Coverage' },
        ]}
      />

      <div className="content-container" style={{ paddingTop: '60px' }}>
        <div className="text-content">
          <h2 className="section-title text-theme-dark">WHO WE ARE</h2>
          <p>
            <strong>TMS Security Services</strong> is a premier security agency committed to providing
            top-tier protection across India. Established with a foundation of military-grade discipline
            and operational excellence, we treat every client's safety as our own.
          </p>
          <p>
            Our guards are rigorously trained to handle diverse scenarios, from corporate
            reception management to high-risk emergency response. We have built an uncompromising
            reputation across Delhi NCR and beyond through consistent performance, strict
            compliance, and zero-tolerance for lapses.
          </p>
          <p>
            Operating across sectors including corporate offices, industrial plants, residential
            complexes, hospitals, schools, and retail chains, TMS Security delivers scalable
            manpower solutions tailored to the unique risk profile of each client.
          </p>
        </div>

        <div className="sidebar">
          <div className="contact-widget">
            <h3>PARTNER WITH US</h3>
            <p className="contact-widget-text">Secure your enterprise with our elite guarding solutions today.</p>
            <Link to="/contact" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2 className="section-title text-theme-dark" style={{ textAlign: 'center', marginBottom: '50px' }}>CORE OPERATIONAL VALUES</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Discipline First</h3>
            <p>Every TMS operative is trained with military-grade protocols. Punctuality, uniform standards, and situational awareness are non-negotiable.</p>
          </div>
          <div className="value-card">
            <h3>Zero Compromise</h3>
            <p>Background verification, police clearance, and physical fitness testing are mandatory for every deployed guard. No exceptions.</p>
          </div>
          <div className="value-card">
            <h3>Client Centricity</h3>
            <p>Dedicated account managers, 24/7 control room support, and real-time incident reporting ensure absolute transparency with every client.</p>
          </div>
          <div className="value-card">
            <h3>Scalable Deployment</h3>
            <p>From a single guard for a retail outlet to a 200-person deployment for an industrial zone, our infrastructure scales without compromising quality.</p>
          </div>
          <div className="value-card">
            <h3>Continuous Training</h3>
            <p>Monthly refresher drills, fire safety certifications, and crisis management workshops keep our force perpetually ready.</p>
          </div>
          <div className="value-card">
            <h3>Regulatory Compliance</h3>
            <p>Full compliance with PSARA regulations, minimum wage mandates, EPF/ESI contributions, and all applicable labour laws.</p>
          </div>
        </div>
      </div>

      <div className="areas-served-section">
        <div className="areas-header">
          <span className="areas-eyebrow">REGIONAL OPERATIONS &amp; COVERAGE</span>
          <h2 className="section-title text-theme-dark" style={{ textAlign: 'center', marginBottom: '16px' }}>
            AREAS WE SERVE ACROSS DELHI NCR
          </h2>
          <p className="areas-subtitle">
            PSARA-licensed deployments, dedicated zonal field officers, and rapid guard mobilization across all major commercial, IT, and industrial corridors in Delhi, Haryana, and Uttar Pradesh.
          </p>
        </div>

        <div className="state-rows-wrapper">
          {/* State 1: Delhi (NCT) */}
          <div className="state-row-block">
            <div className="state-row-left">
              <div className="state-tag-group">
                <span className="state-tag">NATIONAL CAPITAL</span>
                <Link to="/compliance" className="state-sub-pill state-sub-pill--link" title="Verify PSARA Delhi Compliance">
                  PSARA DELHI JURISDICTION
                </Link>
              </div>
              <h3 className="state-row-heading">Delhi (NCT)</h3>
              <p className="state-row-summary">
                Command headquarters deployed across Central Ministries (DoPT North Block, MEA Shastri Bhawan, CGDA), healthcare logistics (Entero Healthcare), premier retail (Woodland, Wave Infratech, Adidas), and DSIIDC industrial estates under verified{' '}
                <Link to="/compliance" style={{ color: '#b8860b', fontWeight: 600, textDecoration: 'underline' }}>
                  PSARA protocols
                </Link>.
              </p>
            </div>
            <div className="state-row-right state-grid-single">
              <Link to="/security-services/delhi" className="regional-link-card" id="company-area-delhi">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Delhi Regional Deployment</strong>
                    <span className="regional-pill">Central Hub</span>
                  </div>
                  <span className="regional-link-hubs">Central Govt Ministries (DoPT/MEA) • Connaught Place • Okhla • Patparganj • Naraina • Kapashera • Aerocity</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* State 2: Haryana */}
          <div className="state-row-block">
            <div className="state-row-left">
              <div className="state-tag-group">
                <span className="state-tag">HARYANA STATE</span>
                <Link to="/compliance" className="state-sub-pill state-sub-pill--link" title="Verify Haryana PSARA License #PSA/L/44/HR/2025/OCT/3/1539">
                  PSARA #PSA/L/44/HR/2025
                </Link>
              </div>
              <h3 className="state-row-heading">Haryana</h3>
              <p className="state-row-summary">
                <Link to="/compliance" style={{ color: '#b8860b', fontWeight: 600, textDecoration: 'underline' }}>
                  Haryana PSARA Authorized through 2030
                </Link>. Enterprise protection for Central Govt tax bodies (CBDT Aayakar Bhawan Rohtak), Fortune 500 retail networks (Woodland, Vijay Sales), and heavy manufacturing corridors.
              </p>
            </div>
            <div className="state-row-right state-grid-quad">
              <Link to="/security-services/gurgaon" className="regional-link-card" id="company-area-gurgaon">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Gurgaon (Gurugram)</strong>
                    <span className="regional-pill">Tech Corridor</span>
                  </div>
                  <span className="regional-link-hubs">Woodland Sec-14 • Adi Sports Old Delhi Rd • Cyber City • IMT Manesar</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/faridabad" className="regional-link-card" id="company-area-faridabad">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Faridabad</strong>
                    <span className="regional-pill">Industrial Belt</span>
                  </div>
                  <span className="regional-link-hubs">Vijay Sales Sec-20A • Mathura Rd (NH-44) • Bata Chowk • Ballabhgarh</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/hisar" className="regional-link-card" id="company-area-hisar">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Hisar</strong>
                    <span className="regional-pill">Steel &amp; Industry</span>
                  </div>
                  <span className="regional-link-hubs">Adi Sports NH-9 Plaza • Industrial Area I/II • Jindal City • Barwala Rd</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/rohtak" className="regional-link-card" id="company-area-rohtak">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Rohtak</strong>
                    <span className="regional-pill">Institutional</span>
                  </div>
                  <span className="regional-link-hubs">CBDT Aayakar Bhawan • Civil Rd • IMT Rohtak • Mansarover Park</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* State 3: Uttar Pradesh */}
          <div className="state-row-block">
            <div className="state-row-left">
              <div className="state-tag-group">
                <span className="state-tag">UTTAR PRADESH</span>
                <Link to="/compliance" className="state-sub-pill state-sub-pill--link" title="Verify UP PSARA License #PSA/L/93/UP/2021/DEC/3/330">
                  PSARA #PSA/L/93/UP/2021
                </Link>
              </div>
              <h3 className="state-row-heading">Uttar Pradesh</h3>
              <p className="state-row-summary">
                <Link to="/compliance" style={{ color: '#b8860b', fontWeight: 600, textDecoration: 'underline' }}>
                  UP PSARA Authorized through 2026
                </Link>. Manned guarding for Sovereign &amp; PSU entities (India Govt Mint SPMCIL Noida, HPCL Lucknow), retail giants, and Kashi hospitality resorts.
              </p>
            </div>
            <div className="state-row-right state-grid-penta">
              <Link to="/security-services/noida" className="regional-link-card" id="company-area-noida">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Noida</strong>
                    <span className="regional-pill">Govt Mint &amp; IT</span>
                  </div>
                  <span className="regional-link-hubs">SPMCIL India Govt Mint Sec-1 • Adi Sports Sec-15 • Expressway • Film City</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/greater-noida" className="regional-link-card" id="company-area-greater-noida">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Greater Noida</strong>
                    <span className="regional-pill">Campus &amp; Tech</span>
                  </div>
                  <span className="regional-link-hubs">Knowledge Park I–V • Ecotech • Pari Chowk • Techzone</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/ghaziabad" className="regional-link-card" id="company-area-ghaziabad">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Ghaziabad</strong>
                    <span className="regional-pill">Retail &amp; Industry</span>
                  </div>
                  <span className="regional-link-hubs">Adi Sports Opp Bikanerwala • Sahibabad • Indirapuram • Kavi Nagar</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/lucknow" className="regional-link-card" id="company-area-lucknow">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Lucknow</strong>
                    <span className="regional-pill">State Capital &amp; PSU</span>
                  </div>
                  <span className="regional-link-hubs">HPCL Gomti Nagar • Vibhuti Khand • Shaheed Path IT City</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
              <Link to="/security-services/varanasi" className="regional-link-card" id="company-area-varanasi">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Varanasi</strong>
                    <span className="regional-pill">Hospitality &amp; Heritage</span>
                  </div>
                  <span className="regional-link-hubs">Ramnagar Ind. Area • Cantt Luxury Hotels • Sigra • Babatpur Corridor</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* State 4: Bihar */}
          <div className="state-row-block">
            <div className="state-row-left">
              <div className="state-tag-group">
                <span className="state-tag">EASTERN ZONE</span>
                <Link to="/compliance" className="state-sub-pill state-sub-pill--link" title="Verify Compliance & Operations">
                  COMPLIANCE VERIFIED
                </Link>
              </div>
              <h3 className="state-row-heading">Bihar</h3>
              <p className="state-row-summary">
                Commercial security and loss prevention under verified{' '}
                <Link to="/compliance" style={{ color: '#b8860b', fontWeight: 600, textDecoration: 'underline' }}>
                  statutory compliance
                </Link>{' '}
                for multi-floor retail establishments (Adi Sports Khagaul), banking complexes, and logistics transit hubs across Greater Patna.
              </p>
            </div>
            <div className="state-row-right state-grid-single">
              <Link to="/security-services/patna" className="regional-link-card" id="company-area-patna">
                <div className="regional-link-info">
                  <div className="regional-title-row">
                    <strong className="regional-link-city">Patna Regional Operations</strong>
                    <span className="regional-pill">Commercial Hub</span>
                  </div>
                  <span className="regional-link-hubs">Adi Sports Khagaul Main Rd • Bailey Road • Fraser Road • Danapur Logistics Corridor • Patliputra</span>
                </div>
                <span className="regional-link-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="compliance-section">
        <h2>CERTIFICATIONS &amp; COMPLIANCE</h2>
        <div className="compliance-badges">
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span className="badge-text">PSARA Licensed</span>
            <span className="badge-detail">Private Security Agencies Regulation Act compliant across all operational states</span>
          </div>
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M9 12l2 2 4-4" />
                <path d="M7 8h10" />
              </svg>
            </div>
            <span className="badge-text">ISO 9001:2015</span>
            <span className="badge-detail">Quality Management System certified for security service delivery and operations</span>
          </div>
          <div className="compliance-badge">
            <div className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <span className="badge-text">EPF &amp; ESI Compliant</span>
            <span className="badge-detail">Full statutory compliance for all deployed personnel including provident fund and insurance</span>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>READY TO SECURE YOUR OPERATIONS?</h2>
        <p>Get a tailored security proposal from our operations team within 24 hours.</p>
        <div className="cta-btn-row">
          <Link to="/contact" className="cta-btn-gold">GET A FREE QUOTE</Link>
          <a href="tel:+919717763351" className="cta-btn-outline">CALL: +91-971-776-3351</a>
        </div>
      </div>
    </div>
  );
};

export default TheCompany;
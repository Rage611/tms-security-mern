import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { track } from '@vercel/analytics';
import emailjs from '@emailjs/browser';
import { Turnstile } from '@marsidev/react-turnstile';
import './LocationPage.css';

const WHATSAPP_BASE =
  'https://wa.me/919717763351?text=Namaste%20TMS%2C%20I%20am%20looking%20for%20corporate%20security%20services%20in%20';

const PHONE_PRIMARY = '+919717763351';
const PHONE_DISPLAY = '+91-97177-63351';
const SITE_URL = 'https://tmssecurity.in';

const DEFAULT_SERVICES = [
  { id: 'guards', label: 'Security Guard Deployment', icon: 'shield' },
  { id: 'pso', label: 'Personal Security Officers (PSO)', icon: 'person' },
  { id: 'bouncer', label: 'Bouncers & Access Control', icon: 'lock' },
  { id: 'gunman', label: 'Armed / Trained Gunmen', icon: 'target' },
  { id: 'facility', label: 'Facility Management', icon: 'building' },
  { id: 'housekeeping', label: 'Housekeeping & Sanitation', icon: 'star' },
];

const TRUST_SIGNALS = [
  {
    id: 'psara',
    label: 'PSARA Licensed',
    sublabel: 'Govt. of India',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'iso',
    label: 'ISO 9001:2015',
    sublabel: 'Quality Certified',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    id: 'guards',
    label: '500+ Guards',
    sublabel: 'Active Deployments',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'experience',
    label: '15+ Years',
    sublabel: 'Enterprise Experience',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#b8860b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const LocationPage = ({
  city = 'Delhi',
  state = 'Delhi NCR',
  heroImage,
  localKeywords = [],
  canonicalSlug,
  mapEmbedUrl,
}) => {
  const slug = canonicalSlug || city.toLowerCase().replace(/\s+/g, '-');
  const canonical = `${SITE_URL}/security-services/${slug}`;
  const pageTitle = `${city} Corporate Security Services | PSARA Licensed | TMS Security`;
  const metaDescription = `Top-rated PSARA-licensed corporate security agency in ${city}, ${state}. ISO 9001:2015 certified. Security guards, PSOs, bouncers & facility management. 500+ guards deployed. Call now for a free quote.`;

  const whatsappUrl = `${WHATSAPP_BASE}${encodeURIComponent(city)}.`;

  const allKeywords = [
    `corporate security agency in ${city}`,
    `security guards in ${city}`,
    `PSARA licensed security ${city}`,
    `facility management ${city}`,
    `security company ${state}`,
    ...localKeywords,
  ].join(', ');

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `TMS Security Group — ${city}`,
    description: metaDescription,
    url: canonical,
    telephone: PHONE_PRIMARY,
    image: `${SITE_URL}/Logo.webp`,
    logo: `${SITE_URL}/Logo.webp`,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Bank Transfer, UPI',
    areaServed: {
      '@type': 'City',
      name: city,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '526, Ground Floor, Opp Metro Pillar No. 623, Site-1, Vikas Puri',
      addressLocality: 'New Delhi',
      addressRegion: 'Delhi',
      postalCode: '110018',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6276',
      longitude: '77.0698',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Security Services in ${city}`,
      itemListElement: DEFAULT_SERVICES.map((svc) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.label,
          areaServed: city,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '47',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Security Services', item: `${SITE_URL}/security-services` },
      { '@type': 'ListItem', position: 3, name: `${city} Security Services`, item: canonical },
    ],
  };

  const [formData, setFormData] = useState({ name: '', company: '', phone: '', service: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      setFormError('Security verification pending.');
      return;
    }
    setFormStatus('loading');
    setFormError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          client_name: formData.name,
          client_email: 'N/A',
          inquiry_subject: `Location Lead — ${city}`,
          service_requested: formData.service,
          client_message: `Company: ${formData.company} | Phone: ${formData.phone} | City: ${city}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormStatus('success');
      track('location_lead_capture', { city, service: formData.service });
    } catch {
      setFormStatus('error');
      setFormError('Submission failed. Please call us directly.');
    }
  };

  return (
    <main id="location-page" className="location-page full-width">

      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={allKeywords} />
        <link rel="canonical" href={canonical} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={`${SITE_URL}/Logo.webp`} />
        <meta property="og:site_name" content="TMS Security Group" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/Logo.webp`} />

        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section id="location-hero" className="lp-hero">
        {heroImage && (
          <img
            src={heroImage}
            alt={`Corporate Security Services in ${city} — TMS Security`}
            className="lp-hero__bg-img"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="600"
          />
        )}
        <div className="lp-hero__overlay" />

        <div className="lp-hero__trust-bar" aria-label="Trust indicators">
          <div className="lp-hero__trust-pill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>
            PSARA Licensed
          </div>
          <div className="lp-hero__trust-pill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            ISO 9001:2015
          </div>
          <div className="lp-hero__trust-pill">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            500+ Guards Deployed
          </div>
        </div>

        <div className="lp-hero__content">
          <nav aria-label="Breadcrumb" className="lp-breadcrumb">
            <ol itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">Security Services</span>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true">/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span itemProp="name">{city}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <h1 className="lp-hero__h1">
            Premier Corporate Security in <span className="lp-hero__city">{city}</span>
          </h1>
          <p className="lp-hero__sub">
            PSARA-licensed, ISO 9001:2015 certified. Trusted by 100+ enterprises across {state} for guard deployment, PSO services, and full facility management.
          </p>

          <div className="lp-hero__cta-group">
            <a
              id={`lp-whatsapp-cta-${slug}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn lp-btn--whatsapp"
              onClick={() => track('location_whatsapp_click', { city })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="20" height="20" aria-hidden="true">
                <path d="M16.004 2.002A13.94 13.94 0 0 0 2.05 15.95a13.88 13.88 0 0 0 1.87 6.99L2 30l7.278-1.908A13.93 13.93 0 0 0 16.004 30 13.94 13.94 0 0 0 29.95 16.05 13.94 13.94 0 0 0 16.004 2.002Zm0 25.52a11.46 11.46 0 0 1-5.848-1.6l-.42-.25-4.348 1.14 1.16-4.24-.274-.436a11.44 11.44 0 0 1-1.754-6.09 11.52 11.52 0 0 1 23.036-.092 11.52 11.52 0 0 1-11.552 11.568Z" fill="#fff"/>
                <path d="M23.79 19.594c-.424-.212-2.504-1.234-2.892-1.376-.388-.14-.67-.212-.952.214-.282.424-1.094 1.376-1.34 1.66-.248.282-.494.318-.918.106-.424-.212-1.79-.66-3.41-2.104-1.26-1.122-2.11-2.51-2.358-2.934-.248-.424-.026-.654.186-.866.19-.19.424-.494.636-.742.212-.246.282-.424.424-.706.14-.282.07-.53-.036-.742-.106-.212-.952-2.296-1.306-3.142-.344-.826-.694-.714-.952-.728-.246-.012-.53-.014-.812-.014a1.56 1.56 0 0 0-1.13.53 4.75 4.75 0 0 0-1.482 3.532c0 2.084 1.518 4.098 1.73 4.38.212.284 2.99 4.562 7.242 6.398 1.012.436 1.802.696 2.418.892.816.26 1.56.224 2.146.136.654-.098 2.016-.824 2.3-1.62.284-.796.284-1.478.2-1.62-.086-.142-.318-.248-.742-.46Z" fill="#fff"/>
              </svg>
              WhatsApp for Instant Quote
            </a>
            <a
              id={`lp-call-cta-${slug}`}
              href={`tel:${PHONE_PRIMARY}`}
              className="lp-btn lp-btn--call"
              onClick={() => track('location_call_click', { city })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.21 12.9a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section id="location-trust-signals" className="lp-trust-section" aria-label="Certifications and trust signals">
        <div className="lp-container">
          <div className="lp-trust-grid">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.id} className="lp-trust-card">
                <span className="lp-trust-card__icon" aria-hidden="true">{signal.icon}</span>
                <div className="lp-trust-card__body">
                  <strong className="lp-trust-card__label">{signal.label}</strong>
                  <span className="lp-trust-card__sub">{signal.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article id="location-services" className="lp-services-section">
        <div className="lp-container">
          <header className="lp-section-header">
            <p className="lp-section-header__eyebrow">Operational in {city}</p>
            <h2 className="lp-section-header__title">Security Services We Deploy in {city}</h2>
            <p className="lp-section-header__desc">
              Every deployment is supervised by a dedicated operations manager and backed by PSARA licensing and ISO-certified protocols.
            </p>
          </header>

          <div className="lp-services-grid">
            {DEFAULT_SERVICES.map((svc) => (
              <div key={svc.id} className="lp-service-card" id={`lp-service-${svc.id}`}>
                <span className="lp-service-card__badge" aria-hidden="true">
                  <ServiceIcon type={svc.icon} />
                </span>
                <h3 className="lp-service-card__title">{svc.label}</h3>
                <p className="lp-service-card__desc">
                  Available for immediate deployment in {city} and surrounding {state} districts. Fully licensed and uniformed personnel.
                </p>
                <Link to="/contact" className="lp-service-card__link">
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </article>

      <section id="location-why-tms" className="lp-why-section">
        <div className="lp-container">
          <div className="lp-why-layout">
            <div className="lp-why-content">
              <header className="lp-section-header lp-section-header--left">
                <p className="lp-section-header__eyebrow lp-section-header__eyebrow--dark">Why TMS in {city}</p>
                <h2 className="lp-section-header__title lp-section-header__title--light">
                  The Standard Enterprise Security Clients Demand
                </h2>
              </header>
              <ul className="lp-why-list" role="list">
                <li className="lp-why-list__item">
                  <span className="lp-why-list__bullet" aria-hidden="true" />
                  <div>
                    <strong>Rapid Deployment in {city}</strong>
                    <p>Guards mobilized within 24–72 hours for new contracts. Dedicated {city} operations coordinator assigned from day one.</p>
                  </div>
                </li>
                <li className="lp-why-list__item">
                  <span className="lp-why-list__bullet" aria-hidden="true" />
                  <div>
                    <strong>PSARA & State Compliance</strong>
                    <p>Every personnel member is licensed, background-verified, and compliant with {state} jurisdiction requirements.</p>
                  </div>
                </li>
                <li className="lp-why-list__item">
                  <span className="lp-why-list__bullet" aria-hidden="true" />
                  <div>
                    <strong>ISO 9001:2015 Quality Protocols</strong>
                    <p>Standardized SOPs, incident reporting, and monthly performance reviews ensure service excellence at all deployments.</p>
                  </div>
                </li>
                <li className="lp-why-list__item">
                  <span className="lp-why-list__bullet" aria-hidden="true" />
                  <div>
                    <strong>24×7 Command Operations</strong>
                    <p>Round-the-clock supervisory oversight with real-time escalation paths for any security incident in {city}.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lp-why-stats">
              <div className="lp-stat-card">
                <span className="lp-stat-card__number">500<sup>+</sup></span>
                <span className="lp-stat-card__label">Guards Deployed</span>
              </div>
              <div className="lp-stat-card">
                <span className="lp-stat-card__number">100<sup>+</sup></span>
                <span className="lp-stat-card__label">Corporate Clients</span>
              </div>
              <div className="lp-stat-card">
                <span className="lp-stat-card__number">15<sup>+</sup></span>
                <span className="lp-stat-card__label">Years Operating</span>
              </div>
              <div className="lp-stat-card">
                <span className="lp-stat-card__number">24×7</span>
                <span className="lp-stat-card__label">Command Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location-lead-form" className="lp-lead-section" aria-label="Request a security quote">
        <div className="lp-container lp-container--narrow">
          <header className="lp-section-header">
            <p className="lp-section-header__eyebrow">Free Consultation</p>
            <h2 className="lp-section-header__title">Request a Security Proposal for {city}</h2>
            <p className="lp-section-header__desc">
              Complete the form below. Our {city} operations team will respond within 2 business hours with a tailored security deployment plan.
            </p>
          </header>

          {formStatus === 'success' ? (
            <div className="lp-form-success" role="status" aria-live="polite">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="56" height="56" aria-hidden="true">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3>Proposal Request Received</h3>
              <p>Our {city} operations team will contact you within 2 hours. For immediate assistance, call <a href={`tel:${PHONE_PRIMARY}`}>{PHONE_DISPLAY}</a>.</p>
            </div>
          ) : (
            <form
              id={`lp-lead-form-${slug}`}
              className="lp-lead-form"
              onSubmit={handleLeadSubmit}
              aria-label={`Security services inquiry form for ${city}`}
            >
              <div className="lp-form-row">
                <div className="lp-form-group">
                  <label htmlFor={`lp-name-${slug}`} className="lp-form-label">Full Name *</label>
                  <input
                    id={`lp-name-${slug}`}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="lp-form-input"
                    placeholder="Your full name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="lp-form-group">
                  <label htmlFor={`lp-company-${slug}`} className="lp-form-label">Company / Organisation *</label>
                  <input
                    id={`lp-company-${slug}`}
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="lp-form-input"
                    placeholder="Company name"
                    required
                    autoComplete="organization"
                  />
                </div>
              </div>
              <div className="lp-form-row">
                <div className="lp-form-group">
                  <label htmlFor={`lp-phone-${slug}`} className="lp-form-label">Mobile Number *</label>
                  <input
                    id={`lp-phone-${slug}`}
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="lp-form-input"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="lp-form-group">
                  <label htmlFor={`lp-service-${slug}`} className="lp-form-label">Service Required *</label>
                  <select
                    id={`lp-service-${slug}`}
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="lp-form-input lp-form-select"
                    required
                  >
                    <option value="" disabled>Select service</option>
                    {DEFAULT_SERVICES.map((svc) => (
                      <option key={svc.id} value={svc.id}>{svc.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="lp-form-turnstile">
                <Turnstile
                  siteKey="0x4AAAAAACwTs4bYHKH_D6P6"
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setFormError('Security check failed. Refresh and try again.')}
                  options={{ theme: 'light' }}
                />
              </div>

              {formError && (
                <p className="lp-form-error" role="alert">{formError}</p>
              )}

              <button
                id={`lp-submit-${slug}`}
                type="submit"
                className="lp-form-submit"
                disabled={formStatus === 'loading' || !turnstileToken}
              >
                {formStatus === 'loading' ? 'Submitting…' : `Request ${city} Security Proposal`}
              </button>

              <p className="lp-form-disclaimer">
                By submitting, you consent to TMS Security contacting you. We do not share your data with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {mapEmbedUrl && (
        <section id="location-map" className="lp-map-section" aria-label={`TMS Security office serving ${city}`}>
          <iframe
            title={`TMS Security — Serving ${city}, ${state}`}
            src={mapEmbedUrl}
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      )}

      <section id="location-cta-final" className="lp-final-cta">
        <div className="lp-container lp-container--narrow">
          <h2 className="lp-final-cta__title">
            Ready to Secure Your {city} Operations?
          </h2>
          <p className="lp-final-cta__sub">
            Join 100+ corporates, banks, and industrial complexes across {state} that trust TMS Security. PSARA licensed. ISO 9001:2015 certified. 24×7 support.
          </p>
          <div className="lp-final-cta__actions">
            <a
              id={`lp-final-whatsapp-${slug}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-btn lp-btn--whatsapp"
              onClick={() => track('location_final_whatsapp_click', { city })}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="20" height="20" aria-hidden="true">
                <path d="M16.004 2.002A13.94 13.94 0 0 0 2.05 15.95a13.88 13.88 0 0 0 1.87 6.99L2 30l7.278-1.908A13.93 13.93 0 0 0 16.004 30 13.94 13.94 0 0 0 29.95 16.05 13.94 13.94 0 0 0 16.004 2.002Zm0 25.52a11.46 11.46 0 0 1-5.848-1.6l-.42-.25-4.348 1.14 1.16-4.24-.274-.436a11.44 11.44 0 0 1-1.754-6.09 11.52 11.52 0 0 1 23.036-.092 11.52 11.52 0 0 1-11.552 11.568Z" fill="#fff"/>
                <path d="M23.79 19.594c-.424-.212-2.504-1.234-2.892-1.376-.388-.14-.67-.212-.952.214-.282.424-1.094 1.376-1.34 1.66-.248.282-.494.318-.918.106-.424-.212-1.79-.66-3.41-2.104-1.26-1.122-2.11-2.51-2.358-2.934-.248-.424-.026-.654.186-.866.19-.19.424-.494.636-.742.212-.246.282-.424.424-.706.14-.282.07-.53-.036-.742-.106-.212-.952-2.296-1.306-3.142-.344-.826-.694-.714-.952-.728-.246-.012-.53-.014-.812-.014a1.56 1.56 0 0 0-1.13.53 4.75 4.75 0 0 0-1.482 3.532c0 2.084 1.518 4.098 1.73 4.38.212.284 2.99 4.562 7.242 6.398 1.012.436 1.802.696 2.418.892.816.26 1.56.224 2.146.136.654-.098 2.016-.824 2.3-1.62.284-.796.284-1.478.2-1.62-.086-.142-.318-.248-.742-.46Z" fill="#fff"/>
              </svg>
              WhatsApp Now
            </a>
            <Link
              id={`lp-final-contact-${slug}`}
              to="/contact"
              className="lp-btn lp-btn--ghost"
            >
              Full Inquiry Form
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

const ServiceIcon = ({ type }) => {
  const icons = {
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    person: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    lock: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    target: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    building: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="1"/>
        <path d="M9 3v18M15 3v18M2 9h20M2 15h20"/>
      </svg>
    ),
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  };
  return icons[type] || icons.shield;
};

export default LocationPage;

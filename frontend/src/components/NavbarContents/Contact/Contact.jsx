import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Turnstile } from '@marsidev/react-turnstile'; // <-- The Invisible Bouncer
import { Helmet } from 'react-helmet-async';
import './Contact.css';


import contactBanner from '../../../assets/images/hero/hero-2.png'; 

const Contact = () => {
  const { pathname } = useLocation();

  // Route Reset: Snaps to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // ─── SECURE FORM STATE ──────────────────────────────────────────
  const [formData, setFormData] = useState({ 
    name: '', email: '', subject: '', service: '', message: '' 
  });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ─── TRANSMISSION LOGIC ─────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setErrorMessage('Security verification pending. Please wait.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // 🚀 Fire payload to your Node.js backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          turnstileToken: turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', service: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Transmission failed. Try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Is the Command Center backend offline?');
    }
  };

  return (
    <div id="contact-section" className="contact-page full-width" key={pathname}>

      <Helmet>
        <title>Contact TMS Security | Best Security Services in Vikas Puri, Delhi</title>
        <meta name="description" content="Connect with TMS Security Group headquarters in Vikas Puri, New Delhi. Reach out for strategic partnerships, immediate security deployments, or queries about India's best security services." />
        {/* Tells Google this is the master version of this URL */}
        <link rel="canonical" href="https://tmssecurity.in/contact" />
      </Helmet>
      
      {/* 1. Hero Banner */}
      <div className="contact-hero" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="overlay"></div>
        <h1>CONTACT US</h1>
      </div>

      {/* 2. Main Content Grid */}
      <div className="contact-container">
        <div className="contact-flex-wrapper">
          
          {/* Left Side: Corporate Intel */}
          <div className="office-details-section">
            <h2 className="office-heading">CORPORATE HEADQUARTERS</h2>
            <p className="contact-body-text">
              For operational inquiries, strategic partnerships, or immediate security deployments, 
              reach out to our command center.
            </p>
            
            <div className="info-block">
              <h3 className="gold-heading">Delhi Office</h3>
              <ul className="tactical-info-list">
                <li>
                  <strong>ADDRESS:</strong><br />
                  526, Ground Floor, Opp Metro Pillar No. 623,<br />
                  Site-1, Vikas Puri, New Delhi, 110018
                </li>
                <li>
                  <strong>DIRECT LINE:</strong><br />
                  +91 9717763351
                </li>
                <li>
                  <strong>SECURE FAX:</strong><br />
                  +91 11 4140 1113
                </li>
              </ul>
            </div>

            <div className="info-block">
              <h3 className="gold-heading">National Presence</h3>
              <p className="contact-body-text">
                Operating with a comprehensive network across major metropolitan hubs and strategic industrial zones nationwide.
              </p>
            </div>
          </div>

          {/* Right Side: Secure Inquiry Portal */}
          <div className="contact-form-section">
            <div className="portal-header-small">
              <h2>SECURE INQUIRY PORTAL</h2>
            </div>
            
            {status === 'success' ? (
              <div className="success-message" style={{ color: '#a7f3d0', padding: '20px', border: '1px solid #10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', marginTop: '20px' }}>
                ✅ Message securely transmitted to HQ. We will contact you shortly.
              </div>
            ) : (
              <form className="elite-contact-form" onSubmit={handleSubmit}>
                <div className="input-row">
                  <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="input-row">
                  <input type="email" name="email" placeholder="Your Email*" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="input-row">
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                </div>

                <div className="input-row">
                  <select name="service" required value={formData.service} onChange={handleChange}>
                    <option value="" disabled>Select Service*</option>
                    <option value="guarding">Guarding Services</option>
                    <option value="facility">Facility Management</option>
                    <option value="housekeeping">Housekeeping</option>
                    <option value="electronic">Electronic Security</option>
                  </select>
                </div>

                <div className="input-row">
                  <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
                </div>

                {/* 🛡️ CLOUDFLARE TURNSTILE WIDGET */}
                <div className="input-row" style={{ marginTop: '10px' }}>
                  <Turnstile 
                    siteKey="0x4AAAAAACrR03wgNaXB91As" // Testing Key
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setErrorMessage('Security check failed.')}
                    options={{ theme: 'dark' }} 
                  />
                </div>

                {errorMessage && <div style={{ color: '#ef4444', marginBottom: '15px' }}>⚠️ {errorMessage}</div>}

                {/* Changed from type="button" to type="submit" */}
                <button type="submit" className="contact-send-btn" disabled={status === 'loading' || !turnstileToken}>
                  {status === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* 3. Tactical Map Section */}
      <div className="map-section">
        <iframe 
          title="TMS Office Location"
          src="https://www.google.com/maps?q=500,+Shankar+Garden,+Vikaspuri,+New+Delhi,+Delhi,+110018&output=embed"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
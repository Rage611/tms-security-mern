import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { track } from '@vercel/analytics';
import SEOHead from '../../SEOHead/SEOHead';
import emailjs from '@emailjs/browser';
import './Contact.css';

import PageHeader from '../../PageHeader/PageHeader';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', service: '', message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!turnstileToken) {
      setErrorMessage('Security verification pending. Please wait.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const templateParams = {
        client_name: formData.name,
        client_email: formData.email,
        inquiry_subject: formData.subject,
        service_requested: formData.service,
        client_message: formData.message
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      track('emailjs_form_success', {
        form: 'contact',
        service: formData.service
      });
      setFormData({ name: '', email: '', subject: '', service: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Transmission failed. Try again.');
    }
  };

  return (
    <div id="contact-section" className="contact-page full-width">

      <SEOHead
        title="Contact TMS Security | Get a Free Corporate Security Quote | Delhi NCR"
        description="Contact TMS Security for PSARA-licensed corporate security, facility management & manpower deployment across Delhi NCR. ISO 9001:2015 certified. Call +91-9717763351 or request a free quote."
        canonical="https://tmssecurity.in/contact"
      />

      <PageHeader
        title="Contact Us"
        eyebrow="Get In Touch"
        bgImage="/header-corporate.webp"
      />

      <div className="contact-channels">
        <div className="channel-card">
          <div className="channel-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h3 className="channel-title">Corporate Inquiry</h3>
          <p className="channel-desc">For B2B partnerships, bulk deployments, and enterprise-level security contracts.</p>
          <a href="tel:+919717763351" className="channel-action">+91 9717763351</a>
        </div>
        <div className="channel-card">
          <div className="channel-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>
          <h3 className="channel-title">General Liaison</h3>
          <p className="channel-desc">For general inquiries, operational support, and existing client coordination.</p>
          <a href="tel:+911141401113" className="channel-action">+91 11 4140 1113</a>
        </div>
        <div className="channel-card">
          <div className="channel-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="channel-title">Visit Headquarters</h3>
          <p className="channel-desc">526, Ground Floor, Opp Metro Pillar No. 623, Vikas Puri, New Delhi 110018</p>
          <span className="channel-action">Delhi NCR</span>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-flex-wrapper">

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
                  <strong>Contact Number:</strong><br />
                  +91 9717763351
                </li>
                <li>
                  <strong>DIRECT LINE:</strong><br />
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

          <div className="contact-form-section">
            <div className="portal-header-small">
              <h2>SECURE INQUIRY PORTAL</h2>
            </div>

            {status === 'success' ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="success-title">MESSAGE TRANSMITTED</h3>
                <p className="success-text">Your inquiry has been securely received. Our operations team will respond within 24 hours.</p>
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

                <div className="input-row" style={{ marginTop: '10px' }}>
                  <Turnstile
                    siteKey="0x4AAAAAACwTs4bYHKH_D6P6"
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setErrorMessage('Security check failed.')}
                    options={{ theme: 'dark' }}
                  />
                </div>

                {errorMessage && <div className="form-error-state">{errorMessage}</div>}

                <button type="submit" className="contact-send-btn" disabled={status === 'loading' || !turnstileToken}>
                  {status === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <div className="map-section">
        <iframe
          title="TMS Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.5182412238406!2d77.06984496967594!3d28.62757519847924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9ed2c7e95%3A0x327bdb98043e6095!2sTMS%20Security%20Services!5e0!3m2!1sen!2sus!4v1774792028883!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
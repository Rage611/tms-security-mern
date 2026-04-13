import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Turnstile } from '@marsidev/react-turnstile';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import './Contact.css';

import contactBanner from '../../../assets/images/hero/hero-2.webp'; 

const Contact = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      setFormData({ name: '', email: '', subject: '', service: '', message: '' });
      e.target.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Transmission failed. Try again.');
    }
  };

  return (
    <div id="contact-section" className="contact-page full-width" key={pathname}>

      <Helmet>
        <title>Contact TMS Security | Best Security Services in Vikas Puri, Delhi</title>
        <meta name="description" content="Connect with TMS Security Group headquarters in Vikas Puri, New Delhi. Reach out for strategic partnerships, immediate security deployments, or queries about India's best security services." />
        <link rel="canonical" href="https://tmssecurity.in/contact" />
      </Helmet>
      
      <div className="contact-hero" style={{ backgroundImage: `url(${contactBanner})` }}>
        <div className="overlay"></div>
        <h1>CONTACT US</h1>
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

                <div className="input-row" style={{ marginTop: '10px' }}>
                  <Turnstile 
                    siteKey="0x4AAAAAACwTs4bYHKH_D6P6" 
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setErrorMessage('Security check failed.')}
                    options={{ theme: 'dark' }} 
                  />
                </div>

                {errorMessage && <div style={{ color: '#ef4444', marginBottom: '15px' }}>⚠️ {errorMessage}</div>}

                <button type="submit" className="contact-send-btn" disabled={status === 'loading' || !turnstileToken}>
                  {status === 'loading' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Updated Map Section */}
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
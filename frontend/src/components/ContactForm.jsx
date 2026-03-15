import React, { useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

const ContactForm = () => {
  // 1. Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');
  
  // 2. The Bouncer's Token
  const [turnstileToken, setTurnstileToken] = useState(null);

  // 3. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. The Submit Action
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if Cloudflare has cleared the user yet
    if (!turnstileToken) {
      setErrorMessage('Security verification pending. Please wait a moment.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // 🚀 Fire the payload to your Node.js backend
      // Note: Change this URL to your live backend URL when you deploy!
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          turnstileToken: turnstileToken, // Passing the security key!
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
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
    <div className="contact-wrapper">
      <h2>Initiate Deployment Request</h2>
      
      {status === 'success' ? (
        <div className="success-message">
          ✅ Message securely transmitted to HQ. We will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Deployment details..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          />

          {/* 🛡️ THE INVISIBLE BOUNCER */}
          {/* Replace this Site Key with your actual Public Site Key from Cloudflare */}
          <Turnstile 
            siteKey="1x00000000000000000000AA" 
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setErrorMessage('Security check failed.')}
            options={{ theme: 'dark' }} // Matches your UI perfectly!
          />

          {errorMessage && <div className="error-message">⚠️ {errorMessage}</div>}

          <button type="submit" disabled={status === 'loading' || !turnstileToken}>
            {status === 'loading' ? 'Transmitting...' : 'Send to HQ'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
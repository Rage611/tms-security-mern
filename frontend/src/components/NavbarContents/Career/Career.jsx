import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Turnstile } from '@marsidev/react-turnstile';
import emailjs from '@emailjs/browser';
import './Career.css';

import careerBanner from '../../../assets/images/hero/hero-3.webp'; 
import guardTeam from '../../../assets/images/hero/hero-1.webp';

const Career = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', position: '', experience: '', message: '' 
  });
  const [resumeFile, setResumeFile] = useState(null); 
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('File is too large. Maximum size is 5MB.');
        setResumeFile(null);
        e.target.value = null;
      } else {
        setErrorMessage('');
        setResumeFile(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      setErrorMessage('Security verification pending. Please wait.');
      return;
    }

    if (!resumeFile) {
      setErrorMessage('A resume (PDF/DOC) is required for deployment consideration.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = new FormData();
      payload.append("file", resumeFile);
      payload.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
      payload.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
      payload.append("folder", "resumes");

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/upload`,
        { method: "POST", body: payload }
      );

      const fileData = await uploadResponse.json();

      if (!fileData.secure_url) {
        throw new Error("Cloud storage upload failed.");
      }

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        message: formData.message,
        resume_link: fileData.secure_url
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
      setResumeFile(null);
      e.target.reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage('Transmission failed. Try again.');
    }
  };

  return (
    <div className="career-page full-width" key={pathname}>
      
      <Helmet>
        <title>Security Jobs in India | Join the TMS Security Force</title>
        <meta name="description" content="Start your career with India's premier security provider. Apply now for security guard, bouncer, gunmen, and GTO roles at TMS Group. Submit your application dossier today." />
        <link rel="canonical" href="https://tmssecurity.in/career" />
      </Helmet>

      <div className="career-hero" style={{ backgroundImage: `url(${careerBanner})` }}>
        <div className="overlay"></div>
        <h1>CAREERS AT TMS</h1>
      </div>

      <div className="content-container">
        <div className="career-content-main">
          
          <img src={guardTeam} alt="TMS Security Officer Team" className="career-featured-image" />
          
          <div className="career-text-wrap">
            <h2 className="section-title text-theme-dark">JOIN THE ELITE VANGUARD</h2>
            
            <p className="career-body-text">
              TMS Security Services is continuously seeking highly disciplined, driven, and capable individuals 
              to join our ranks. We operate at the highest echelons of corporate and institutional security, 
              which means our recruitment standards are uncompromising.
            </p>
            
            <blockquote className="elite-quote text-theme-dark">
              "We do not just hire guards; we forge security professionals capable of maintaining absolute operational superiority."
            </blockquote>

            <div className="career-details-grid">
                <div className="career-text-block">
                <h3 className="text-theme-dark">Who We Look For</h3>
                <p className="career-body-text">
                  Our core operational philosophy is built on defense legacy and tactical precision. 
                  We highly value candidates with backgrounds in the Armed Forces, Paramilitary, or 
                  specialized law enforcement, though exceptional civilian professionals are also evaluated.
                </p>
              </div>

              <div className="career-text-block">
                <h3 className="text-theme-dark">Minimum Requirements</h3>
                <ul className="tactical-list">
                  <li>Minimum height of 5'7" with verified physical fitness.</li>
                  <li>Flawless background verification and police clearance.</li>
                  <li>High aptitude for situational awareness and crisis management.</li>
                  <li>Commitment to continuous training and strict protocols.</li>
                  <li>Clean uniform and appearance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="application-portal-section">
        <div className="portal-container">
          
          <div className="portal-header">
              <h2>APPLICATION PORTAL</h2>
              <p>Submit your details for preliminary evaluation by our recruitment division.</p>
          </div>

          {status === 'success' ? (
            <div className="success-message" style={{ color: '#a7f3d0', padding: '20px', border: '1px solid #10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', textAlign: 'center', marginTop: '20px' }}>
              ✅ Resume securely uploaded. Our recruitment officers will review your file shortly.
            </div>
          ) : (
            <form className="elite-application-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name*</label>
                  <input type="text" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
                </div>
                
                <div className="form-group">
                  <label>Email Address*</label>
                  <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Phone Number*</label>
                  <input type="tel" name="phone" placeholder="Enter your contact number" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Position Applied For*</label>
                  <select name="position" required value={formData.position} onChange={handleChange}>
                    <option value="" disabled>Select a position...</option>
                    <option value="Security Guard">Security Guard</option>
                    <option value="Field Officer">Field Officer</option>
                    <option value="Housekeeping">Housekeeping</option>
                    <option value="Bouncer">Bouncer</option>
                    <option value="trained gunman"> Trained Gunman</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width-input">
                <label>Previous Experience / Service Background</label>
                <input type="text" name="experience" placeholder="e.g., Ex-Army, 5 yrs Corporate Security" value={formData.experience} onChange={handleChange} />
              </div>

              <div className="form-group full-width-input">
                <label>Cover Letter / Additional Details</label>
                <textarea name="message" placeholder="State why you are a fit for TMS Security..." rows="5" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <div className="form-group full-width-input" style={{ padding: '15px', border: '1px dashed rgba(255,255,255,0.3)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <label>Upload Resume (PDF or DOC, max 5MB)*</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required style={{ border: 'none', padding: '10px 0' }} />
              </div>

              <div className="form-group full-width-input" style={{ marginTop: '10px' }}>
                <Turnstile 
                  siteKey="0x4AAAAAACwTs4bYHKH_D6P6" 
                  onSuccess={(token) => setTurnstileToken(token)}
                  onError={() => setErrorMessage('Security check failed.')}
                  options={{ theme: 'dark' }} 
                />
              </div>

              {errorMessage && <div style={{ color: '#ef4444', marginBottom: '15px', textAlign: 'center' }}>⚠️ {errorMessage}</div>}

              <button type="submit" className="submit-btn-gold" disabled={status === 'loading' || !turnstileToken}>
                {status === 'loading' ? 'TRANSMITTING...' : 'SUBMIT APPLICATION'}
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};

export default Career;
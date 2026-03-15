import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import multer from 'multer'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 

// ─── LAYER 1: THE THROTTLE (Backend Rate Limiting) ───────────────
const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 3, 
  message: { error: 'Too many requests sent from this IP. Please try again later.' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

// ─── THE FILE INTERCEPTOR (Multer) ───────────────────────────────
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } 
});

// ─── EMAIL CONFIGURATION (Nodemailer) ─────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, 
  },
});

// ─── ROUTE 1: THE MAIN CONTACT ROUTE (Sales & Inquiries) ──────────
app.post('/api/contact', contactRateLimiter, async (req, res) => {
  const { name, email, subject, service, message, turnstileToken } = req.body;

  if (!name || !email || !message || !turnstileToken) {
    return res.status(400).json({ error: 'Missing required fields or security token.' });
  }

  try {
    const formData = new URLSearchParams();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY);
    formData.append('response', turnstileToken);

    const cloudflareRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });
    
    const cloudflareData = await cloudflareRes.json();

    if (!cloudflareData.success) {
      console.warn('Bot detected or token expired:', cloudflareData['error-codes']);
      return res.status(403).json({ error: 'Security verification failed. Are you a bot?' });
    }

    const mailOptions = {
      from: `"TMS Security Grid" <${process.env.SMTP_USER}>`, 
      to: process.env.COMPANY_INBOX_EMAIL,                     
      replyTo: email,                                          
      subject: `🚨 New Lead: ${service ? service.toUpperCase() : 'DEPLOYMENT REQUEST'} - ${name}`,
      text: `
      You have a new secure inquiry from the live grid:
      
      Client Name: ${name}
      Client Email: ${email}
      Service Required: ${service || 'Not specified'}
      Subject: ${subject || 'No subject provided'}
      
      Message:
      ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Message securely transmitted to HQ.' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error during transmission.' });
  }
});

// ─── ROUTE 2: THE CAREER APPLICATION ROUTE (Recruitment) ──────────
app.post('/api/career', contactRateLimiter, upload.single('resume'), async (req, res) => {
  // UPDATED: Destructured 'experience' from req.body
  const { name, email, phone, position, experience, message, turnstileToken } = req.body;
  const resumeFile = req.file; 

  if (!name || !email || !resumeFile || !turnstileToken) {
    return res.status(400).json({ error: 'Missing required fields, resume file, or security token.' });
  }

  try {
    const cfFormData = new URLSearchParams();
    cfFormData.append('secret', process.env.TURNSTILE_SECRET_KEY);
    cfFormData.append('response', turnstileToken);

    const cloudflareRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: cfFormData,
    });
    
    const cloudflareData = await cloudflareRes.json();

    if (!cloudflareData.success) {
      console.warn('Bot detected or token expired:', cloudflareData['error-codes']);
      return res.status(403).json({ error: 'Security verification failed. Are you a bot?' });
    }

    const mailOptions = {
      from: `"TMS Recruitment Grid" <${process.env.SMTP_USER}>`, 
      to: process.env.COMPANY_INBOX_EMAIL,                     
      replyTo: email,                                          
      subject: `📄 RECRUITMENT: ${position ? position.toUpperCase() : 'APPLICATION'} - ${name}`,
      // UPDATED: Injected 'experience' into the official email text
      text: `
      A new candidate has submitted an application via the portal:
      
      Candidate Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Position Applied For: ${position || 'General Inquiry'}
      Previous Experience: ${experience || 'None listed'}
      
      Message/Cover Letter:
      ${message || 'No additional message provided.'}
      
      Please find their resume attached to this transmission.
      `,
      attachments: [
        {
          filename: resumeFile.originalname, 
          content: resumeFile.buffer         
        }
      ]
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: 'Application and resume securely transmitted.' });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error during transmission.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Command Center Backend live on port ${PORT}`));
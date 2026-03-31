# 🛡️ TMS Security Services - Corporate Web Platform

**Live Production Site:** [tmssecurity.in](https://tmssecurity.in)

## 📌 Project Overview
A high-performance, responsive frontend web application engineered for **TMS Security Services**, a market leader in corporate security and facility management. This platform was developed to digitize their service offerings, securely handle client inquiries, and provide a professional digital footprint using modern web architecture. 

*Note: This project is currently live in production and under active development to continuously refine the UI/UX and optimize performance.*

## 🚀 Technical Stack
* **Core:** React.js, Vite, CSS3
* **Deployment & CI/CD:** Vercel, Custom Domain Routing, Git/GitHub
* **Serverless Integrations:** EmailJS (Form Routing), Cloudinary API (Resume Uploads)
* **Security & Tracking:** Cloudflare Turnstile (Bot Protection), Vercel Web Analytics

## 💡 Key Technical Highlights
* **Scalable CSS Architecture:** Engineered a DRY (Don't Repeat Yourself) global CSS layout system (`SharedServiceLayout`) for dynamically rendering multiple service pages, drastically reducing code redundancy and ensuring brand consistency.
* **Serverless Form Handling & File Storage:** Built an end-to-end recruitment and contact portal without a traditional backend. Integrated Cloudinary for secure PDF/DOC resume uploads and EmailJS for direct-to-client transmission.
* **Enterprise-Grade Security:** Implemented Cloudflare Turnstile on public-facing forms to prevent spam and bot submissions, ensuring only high-quality leads reach the operational team.
* **High-Performance UI/UX:** Designed a responsive, mobile-first "Gold & Charcoal" interface with custom CSS animations. Optimized asset bundling using Vite to ensure seamless rendering and zero layout shift.
* **Live Traffic Analytics:** Integrated Vercel Web Analytics to monitor real-time visitor data and page views directly from the deployment dashboard.
* **Cross-Platform DevOps:** Successfully resolved production-level deployment blockers, including navigating Linux-based server case-sensitivity constraints and overriding ISP network timeouts via DNS optimizations.

## 🗺️ Project Roadmap
- [x] Phase 1: UI/UX Design & Core Frontend Architecture
- [x] Phase 2: Production Deployment & Custom Domain Integration (`tmssecurity.in`)
- [x] Phase 3: Serverless Form Routing & Cloudinary Resume Handling
- [x] Phase 4: Global CSS Refactoring & Vercel Analytics Integration
- [ ] Phase 5: Continuous UI Polish & Active Development

## 💻 Run Locally
To run this project on your local machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Rage611/tms-security-mern.git](https://github.com/Rage611/tms-security-mern.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd tms-security-mern
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Environment Variables:
   Create a `.env` file in the root directory and add your required API keys to ensure forms compile correctly:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_CAREER_TEMPLATE_ID=your_career_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_preset
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

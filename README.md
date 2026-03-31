# 🛡️ TMS Security Services - Corporate Web Platform

**Live Demo:** [tms-security-mern.vercel.app](https://tms-security-mern.vercel.app/)

## 📌 Project Overview
A high-performance, responsive full-stack web application engineered for **TMS Security Services**, a market leader in security and facility management. This platform was developed to digitize their service offerings, enhance client acquisition, and provide a professional digital footprint using modern web architecture.

## 🚀 Technical Stack
* **Frontend:** React.js, Vite, CSS3
* **Deployment & CI/CD:** Vercel, Git/GitHub
* **Backend (In Active Development):** Node.js, Express.js, MongoDB

## 💡 Key Technical Highlights
* **High-Performance UI/UX:** Designed a responsive, mobile-first "Gold & Charcoal" interface with custom CSS animations and optimized asset bundling for seamless rendering.
* **Dynamic Asset Management:** Engineered an automated, infinite-scrolling partner logo slider utilizing React hooks and Vite’s asset bundling pipeline to ensure zero layout shift.
* **Cross-Platform DevOps:** Successfully resolved production-level deployment blockers, including navigating Linux-based server case-sensitivity constraints and bypassing regional ISP network timeouts via DNS and routing optimizations.
* **SEO & Metadata:** Implemented Open Graph (OG) tags and optimized loading states to improve link-sharing previews and user retention metrics.

## 🗺️ Project Roadmap
This project is actively being developed into a full MERN stack application.
- [x] Phase 1: UI/UX Design & Frontend Architecture
- [x] Phase 2: Production Deployment & CI/CD Pipeline (Vercel)
- [ ] Phase 3: Node.js/Express.js Backend API Integration (Estimated Q1 2026)
- [ ] Phase 4: MongoDB Database schema for dynamic service inquiries and career postings

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


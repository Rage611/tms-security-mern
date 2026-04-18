import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

/* --- Components --- */
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/* --- Home Page Sections --- */
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Network from './components/Network/Network';

/* --- New Pages --- */
import TheCompany from './components/NavbarContents/AboutTMS/TheCompany';
import TheLeadership from './components/NavbarContents/AboutTMS/TheLeadership';
import FacilityManagement from './components/NavbarContents/Services/FacilityManagement/FacilityManagement';
import Housekeeping from './components/NavbarContents/Services/Housekeeping/Housekeeping';
import Career from './components/NavbarContents/Career/Career';
import Contact from './components/NavbarContents/Contact/Contact';
import Bouncer from "./components/NavbarContents/Services/ManPowerServices/ManPowerContent/Bouncer/Bouncer";
import PSO from "./components/NavbarContents/Services/ManPowerServices/ManPowerContent/PSO/PSO";
import TrainedGunman from "./components/NavbarContents/Services/ManPowerServices/ManPowerContent/TrainedGunman/TrainedGunman";
import SecurityGuards from "./components/NavbarContents/Services/ManPowerServices/ManPowerContent/SecurityGuard/SecurityGuard";

// NEW IMPORT FOR DATA ENTRY
import DataEntry from "./components/NavbarContents/Services/DataEntry/DataEntry";

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Network />
    <Clients />
  </>
);

function App() {
  return (
    <div className="app-wrapper">
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          {/* --- NORMAL NEW ROUTES --- */}
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<TheCompany />} />
          <Route path="/leadership" element={<TheLeadership />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          
          {/* NEW DATA ENTRY ROUTE ADDED HERE */}
          <Route path="/data-entry-operator" element={<DataEntry />} />
          
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bouncer" element={<Bouncer />} />
          <Route path="/pso" element={<PSO />} />
          <Route path="/trained-gunman" element={<TrainedGunman />} />
          <Route path="/security-guards" element={<SecurityGuards />} />

          {/* --- THE GOOGLE SEO FIX (Legacy Redirects) --- */}
          <Route path="/Services.aspx" element={<Navigate to="/" replace />} />
          <Route path="/ContactUs.aspx" element={<Navigate to="/contact" replace />} />
          <Route path="/Clients.aspx" element={<Navigate to="/" replace />} />
          
          {/* Catch-All */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
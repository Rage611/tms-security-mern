import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import
import { Analytics } from "@vercel/analytics/react"
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
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<TheCompany />} />
          <Route path="/leadership" element={<TheLeadership />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bouncer" element={<Bouncer />} />
          <Route path="/pso" element={<PSO />} />
          <Route path="/trained-gunman" element={<TrainedGunman />} />
          <Route path="/security-guards" element={<SecurityGuards />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
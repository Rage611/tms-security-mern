import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter import

/* --- Components --- */
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
import ManpowerServices from './components/NavbarContents/Services/ManPowerServices/ManpowerServices';
import FacilityManagement from './components/NavbarContents/Services/FacilityManagement/FacilityManagement';
import Housekeeping from './components/NavbarContents/Services/Housekeeping/Housekeeping';
import Career from './components/NavbarContents/Career/Career';
import Contact from './components/NavbarContents/Contact/Contact';
/* --- Home Component --- */
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
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<TheCompany />} />
          <Route path="/leadership" element={<TheLeadership />} />
          <Route path="/manpower" element={<ManpowerServices />} />
          <Route path="/facility-management" element={<FacilityManagement />} />
          <Route path="/housekeeping" element={<Housekeeping />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
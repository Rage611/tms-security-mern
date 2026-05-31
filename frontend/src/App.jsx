import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
/* --- Always loaded --- */
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Network from './components/Network/Network';
import Clients from './components/Clients/Clients';

/* --- Lazy loaded page routes --- */
const TheCompany = lazy(() => import('./components/NavbarContents/AboutTMS/TheCompany'));
const TheLeadership = lazy(() => import('./components/NavbarContents/AboutTMS/TheLeadership'));
const FacilityManagement = lazy(() => import('./components/NavbarContents/Services/FacilityManagement/FacilityManagement'));
const Housekeeping = lazy(() => import('./components/NavbarContents/Services/Housekeeping/Housekeeping'));
const DataEntry = lazy(() => import('./components/NavbarContents/Services/DataEntry/DataEntry'));
const Career = lazy(() => import('./components/NavbarContents/Career/Career'));
const Contact = lazy(() => import('./components/NavbarContents/Contact/Contact'));
const Bouncer = lazy(() => import('./components/NavbarContents/Services/ManPowerServices/ManPowerContent/Bouncer/Bouncer'));
const PSO = lazy(() => import('./components/NavbarContents/Services/ManPowerServices/ManPowerContent/PSO/PSO'));
const TrainedGunman = lazy(() => import('./components/NavbarContents/Services/ManPowerServices/ManPowerContent/TrainedGunman/TrainedGunman'));
const SecurityGuards = lazy(() => import('./components/NavbarContents/Services/ManPowerServices/ManPowerContent/SecurityGuard/SecurityGuard'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const Home = () => (
  <>
    <Helmet>
      <title>TMS Security Group | Best Security Services in India & Delhi NCR</title>
      <meta name="description" content="Looking for the best security services? TMS Group provides elite industrial guarding, trained gunmen, and facility management solutions across India." />
      <link rel="canonical" href="https://tmssecurity.in/" />
    </Helmet>
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
        <ErrorBoundary>
          <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#050505' }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<TheCompany />} />
              <Route path="/leadership" element={<TheLeadership />} />
              <Route path="/facility-management" element={<FacilityManagement />} />
              <Route path="/housekeeping" element={<Housekeeping />} />
              <Route path="/data-entry-operators" element={<DataEntry />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bouncer" element={<Bouncer />} />
              <Route path="/pso" element={<PSO />} />
              <Route path="/trained-gunman" element={<TrainedGunman />} />
              <Route path="/security-guards" element={<SecurityGuards />} />

              <Route path="/Services.aspx" element={<Navigate to="/" replace />} />
              <Route path="/ContactUs.aspx" element={<Navigate to="/contact" replace />} />
              <Route path="/Clients.aspx" element={<Navigate to="/" replace />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
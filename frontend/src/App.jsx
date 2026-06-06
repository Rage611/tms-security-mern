import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SEOHead from './components/SEOHead/SEOHead';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Network from './components/Network/Network';
import Clients from './components/Clients/Clients';

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

const RouteLoader = () => (
  <div style={{
    minHeight: '100vh',
    backgroundColor: '#050505',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '24px'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(255, 215, 0, 0.15)',
      borderTopColor: '#ffd700',
      borderRadius: '50%',
      animation: 'routeSpin 0.8s linear infinite'
    }} />
    <style>{`@keyframes routeSpin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const Home = () => (
  <>
    <SEOHead
      title="TMS Security Group | PSARA Licensed Security Services in India & Delhi NCR"
      description="India's premier PSARA-licensed corporate security agency. 500+ guards deployed, ISO 9001:2015 certified. Security guards, facility management, bouncers & armed personnel across Delhi NCR."
      canonical="https://tmssecurity.in/"
    />
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
          <Suspense fallback={<RouteLoader />}>
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
      <FloatingWhatsApp />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
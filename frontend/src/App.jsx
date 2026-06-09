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
const Compliance = lazy(() => import('./components/NavbarContents/AboutTMS/Compliance/Compliance'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const LocationPage = lazy(() => import('./components/LocationPage/LocationPage'));
const LocationsSection = lazy(() => import('./components/LocationsSection/LocationsSection'));

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
    <Suspense fallback={null}>
      <LocationsSection />
    </Suspense>
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
              <Route path="/compliance" element={<Compliance />} />

              <Route
                path="/security-services/delhi"
                element={
                  <LocationPage
                    city="Delhi"
                    state="Delhi NCR"
                    canonicalSlug="delhi"
                    heroImage="/hero-delhi.webp"
                    localKeywords={['security agency Delhi', 'corporate security New Delhi', 'security guards Delhi NCR']}
                    mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.5182412238406!2d77.06984496967594!3d28.62757519847924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d9ed2c7e95%3A0x327bdb98043e6095!2sTMS%20Security%20Services!5e0!3m2!1sen!2sus!4v1774792028883!5m2!1sen!2sus"
                  />
                }
              />
              <Route
                path="/security-services/noida"
                element={
                  <LocationPage
                    city="Noida"
                    state="Uttar Pradesh"
                    canonicalSlug="noida"
                    heroImage="/hero-noida.webp"
                    localKeywords={['security agency Noida', 'corporate security Noida Sector 62', 'security guards Greater Noida']}
                  />
                }
              />
              <Route
                path="/security-services/gurgaon"
                element={
                  <LocationPage
                    city="Gurgaon"
                    state="Haryana"
                    canonicalSlug="gurgaon"
                    heroImage="/hero-gurgaon.webp"
                    localKeywords={['security agency Gurgaon', 'corporate security Gurugram', 'security guards Cyber City']}
                  />
                }
              />
              <Route
                path="/security-services/faridabad"
                element={
                  <LocationPage
                    city="Faridabad"
                    state="Haryana"
                    canonicalSlug="faridabad"
                    heroImage="/hero-faridabad.webp"
                    localKeywords={['security agency Faridabad', 'industrial security Faridabad', 'security guards Ballabhgarh']}
                  />
                }
              />
              <Route
                path="/security-services/greater-noida"
                element={
                  <LocationPage
                    city="Greater Noida"
                    state="Uttar Pradesh"
                    canonicalSlug="greater-noida"
                    heroImage="/hero-greater-noida.webp"
                    localKeywords={['security agency Greater Noida', 'corporate security Noida Expressway', 'security guards Knowledge Park']}
                  />
                }
              />
              <Route
                path="/security-services/ghaziabad"
                element={
                  <LocationPage
                    city="Ghaziabad"
                    state="Uttar Pradesh"
                    canonicalSlug="ghaziabad"
                    heroImage="/hero-ghaziabad.webp"
                    localKeywords={['security agency Ghaziabad', 'warehouse security Ghaziabad', 'security guards Indirapuram']}
                  />
                }
              />

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
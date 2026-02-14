import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Clients from './components/Clients/Clients';
import Network from './components/Network/Network'; // Import the Network section
import './index.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Network />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
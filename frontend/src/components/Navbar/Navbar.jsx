import './Navbar.css';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActive, setMobileActive] = useState(null);
  const [nestedMobileActive, setNestedMobileActive] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1024px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setMobileActive(null);
    setNestedMobileActive(false);
  }, []);

  const handleMainToggle = useCallback((e, menuName) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isMobile) return;
    setMobileActive((prev) => (prev === menuName ? null : menuName));
    setNestedMobileActive(false);
  }, [isMobile]);

  const handleNestedToggle = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isMobile) return;
    setNestedMobileActive((prev) => !prev);
  }, [isMobile]);

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <img src={logo} alt="TMS Logo" className="logo-img" />
            <div className="logo-text">
              <span className="brand-bold">TMS</span>
              <span className="brand-light">Security</span>
            </div>
          </Link>
        </div>

        <ul className={`nav__list ${isOpen ? "active" : ""}`}>
          <li><Link to="/" className="nav__link" onClick={closeMenu}>HOME</Link></li>
            
          <li className="nav-item dropdown">
            <span 
              className="nav__link" 
              onClick={(e) => handleMainToggle(e, 'about')} 
              style={{ cursor: "pointer" }}      
            >
              ABOUT TMS <span className="arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${mobileActive === 'about' ? 'mobile-open' : ''}`}>
              <li><Link to="/company" className="dropdown-link" onClick={closeMenu}>THE COMPANY</Link></li>
              <li><Link to="/leadership" className="dropdown-link" onClick={closeMenu}>THE LEADERSHIP</Link></li>
              <li><Link to="/compliance" className="dropdown-link" onClick={closeMenu}>COMPLIANCE &amp; LICENSES</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <span 
              className="nav__link" 
              onClick={(e) => handleMainToggle(e, 'services')} 
              style={{ cursor: "pointer" }}      
            >
              SERVICES <span className="arrow">▼</span>
            </span>
            <ul className={`dropdown-menu ${mobileActive === 'services' ? 'mobile-open' : ''}`}>
              
              <li className="nested-dropdown">
                <span 
                  className="dropdown-link nested-link" 
                  onClick={handleNestedToggle} 
                  style={{ cursor: 'pointer' }}
                >
                  MANNED GUARDING <span className="arrow-right">▶</span>
                </span>
                
                <ul className={`nested-menu ${nestedMobileActive ? 'mobile-nested-open' : ''}`}>
                  <li><Link to="/security-guards" className="dropdown-link" onClick={closeMenu}>SECURITY GUARDS</Link></li>
                  <li><Link to="/bouncer" className="dropdown-link" onClick={closeMenu}>BOUNCER</Link></li>
                  <li><Link to="/trained-gunman" className="dropdown-link" onClick={closeMenu}>TRAINED GUNMAN</Link></li>
                  <li><Link to="/pso" className="dropdown-link" onClick={closeMenu}>PSO</Link></li>
                </ul>
              </li>

              <li><Link to="/facility-management" className="dropdown-link" onClick={closeMenu}>FACILITY MANAGEMENT</Link></li>        
              <li><Link to="/housekeeping" className="dropdown-link" onClick={closeMenu}>HOUSE KEEPING</Link></li>
              <li><Link to="/data-entry-operators" className="dropdown-link" onClick={closeMenu}>DATA ENTRY OPERATORS</Link></li>
            </ul>
          </li>

          <li><Link to="/career" className="nav__link" onClick={closeMenu}>CAREER</Link></li>
            
          <li>
            <Link to="/contact" className="nav__link btn-primary" onClick={closeMenu}>CONTACT US</Link>
          </li>
        </ul>

        <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
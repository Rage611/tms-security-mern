import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Track ONLY mobile click states
  const [mobileActive, setMobileActive] = useState(null);
  const [nestedMobileActive, setNestedMobileActive] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileActive(null);
    setNestedMobileActive(false);
  };

  // Mobile Click Handler for "ABOUT TMS" and "SERVICES"
  const handleMainToggle = (e, menuName) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth <= 1024) {
      setMobileActive(mobileActive === menuName ? null : menuName);
      setNestedMobileActive(false); // Reset nested menu if switching main menus
    }
  };

  // Mobile Click Handler for "MANNED GUARDING"
  const handleNestedToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.innerWidth <= 1024) {
      setNestedMobileActive(!nestedMobileActive);
    }
  };

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
            
          {/* ABOUT TMS */}
          <li className="nav-item dropdown">
            <a 
              href="#" 
              className="nav__link" 
              onClick={(e) => handleMainToggle(e, 'about')} 
              style={{ cursor: "default" }}      
            >
              ABOUT TMS <span className="arrow">▼</span>
            </a>
            {/* Class added ONLY on mobile click */}
            <ul className={`dropdown-menu ${mobileActive === 'about' ? 'mobile-open' : ''}`}>
              <li><Link to="/company" className="dropdown-link" onClick={closeMenu}>THE COMPANY</Link></li>
              <li><Link to="/leadership" className="dropdown-link" onClick={closeMenu}>THE LEADERSHIP</Link></li>
            </ul>
          </li>

          {/* SERVICES */}
          <li className="nav-item dropdown">
            <a 
              href="#" 
              className="nav__link" 
              onClick={(e) => handleMainToggle(e, 'services')} 
              style={{ cursor: "default" }}      
            >
              SERVICES <span className="arrow">▼</span>
            </a>
            {/* Class added ONLY on mobile click */}
            <ul className={`dropdown-menu ${mobileActive === 'services' ? 'mobile-open' : ''}`}>
              
              {/* MANNED GUARDING */}
              <li className="nested-dropdown">
                <a 
                  href="#" 
                  className="dropdown-link nested-link" 
                  onClick={handleNestedToggle} 
                  style={{ cursor: 'default' }}
                >
                  MANNED GUARDING <span className="arrow-right">▶</span>
                </a>
                
                {/* Class added ONLY on mobile click */}
                <ul className={`nested-menu ${nestedMobileActive ? 'mobile-nested-open' : ''}`}>
                  <li><Link to="/security-guards" className="dropdown-link" onClick={closeMenu}>SECURITY GUARDS</Link></li>
                  <li><Link to="/bouncer" className="dropdown-link" onClick={closeMenu}>BOUNCER</Link></li>
                  <li><Link to="/trained-gunman" className="dropdown-link" onClick={closeMenu}>TRAINED GUNMAN</Link></li>
                  <li><Link to="/pso" className="dropdown-link" onClick={closeMenu}>PSO</Link></li>
                </ul>
              </li>

              <li><Link to="/facility-management" className="dropdown-link" onClick={closeMenu}>FACILITY MANAGEMENT</Link></li>        
              <li><Link to="/housekeeping" className="dropdown-link" onClick={closeMenu}>HOUSE KEEPING</Link></li>
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
import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu when a sub-link is clicked
  const closeMenu = () => setIsOpen(false);

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
            
            {/* --- FIXED ABOUT TMS SECTION --- */}
            <li className="nav-item dropdown">
                <a 
                    href="#" 
                    className="nav__link" 
                    onClick={(e) => e.preventDefault()} /* Stops page jump */
                    style={{ cursor: "default" }}       /* Shows it's a label */
                >
                    ABOUT TMS <span className="arrow">▼</span>
                </a>
                <ul className="dropdown-menu">
                    <li><Link to="/company" className="dropdown-link" onClick={closeMenu}>THE COMPANY</Link></li>
                    <li><Link to="/leadership" className="dropdown-link" onClick={closeMenu}>THE LEADERSHIP</Link></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a 
                    href="#" 
                    className="nav__link" 
                    onClick={(e) => e.preventDefault()} /* Stops page jump */
                    style={{ cursor: "default" }}       /* Shows it's a label */
                >
                    SERVICES <span className="arrow">▼</span>
                </a>
                <ul className="dropdown-menu">
                    <li><Link to="/manpower" className="dropdown-link" onClick={closeMenu}>MANNED GUARDING</Link></li>
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
import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="TMS Logo" className="logo-img" />
            </Link>
        </div>

        <ul className={`nav__list ${isOpen ? "active" : ""}`}>
            <li><Link to="/" className="nav__link">HOME</Link></li>
            <li className="nav-item dropdown">
                <Link to="/about" className="nav__link">
                    ABOUT TMS <span className="arrow">▼</span>
                </Link>
                <ul className="dropdown-menu">
                    <li><Link to="/company" className="dropdown-link">THE COMPANY</Link></li>
                    <li><Link to="/leadership" className="dropdown-link">THE LEADERSHIP</Link></li>
                    <li><Link to="/mission" className="dropdown-link">VISION & MISSION</Link></li>
                    <li><Link to="/awards" className="dropdown-link">AWARDS</Link></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
    <Link to="/services" className="nav__link">
        SERVICES <span className="arrow">▼</span>
    </Link>
    <ul className="dropdown-menu">
        <li><Link to="/guarding" className="dropdown-link">MANNED GUARDING</Link></li>
        <li><Link to="/electronic-security" className="dropdown-link">ELECTRONIC SECURITY</Link></li>
        <li><Link to="/cash-logistics" className="dropdown-link">CASH LOGISTICS</Link></li>
        <li><Link to="/facility-management" className="dropdown-link">FACILITY MANAGEMENT</Link></li>
        <li><Link to="/executive-protection" className="dropdown-link">EXECUTIVE PROTECTION</Link></li>
        <li><Link to="/housekeeping" className="dropdown-link">HOUSE KEEPING</Link></li>
    </ul>
</li>
            <li><Link to="/career" className="nav__link">CAREER</Link></li>
            <li>
                <Link to="/contact" className="nav__link btn-primary">CONTACT US</Link>
            </li>
        </ul>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
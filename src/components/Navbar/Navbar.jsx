import './Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="TMS Logo" className="logo" />
            </Link>
        </div>

        {/* UPDATED TO MATCH YOUR CSS CLASSES */}
        <ul className={`nav__list ${isOpen ? "active" : ""}`}>
            <li><Link to="/" className="nav__link">HOME</Link></li>
            <li><Link to="/about" className="nav__link">ABOUT TMS</Link></li>
            <li><Link to="/services" className="nav__link">SERVICES</Link></li>
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
    </nav>
  );
};

export default Navbar;
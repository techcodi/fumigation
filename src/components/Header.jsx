import React, { useState } from "react";

const Header = ({ setShowBookingForm, setIsMenuOpen, isMenuOpen }) => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src="./logo2.png" className="logo-icon" />
          <span className="logo-text">CYPEX Pest Control</span>
        </div>
        <nav className="desktop-nav">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#process" className="nav-link">
            Our Process
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <button
            onClick={() => setShowBookingForm(true)}
            className="nav-button"
          >
            Book Now
          </button>
          <a href="tel:1-800-SAFEGUARD" className="nav-phone">
            <i className="fas fa-phone-alt phone-icon"></i>
            +234 9047180219
          </a>
        </nav>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="fas fa-bars menu-icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;

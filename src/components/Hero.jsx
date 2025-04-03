import React from "react";

const Hero = ({ setShowBookingForm }) => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Professional Pest Control Solutions for Your Peace of Mind
          </h1>
          <p className="hero-description">
            Industry-leading fumigation services with 100% satisfaction
            guarantee. Protect your space with our eco-friendly solutions.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => setShowBookingForm(true)}
              className="hero-primary-button"
            >
              Book Service Now
            </button>
            <a href="#services" className="hero-secondary-button">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

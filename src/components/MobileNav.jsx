function MobileNav({ setShowBookingForm }) {
  return (
    <div className="mobile-menu-overlay">
      <nav className="mobile-menu">
        <a href="#services" className="mobile-menu-link">
          Services
        </a>
        <a href="#process" className="mobile-menu-link">
          Our Process
        </a>
        <a href="#about" className="mobile-menu-link">
          About Us
        </a>
        <button
          onClick={() => setShowBookingForm(true)}
          className="mobile-menu-button"
        >
          Book Now
        </button>
      </nav>
    </div>
  );
}

export default MobileNav;

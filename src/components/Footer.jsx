// Import CSS

const Footer = ({ setShowContactForm }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo-container">
              <img src="./logo2.png" className="footer-logo-icon" />
            </div>
            <p className="footer-about-text">
              Professional pest control services you can trust.
            </p>
            <div className="security-info">
              <div className="security-item">
                <i className="fas fa-lock security-icon"></i>
                <span className="security-text">SSL Secured</span>
              </div>
              <div className="security-item">
                <i className="fas fa-shield-alt security-icon"></i>
                <span className="security-text">256-bit Encryption</span>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="footer-link">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowContactForm(true);
                  }}
                  className="footer-link"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-list">
              <li className="contact-item">
                <i className="fas fa-phone-alt contact-icon"></i>
                +234 9047180219
              </li>
              <li className="contact-item">
                <i className="fas fa-envelope contact-icon"></i>
                cypexcontrol@gmail.com
              </li>
              <li className="contact-item">
                <i className="fas fa-map-marker-alt contact-icon"></i>
                117,Odunsi Street, Bariga,Lagos
              </li>
            </ul>
          </div>
          {/* <div className="footer-payments">
            <h4 className="footer-title">We Accept</h4>
            <div className="payment-icons">
              <i className="fab fa-cc-visa payment-icon"></i>
              <i className="fab fa-cc-mastercard payment-icon"></i>
              <i className="fab fa-cc-amex payment-icon"></i>
              <i className="fab fa-cc-paypal payment-icon"></i>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 CYPEX Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

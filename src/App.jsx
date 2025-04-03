import React, { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/ChatWidget";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
      setShowContactForm(false);
    }, 1000);
  };

  return (
    <div className="app-container">
      {isLoading && <Loader />}
      <Header
        setShowBookingForm={setShowBookingForm}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      {isMenuOpen && <MobileNav setShowBookingForm={setShowBookingForm} />}
      <Hero setShowBookingForm={setShowBookingForm} />
      <Services setShowBookingForm={setShowBookingForm} />
      <Process />
      <Stats isLoading={isLoading} />
      <About
        setShowBookingForm={setShowBookingForm}
        setShowContactForm={setShowContactForm}
      />
      <Testimonials />
      {showBookingForm && (
        <BookingForm
          setIsLoading={setIsLoading}
          setShowSuccessModal={setShowSuccessModal}
          setShowBookingForm={setShowBookingForm}
        />
      )}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal-container">
            <i className="fas fa-check-circle success-icon"></i>
            <h3 className="success-title">Booking Confirmed!</h3>
            <p className="success-message">
              We'll contact you shortly to confirm your appointment details.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="success-button"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer setShowContactForm={setShowContactForm} />
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="back-to-top-button"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      {showContactForm && (
        <ContactForm
          handleContactSubmit={handleContactSubmit}
          setShowContactForm={setShowContactForm}
        />
      )}
      <ChatWidget showBackToTop={showBackToTop} />
    </div>
  );
};

export default App;

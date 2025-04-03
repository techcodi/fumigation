import React, { useState } from "react";

const ContactForm = ({ handleContactSubmit, setShowContactForm }) => {
  const [isEmergency, setIsEmergency] = useState(false);
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">Contact Us</h3>
          <button
            onClick={() => setShowContactForm(false)}
            className="modal-close-button"
          >
            <i className="fas fa-times close-icon"></i>
          </button>
        </div>
        <form onSubmit={handleContactSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              rows={4}
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
          <div className="form-checkbox-group">
            <input
              type="checkbox"
              id="emergency"
              checked={isEmergency}
              onChange={() => setIsEmergency(!isEmergency)}
              className="checkbox-input"
            />
            <label htmlFor="emergency" className="checkbox-label">
              This is an emergency (24/7 response)
            </label>
          </div>
          <button type="submit" className="form-submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

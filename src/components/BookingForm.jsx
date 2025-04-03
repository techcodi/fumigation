import React, { useState } from "react";

const BookingForm = ({
  setIsLoading,
  setShowSuccessModal,
  setShowBookingForm,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [propertySize, setPropertySize] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
      setShowBookingForm(false);
    }, 1000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">Book Your Service</h3>
          <button
            onClick={() => setShowBookingForm(false)}
            className="modal-close-button"
          >
            <i className="fas fa-times close-icon"></i>
          </button>
        </div>
        <form onSubmit={handleBooking} className="modal-form">
          <div className="form-group">
            <label className="form-label">Service Type</label>
            <div className="select-container">
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="form-select"
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Fumigation</option>
                <option value="commercial">Commercial Solutions</option>
                <option value="emergency">Emergency Service</option>
              </select>
              <i className="fas fa-chevron-down select-icon"></i>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Preferred Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="form-input"
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Property Size (sq ft)</label>
            <input
              type="text"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
              className="form-input"
              placeholder="e.g., 1500"
              required
            />
          </div>
          <button type="submit" className="form-submit-button">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

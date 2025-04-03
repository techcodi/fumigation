import React from "react";

const Services = ({ setShowBookingForm }) => {
  const services = [
    {
      title: "Residential Fumigation",
      icon: "home",
      description: "Complete home protection against all types of pests",
      price: "From $299",
    },
    {
      title: "Commercial Solutions",
      icon: "building",
      description:
        "Our services ensure that your office building is always clean, healthy, and safe environment",
      price: "Custom Quote",
    },
    {
      title: "Emergency Service",
      icon: "bolt",
      description: "24/7 rapid response for urgent pest situations",
      price: "From $399",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={`fas fa-${service.icon} service-icon`}></i>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-price">{service.price}</p>
              <button
                onClick={() => setShowBookingForm(true)}
                className="service-button"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

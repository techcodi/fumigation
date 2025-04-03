import React from "react";

const About = ({ setShowBookingForm, setShowContactForm }) => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">About CYPEX Pest Control</h2>
            <p className="about-text">
              At CYPEX Pest Control, we believe your home and business deserve
              to be pest-free, safe, and comfortable. With years of expertise in
              professional fumigation and pest control, we provide reliable,
              eco-friendly, and effective solutions to eliminate pests while
              ensuring the health and safety of your loved ones.
            </p>
            <p className="about-text">
              Our team of certified exterminators uses cutting-edge technology
              and industry-approved treatments to tackle infestations of all
              kinds—termites, rodents, cockroaches, bed bugs, and more. Whether
              it's a residential home, office space, or industrial facility, we
              tailor our services to meet your unique needs with precision and
              care.
            </p>
            <p className="about-text">
              At CYPEX, we don't just eliminate pests—we safeguard your space.
              With our guaranteed results, affordable pricing, and exceptional
              customer service, you can trust us to keep your environment clean,
              hygienic, and pest-free.
            </p>
            <div className="about-tags">
              <div className="about-tag">
                <i className="fas fa-leaf tag-icon"></i>
                Eco-Friendly Solutions
              </div>
              <div className="about-tag">
                <i className="fas fa-certificate tag-icon"></i>
                Certified Technicians
              </div>
              <div className="about-tag">
                <i className="fas fa-shield-alt tag-icon"></i>
                Safe for Families & Pets
              </div>
            </div>
            <button
              onClick={() => setShowBookingForm(true)}
              className="about-button"
            >
              Schedule a Consultation
            </button>
          </div>
          <div className="about-image-container">
            <img
              src="https://public.readdy.ai/ai/img_res/78028ea047a1ab94a86d058f7b02ff1b.jpg"
              alt="SafeGuard Pest Control Team"
              className="about-image"
            />
          </div>
        </div>

        <div className="features-section">
          <h3 className="features-title">Why Choose CYPEX?</h3>
          <div className="features-grid">
            {[
              {
                title: "Experienced Team",
                description:
                  "Our technicians have an average of 5+ years in the pest control industry with continuous training on the latest techniques.",
                icon: "user-tie",
              },
              {
                title: "Guaranteed Results",
                description:
                  "We stand behind our work with a 100% satisfaction guarantee. If pests return, so do we – at no additional cost.",
                icon: "thumbs-up",
              },
              {
                title: "Customized Approach",
                description:
                  "Every property is unique. We develop tailored solutions based on your specific pest issues and property characteristics.",
                icon: "tools",
              },
            ].map((feature, index) => (
              <div key={index} className="feature-card">
                <i className={`fas fa-${feature.icon} feature-icon`}></i>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Ready to get started?</h3>
              <p className="cta-description">
                Contact us today for a free inspection and quote.
              </p>
            </div>
            <div className="cta-buttons">
              <button
                onClick={() => setShowContactForm(true)}
                className="cta-primary-button"
              >
                Contact Us
              </button>
              <a href="tel:1-800-SAFEGUARD" className="cta-secondary-button">
                <i className="fas fa-phone-alt phone-icon"></i>
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="satisfaction-section">
          <h3 className="satisfaction-title">Customer Satisfaction</h3>
          <div className="satisfaction-content">
            <div id="satisfaction-chart" className="satisfaction-chart"></div>
            <div className="satisfaction-text">
              <h4 className="satisfaction-subtitle">
                Our Commitment to Excellence
              </h4>
              <p className="satisfaction-description">
                At SafeGuard, customer satisfaction is our top priority. Our 95%
                satisfaction rate reflects our dedication to providing
                exceptional service and effective pest control solutions.
              </p>
              <ul className="satisfaction-list">
                {[
                  "Prompt and reliable service",
                  "Thorough and detailed inspections",
                  "Clear communication throughout the process",
                  "Follow-up visits to ensure complete pest elimination",
                  "Transparent pricing with no hidden fees",
                ].map((point, index) => (
                  <li key={index} className="satisfaction-list-item">
                    <i className="fas fa-check-circle list-icon"></i>
                    <span className="list-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

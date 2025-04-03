function Process() {
  const process = [
    {
      step: 1,
      title: "Inspection",
      description: "Thorough assessment of your property",
      icon: "search",
    },
    {
      step: 2,
      title: "Planning",
      description: "Customized treatment strategy",
      icon: "clipboard-list",
    },
    {
      step: 3,
      title: "Treatment",
      description: "Professional fumigation service",
      icon: "spray-can",
    },
    {
      step: 4,
      title: "Follow-up",
      description: "Ensure complete satisfaction",
      icon: "check-circle",
    },
  ];
  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <h2 className="section-title">Our Process</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-icon-container">
                <i className={`fas fa-${step.icon} process-icon`}></i>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;

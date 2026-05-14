import "./Services.css";

const services = [
  {
    number: "01",
    title: "Central HVAC Ducting",
    description:
      "Complete ducting solutions for commercial buildings, factories, offices, and industrial spaces with clean layout planning.",
  },
  {
    number: "02",
    title: "Duct Fabrication",
    description:
      "High-quality duct fabrication using durable materials, accurate measurements, and site-specific installation requirements.",
  },
  {
    number: "03",
    title: "Ventilation Systems",
    description:
      "Fresh air, exhaust, and ventilation systems designed to improve airflow, safety, and indoor air quality.",
  },
  {
    number: "04",
    title: "Installation & Maintenance",
    description:
      "Professional installation, inspection, repair, and maintenance support for long-term HVAC system performance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-block">
            <span className="services-eyebrow">What We Do</span>

            <h2 className="services-title">
              End-to-End HVAC Ducting Services
              <br />
              Built for Performance
            </h2>
          </div>

          <p className="services-description">
            From planning to installation, we deliver reliable ducting solutions
            with premium finishing, accurate airflow, and professional site
            execution.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-line"></span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Enquire Now
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
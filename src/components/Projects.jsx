import "./Projects.css";

const projects = [
  {
    category: "Commercial",
    title: "Corporate Office HVAC Ducting",
    location: "Hyderabad",
    description:
      "Complete central ducting installation with fresh air ventilation, insulation, and airflow balancing for a modern office space.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Industrial",
    title: "Factory Ventilation System",
    location: "Visakhapatnam",
    description:
      "Industrial ventilation ducting designed for high airflow performance, heat control, and long-term durability.",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Retail",
    title: "Shopping Complex Cooling Ducts",
    location: "Vijayawada",
    description:
      "Multi-zone ducting system planned for consistent cooling, clean finishing, and efficient air distribution.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Residential",
    title: "Apartment HVAC Ducting Setup",
    location: "Bangalore",
    description:
      "Clean ducting layout for apartment blocks with balanced airflow, neat installation, and reliable cooling performance.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-title-block">
            <span className="projects-eyebrow">Recent Projects</span>

            <h2 className="projects-title">
              Quality HVAC Ducting Work
              <br />
              Delivered Across Sites
            </h2>
          </div>

          <p className="projects-description">
            Our recent projects show our focus on clean execution, strong
            planning, premium finishing, and reliable HVAC ducting performance.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-content">
                <span className="project-location">{project.location}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact" className="project-link">
                  Discuss Similar Project
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
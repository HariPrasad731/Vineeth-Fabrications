import heroImage from "../assets/Hero_Image.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Premium HVAC Ducting Solutions
          </div>

          <h1 className="hero-title">
            Engineering Clean Airflow for Modern Buildings
          </h1>

          <p className="hero-description">
            We design, fabricate, and install high-quality central HVAC ducting
            systems for commercial, industrial, and large-scale building
            projects with clean finishing and reliable performance.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-primary-btn">
              View Projects
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Get Free Quote
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>

            <div className="hero-stat">
              <h3>120+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="hero-stat">
              <h3>24/7</h3>
              <p>Service Support</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-person-wrap">
            <div className="hero-circle-glow"></div>

            <img
              src={heroImage}
              alt="HVAC ducting engineer"
              className="hero-person-image"
            />

            <div className="hero-floating-card hero-floating-top">
              <span>Certified Work</span>
              <strong>Premium Quality</strong>
            </div>

            <div className="hero-floating-card hero-floating-bottom">
              <span>Project Support</span>
              <strong>24/7 Available</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
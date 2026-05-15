import "./Contact.css";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L9 10.69a16 16 0 0 0 4.31 4.31l1.26-1.26a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const contactDetails = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: "vineethfabrications@gmail.com",
    href: "mailto:vineethfabrications@example.com",
  },
  {
    icon: <LocationIcon />,
    label: "Area",
    value: "Hyderabad & Nearby Sites",
    href: "#contact",
  },
];

const projectTypes = [
  "Central HVAC Ducting",
  "Duct Fabrication",
  "Ventilation System",
  "Maintenance / Service",
];

const orbitImages = [
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-orbit">
          <div className="orbit-ring orbit-ring-one"></div>
          <div className="orbit-ring orbit-ring-two"></div>

          <div className="orbit-center">
            <span>Let’s Connect</span>
            <strong>Build Your Project With Us</strong>
            <p>We’re ready to work together</p>
          </div>

          {orbitImages.map((image, index) => (
            <div className={`orbit-item orbit-item-${index + 1}`} key={image}>
              <img src={image} alt={`HVAC work preview ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="contact-content">
          <span className="contact-eyebrow">Get Quote</span>

          <h2 className="contact-title">Let’s Plan Your HVAC Ducting Work</h2>

          <p className="contact-description">
            Share your site details and requirement. Our team will review your
            project and contact you with the right solution.
          </p>

          <div className="contact-info-list">
            {contactDetails.map((item) => (
              <a href={item.href} className="contact-info-item" key={item.label}>
                <span className="contact-icon">{item.icon}</span>

                <span className="contact-info-text">
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>

          <form className="contact-form">
            <div className="form-row">
              <label>
                Full Name
                <input type="text" placeholder="Enter your name" />
              </label>

              <label>
                Phone Number
                <input type="tel" placeholder="+91 XXXXX XXXXX" />
              </label>
            </div>

            <div className="form-row">
              <label>
                Project Type
                <select defaultValue="">
                  <option value="" disabled>
                    Select service
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>

              <label>
                Site Location
                <input type="text" placeholder="City / Area" />
              </label>
            </div>

            <label>
              Requirement
              <textarea
                rows="3"
                placeholder="Tell us about your project requirement..."
              ></textarea>
            </label>

            <button type="submit">Request Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
}
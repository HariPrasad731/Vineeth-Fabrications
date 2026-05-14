import { SnowIcon } from "./Icons.jsx";
import "./Footer.css";

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const ServiceIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
    <path d="M8 4v16" />
    <path d="M16 4v16" />
  </svg>
);

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

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Central HVAC Ducting",
  "Duct Fabrication",
  "Ventilation Systems",
  "Maintenance Support",
];

const contactItems = [
  {
    icon: <PhoneIcon />,
    label: "+91 99999 99999",
    href: "tel:+919999999999",
  },
  {
    icon: <MailIcon />,
    label: "vineethfabrications@example.com",
    href: "mailto:vineethfabrications@example.com",
  },
  {
    icon: <LocationIcon />,
    label: "Hyderabad & Nearby Sites",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          <a href="#home" className="footer-logo" aria-label="Back to home">
            <SnowIcon className="footer-logo-icon" />
          </a>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <div className="footer-links">
              {quickLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  <span className="footer-small-icon">
                    <LinkIcon />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h3>Services</h3>

            <div className="footer-links">
              {services.map((service) => (
                <span key={service}>
                  <span className="footer-small-icon">
                    <ServiceIcon />
                  </span>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-column footer-contact-column">
            <h3>Contact</h3>

            <div className="footer-contact">
              {contactItems.map((item) =>
                item.href ? (
                  <a href={item.href} key={item.label}>
                    <span className="footer-small-icon">{item.icon}</span>
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label}>
                    <span className="footer-small-icon">{item.icon}</span>
                    {item.label}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Vineeth Fabrications. All rights reserved.</p>
          <span>Central Ducting Experts</span>
        </div>
      </div>
    </footer>
  );
}
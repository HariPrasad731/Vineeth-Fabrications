import { useState } from "react";
import { CloseIcon, MenuIcon, SnowIcon } from "./Icons.jsx";
import "./Header.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="premium-header">
      <nav className="premium-navbar">
        <a href="#home" onClick={closeMenu} className="brand">
          <span className="brand-icon">
            <SnowIcon className="icon-md" />
          </span>

          <span className="brand-copy">
            <span className="brand-title">Vineeth Fabrications</span>
            <span className="brand-subtitle">Central Ducting Experts</span>
          </span>
        </a>

        <div className="desktop-nav">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className="desktop-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="desktop-actions">
          <a href="#contact" className="quote-button">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="menu-button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon className="icon-sm" /> : <MenuIcon className="icon-sm" />}
        </button>
      </nav>

      <div className={`mobile-menu-wrap ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="mobile-link">
              {link.label}
            </a>
          ))}

          <a href="#contact" onClick={closeMenu} className="mobile-quote-button">
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}

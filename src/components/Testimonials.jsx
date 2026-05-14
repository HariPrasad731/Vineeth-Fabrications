import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    initials: "RK",
    role: "Function Hall Owner",
    rating: 5,
    feedback:
      "The ducting work was completed neatly and on time. The airflow is balanced and the finishing quality is very good.",
  },
  {
    id: 2,
    name: "Mahesh Reddy",
    initials: "MR",
    role: "Theatre Project Contractor",
    rating: 5,
    feedback:
      "The team handled the site work professionally. They understood the requirement and completed the ducting with clean execution.",
  },
  {
    id: 3,
    name: "Srinivas Rao",
    initials: "SR",
    role: "Commercial Building Client",
    rating: 5,
    feedback:
      "Good team coordination and strong practical knowledge. The installation work was clean, reliable, and well managed.",
  },
  {
    id: 4,
    name: "Kiran Kumar",
    initials: "KK",
    role: "Interior Contractor",
    rating: 5,
    feedback:
      "They coordinated well with our interior team and completed the ducting without disturbing the finishing schedule.",
  },
  {
    id: 5,
    name: "Prasad Varma",
    initials: "PV",
    role: "Business Owner",
    rating: 5,
    feedback:
      "The team gave proper suggestions before starting work and delivered a clean, professional HVAC ducting setup.",
  },
  {
    id: 6,
    name: "Naveen Rao",
    initials: "NR",
    role: "Site Engineer",
    rating: 5,
    feedback:
      "Their practical site knowledge helped us complete the HVAC ducting work smoothly with good finishing.",
  },
];

export default function Testimonials() {
  const [activeClient, setActiveClient] = useState(testimonials[0]);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">Client Trust</span>

          <h2 className="testimonials-title">What Our Clients Say</h2>

          <p className="testimonials-description">
            Our clients value our clean execution, practical site knowledge, and
            reliable HVAC ducting support.
          </p>
        </div>

        <div className="testimonials-stage">
          <div className="testimonial-avatar-cloud">
            {testimonials.map((client, index) => (
              <button
                key={client.id}
                type="button"
                className={`testimonial-avatar avatar-position-${index + 1} ${
                  activeClient.id === client.id ? "active" : ""
                }`}
                onClick={() => setActiveClient(client)}
                aria-label={`Show testimonial from ${client.name}`}
              >
                {client.initials}
              </button>
            ))}
          </div>

          <div className="testimonial-center">
            <div className="testimonial-main-avatar">
              {activeClient.initials}
            </div>

            <div className="testimonial-quote-mark">“</div>

            <p className="testimonial-feedback">{activeClient.feedback}</p>

            <div className="testimonial-author">
              <h3>{activeClient.name}</h3>
              <span>{activeClient.role}</span>

              <div className="testimonial-stars">
                {Array.from({ length: activeClient.rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
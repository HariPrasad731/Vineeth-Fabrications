import { useState } from "react";
import "./Team.css";

const teamMembers = [
  {
    name: "A Vineeth",
    initials: "AV",
    role: "Manager",
    experience: "16+ Years Experience",
    shortInfo:
      "Leads the team and works along with workers on-site to maintain quality execution.",
    details:
      "A Vineeth has 16+ years of experience in HVAC ducting and fabrication works. He has handled many successful projects including function halls, theatres, commercial buildings, industrial spaces, and custom ducting works. He manages site planning, team coordination, material execution, finishing quality, and final project checks.",
    skills: [
      "Project management",
      "Site supervision",
      "HVAC ducting planning",
      "Function halls",
      "Theatres",
      "Commercial projects",
      "Team coordination",
    ],
  },
  {
    name: "P Somesh",
    initials: "PS",
    role: "Senior HVAC Worker",
    experience: "10+ Years Experience",
    shortInfo:
      "Experienced ducting worker with strong technical skills and international work exposure.",
    details:
      "P Somesh has 10+ years of experience in HVAC ducting work. Out of these 10 years, he worked for 4 years in Belgium, gaining international-level experience in ducting, installation, and finishing work. He brings strong discipline, practical knowledge, and quality workmanship to every project.",
    skills: [
      "HVAC installation",
      "Ducting execution",
      "4 years Belgium experience",
      "Site finishing",
      "Technical workmanship",
      "Team support",
    ],
  },
  {
    name: "K Praveen",
    initials: "KP",
    role: "HVAC Technician",
    experience: "6+ Years Experience",
    shortInfo:
      "Good hands-on worker with Hyderabad HVAC experience and reliable site execution skills.",
    details:
      "K Praveen has 6+ years of experience in HVAC ducting and installation work. He previously worked in Hyderabad at Mahadev HVAC and is now working here with the team. He is known as a good worker with strong practical knowledge in duct installation, site support, and maintenance-related work.",
    skills: [
      "Duct installation",
      "Hyderabad site experience",
      "Worked at Mahadev HVAC",
      "Maintenance support",
      "Reliable execution",
      "On-site support",
    ],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <div className="team-title-block">
            <span className="team-eyebrow">Our Team</span>

            <h2 className="team-title">
              Experienced Hands Behind
              <br />
              Every Quality Project
            </h2>
          </div>

          <p className="team-description">
            Our team combines field experience, site discipline, and practical
            execution to deliver reliable HVAC ducting and fabrication work.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-image-wrap">
                <div className="team-placeholder">
                  <span>{member.initials}</span>
                </div>

                <button
                  type="button"
                  className="team-details-btn"
                  onClick={() => setSelectedMember(member)}
                >
                  View Details
                </button>
              </div>

              <div className="team-content">
                <span className="team-experience">{member.experience}</span>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-short-info">{member.shortInfo}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div
            className="team-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="team-modal-close"
              onClick={closeModal}
              aria-label="Close team member details"
            >
              ×
            </button>

            <div className="team-modal-grid">
              <div className="team-modal-image-wrap">
                <div className="team-modal-placeholder">
                  <span>{selectedMember.initials}</span>
                </div>
              </div>

              <div className="team-modal-content">
                <span className="team-modal-eyebrow">
                  {selectedMember.role}
                </span>

                <h3>{selectedMember.name}</h3>
                <strong>{selectedMember.experience}</strong>
                <p>{selectedMember.details}</p>

                <div className="team-skills">
                  {selectedMember.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
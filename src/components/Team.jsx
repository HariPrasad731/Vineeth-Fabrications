import { useState } from "react";
import "./Team.css";

import someshImage from "../assets/Somesh.png";
import praveenImage from "../assets/Praveen.png";

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
    image: someshImage,
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
    image: praveenImage,
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
          <span className="team-eyebrow">Our Team</span>

          <h2 className="team-title">Meet The Team</h2>

          <p className="team-description">
            Experienced professionals behind our HVAC ducting, fabrication, and
            on-site project execution.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <button
              type="button"
              className="team-profile"
              key={member.name}
              onClick={() => setSelectedMember(member)}
              aria-label={`View details of ${member.name}`}
            >
              <div className="team-circle">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                ) : (
                  <span className="team-initials">{member.initials}</span>
                )}
              </div>

              <h3>{member.name}</h3>
              <p>{member.role}</p>

              <span className="team-view-text">View Details</span>
            </button>
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
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="team-modal-image"
                  />
                ) : (
                  <div className="team-modal-placeholder">
                    <span>{selectedMember.initials}</span>
                  </div>
                )}
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
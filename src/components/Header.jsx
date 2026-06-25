import React from 'react';
export default function Header({ profile }) {
  return (
    <header className="topbar">
      <a className="identity" href="#home" aria-label="Go to home section">
        <span className="identity-mark">{profile.initials}</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <nav className="nav" aria-label="Page navigation">
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="download-small" href={profile.cvFile} download="Mohamed_Mahmoud_Hassan_CV.pdf">
        Download CV
      </a>
    </header>
  );
}

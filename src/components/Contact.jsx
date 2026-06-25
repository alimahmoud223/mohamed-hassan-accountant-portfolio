import React from 'react';
export default function Contact({ profile }) {
  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="contact-panel reveal">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>For accounting support, reconciliation follow-up, and inventory reporting.</h2>
          <p>Available contact details are limited to the email and phone number shown here.</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a className="primary-action" href={profile.cvFile} download="Mohamed_Mahmoud_Hassan_CV.pdf">Download CV PDF</a>
        </div>
      </div>
    </section>
  );
}

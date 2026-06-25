import React from 'react';
export default function Education({ education, certifications }) {
  return (
    <section className="section-wrap education-section">
      <article className="education-card reveal">
        <p className="section-kicker">Education</p>
        <h2>{education.degree}</h2>
        <p>{education.school}</p>
        <strong>{education.year}</strong>
      </article>

      <article className="certification-card reveal delay">
        <p className="section-kicker">Certifications & training</p>
        <ul>
          {certifications.map((cert) => <li key={cert}>{cert}</li>)}
        </ul>
      </article>
    </section>
  );
}

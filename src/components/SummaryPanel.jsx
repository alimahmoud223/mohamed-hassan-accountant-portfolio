import React from 'react';
export default function SummaryPanel({ profile }) {
  return (
    <section id="profile" className="section-wrap summary-grid">
      <article className="profile-note reveal">
        <p className="section-kicker">Professional profile</p>
        <h2>Accurate day-to-day accounting work with clear reporting.</h2>
        <p>{profile.summary}</p>
      </article>

      <div className="impact-grid">
        {profile.impact.map((item, index) => (
          <article className="impact-card reveal" style={{ '--delay': `${index * 80}ms` }} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

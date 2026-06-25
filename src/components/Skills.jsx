import React from 'react';
export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-wrap section-block">
      <div className="section-heading">
        <p className="section-kicker">Core skills</p>
        <h2>Skills are grouped clearly so the accounting value is easy to understand.</h2>
      </div>
      <div className="skills-board">
        {skills.map((skill, index) => (
          <article className="skill-tile reveal" style={{ '--delay': `${index * 35}ms` }} key={skill.title}>
            <small>{skill.group}</small>
            <strong>{skill.title}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

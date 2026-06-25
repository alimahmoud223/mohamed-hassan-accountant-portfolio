import React from 'react';
export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-wrap section-block">
      <div className="section-heading wide">
        <p className="section-kicker">Work experience</p>
        <h2>Real accounting experience across inventory, receivables, reconciliations, and reporting.</h2>
      </div>

      <div className="experience-stack">
        {experience.map((job, index) => (
          <article className="experience-card reveal" key={`${job.role}-${job.company}`}>
            <div className="experience-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="experience-main">
              <div className="experience-head">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>
                <time>{job.period}</time>
              </div>
              <p className="focus-line">{job.focus}</p>
              <ul>
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

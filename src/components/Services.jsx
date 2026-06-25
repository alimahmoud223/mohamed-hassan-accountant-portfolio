import React from 'react';
export default function Services({ services, process }) {
  return (
    <section className="section-wrap two-column-section">
      <div className="section-heading pinned">
        <p className="section-kicker">Accounting focus</p>
        <h2>Practical accounting support for companies that need clean records and clear follow-up.</h2>
        <div className="process-card">
          <strong>Work method</strong>
          <ol>
            {process.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </div>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={service.title}>
            <span aria-hidden="true">◆</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

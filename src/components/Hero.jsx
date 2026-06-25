import React from 'react';
export default function Hero({ profile }) {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-content reveal">
        <p className="overline">Accounting profile / inventory control / reconciliation</p>
        <h1>{profile.name}</h1>
        <p className="role-line">{profile.role}</p>
        <p className="headline-line">{profile.headline}</p>
        <p className="hero-text">{profile.summary}</p>

        <div className="hero-actions">
          <a className="primary-action" href={profile.cvFile} download="Mohamed_Mahmoud_Hassan_CV.pdf">
            Download CV PDF
          </a>
          <a className="secondary-action" href="#experience">View experience</a>
        </div>
      </div>

      <aside className="ledger-card reveal delay" aria-label="Accounting control snapshot">
        <div className="ledger-header">
          <span>Control Snapshot</span>
          <strong>Balanced</strong>
        </div>
        <div className="ledger-lines">
          <div><span>Inventory movement</span><b>Tracked</b></div>
          <div><span>Payment settlements</span><b>Matched</b></div>
          <div><span>Customer balances</span><b>Reviewed</b></div>
          <div><span>VAT documents</span><b>Processed</b></div>
        </div>
        <div className="ledger-visual">
          <span style={{ '--w': '96%' }} />
          <span style={{ '--w': '88%' }} />
          <span style={{ '--w': '74%' }} />
        </div>
        <p>Organized records, matched settlements, and reports that are easy to review.</p>
      </aside>
    </section>
  );
}

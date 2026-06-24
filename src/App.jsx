import { useMemo, useState } from 'react'
import Counter from './components/Counter'
import ParticleCanvas from './components/ParticleCanvas'
import Reveal from './components/Reveal'
import ScrollProgress from './components/ScrollProgress'
import SpotlightCard from './components/SpotlightCard'
import {
  achievements,
  caseStudies,
  dashboardCards,
  documents,
  education,
  experience,
  faqs,
  languages,
  metrics,
  profile,
  services,
  skills,
  strengths,
  tools,
  training,
} from './data'

const navItems = [
  ['Services', '#services'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Achievements', '#achievements'],
  ['FAQ', '#faq'],
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <ScrollProgress />
      <div className="container nav">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span>MK</span>
          <strong>Mohamed Kamel</strong>
        </a>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setOpen((value) => !value)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <Reveal className="hero-copy">
        <div className="availability">
          <span />
          Based in {profile.location}
        </div>

        <p className="eyebrow">{profile.title}</p>
        <h1>Financial clarity for fast-moving payment operations.</h1>
        <p className="hero-summary">{profile.summary}</p>

        <div className="hero-actions">
          <a className="btn primary" href="#contact">
            Book a Consultation <span>→</span>
          </a>
          <a className="btn secondary" href={profile.cvLink} download>
            Download CV
          </a>
        </div>

        <div className="hero-chips">
          {['Invoice Control', 'Reconciliation', 'Payment Operations', 'Excel Reporting'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Reveal>

      <Reveal className="hero-visual" delay={160}>
        <SpotlightCard className="finance-terminal">
          <div className="terminal-top">
            <div>
              <small>Payment Operations Monitor</small>
              <h3>Daily Finance Review</h3>
            </div>
            <b>Verified</b>
          </div>

          <div className="bars" aria-hidden="true">
            {[42, 78, 56, 92, 65, 84, 48, 72].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>

          <div className="terminal-row highlight">
            <span>Transaction Status</span>
            <strong>Balanced</strong>
          </div>

          <div className="progress-stack">
            <div>
              <span>Invoices Reviewed</span>
              <b>91%</b>
            </div>
            <em><i style={{ width: '91%' }} /></em>
            <div>
              <span>Reconciliation Progress</span>
              <b>87%</b>
            </div>
            <em><i style={{ width: '87%' }} /></em>
          </div>
        </SpotlightCard>

        <div className="floating-note note-a">
          <span>Excel Reports</span>
          <strong>Clean & Ready</strong>
        </div>
        <div className="floating-note note-b">
          <span>Confidentiality</span>
          <strong>Trusted</strong>
        </div>
      </Reveal>
    </section>
  )
}

function Metrics() {
  return (
    <section className="container metrics">
      {metrics.map((item, index) => (
        <Reveal delay={index * 70} key={item.label}>
          <SpotlightCard className="metric-card">
            <strong>
              <Counter value={item.value} suffix={item.suffix} />
            </strong>
            <span>{item.label}</span>
          </SpotlightCard>
        </Reveal>
      ))}
    </section>
  )
}

function Services() {
  return (
    <section className="section container" id="services">
      <Reveal>
        <SectionTitle
          eyebrow="Accounting Services"
          title="A portfolio built around real accounting responsibilities."
          text="The services match the CV: payment operations, invoice review, reconciliation, reporting, and documentation."
        />
      </Reveal>

      <div className="service-grid">
        {services.map((item, index) => (
          <Reveal delay={index * 70} key={item.title}>
            <SpotlightCard className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <section className="section container" id="dashboard">
      <Reveal>
        <SectionTitle
          eyebrow="Financial Dashboard"
          title="A visual accounting snapshot, designed to impress."
          text="This sample dashboard gives the page a strong finance identity with charts, status cards, and document tracking."
        />
      </Reveal>

      <div className="dashboard-layout">
        <Reveal className="dashboard-main">
          <SpotlightCard className="report-card">
            <div className="terminal-top">
              <div>
                <small>Sample Management Report</small>
                <h3>Payment Operations Overview</h3>
              </div>
              <b>Prepared</b>
            </div>

            <div className="chart-shell">
              <svg viewBox="0 0 720 250" role="img" aria-label="Financial trend">
                <defs>
                  <linearGradient id="chartArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(110,231,183,.58)" />
                    <stop offset="100%" stopColor="rgba(110,231,183,0)" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 205 C80 150 120 138 185 150 C255 162 276 62 350 84 C430 110 470 54 540 66 C610 78 660 35 720 45 L720 250 L0 250 Z"
                  fill="url(#chartArea)"
                />
                <path
                  d="M0 205 C80 150 120 138 185 150 C255 162 276 62 350 84 C430 110 470 54 540 66 C610 78 660 35 720 45"
                  fill="none"
                  stroke="rgb(110,231,183)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="document-grid">
              {documents.slice(0, 4).map((item, index) => (
                <div key={item}>
                  <strong>{index + 1 < 10 ? `0${index + 1}` : index + 1}</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="dashboard-cards">
          {dashboardCards.map((item, index) => (
            <Reveal delay={index * 90} key={item.label}>
              <SpotlightCard className="dash-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <em>{item.trend}</em>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const [active, setActive] = useState(0)
  const selected = experience[active]

  return (
    <section className="section container" id="experience">
      <Reveal>
        <SectionTitle
          eyebrow="Work Experience"
          title="Experience extracted directly from the CV."
          text="Aman, Fawry, and Amwaly are displayed as an interactive career timeline."
        />
      </Reveal>

      <div className="experience-layout">
        <Reveal className="experience-tabs">
          {experience.map((job, index) => (
            <button
              className={active === index ? 'tab active' : 'tab'}
              onClick={() => setActive(index)}
              key={job.company}
            >
              <span>{job.period}</span>
              <strong>{job.company}</strong>
              <small>{job.role}</small>
            </button>
          ))}
        </Reveal>

        <Reveal className="experience-detail" delay={120}>
          <SpotlightCard className={`career-card ${selected.color}`}>
            <span className="period">{selected.period}</span>
            <h3>{selected.role}</h3>
            <h4>{selected.company} - {selected.location}</h4>
            <ul>
              {selected.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

function SkillsTools() {
  return (
    <section className="section container skills-tools" id="skills">
      <Reveal>
        <SectionTitle
          eyebrow="Skills & Tools"
          title="Everything organized from the CV into strong visual blocks."
          text="Core skills, tools, training, languages, and strengths are all shown clearly."
        />
      </Reveal>

      <div className="skills-layout">
        <Reveal>
          <SpotlightCard className="skill-panel large">
            <h3>Core Skills</h3>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div key={skill}>
                  <span>{skill}</span>
                  <em><i style={{ width: `${88 - (index % 4) * 7}%` }} /></em>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </Reveal>

        <div className="side-panels">
          <Reveal delay={90}>
            <SpotlightCard className="skill-panel">
              <h3>Tools</h3>
              <div className="tag-cloud">
                {tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={150}>
            <SpotlightCard className="skill-panel">
              <h3>Training</h3>
              <ul className="clean-list">
                {training.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>

      <div className="mini-grid">
        <Reveal delay={90}>
          <SpotlightCard className="skill-panel">
            <h3>Languages</h3>
            {languages.map((item) => (
              <div className="language-row" key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.level}</span>
              </div>
            ))}
          </SpotlightCard>
        </Reveal>

        <Reveal delay={150}>
          <SpotlightCard className="skill-panel">
            <h3>Strengths</h3>
            <div className="tag-cloud">
              {strengths.map((item) => <span key={item}>{item}</span>)}
            </div>
          </SpotlightCard>
        </Reveal>

        <Reveal delay={210}>
          <SpotlightCard className="skill-panel">
            <h3>Education</h3>
            <p className="education-degree">{education.degree}</p>
            <span className="muted-line">{education.place} | {education.year}</span>
            <p className="coursework">{education.coursework}</p>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  )
}

function Achievements() {
  return (
    <section className="section container" id="achievements">
      <Reveal>
        <SectionTitle
          eyebrow="Selected Achievements"
          title="Real impact, presented with confidence."
          text="These are the selected achievements from the CV, converted into professional portfolio cards."
        />
      </Reveal>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <Reveal delay={index * 100} key={item}>
            <SpotlightCard className="achievement-card">
              <strong>0{index + 1}</strong>
              <p>{item}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <div className="case-grid">
        {caseStudies.map((item, index) => (
          <Reveal delay={index * 120} key={item.title}>
            <SpotlightCard className="case-card">
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href="#contact">Discuss similar work →</a>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Documents() {
  return (
    <section className="section container">
      <Reveal>
        <SectionTitle
          eyebrow="Document Checklist"
          title="A practical section for clients who need organized finance files."
          text="This gives the site a real accounting-services feeling and makes it more useful for freelance/client work."
        />
      </Reveal>

      <div className="checklist">
        {documents.map((item, index) => (
          <Reveal delay={index * 45} key={item}>
            <SpotlightCard className="check-item">
              <span>✓</span>
              {item}
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section container" id="faq">
      <Reveal>
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions, answered inside the website."
          text="Interactive FAQ makes the page feel like a polished client-facing product."
        />
      </Reveal>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <Reveal delay={index * 70} key={item.q}>
            <button className={`faq-question ${open === index ? 'active' : ''}`} onClick={() => setOpen(open === index ? -1 : index)}>
              <span>{item.q}</span>
              <b>⌄</b>
            </button>
            <div className={`faq-answer ${open === index ? 'active' : ''}`}>
              <p>{item.a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="section container contact-section" id="contact">
      <Reveal>
        <SpotlightCard className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need accurate financial records and clean reports?</h2>
            <p>
              Contact Mohamed Mahmoud Hassan Kamel for accounting support,
              payment operations, transaction review, reconciliation, and reporting.
            </p>

            <div className="contact-lines">
              <span>📍 {profile.location}</span>
              <button onClick={copyEmail}>✉️ {copied ? 'Email copied' : profile.email}</button>
              <span>📞 {profile.phone}</span>
              <span>🔗 {profile.linkedin}</span>
            </div>
          </div>

          <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
            <label>
              Name
              <input required placeholder="Client name" />
            </label>
            <label>
              Email
              <input required type="email" placeholder="client@example.com" />
            </label>
            <label>
              Message
              <textarea required rows="4" placeholder="Tell me what you need..." />
            </label>
            <button className="btn primary" type="submit">
              {sent ? 'Message Ready' : 'Send Message'} <span>→</span>
            </button>
            {sent && <p className="form-note">Demo form only. Connect it to EmailJS, Formspree, or a backend before publishing.</p>}
          </form>
        </SpotlightCard>
      </Reveal>
    </section>
  )
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {year} {profile.name}</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <div className="page-glow glow-one" />
      <div className="page-glow glow-two" />
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Dashboard />
        <Experience />
        <SkillsTools />
        <Achievements />
        <Documents />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

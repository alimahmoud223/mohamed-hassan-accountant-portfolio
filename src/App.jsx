import React from 'react';
import { profile } from './data/profile.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SummaryPanel from './components/SummaryPanel.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Services from './components/Services.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header profile={profile} />
      <main>
        <Hero profile={profile} />
        <SummaryPanel profile={profile} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Services services={profile.services} process={profile.process} />
        <Education education={profile.education} certifications={profile.certifications} />
        <Contact profile={profile} />
      </main>
      <Footer name={profile.name} />
    </div>
  );
}

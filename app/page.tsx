'use client';

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from 'react';

const publicPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const projects = [
  {
    number: '01',
    label: 'Freelance marketplace',
    title: 'Pluto',
    description: 'A responsive marketplace connecting clients and freelancers through profiles, project posting, proposals and client dashboards.',
    tags: ['Full-stack', 'Responsive UI', 'Marketplace'],
    tone: 'blue',
  },
  {
    number: '02',
    label: 'Health-tech web app',
    title: 'Healthcare Recommender',
    description: 'A symptom-based recommendation system with clear service suggestions and a responsive experience across desktop and mobile.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    tone: 'orange',
  },
  {
    number: '03',
    label: 'Personal brand system',
    title: 'Portfolio Index',
    description: 'This responsive portfolio experience combines structured storytelling, interactive project presentation and accessible front-end craft.',
    tags: ['React', 'Next.js', 'Interaction'],
    tone: 'ink',
  },
];

const skillGroups = [
  { index: 'A', title: 'Web', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'] },
  { index: 'B', title: 'Languages', skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL'] },
  { index: 'C', title: 'Data & Tools', skills: ['MySQL', 'Git', 'GitHub', 'VS Code', 'Problem Solving'] },
];

export default function Home() {
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 100);
    const updateScroll = () => {
      const limit = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', `${limit ? (window.scrollY / limit) * 100 : 0}%`);
      setScrolled(window.scrollY > 40);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  const trackPointer = (event: ReactPointerEvent<HTMLElement>) => {
    document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
  };

  const tiltCard = (event: ReactPointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const box = card.getBoundingClientRect();
    card.style.setProperty('--tilt-x', `${((event.clientY - box.top) / box.height - .5) * -5}deg`);
    card.style.setProperty('--tilt-y', `${((event.clientX - box.left) / box.width - .5) * 5}deg`);
    card.style.setProperty('--card-x', `${event.clientX - box.left}px`);
    card.style.setProperty('--card-y', `${event.clientY - box.top}px`);
  };

  const resetCard = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <main className={`concept ${ready ? 'is-ready' : ''}`} onPointerMove={trackPointer}>
      <div className="page-progress" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />

      <nav className={`index-nav ${scrolled ? 'index-nav--scrolled' : ''}`}>
        <a className="monogram" href="#top" aria-label="Akshaey home">A/K</a>
        <div className="nav-items"><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#about">About</a></div>
        <a className="availability" href="#contact"><i /> Full-Stack Web Developer</a>
      </nav>

      <section className="index-hero" id="top">
        <div className="pointer-glow" aria-hidden="true" />
        <aside className="hero-rail">
          <span>PORTFOLIO / 2026</span>
          <b>01</b>
          <span>BENGALURU · INDIA</span>
        </aside>

        <div className="hero-title">
          <p className="hero-eyebrow">Full-Stack Web Developer · Information Technology Student</p>
          <h1><span>AKSHAEY</span><span>KEERTHI</span></h1>
          <p className="hero-statement">I build responsive, user-focused web applications from front-end interface to database-backed solution.</p>
          <a className="hero-button" href="#work">Explore selected work <span>↘</span></a>
        </div>

        <div className="portrait-zone">
          <div className="portrait-block">
            <div className="portrait-number">NO. 01</div>
            <img src={publicPath('/akshaey-portrait.png')} alt="Portrait of Akshaey Keerthi" />
            <div className="portrait-caption"><b>Role</b><span>Full-Stack Web Developer</span></div>
          </div>
          <span className="skill-chip chip-one">FRONT-END</span>
          <span className="skill-chip chip-two">DATABASES</span>
          <span className="skill-chip chip-three">FULL-STACK</span>
        </div>

        <div className="hero-footer">
          <span>Scroll to navigate the index</span>
          <div className="hero-line"><i /></div>
          <span>Projects · Skills · Profile</span>
        </div>
      </section>

      <div className="preview-strip" aria-label="Portfolio sections"><div><span>PROJECTS</span><b>●</b><span>SKILLS</span><b>●</b><span>PROFILE</span><b>●</b><span>PROJECTS</span><b>●</b><span>SKILLS</span><b>●</b><span>PROFILE</span><b>●</b></div></div>

      <section className="projects-section" id="work">
        <header className="editorial-head">
          <div><span>02 / INDEX</span><p>Selected work</p></div>
          <h2>PROJECTS<br /><em>WITH PURPOSE.</em></h2>
          <p className="head-note">Three focused case studies designed to show range, thought process and technical craft.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-card--${project.tone} ${index === 0 ? 'project-card--wide' : ''}`} key={project.number} onPointerMove={tiltCard} onPointerLeave={resetCard}>
              <div className="project-visual">
                <div className="card-glow" />
                {index === 0 && <div className="interface-mock interface-mock--dashboard"><div className="mock-rail"><b>AK</b><i /><i /><i /></div><div className="mock-main"><small>PLUTO / MARKETPLACE</small><strong>Clients meet<br />freelancers.</strong><div className="mock-chart"><i /><i /><i /><i /><i /><i /></div></div><div className="mock-float">4<span>Core flows</span></div></div>}
                {index === 1 && <div className="interface-mock interface-mock--mobile"><div className="phone phone-one"><small>DISCOVER</small><b>01</b><i /></div><div className="phone phone-two"><small>BUILD</small><b>02</b><i /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>}
                {index === 2 && <div className="interface-mock interface-mock--lab"><div className="lab-ring"><span>03</span><i /><i /><i /></div><div className="lab-tag lab-tag--one">IDEA</div><div className="lab-tag lab-tag--two">CODE</div><div className="lab-tag lab-tag--three">SHIP</div></div>}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-copy">
                <div><span>{project.label}</span><h3>{project.title}</h3></div>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button type="button" aria-label={`Add link for ${project.title}`}>Add project link <span>↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="skills-top">
          <div className="section-index"><span>03</span><b>SKILL<br />SET</b></div>
          <h2>THE TOOLS<br />BEHIND THE <em>WORK.</em></h2>
          <p>My verified technical stack across responsive interfaces, programming, databases and development tools.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article key={group.index}>
              <div className="skill-group-head"><span>{group.index}</span><h3>{group.title}</h3><i>↘</i></div>
              <div className="skill-list">{group.skills.map((skill, index) => <div key={skill}><span>{String(index + 1).padStart(2, '0')}</span><b>{skill}</b><i /></div>)}</div>
            </article>
          ))}
        </div>
        <div className="skills-marquee"><div><span>LEARN FAST</span><i>✦</i><span>THINK CLEARLY</span><i>✦</i><span>BUILD WELL</span><i>✦</i><span>LEARN FAST</span><i>✦</i><span>THINK CLEARLY</span><i>✦</i><span>BUILD WELL</span><i>✦</i></div></div>
      </section>

      <section className="about-section" id="about">
        <div className="resume-panel">
          <div className="resume-preview-frame"><img src={publicPath('/resume-preview.png')} alt="Preview of Akshaey Keerthi's full-stack developer resume" /></div>
          <div className="resume-summary">
            <span>RESUME / PDF</span>
            <h3>Full-Stack Developer Resume</h3>
            <div><a href={publicPath('/Akshaey-Keerthi-Full-Stack-Developer-Resume.pdf')} target="_blank" rel="noreferrer">View résumé ↗</a><a href={publicPath('/Akshaey-Keerthi-Full-Stack-Developer-Resume.pdf')} download>Download ↓</a></div>
          </div>
        </div>
        <div className="about-copy">
          <div className="about-label"><span>04</span> Profile</div>
          <h2>FULL-STACK<br /><em>WEB</em><br />DEVELOPER.</h2>
          <p>I&apos;m Akshaey, an Information Technology student and aspiring Full-Stack Developer with hands-on experience building responsive web applications. I work across front-end development, programming and databases to create useful, user-focused solutions.</p>
          <div className="profile-index">
            <div><span>Location</span><b>Neruppur, Dharmapuri</b></div>
            <div><span>Education</span><b>Bachelor of Information Technology · 2024–2028</b></div>
            <div><span>Institute</span><b>Hindusthan Institute of Technology</b></div>
            <div><span>Academic record</span><b>CGPA 8.8/10 · Honours in Full-Stack Development</b></div>
          </div>
        </div>
      </section>

      <section className="principles-section">
        <div className="principle-title"><span>05 / WORKING NOTES</span><h2>HOW I<br />APPROACH<br />A PROBLEM.</h2></div>
        <div className="principle-list">
          {[
            ['01', 'Understand', 'Start with the real problem, the user and the context—not the first solution.'],
            ['02', 'Explore', 'Prototype multiple directions quickly enough to learn what actually works.'],
            ['03', 'Engineer', 'Turn the chosen direction into a fast, accessible and resilient product.'],
            ['04', 'Refine', 'Polish the details that make the experience feel thoughtful and complete.'],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↗</i></article>)}
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-grid" aria-hidden="true" />
        <span className="contact-index">06 / CONTACT</span>
        <h2>LET&apos;S BUILD<br /><em>SOMETHING GOOD.</em></h2>
        <p>Have an internship, project or collaboration in mind? I&apos;m open to opportunities where I can build, learn and contribute as a Full-Stack Web Developer.</p>
        <div className="contact-actions">
          <a href="mailto:akshaey2007@gmail.com"><span>Email</span><b>akshaey2007@gmail.com</b><i>↗</i></a>
          <a href="https://www.linkedin.com/in/akshaey-keerthi-sn-348352426" target="_blank" rel="noreferrer"><span>LinkedIn</span><b>View profile</b><i>↗</i></a>
          <a href="https://github.com/akshaey23" target="_blank" rel="noreferrer"><span>GitHub</span><b>akshaey23</b><i>↗</i></a>
        </div>
        <div className="footer-meta"><b>A/K</b><span>Full-Stack Web Developer · 2026</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

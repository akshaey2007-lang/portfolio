'use client';

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from 'react';

const publicPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;

const projects = [
  {
    number: '01',
    label: 'Synchronized music experience',
    title: 'HearU',
    description: 'A local-first music player with private listening rooms, shareable invite links and synchronized playback for friends across devices.',
    tags: ['React', 'TypeScript', 'Realtime Sync'],
    tone: 'mist',
    visual: 'hearu',
    screens: [
      { src: '/hearu-preview.png', alt: 'HearU listen-together music app' },
    ],
    href: 'https://akshaey2007-lang.github.io/HearU/',
    repoHref: 'https://github.com/akshaey2007-lang/HearU',
    featured: true,
  },
  {
    number: '02',
    label: 'Protected work marketplace',
    title: 'Pluto Platform',
    description: 'A multi-page marketplace prototype for verified independent talent, focused client shortlists, protected milestones and role-specific workspaces.',
    tags: ['JavaScript', 'Node.js', 'Responsive UI'],
    tone: 'blue',
    visual: 'pluto',
    screens: [
      { src: '/pluto-home.png', alt: 'Pluto marketplace homepage' },
      { src: '/pluto-how-it-works.png', alt: 'Pluto project workflow page' },
      { src: '/pluto-client-dashboard.png', alt: 'Pluto client workspace dashboard' },
    ],
    href: 'https://github.com/akshaey2007-lang/pluto-platform',
    featured: true,
  },
  {
    number: '03',
    label: 'Placement readiness platform',
    title: 'B-Ready',
    description: 'A career-preparation dashboard that measures placement readiness, tracks skill gaps and checklists, and generates role-aware study priorities.',
    tags: ['React', 'Vite', 'LocalStorage'],
    tone: 'ink',
    visual: 'readiness',
    screens: [
      { src: '/b-ready-dashboard.png', alt: 'B-Ready placement command center' },
      { src: '/b-ready-skills.png', alt: 'B-Ready skills tracking page' },
      { src: '/b-ready-recommendations.png', alt: 'B-Ready study recommendations page' },
    ],
    href: 'https://github.com/akshaey2007-lang/B-Ready',
    featured: true,
  },
  {
    number: '04',
    label: 'Health-tech web app',
    title: 'Healthcare Recommender',
    description: 'A symptom-based recommendation system with clear service suggestions and a responsive experience across desktop and mobile.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    tone: 'orange',
    visual: 'mobile',
  },
  {
    number: '05',
    label: 'Personal brand system',
    title: 'Portfolio Index',
    description: 'This responsive portfolio experience combines structured storytelling, interactive project presentation and accessible front-end craft.',
    tags: ['React', 'Next.js', 'Interaction'],
    tone: 'ink',
    visual: 'lab',
    href: 'https://github.com/akshaey2007-lang/portfolio',
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
          <p className="head-note">Five focused projects designed to show range, product thinking and technical craft.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card project-card--${project.tone} ${project.featured ? 'project-card--wide' : ''}`} key={project.number} onPointerMove={tiltCard} onPointerLeave={resetCard}>
              <div className="project-visual">
                <div className="card-glow" />
                {project.screens ? (
                  <div className={`project-collage ${project.screens.length === 1 ? 'project-collage--single' : ''}`} aria-label={`${project.title} interface collage`}>
                    {project.screens.map((screen, index) => (
                      <div className={`project-shot project-shot--${index + 1}`} key={screen.src}>
                        <img src={publicPath(screen.src)} alt={screen.alt} loading="lazy" decoding="async" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {project.visual === 'mobile' && <div className="interface-mock interface-mock--mobile"><div className="phone phone-one"><small>DISCOVER</small><b>01</b><i /></div><div className="phone phone-two"><small>BUILD</small><b>02</b><i /></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>}
                    {project.visual === 'lab' && <div className="interface-mock interface-mock--lab"><div className="lab-ring"><span>04</span><i /><i /><i /></div><div className="lab-tag lab-tag--one">IDEA</div><div className="lab-tag lab-tag--two">CODE</div><div className="lab-tag lab-tag--three">SHIP</div></div>}
                  </>
                )}
                {project.href && <a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open the ${project.title} project`}><span>Open project</span></a>}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-copy">
                <div><span>{project.label}</span><h3>{project.title}</h3></div>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {project.href ? (
                  <div className="project-actions">
                    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>{project.repoHref ? 'Open live app' : 'View on GitHub'} <span>↗</span></a>
                    {project.repoHref && <a className="project-link" href={project.repoHref} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code`}>Source code <span>↗</span></a>}
                  </div>
                ) : <span className="project-link project-link--muted">Case study in progress <span>↗</span></span>}
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
          <a href="https://github.com/akshaey2007-lang" target="_blank" rel="noreferrer"><span>GitHub</span><b>akshaey2007-lang</b><i>↗</i></a>
        </div>
        <div className="footer-meta"><b>A/K</b><span>Full-Stack Web Developer · 2026</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}

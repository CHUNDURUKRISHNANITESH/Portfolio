import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Code2,
  Database,
  Layers3,
  ExternalLink,
  Sparkles,
  Award,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';
import './style.css';

const CERTIFICATES = {
  fullStack:
    'https://drive.google.com/file/d/1pNdp87dH2hIwJgulOs1W7b9-_AP3RkCf/view?usp=drive_link',
  hackathon:
    'https://drive.google.com/file/d/1vLS3X5D-whwX85Rlnk56BInROU1J2LlB/view?usp=drive_link',
};

const skills = [
  {
    group: 'FRONTEND',
    items: [
      'React.js',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Redux',
      'HTML & CSS',
    ],
  },
  {
    group: 'BACKEND',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Middleware',
      'JWT Auth',
    ],
  },
  {
    group: 'DATA & SERVICES',
    items: [
      'MongoDB',
      'Mongoose',
      'MongoDB Atlas',
      'Firebase',
      'Cloudinary',
      'MySQL',
    ],
  },
  {
    group: 'MOBILE & WORKFLOW',
    items: [
      'React Navigation',
      'AsyncStorage',
      'Reanimated',
      'Gesture Handler',
      'React Native Video',
      'Git & GitHub',
    ],
  },
];

const projects = [
  {
    num: '01',
    name: 'Tumblr-inspired social app',
    type: 'REACT NATIVE · TYPESCRIPT',
    desc: 'A social experience with posts, stories, reels, profiles, comments, likes and sharing. Includes Firebase authentication, Google Sign-In, API integration and interactive motion.',
    tags: ['React Native', 'Firebase', 'REST APIs'],
    url: 'https://github.com/CHUNDURUKRISHNANITESH/Tumblr',
    visual: 'social',
  },
  {
    num: '02',
    name: 'Foodzy — food delivery',
    type: 'MOBILE APP · REACT NATIVE',
    desc: 'Food delivery flows for restaurant discovery, food details, cart management and order processing, with reusable UI and thoughtful state management.',
    tags: ['React Native', 'TypeScript', 'Cloudinary'],
    url: 'https://github.com/CHUNDURUKRISHNANITESH/Foodzy',
    visual: 'food',
  },
];

const earlierExperience = [
  {
    num: '01',
    role: 'Technical Support Executive',
    company: 'IntouchCX',
    period: 'JUL — NOV 2025',
    description:
      'Troubleshot software issues, guided users through resolution steps, and collaborated with internal teams to solve technical problems.',
    tags: ['Troubleshooting', 'Problem Solving'],
  },
  {
    num: '02',
    role: 'Customer Support Executive',
    company: 'VXI Global Solutions',
    period: 'FEB — JUN 2025',
    description:
      'Resolved customer queries through chat support, communicated product information clearly, and worked toward effective issue resolution.',
    tags: ['Communication', 'Issue Resolution'],
  },
  {
    num: '03',
    role: 'Customer Support Executive',
    company: '[24]7.ai',
    period: 'OCT — DEC 2024',
    contract: true,
    description:
      'Managed international customer conversations, handled multiple queries in a fast-paced environment, and focused on timely customer-oriented resolutions.',
    tags: ['Customer Service', 'Multitasking'],
  },
];

function App() {
  const heroRef = useRef(null);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));

    const handlePointerMove = (event) => {
      if (
        !heroRef.current ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const rect = heroRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroRef.current.style.setProperty('--mx', `${x * 18}px`);
      heroRef.current.style.setProperty('--my', `${y * 14}px`);
    };

    const hero = heroRef.current;
    hero?.addEventListener('pointermove', handlePointerMove);

    return () => {
      observer.disconnect();
      hero?.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="topbar">
        <a className="monogram" href="#home" aria-label="Home">
          KN<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#work">Portfolio</a>
          <a href="#certifications">Certificates</a>
          <a className="nav-cta" href="#contact">
            CONTACT <ArrowUpRight size={13} />
          </a>
        </nav>

        <a
          className="mobile-contact"
          href="#contact"
          aria-label="Contact"
        >
          <Menu size={19} />
        </a>
      </header>

      <main>
        {/* 1. HERO / INTRODUCTION */}
        <section className="hero" id="home" ref={heroRef}>
          <div className="hero-light" />

          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR SOFTWARE ROLES
            </p>

            <p className="hello">Hi, I'm</p>

            <h1>
              Krishna Nitesh
              <br />
              <span>Chunduru.</span>
            </h1>

            <p className="role">
              MERN STACK DEVELOPER <i>/</i> REACT NATIVE DEVELOPER
            </p>

            <p className="hero-summary">
              I build useful web and mobile experiences — from thoughtful
              interfaces to reliable API integrations.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                EXPLORE MY WORK <ArrowDownRight size={16} />
              </a>

              <a className="text-link" href="#contact">
                LET'S CONNECT <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="socials">
              <a
                href="https://github.com/CHUNDURUKRISHNANITESH"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>

              <a
                href="https://linkedin.com/in/krishna-nitesh-7786721ab/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:nitesh.chunduru@gmail.com"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Existing animated 3D artwork */}
          <div
            className="hero-art"
            aria-label="Abstract animated 3D developer artwork"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="orb orb-main">
              <span>JS</span>
            </div>

            <div className="orb orb-small">
              <Code2 size={26} />
            </div>

            <div className="orb orb-tiny">
              <Layers3 size={18} />
            </div>

            <div className="art-grid" />

            <div className="art-caption">
              BUILD · SHIP · IMPROVE
              <br />
              <span>WEB & MOBILE DEVELOPMENT</span>
            </div>

            <div className="floating-tag tag-top">
              {'{ }'} <span>clean code</span>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="status-dot" />
              open to opportunities
            </div>
          </div>

          <div className="hero-index">
            <span>01 / 08</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* TECHNOLOGY TICKER */}
        <section className="ticker" aria-label="Core technologies">
          <div className="ticker-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index}>
                REACT NATIVE <b>✳</b> TYPESCRIPT <b>✳</b> NODE.JS <b>✳</b>{' '}
                MONGODB <b>✳</b> REST APIS <b>✳</b> REACT.JS <b>✳</b>
              </span>
            ))}
          </div>
        </section>

        {/* 2. ABOUT */}
        <section className="about section" id="about">
          <div className="section-head reveal">
            <span className="section-number">01 — ABOUT</span>

            <h2>
              A little about
              <br />
              <em>how I build.</em>
            </h2>

            <p className="section-intro">
              Curiosity-led development, practical problem solving, and
              interfaces that feel good to use.
            </p>
          </div>

          <div className="about-content reveal">
            <div className="about-mark">
              <span>KN</span>
              <div className="mark-ring" />
              <small>DEVELOPER / INDIA</small>
            </div>

            <div className="about-text">
              <p className="lead">
                I’m a developer focused on building full-stack web features
                and React Native mobile applications.
              </p>

              <p>
                My work spans reusable UI components, REST API integration,
                authentication flows, state management, and debugging across
                the frontend and backend. I enjoy breaking complex features
                into clean, maintainable pieces and learning by building
                real projects.
              </p>

              <div className="about-facts">
                <div>
                  <strong>15+</strong>
                  <span>Reusable UI components built</span>
                </div>

                <div>
                  <strong>2</strong>
                  <span>Featured mobile projects</span>
                </div>

                <div>
                  <strong>2026</strong>
                  <span>Full-stack training completed</span>
                </div>
              </div>

              <a
                className="underlined-link"
                href="mailto:nitesh.chunduru@gmail.com"
              >
                MORE ABOUT MY WORK <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL SKILLS */}
        <section className="skills-section section" id="skills">
          <div className="section-head reveal">
            <span className="section-number">02 — TOOLKIT</span>

            <h2>
              Skills & <em>tools.</em>
            </h2>

            <p className="section-intro">
              The technologies I use to move from an idea to a working
              product.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((group, index) => (
              <article
                className="skill-group reveal"
                key={group.group}
              >
                <div className="skill-group-top">
                  <span>0{index + 1}</span>
                  <h3>{group.group}</h3>
                </div>

                <div className="skill-pills">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="skill-line" />
              </article>
            ))}
          </div>

          <div className="skill-note reveal">
            <Sparkles size={17} />

            <p>
              <strong>Always learning.</strong> I’m continuously improving
              my engineering fundamentals through hands-on projects,
              debugging and iteration.
            </p>
          </div>
        </section>

        {/* 4. IT / SOFTWARE DEVELOPMENT EXPERIENCE */}
        <section className="experience section" id="experience">
          <div className="section-head reveal">
            <span className="section-number">03 — EXPERIENCE</span>

            <h2>
              Learning by <em>doing.</em>
            </h2>
          </div>

          <div className="timeline reveal">
            {/* AbilioIT internship */}
            <div className="timeline-item">
              <div className="timeline-date">
                MAY 2026 — SEP 2026
              </div>

              <div className="timeline-marker" />

              <div className="timeline-body">
                <div className="timeline-title">
                  <h3>MERN Full Stack Developer Intern</h3>
                  <span>INTERNSHIP</span>
                </div>

                <p className="company">AbilioIT Solutions</p>

                <ul>
                  <li>
                    Developed full-stack features with React.js, Node.js,
                    Express.js and MongoDB.
                  </li>
                  <li>
                    Built 15+ reusable React components and responsive
                    interfaces.
                  </li>
                  <li>
                    Implemented JWT authentication, protected API routes
                    and middleware.
                  </li>
                  <li>
                    Tested REST endpoints and debugged frontend–backend
                    integration issues.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROJECTS */}
        <section className="work-section" id="work">
          <div className="work-top">
            <div className="section-head reveal">
              <span className="section-number">04 — SELECTED WORK</span>

              <h2>
                Things I’ve <em>built.</em>
              </h2>

              <p className="section-intro">
                A few projects that show how I think, build and solve
                problems.
              </p>
            </div>

            <span className="work-count">
              02 PROJECTS
              <br />
              2025 — 2026
            </span>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project-card reveal"
                key={project.num}
              >
                <div
                  className={`project-visual ${project.visual}`}
                >
                  <div className="visual-noise" />

                  {project.visual === 'social' ? (
                    <>
                      <div className="social-window">
                        <div className="window-top">
                          <i />
                          <i />
                          <i />
                          <span>your social space</span>
                        </div>

                        <div className="social-layout">
                          <div className="fake-sidebar">
                            <b />
                            <b />
                            <b />
                            <b />
                          </div>

                          <div className="fake-post">
                            <div className="fake-avatar" />

                            <div className="fake-lines">
                              <b />
                              <i />
                            </div>

                            <div className="fake-photo" />

                            <div className="fake-actions">
                              ♡　↗　•••
                            </div>
                          </div>
                        </div>
                      </div>

                      <span className="visual-label">
                        CONNECT / CREATE / SHARE
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="food-ring ring-a" />
                      <div className="food-ring ring-b" />

                      <div className="food-orb">
                        F<span>oodzy</span>
                      </div>

                      <span className="visual-label">
                        FIND YOUR NEXT FAVOURITE
                      </span>
                    </>
                  )}
                </div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.num} / 02</span>
                    <span>{project.type}</span>
                  </div>

                  <h3>{project.name}</h3>

                  <p>{project.desc}</p>

                  <div className="project-bottom">
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="github-strip reveal">
            <div>
              <span className="section-number">MORE ON GITHUB</span>
              <h3>More experiments. More learning.</h3>
            </div>

            <a
              className="button button-light"
              href="https://github.com/CHUNDURUKRISHNANITESH"
              target="_blank"
              rel="noreferrer"
            >
              VISIT GITHUB <ExternalLink size={15} />
            </a>
          </div>
        </section>

        {/* 6. CERTIFICATIONS */}
        <section
          className="certifications-section section"
          id="certifications"
        >
          <div className="section-head reveal">
            <span className="section-number">05 — CERTIFICATIONS</span>

            <h2>
              Proof of <em>learning.</em>
            </h2>

            <p className="section-intro">
              Training and practical learning experiences that support
              my software development journey.
            </p>
          </div>

          <div className="certificate-list">
            {/* Full Stack Development Certification */}
            <article className="certificate-card reveal">
              <div className="certificate-icon">
                <Award size={23} />
              </div>

              <div className="certificate-content">
                <span className="certificate-label">
                  FULL STACK DEVELOPMENT
                </span>

                <h3>Full Stack Development Certification</h3>

                <p>
                  TechU Innovation Labs Pvt Ltd
                </p>

                <span className="certificate-detail">
                  Certificate ID: TFSD250737
                </span>

                <p className="certificate-description">
                  Six-month training covering React.js, Node.js,
                  Express.js, MongoDB, REST APIs, CRUD operations,
                  authentication, responsive UI and debugging.
                </p>

                <a
                  className="underlined-link"
                  href={CERTIFICATES.fullStack}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW CERTIFICATE <ArrowUpRight size={14} />
                </a>
              </div>

              <span className="certificate-year">APR 2026</span>
            </article>

            {/* Build Fest Hackathon Certificate */}
            <article className="certificate-card reveal">
              <div className="certificate-icon">
                <Code2 size={23} />
              </div>

              <div className="certificate-content">
                <span className="certificate-label">
                  HACKATHON PARTICIPATION
                </span>

                <h3>Build Fest Hackathon 2026</h3>

                <p>TechU Innovation Labs Pvt. Ltd.</p>

                <span className="certificate-detail">
                  Role: Full Stack Developer
                </span>

                <p className="certificate-description">
                  Participated in Build Fest Hackathon 2026,
                  demonstrating innovation, creativity and teamwork.
                </p>

                <a
                  className="underlined-link"
                  href={CERTIFICATES.hackathon}
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW CERTIFICATE <ArrowUpRight size={14} />
                </a>
              </div>

              <span className="certificate-year">2026</span>
            </article>
          </div>
        </section>

        {/* 7. EDUCATION */}
        <section className="education section" id="education">
          <div className="section-head reveal">
            <span className="section-number">06 — EDUCATION</span>

            <h2>
              Grounded in <em>learning.</em>
            </h2>
          </div>

          <div className="education-card reveal">
            <div className="education-icon">
              <GraduationCap size={22} />
            </div>

            <div>
              <h3>
                Bachelor of Technology — Computer Science
              </h3>

              <p>St. Mary's Group of Institutions</p>
            </div>

            <div className="education-year">
              2018 — 2022
              <span>CGPA 7.15</span>
            </div>
          </div>
        </section>

        {/* 8. ADDITIONAL WORK EXPERIENCE */}
        <section className="additional-experience section" id="earlier-experience">
          <div className="section-head reveal">
            <span className="section-number">
              07 — ADDITIONAL WORK EXPERIENCE
            </span>

            <h2>
              Experience beyond <em>development.</em>
            </h2>

            <p className="section-intro">
              My previous roles strengthened the communication,
              troubleshooting and problem-solving skills I bring
              to software development.
            </p>
          </div>

          <div className="support-experience reveal">
            <div className="support-heading">
              <div>
                <span className="section-number">EARLIER EXPERIENCE</span>

                <h3>
                  Skills that <em>transfer.</em>
                </h3>

                <p>
                  Customer-focused work helped me develop clear
                  communication, ownership and a practical approach
                  to resolving problems.
                </p>
              </div>

              <span className="support-count">03 ROLES</span>
            </div>

            <div className="support-grid">
              {earlierExperience.map((job) => (
                <article className="support-card" key={job.num}>
                  <div className="support-card-top">
                    <span className="support-index">{job.num}</span>

                    <span className="support-period">
                      {job.period}
                    </span>
                  </div>

                  <h4>{job.role}</h4>

                  <p className="support-company">
                    {job.company}
                    {job.contract && <span> · Contract</span>}
                  </p>

                  <p className="support-description">
                    {job.description}
                  </p>

                  <div className="support-tags">
                    {job.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="support-takeaway">
              <span className="status-dot" />

              <p>
                <strong>What I bring forward:</strong> Technical
                troubleshooting, clear communication, ownership
                and a practical approach to problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* 9. CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-shape shape-one" />
          <div className="contact-shape shape-two" />

          <div className="contact-inner reveal">
            <span className="section-number">
              LET'S BUILD SOMETHING
            </span>

            <h2>
              Have a role in
              <br />
              <em>mind?</em>
            </h2>

            <p>
              I’m looking for opportunities to contribute, learn from
              a team, and build software that makes a difference.
            </p>

            <a
              className="contact-email"
              href="mailto:nitesh.chunduru@gmail.com"
            >
              nitesh.chunduru@gmail.com <ArrowUpRight size={20} />
            </a>

            <div className="contact-links">
              <a
                href="https://linkedin.com/in/krishna-nitesh-7786721ab/"
                target="_blank"
                rel="noreferrer"
              >
                LINKEDIN <ArrowUpRight size={13} />
              </a>

              <a
                href="https://github.com/CHUNDURUKRISHNANITESH"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <a className="monogram" href="#home">
          KN<span>.</span>
        </a>

        <p>
          DESIGNED & BUILT WITH CARE
          <span>
            © {new Date().getFullYear()} KRISHNA NITESH CHUNDURU
          </span>
        </p>

        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);

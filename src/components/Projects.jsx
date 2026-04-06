import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    title: "Splunk-ChronoBloom-Addon",
    date: "July 2025",
    badge: "Award-Winning",
    badgeColor: "#f59e0b",
    technologies: ["Splunk Enterprise", "Gemini AI", "SPL"],
    description: "Environmental analytics add-on for real-time phenology tracking and climate insights.",
    highlights: [
      "Won 2nd place among 1500+ teams in Splunk Build-a-thon 2025",
      "Integrated Gemini AI to forecast bloom dates with 85% accuracy",
      "Visualized phenology data for 50+ species across 48 US states"
    ],
    githubUrl: "https://github.com/aryanpachore/Splunk-ChronoBloom-Addon",
    demoUrl: "#",
    accentColor: "#22d3ee",
    gradientFrom: "#0e7490",
    gradientTo: "#164e63",
  },
  {
    title: "ET AI Concierge",
    date: "March 2026",
    badge: "FinTech",
    badgeColor: "#8b5cf6",
    technologies: ["React", "Node.js", "Groq", "Gemini AI", "Pinecone"],
    description: "AI wealth management platform replacing rigid forms with a fully Generative UI.",
    highlights: [
      "Synthesizes chat history to instantly render 4 core financial metrics",
      "RAG-based engine using Gemini embeddings and Pinecone vector DB",
      "Hydrates dynamic dashboard widgets in under 3 seconds"
    ],
    githubUrl: "https://github.com/aryanpachore/ET-Hackathon",
    demoUrl: "#",
    accentColor: "#a78bfa",
    gradientFrom: "#4c1d95",
    gradientTo: "#2e1065",
  },
  {
    title: "LegalEyes",
    date: "Feb 2026",
    badge: "LegalTech",
    badgeColor: "#10b981",
    technologies: ["React", "Node.js", "MySQL", "Groq", "OCR"],
    description: "AI-powered legal analysis platform (MERN stack) for complex document review.",
    highlights: [
      "Custom OCR pipeline to extract text from 50+ page legal PDFs",
      "Hallucination-free responses with less than 2s latency via Groq",
      "Automated Health Check reduced manual review time by 80%"
    ],
    githubUrl: "https://github.com/aryanpachore/Capstone",
    demoUrl: "#",
    accentColor: "#34d399",
    gradientFrom: "#065f46",
    gradientTo: "#022c22",
  },
  {
    title: "CuraWave",
    date: "May 2025",
    badge: "HealthTech",
    badgeColor: "#f472b6",
    technologies: ["Node.js", "React", "Express", "SQLite"],
    description: "Scalable healthcare booking platform with role-based dashboards for patients and doctors.",
    highlights: [
      "Engineered booking platform supporting 15+ pilot users with distinct role-based dashboards",
      "Integrated real-time video consultation, increasing remote patient accessibility by 30%",
      "Secured patient data with encryption and JWT session management for data integrity"
    ],
    githubUrl: "https://github.com/ankur-patra/CuraWave-3.0",
    demoUrl: "#",
    accentColor: "#f472b6",
    gradientFrom: "#831843",
    gradientTo: "#500724",
  },
  {
    title: "RecycleAI",
    date: "Feb 2024",
    badge: "GreenTech",
    badgeColor: "#86efac",
    technologies: ["React", "Tailwind", "Google Gen AI"],
    description: "AI-powered waste management platform for optimized recycling workflows at scale.",
    highlights: [
      "Processed 2,000+ image classifications for optimized recycling workflows",
      "Integrated Google Generative AI achieving 92% accuracy in waste type identification",
      "Reward system boosted user participation by 45%"
    ],
    githubUrl: "https://github.com/aryanpachore/WasteManagement-",
    demoUrl: "#",
    accentColor: "#86efac",
    gradientFrom: "#14532d",
    gradientTo: "#052e16",
  }
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {dir === 'left' ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
  </svg>
);

export default function Projects() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const intervalRef = useRef(null);

  const goTo = (idx, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + projects.length) % projects.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(active + 1, 'right'), 5000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const prev = () => {
    clearInterval(intervalRef.current);
    goTo(active - 1, 'left');
  };
  
  const next = () => {
    clearInterval(intervalRef.current);
    goTo(active + 1, 'right');
  };

  const p = projects[active];

  return (
    <section id="projects" className="projects">
      {/* Wrapped the text in a span to trigger the gradient from index.css */}
      <h2 className="projects-title"><span>Projects</span></h2>
      <p className="projects-sub">Exploring the frontier of AI and full-stack engineering</p>

      <div className="carousel-wrapper">
        <div
          className={`proj-card ${animating ? (direction === 'left' ? 'animating-out-left' : 'animating-out-right') : ''}`}
        >
          <div className="proj-card-glow" style={{ background: p.accentColor }} />

          <div className="proj-progress-bar">
            <div className="proj-progress-fill" key={active} style={{ background: `linear-gradient(90deg, ${p.accentColor}, ${p.accentColor}88)` }} />
          </div>

          <div className="proj-card-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span
                className="proj-card-badge"
                style={{
                  color: p.badgeColor,
                  borderColor: `${p.badgeColor}33`,
                  background: `${p.badgeColor}11`,
                }}
              >
                {p.badge}
              </span>
            </div>
            <span className="proj-card-date">{p.date}</span>
          </div>

          <h3 className="proj-card-title">{p.title}</h3>
          <p className="proj-card-desc">{p.description}</p>

          <p className="proj-highlights-label">Key Highlights</p>
          <ul className="proj-highlights-list">
            {p.highlights.map((h, i) => (
              <li key={i} className="proj-highlight-item">
                <span className="proj-highlight-dot" style={{ background: p.accentColor }} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="proj-tech-stack">
            {p.technologies.map((t, i) => (
              <span key={i} className="proj-tech-pill">
                {t}
              </span>
            ))}
          </div>

          <div className="proj-card-divider" />

          <div className="proj-card-actions">
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-ghost">
              <GithubIcon /> View Code
            </a>
            <a
              href={p.demoUrl}
              className="proj-btn proj-btn-primary"
              style={{ background: `linear-gradient(135deg, ${p.accentColor}, ${p.badgeColor})` }}
            >
              <ExternalLinkIcon /> Live Demo
            </a>
          </div>
        </div>

        <div className="proj-nav-row">
          <button className="proj-nav-btn" onClick={prev} aria-label="Previous">
            <ChevronIcon dir="left" />
          </button>

          <div className="proj-dots">
            {projects.map((proj, i) => (
              <div
                key={i}
                className={`proj-dot ${i === active ? 'active' : ''}`}
                style={i === active ? { background: proj.accentColor } : {}}
                onClick={() => goTo(i, i > active ? 'right' : 'left')}
              />
            ))}
          </div>

          <button className="proj-nav-btn" onClick={next} aria-label="Next">
            <ChevronIcon dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
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
    githubUrl: "https://github.com/aryanpachore",
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
    githubUrl: "https://github.com/aryanpachore",
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
    githubUrl: "https://github.com/aryanpachore",
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
    githubUrl: "https://github.com/aryanpachore",
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
    githubUrl: "https://github.com/aryanpachore",
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .projects-section {
          min-height: 100vh;
          background: #060b14;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
        }

        .section-eyebrow {
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 12px;
        }

        .section-title {
          text-align: center;
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 8px;
          line-height: 1.1;
        }

        .section-title span {
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-sub {
          text-align: center;
          color: #475569;
          font-size: 15px;
          margin-bottom: 56px;
        }

        .carousel-wrapper {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
        }

        .card {
          background: #0d1826;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .card.animating-out-left {
          opacity: 0;
          transform: translateX(-40px);
        }
        .card.animating-out-right {
          opacity: 0;
          transform: translateX(40px);
        }

        .card-glow {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          gap: 12px;
          flex-wrap: wrap;
        }

        .card-badge {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid;
          white-space: nowrap;
        }

        .card-date {
          font-size: 12px;
          color: #475569;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 4px 12px;
          border-radius: 100px;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 12px;
          line-height: 1.2;
        }

        .card-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 28px;
          font-style: italic;
        }

        .highlights-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #334155;
          margin-bottom: 14px;
        }

        .highlights-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.5;
          padding: 10px 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 10px;
          transition: border-color 0.2s;
        }

        .highlight-item:hover {
          border-color: rgba(255,255,255,0.1);
          color: #cbd5e1;
        }

        .highlight-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .tech-pill {
          font-size: 11px;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          color: #94a3b8;
          background: rgba(255,255,255,0.03);
          letter-spacing: 0.03em;
        }

        .card-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin-bottom: 24px;
        }

        .card-actions {
          display: flex;
          gap: 12px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          border: 1px solid;
        }

        .btn-ghost {
          background: transparent;
          border-color: rgba(255,255,255,0.1);
          color: #94a3b8;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.05);
          color: #f1f5f9;
        }

        .btn-primary {
          border-color: transparent;
          color: #0d1826;
          font-weight: 600;
        }
        .btn-primary:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        .nav-row {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 32px;
        }

        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-btn:hover {
          border-color: rgba(255,255,255,0.2);
          color: #e2e8f0;
          background: rgba(255,255,255,0.07);
        }

        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          width: 24px;
          border-radius: 3px;
        }

        .progress-bar {
          height: 2px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          margin-bottom: 4px;
          overflow: hidden;
        }

        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        .progress-fill {
          height: 100%;
          border-radius: 100px;
          animation: progress 5s linear;
        }
      `}</style>

      <section className="projects-section">
        
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">Exploring the frontier of AI and full-stack engineering</p>

        <div className="carousel-wrapper">
          <div
            className={`card ${animating ? (direction === 'left' ? 'animating-out-left' : 'animating-out-right') : ''}`}
          >
            <div className="card-glow" style={{ background: p.accentColor }} />

            <div className="progress-bar">
              <div className="progress-fill" key={active} style={{ background: `linear-gradient(90deg, ${p.accentColor}, ${p.accentColor}88)` }} />
            </div>

            <div className="card-top">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span
                  className="card-badge"
                  style={{
                    color: p.badgeColor,
                    borderColor: `${p.badgeColor}33`,
                    background: `${p.badgeColor}11`,
                  }}
                >
                  {p.badge}
                </span>
              </div>
              <span className="card-date">{p.date}</span>
            </div>

            <h3 className="card-title" style={{ color: p.accentColor }}>{p.title}</h3>
            <p className="card-desc">{p.description}</p>

            <p className="highlights-label">Key Highlights</p>
            <ul className="highlights-list">
              {p.highlights.map((h, i) => (
                <li key={i} className="highlight-item">
                  <span className="highlight-dot" style={{ background: p.accentColor }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="tech-stack">
              {p.technologies.map((t, i) => (
                <span key={i} className="tech-pill" style={{ borderColor: `${p.accentColor}22`, color: p.accentColor + 'cc' }}>
                  {t}
                </span>
              ))}
            </div>

            <div className="card-divider" />

            <div className="card-actions">
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <GithubIcon /> View Code
              </a>
              <a
                href={p.demoUrl}
                className="btn btn-primary"
                style={{ background: `linear-gradient(135deg, ${p.accentColor}, ${p.badgeColor})` }}
              >
                <ExternalLinkIcon /> Live Demo
              </a>
            </div>
          </div>

          <div className="nav-row">
            <button className="nav-btn" onClick={prev} aria-label="Previous">
              <ChevronIcon dir="left" />
            </button>

            <div className="dots">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  style={i === active ? { background: proj.accentColor } : {}}
                  onClick={() => goTo(i, i > active ? 'right' : 'left')}
                />
              ))}
            </div>

            <button className="nav-btn" onClick={next} aria-label="Next">
              <ChevronIcon dir="right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
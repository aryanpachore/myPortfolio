import React from 'react';

const CERTIFICATIONS = [
  {
    title: "OCI Generative AI Certified Professional",
    issuer: "Oracle",
    themeColor: "orange",
    iconText: "OCI",
    badge: "AI / Cloud",
    description: "Validated proficiency in LLMs, RAG, and implementing Generative AI solutions on OCI."
  },
  {
    title: "Salesforce Development",
    issuer: "Ethnus",
    themeColor: "blue",
    iconText: "SF",
    badge: "CRM / Dev",
    description: "Developed Salesforce apps, workflows, and integrated APIs for enterprise-grade CRM solutions."
  },
  {
    title: "AWS Cloud Architect",
    issuer: "Ethnus",
    themeColor: "orange",
    iconText: "AWS",
    badge: "Cloud",
    description: "Certified in designing and deploying scalable, cost-effective systems on AWS infrastructure."
  },
  {
    title: "26 Salesforce Trailhead Badges",
    issuer: "Salesforce",
    themeColor: "orange",
    iconText: "26✦",
    badge: "Badges",
    description: "Earned 26 badges on Salesforce Trailhead, demonstrating consistent learning and mastery."
  },
  {
    title: "Computer Networks",
    issuer: "Coursera",
    themeColor: "blue",
    iconText: "NET",
    badge: "Fundamentals",
    description: "Comprehensive study of networking protocols, architecture, and data transmission principles."
  }
];

const Certifications = () => {
  React.useEffect(() => {
    if (document.getElementById('cert-gfonts')) return;
    const link = document.createElement('link');
    link.id = 'cert-gfonts';
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="certifications"
      style={{
        background: 'var(--bg-secondary)', // Replaced hardcoded dark background
        padding: '5rem 1.5rem',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        transition: 'background-color 0.3s ease',
      }}
    >
      <style>{`
        #certifications::before {
          content: '';
          position: absolute;
          top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 500px;
          background: radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        #certifications::after {
          content: '';
          position: absolute;
          bottom: -150px; left: 5%;
          width: 500px; height: 400px;
          background: radial-gradient(ellipse, rgba(14,165,233,0.05) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .cert-card {
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow);
        }
        .cert-card.orange:hover { border-color: rgba(249,115,22,0.4) !important; }
        .cert-card.blue:hover   { border-color: rgba(14,165,233,0.4) !important; }
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px; opacity: 0;
          transition: opacity 0.3s;
        }
        .cert-card.orange::before { background: linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent); }
        .cert-card.blue::before   { background: linear-gradient(90deg, transparent, rgba(14,165,233,0.6), transparent); }
        .cert-card:hover::before  { opacity: 1; }
        #cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
        }
        @media (min-width: 640px) {
          #cert-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          #cert-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '3rem' }}>
        <p style={{
          fontSize: '11px', fontWeight: 500, letterSpacing: '0.25em',
          color: '#F97316', textTransform: 'uppercase', margin: '0 0 0.75rem',
        }}>
          Credentials
        </p>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800, 
          color: 'var(--text-primary)', // Dynamic Title
          lineHeight: 1.1, letterSpacing: '-0.02em',
          margin: '0 0 0.75rem',
          transition: 'color 0.3s ease',
        }}>
          Professional <span style={{ color: '#F97316' }}>Certifications</span>
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 300, margin: 0, transition: 'color 0.3s ease' }}>
          Validated expertise across cloud, AI, and full-stack development
        </p>
      </div>

      {/* Grid */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
        <div id="cert-grid">
          {CERTIFICATIONS.map((cert, i) => {
            const isOrange = cert.themeColor === 'orange';
            const accent = isOrange ? '#F97316' : '#0EA5E9';
            const a = isOrange ? 'rgba(249,115,22,' : 'rgba(14,165,233,';

            return (
              <div
                key={i}
                className={`cert-card ${cert.themeColor}`}
                style={{
                  display: 'flex',               
                  flexDirection: 'column',       
                  height: '100%',                
                  background: 'var(--card-bg)', // Dynamic Card Background
                  border: '1px solid var(--border-color)', // Dynamic Border
                  borderRadius: '20px',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  minWidth: 0,
                }}
              >
                {/* Top row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '1.25rem', gap: '8px',
                  width: '100%',                 
                }}>
                  <div style={{
                    height: '40px', padding: '0 12px', borderRadius: '10px',
                    display: 'flex', alignItems: 'center',
                    fontFamily: "'Syne', sans-serif", fontWeight: 800,
                    fontSize: '13px', letterSpacing: '-0.02em',
                    background: `${a}0.12)`, color: accent,
                    border: `1px solid ${a}0.25)`,
                    flexShrink: 0,
                  }}>
                    {cert.iconText}
                  </div>
                  <span style={{
                    fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
                    textTransform: 'uppercase', padding: '4px 10px',
                    borderRadius: '100px',
                    background: `${a}0.1)`, color: accent,
                    border: `1px solid ${a}0.2)`,
                    whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {cert.badge}
                  </span>
                </div>

                {/* Issuer */}
                <div style={{ width: '100%' }}>  
                  <p style={{
                    display: 'block',            
                    fontSize: '10px', letterSpacing: '0.18em',
                    textTransform: 'uppercase', fontWeight: 600,
                    color: 'var(--text-secondary)', margin: '0 0 5px',
                    transition: 'color 0.3s ease',
                  }}>
                    {cert.issuer}
                  </p>
                </div>

                {/* Title */}
                <div style={{ width: '100%' }}>  
                  <h3 style={{
                    display: 'block',            
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.15rem', fontWeight: 700,
                    color: 'var(--text-primary)', // Dynamic text color
                    lineHeight: 1.3,
                    margin: '0 0 1rem', letterSpacing: '-0.01em',
                    transition: 'color 0.3s ease',
                  }}>
                    {cert.title}
                  </h3>
                </div>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', background: 'var(--divider)', marginBottom: '1rem', transition: 'background 0.3s ease' }} />

                {/* Description */}
                <div style={{ width: '100%', flexGrow: 1 }}> 
                  <p style={{
                    display: 'block',            
                    fontSize: '13px', color: 'var(--text-secondary)', // Dynamic text color
                    lineHeight: 1.7, fontWeight: 400, margin: 0,
                    transition: 'color 0.3s ease',
                  }}>
                    {cert.description}
                  </p>
                </div>

                {/* Ghost number */}
                <span style={{
                  position: 'absolute', bottom: '1.25rem', right: '1.5rem',
                  fontFamily: "'Syne', sans-serif", fontSize: '3rem',
                  fontWeight: 800, 
                  opacity: 0.04, color: 'var(--text-primary)', // Adapts subtly to light/dark
                  lineHeight: 1, pointerEvents: 'none',
                  letterSpacing: '-0.05em', userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
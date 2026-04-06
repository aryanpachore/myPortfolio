import React, { useState, useEffect, useRef } from 'react';

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const categories = [
  {
    id: 'coding',
    label: 'Coding Practice',
    accentColor: '#22d3ee',
    badgeColor: '#0e7490',
    Icon: CodeIcon,
    items: [
      { label: 'LeetCode & GFG', stat: '500+', detail: 'questions solved' },
      { label: 'LeetCode Streak', stat: '365', detail: 'day badge earned' },
      { label: 'LeetCode Milestones', stat: '2×', detail: '100 day badges' },
      { label: 'Codeforces Rating', stat: '408', detail: 'rated competitor' },
    ],
    links: [
      { label: 'LeetCode', url: 'https://leetcode.com/u/aryanpachore2004/' },
      { label: 'Codeforces', url: 'https://codeforces.com/profile/Aryanpachore_23' },
      { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/aryanpach93jo?tab=activity' },
    ]
  },
  {
    id: 'hackathons',
    label: 'Hackathons',
    accentColor: '#f59e0b',
    badgeColor: '#92400e',
    Icon: TrophyIcon,
    items: [
      { label: 'Cisco Splunk Build-a-Thon', stat: '2nd', detail: 'place — 1500+ teams, 2025' },
      { label: 'Amazon HackOn', stat: 'Semi', detail: 'finalist' },
      { label: 'ET Gen AI Hackathon', stat: 'Semi', detail: 'finalist' },
      { label: 'Smart India Hackathon', stat: 'Final', detail: 'ist — 2023' },
      { label: 'Smart India Hackathon', stat: 'Final', detail: 'ist — 2024' },
    ]
  },
  {
    id: 'other',
    label: 'Other',
    accentColor: '#a78bfa',
    badgeColor: '#4c1d95',
    Icon: StarIcon,
    items: [
      { label: 'Open Source', stat: '', detail: 'Active contributor' },
      { label: 'Community', stat: '', detail: 'Volunteered at technical workshops' },
    ]
  }
];

export default function Achievements() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const intervalRef = useRef(null);

  const goTo = (idx, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive((idx + categories.length) % categories.length);
      setAnimating(false);
    }, 280);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => goTo(active + 1, 'right'), 6000);
    return () => clearInterval(intervalRef.current);
  }, [active]);

  const prev = () => { clearInterval(intervalRef.current); goTo(active - 1, 'left'); };
  const next = () => { clearInterval(intervalRef.current); goTo(active + 1, 'right'); };

  const cat = categories[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ach-section {
          min-height: 100vh;
          background: #060b14;
          padding: 80px 24px;
          font-family: 'DM Sans', sans-serif;
        }

        .ach-eyebrow {
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 12px;
        }

        .ach-title {
          text-align: center;
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 800;
          color: #f8fafc;
          margin: 0 0 8px;
          line-height: 1.1;
        }

        .ach-title span {
          background: linear-gradient(135deg, #f59e0b, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ach-sub {
          text-align: center;
          color: #475569;
          font-size: 15px;
          margin-bottom: 56px;
        }

        .ach-tabs {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .ach-tab {
          padding: 8px 20px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.02);
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ach-tab:hover {
          color: #94a3b8;
          border-color: rgba(255,255,255,0.15);
        }

        .ach-tab.active {
          border-color: transparent;
          color: #0d1826;
          font-weight: 600;
        }

        .ach-wrapper {
          max-width: 720px;
          margin: 0 auto;
        }

        .ach-card {
          background: #0d1826;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: opacity 0.28s ease, transform 0.28s ease;
          min-height: 360px;
        }

        .ach-card.out-left  { opacity: 0; transform: translateX(-36px); }
        .ach-card.out-right { opacity: 0; transform: translateX(36px); }

        .ach-glow {
          position: absolute;
          top: -80px; right: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.12;
          pointer-events: none;
        }

        .ach-progress-bar {
          height: 2px;
          background: rgba(255,255,255,0.05);
          border-radius: 100px;
          margin-bottom: 28px;
          overflow: hidden;
        }

        @keyframes ach-progress { from { width: 0% } to { width: 100% } }

        .ach-progress-fill {
          height: 100%;
          border-radius: 100px;
          animation: ach-progress 6s linear;
        }

        .ach-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }

        .ach-icon-wrap {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          flex-shrink: 0;
        }

        .ach-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }

        .ach-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ach-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 12px;
          transition: border-color 0.2s, background 0.2s;
          gap: 12px;
        }

        .ach-item:hover {
          border-color: rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
        }

        .ach-item-left {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .ach-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .ach-item-label {
          font-size: 14px;
          color: #94a3b8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .ach-item-right {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }

        .ach-stat {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
        }

        .ach-detail {
          font-size: 12px;
          color: #475569;
        }

        .ach-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 28px;
        }

        .ach-nav-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #475569;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ach-nav-btn:hover {
          border-color: rgba(255,255,255,0.18);
          color: #e2e8f0;
          background: rgba(255,255,255,0.06);
        }

        .ach-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .ach-dot-nav {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ach-dot-nav.active {
          width: 22px;
          border-radius: 3px;
        }

        .ach-links {
          display: flex;
          gap: 8px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .ach-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
          border: 1px solid;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .ach-link:hover {
          transform: translateY(-1px);
          opacity: 0.85;
        }
      `}</style>

      <section className="ach-section">
        <p className="ach-eyebrow">Milestones</p>
        <h2 className="ach-title">Notable <span>Achievements</span></h2>
        <p className="ach-sub">Recognitions, rankings, and community contributions</p>

        <div className="ach-tabs">
          {categories.map((c, i) => (
            <button
              key={c.id}
              className={`ach-tab ${i === active ? 'active' : ''}`}
              style={i === active ? { background: `linear-gradient(135deg, ${c.accentColor}, ${c.accentColor}bb)` } : {}}
              onClick={() => { clearInterval(intervalRef.current); goTo(i, i > active ? 'right' : 'left'); }}
            >
              <c.Icon />
              {c.label}
            </button>
          ))}
        </div>

        <div className="ach-wrapper">
          <div className={`ach-card ${animating ? (direction === 'left' ? 'out-left' : 'out-right') : ''}`}>
            <div className="ach-glow" style={{ background: cat.accentColor }} />

            <div className="ach-progress-bar">
              <div className="ach-progress-fill" key={active} style={{ background: `linear-gradient(90deg, ${cat.accentColor}, ${cat.accentColor}66)` }} />
            </div>

            <div className="ach-card-header">
              <div
                className="ach-icon-wrap"
                style={{
                  background: `${cat.accentColor}15`,
                  borderColor: `${cat.accentColor}33`,
                  color: cat.accentColor,
                }}
              >
                <cat.Icon />
              </div>
              <h3 className="ach-card-title" style={{ color: cat.accentColor }}>{cat.label}</h3>
            </div>

            <div className="ach-items">
              {cat.items.map((item, i) => (
                <div key={i} className="ach-item">
                  <div className="ach-item-left">
                    <span className="ach-dot" style={{ background: cat.accentColor }} />
                    <span className="ach-item-label">{item.label}</span>
                  </div>
                  <div className="ach-item-right">
                    {item.stat && (
                      <span className="ach-stat" style={{ color: cat.accentColor }}>{item.stat}</span>
                    )}
                    <span className="ach-detail">{item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            {cat.links && (
              <>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', margin: '20px 0 0' }} />
                <div className="ach-links">
                  {cat.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ach-link"
                      style={{
                        color: cat.accentColor,
                        borderColor: `${cat.accentColor}30`,
                        background: `${cat.accentColor}0d`,
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="ach-nav">
            <button className="ach-nav-btn" onClick={prev}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <div className="ach-dots">
              {categories.map((c, i) => (
                <div
                  key={i}
                  className={`ach-dot-nav ${i === active ? 'active' : ''}`}
                  style={i === active ? { background: c.accentColor } : {}}
                  onClick={() => { clearInterval(intervalRef.current); goTo(i, i > active ? 'right' : 'left'); }}
                />
              ))}
            </div>
            <button className="ach-nav-btn" onClick={next}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
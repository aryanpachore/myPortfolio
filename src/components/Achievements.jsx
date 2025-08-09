// src/components/Achievements.jsx
import React from 'react';
import { FaTrophy, FaMedal, FaCheckCircle } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <div className="section-title">
          <h2>Achievements</h2>
          <p>My notable accomplishments and recognitions</p>
        </div>
        
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaCheckCircle />
            </div>
            <h3>Coding Practice</h3>
            <ul>
              <li>300+ Questions solved on LeetCode and GFG</li>
              <li>Two 50 days badges on LeetCode</li>
              <li>Two 100 days badge on LeetCode</li>
            </ul>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <h3>Hackathons</h3>
            <ul>
              <li>Internal Round Finalist for SIH 2023</li>
              <li>Internal Round Finalist for SIH 2024</li>
              <li>Splunk Build-a-Thon Finalist</li>
            </ul>
          </div>
          
          <div className="achievement-card">
            <div className="achievement-icon">
              <FaMedal />
            </div>
            <h3>Other Accomplishments</h3>
            <ul>
              <li>Active open-source contributor</li>
              <li>Volunteered at technical workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
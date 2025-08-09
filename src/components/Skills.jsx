// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillCategories = [
    { name: 'Languages', skills: ['C++', 'Java', 'Python', 'JavaScript'] },
    { name: 'Frontend', skills: ['HTML/CSS', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'] },
    { name: 'Backend', skills: ['Node.js', 'Express', 'REST API'] },
    { name: 'Databases', skills: ['MySQL', 'MongoDB', 'SQLite'] },
    { name: 'Cloud & DevOps', skills: ['AWS', 'Git', 'GitHub'] },
    { name: 'Other', skills: ['Data Structures & Algorithms', 'Salesforce Development', 'Blockchain'] }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies I've worked with across the full stack</p>
        </div>
        
        <div className="skills-container">
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.name}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
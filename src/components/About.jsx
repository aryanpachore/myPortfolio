// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Learn more about my background and education</p>
        </div>
        
        <div className="about-container">
          <div className="about-content">
            <p>
              I'm a Computer Science Engineering student at Vellore Institute of Technology, Bhopal, 
              with a strong passion for software development and problem-solving.
            </p>
            <p>
              My technical expertise spans full-stack development, cloud computing, and AI technologies.
              I enjoy creating innovative solutions to real-world problems through code.
            </p>
            
            
            <div className="about-education">
              <h3>Education</h3>
              <div className="education-item">
                <h4>B-Tech: Computer Science and Engineering</h4>
                <p>Vellore Institute of Technology, Bhopal</p>
                <p>2022 – 2026</p>
              </div>
              
              <div className="education-item">
                <h4>Class 12th</h4>
                <p>Dnyandeep vidya sankul</p>
                <p>2020 – 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// src/components/Hero.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm <span>Aryan Pachore</span></h1>
          <h2>Computer Science Student & Developer</h2>
          <p>
            Passionate about building innovative solutions using modern technologies.
            Currently pursuing B-Tech in Computer Science at VIT Bhopal.
          </p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
          
          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/aryan-pachore-ab89a7250/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/aryanpachore" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-img-container">
            <div className="hero-img-placeholder">
                <img 
                  src="/146368488.png" 
                  alt="Aryan Pachore" 
                  className="hero-profile-img"
                />
            </div>
          </div>
          <div className="hero-image-badge">
            <p>Student at</p>
            <span>VIT Bhopal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
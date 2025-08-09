// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Aryan Pachore</h3>
            <p>
              A passionate Computer Science student and developer focused on building innovative 
              solutions using modern technologies.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/aryan-pachore-ab89a7250/"><FaLinkedin /></a>
              <a href="https://github.com/aryanpachore"><FaGithub /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact</h3>
            <ul className="footer-contact">
              <li>Bhopal,Madhya Pradesh</li>
              <li>aryan.dev2304@gmail.com</li>
              <li>+91 xxxxxxxx65</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Aryan Pachore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
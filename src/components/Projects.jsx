// src/components/Projects.jsx
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Zero-to-Hero – AI-Powered Waste Management Platform",
      date: "Feb'25",
      technologies: ["Next.js", "Tailwind CSS", "Google Generative AI"],
      description: "Developed a full-stack waste management platform leveraging AI technology.",
      highlights: [
        "Integrated Google's Generative AI for waste verification",
        "Token-based reward system ",
        "Responsive UI with Next.js and Tailwind CSS"
      ],
      githubUrl: "https://github.com/aryanpachore/WasteManagement-",
      demoUrl: "#"
    },
    {
      title: "Online Coding Contest Platform",
      date: "May'24",
      technologies: ["React", "MongoDB", "Express", "JavaScript", "HTML/CSS"],
      description: "Full-stack web application to host and manage coding contests with real-time capabilities.",
      highlights: [
        "User authentication and contest creation",
        "Code submission & evaluation system",
        "Dynamic leaderboard with real-time updates",
        "Responsive React interface"
      ],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "CuraWave – Doctor Appointment Booking System",
      date: "May'25",
      technologies: ["React", "Node.js", "Express", "SQLite"],
      description: "Full-stack web application for booking and managing doctor appointments.",
      highlights: [
        "Separate dashboards for doctors and patients",
        "Online video call appointments",
        "Prescription upload and sharing",
        "SQLite for relational data management"
      ],
      githubUrl: "https://github.com/oreoflick/CuraWave-3.0",
      demoUrl: "#"
    }
  ];

  const handleGithubClick = (url) => {
    // Replace with actual GitHub URLs
    console.log('Opening GitHub:', url);
  };

  const handleDemoClick = (url) => {
    // Replace with actual demo URLs
    console.log('Opening Demo:', url);
  };

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-title">
          <h2>Academic Projects</h2>
          <p>My featured projects demonstrating technical skills and innovation</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-date">{project.date}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-actions">
                <button 
                  className="github-btn"
                  onClick={() => handleGithubClick(project.githubUrl)}
                >
                  <FaGithub className="github-icon" />
                  View on GitHub
                </button>
                <button 
                  className="demo-btn"
                  onClick={() => handleDemoClick(project.demoUrl)}
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
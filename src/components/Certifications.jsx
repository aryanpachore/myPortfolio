// src/components/Certifications.jsx
import React from 'react';
import { FaAws, FaSalesforce, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Cloud Architect",
      issuer: "Ethnus",
      icon: <FaAws className="cert-icon" />,
      description: "Certified in designing and deploying scalable systems on AWS"
    },
    {
      title: "Salesforce Development",
      issuer: "Ethnus",
      icon: <FaSalesforce className="cert-icon" />,
      description: "Professional certification in Salesforce platform development"
    },
    {
      title: "26 Trailhead Badges",
      issuer: "Salesforce",
      icon: <FaCertificate className="cert-icon" />,
      description: "Earned 26 badges on Salesforce Trailhead"
    },
    {
      title: "Computer Networks",
      issuer: "Coursera",
      icon: <FaCertificate className="cert-icon" />,
      description: "Fundamentals of computer networking and protocols"
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="section-container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>My professional certifications validating technical expertise</p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon-container">
                {cert.icon}
              </div>
              <div className="cert-details">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
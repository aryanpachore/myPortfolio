// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  // Check if mobile with improved detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener with debounce for better performance
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle scroll to update active section and navbar state
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 100;

      // Update scrolled state
      setScrolled(window.scrollY > 100);

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.navbar') && !event.target.closest('.navbar-mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Handle mobile menu toggle
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Desktop Logo - Hidden on mobile */}
          {!isMobile && (
            <div className="navbar-logo">
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                <div className="navbar-avatar">AP</div>
                <span className="navbar-name">Aryan</span>
              </a>
            </div>
          )}
          
          {/* Desktop Navigation - Hidden when scrolled or on mobile */}
          {!isMobile && (
            <div className={`navbar-links ${scrolled ? 'navbar-links-hidden' : ''}`}>
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
            </div>
          )}
          
          {/* Mobile/Scrolled menu button - Always visible on mobile */}
          {(isMobile || scrolled) && (
            <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
              <button className="mobile-toggle-btn" type="button" aria-label="Toggle navigation">
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          )}
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (isMobile || scrolled) && (
        <div className="navbar-mobile-menu">
          <div className="mobile-menu-content">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-menu-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="mobile-theme-toggle">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
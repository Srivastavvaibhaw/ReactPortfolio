// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaUserAlt, 
  FaCode, 
  FaBriefcase, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDownload
} from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ navigateTo, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const handleNavigation = (page) => {
    navigateTo(page);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const menuItems = [
    { icon: <FaHome />, text: 'Home', page: 'home' },
    { icon: <FaCode />, text: 'Skills', page: 'skills' },
    { icon: <FaBriefcase />, text: 'Projects', page: 'projects' },
    { icon: <FaUserAlt />, text: 'About', page: 'about' },
    { icon: <FaEnvelope />, text: 'Contact', page: 'contact' },
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      link: 'http://github.com/Srivastavvaibhaw', 
      label: 'GitHub' 
    },
    { 
      icon: <FaLinkedinIn />, 
      link: 'https://www.linkedin.com/in/vaibhaw-srivastav-2491b4282/', 
      label: 'LinkedIn' 
    },
    { 
      icon: <FaTwitter />, 
      link: 'https://x.com/vaibhawsri39544', 
      label: 'Twitter' 
    },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <button onClick={() => handleNavigation('home')}>VS</button>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links desktop-menu">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.page)}
                className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.text}
              </button>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="nav-right desktop-menu">
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a href="/resume.pdf" className="cta-button" download>
              <FaDownload /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.page)}
                className={`mobile-nav-link ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            ))}
          </div>

          <div className="mobile-social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a href="/resume.pdf" className="mobile-cta-button" download>
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      />
    </>
  );
};

export default Navbar;

// src/components/HomePage.jsx

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaReact, 
  FaNodeJs, FaDatabase, FaArrowRight, FaChevronDown, FaCode, 
  FaLightbulb, FaRocket
} from 'react-icons/fa';
import '../styles/HomePage.css';

const HomePage = ({ navigateTo }) => {
  const [typedText, setTypedText] = useState('');
  const fullName = "Vaibhaw Srivastav";
  const typingSpeed = 150;
  const pauseBetween = 1000;
  const typingDelayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeCharacter = () => {
      if (!isDeleting && currentIndex < fullName.length) {
        setTypedText(fullName.substring(0, currentIndex + 1));
        currentIndex++;
        typingDelayRef.current = setTimeout(typeCharacter, typingSpeed);
      } 
      else if (!isDeleting && currentIndex >= fullName.length) {
        isDeleting = true;
        typingDelayRef.current = setTimeout(typeCharacter, pauseBetween);
      }
      else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTypedText(fullName.substring(0, currentIndex));
        typingDelayRef.current = setTimeout(typeCharacter, typingSpeed / 2);
      }
      else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        typingDelayRef.current = setTimeout(typeCharacter, pauseBetween);
      }
    };
    
    typeCharacter();
    
    return () => {
      if (typingDelayRef.current) {
        clearTimeout(typingDelayRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 4}s`;
        starsContainer.appendChild(star);
      }
    }
  }, []);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepage">
      <div className="stars" id="stars"></div>
      
      <section className="hero">
        <div className="hero-content">
          <div className="welcome-badge">Welcome to my Portfolio</div>
          <h1 className="hero-title">
            Hi! I'm <span className="name-container"><span className="typing-text">{typedText}</span><span className="cursor">|</span></span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            The driving force behind groundbreaking and visually captivating digital experiences.
            With mastery in both frontend and backend development, I turn concepts into dynamic web applications.
            From designing sleek, intuitive interfaces to engineering powerful server infrastructures,
            I seamlessly blend creativity with technology to bring your vision to reality.
          </p>
          <a 
            href="https://www.linkedin.com/in/vaibhaw-srivastav-2491b4282/" 
            className="connect-btn" 
            onClick={(e) => { 
              e.preventDefault();
              window.open("https://www.linkedin.com/in/vaibhaw-srivastav-2491b4282/", "_blank");
            }}
          >
            Let's Connect <FaArrowRight />
          </a>
        </div>
        
        <div className="hero-visual">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          
          <div className="profile-circle">
            <div className="profile-image-container">
              <img 
                src="/public/images/tl.png" 
                alt="Developer with laptop" 
                className="profile-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div class="profile-placeholder">VS</div>';
                }}
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="floating-icon icon-1">
            <FaReact />
          </div>
          <div className="floating-icon icon-2">
            <FaNodeJs />
          </div>
          <div className="floating-icon icon-3">
            <FaDatabase />
          </div>
        </div>
        
        <div className="scroll-down" onClick={scrollToContent}>
          <FaChevronDown className="scroll-down-icon" />
        </div>
      </section>
      
      <section className="intro-section" ref={contentRef}>
        <div className="floating-image floating-image-1"></div>
        <div className="floating-image floating-image-2"></div>
        <div className="floating-image floating-image-3"></div>
        
        <div className="intro-content">
          <h2 className="intro-title">Let Me Introduce Myself</h2>
          <p className="intro-description">
            I fell in love with programming, and along the way, I've gained more than just knowledge—I've built a passion, honed my skills, and embraced the endless possibilities of code. One thing I'm certain of: this journey is just the beginning.
          </p>
          
          <div className="intro-cards-container">
            <div className="intro-expertise">
              <div className="intro-card-icon">
                <FaCode />
              </div>
              <h3 className="intro-card-title">Full Stack Expertise</h3>
              <p className="intro-card-content">
                I am well-versed in the timeless art of Full Stack Development, seamlessly blending classic foundations with the latest cutting-edge technologies to craft innovative digital experiences.
              </p>
            </div>
            
            <div className="intro-interests">
              <div className="intro-card-icon">
                <FaLightbulb />
              </div>
              <h3 className="intro-card-title">Creative Interests</h3>
              <p className="intro-card-content">
                My passion lies in crafting next-generation web technologies, developing innovative products, and exploring the art of UI/UX design to create seamless and engaging digital experiences.
              </p>
            </div>
            
            <div className="intro-passion">
              <div className="intro-card-icon">
                <FaRocket />
              </div>
              <h3 className="intro-card-title">Modern Development</h3>
              <p className="intro-card-content">
                Whenever the opportunity arises, I channel my passion into building exceptional products using Node.js, along with modern JavaScript libraries and frameworks like React.js and Next.js, crafting seamless and high-performing digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="find-me-on">
        <h3>Connect With Me</h3>
        <p>Let's connect!</p>
        <div className="social-links">
          <a href="https://github.com/Srivastavvaibhaw" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vaibhaw-srivastav-2491b4282/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

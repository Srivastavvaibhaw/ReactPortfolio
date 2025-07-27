// src/components/HomePage.jsx

import React, { useEffect, useState, useRef } from 'react';
import { 
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaReact, 
  FaNodeJs, FaDatabase, FaArrowRight, FaChevronDown, FaCode, 
  FaLightbulb, FaRocket, FaBrain, FaLaptopCode, 
  FaPaintBrush, FaRobot, FaTimes, FaMobileAlt
} from 'react-icons/fa';
import '../styles/HomePage.css';

const ServiceCard = ({ title, bgImage, description, details }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => {
    setIsPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <div className="service-card" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="service-overlay"></div>
        <div className="service-content">
          <h3 className="service-title">{title}</h3>
          <button className="read-more-btn" onClick={openPopup}>
            Read More <FaArrowRight />
          </button>
        </div>
      </div>
      
      {isPopupOpen && (
        <div className="popup-container" onClick={closePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup} aria-label="Close">
              <FaTimes className="close-icon" />
            </button>
            <h3 className="popup-title">{title}</h3>
            <div className="popup-content">
              {details}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


const HomePage = ({ navigateTo }) => {
  const [typedRole, setTypedRole] = useState('');
  const fullName = "Vaibhaw Srivastav";
  const role = "FullStack Developer!!";
  const typingSpeed = 100; 
  const pauseBeforeRestart = 1000;
  const typingDelayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeRoleCharacter = () => {
      // When typing
      if (!isDeleting && currentIndex < role.length) {
        setTypedRole(role.substring(0, currentIndex + 1));
        currentIndex++;
        typingDelayRef.current = setTimeout(typeRoleCharacter, typingSpeed);
      } 
      // When complete typing
      else if (!isDeleting && currentIndex >= role.length) {
        // Pause at the end for a moment
        typingDelayRef.current = setTimeout(typeRoleCharacter, pauseBeforeRestart);
        isDeleting = true;
      }
      // When deleting
      else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTypedRole(role.substring(0, currentIndex));
        typingDelayRef.current = setTimeout(typeRoleCharacter, typingSpeed / 2);
      }
      // When done deleting
      else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        // Small pause before starting again
        typingDelayRef.current = setTimeout(typeRoleCharacter, pauseBeforeRestart);
      }
    };
    
    typeRoleCharacter();
    
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
            Hi! I'm <span className="name-static">{fullName}</span>
          </h1>
          <h2 className="hero-subtitle">
            <span className="role-container">
              <span className="typing-text">{typedRole}</span>
            </span>
          </h2>
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
                src="/images/tl.png" 
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
      
      {/* Services Section */}
      <section className="services-section">
        <div className="services-bg-pattern"></div>
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">What I offer</p>
        </div>
        
        <div className="services-grid">
          <ServiceCard 
            title="AI & ML" 
            bgImage="/images/aiml.avif"
            details={
              <div>
                <p>Harness the power of artificial intelligence and machine learning to transform your business and stay ahead of the competition.</p>
                <h4>What I Offer:</h4>
                <ul>
                  <li>Custom AI solution development for business process optimization</li>
                  <li>Machine learning models for predictive analytics and data-driven insights</li>
                  <li>Natural Language Processing (NLP) applications for text analysis and chatbots</li>
                  <li>Computer Vision solutions for image and video analysis</li>
                  <li>AI integration with existing business systems and workflows</li>
                  <li>Recommendation engines and personalization algorithms</li>
                </ul>
                <p>Using cutting-edge technologies like TensorFlow, PyTorch, and cloud-based AI services, I can help you unlock the full potential of your data and automate complex tasks.</p>
              </div>
            }
          />
          
          <ServiceCard 
            title="Web Development" 
            bgImage="/images/webdev.jpg"
            details={
              <div>
                <p>Create stunning, responsive websites and web applications that engage users and drive business growth.</p>
                <h4>What I Offer:</h4>
                <ul>
                  <li>Custom website design and development</li>
                  <li>Progressive Web Applications (PWAs) for enhanced user experience</li>
                  <li>E-commerce solutions with secure payment integration</li>
                  <li>Content Management Systems (WordPress, Shopify, Custom CMS)</li>
                  <li>API development and third-party integrations</li>
                  <li>Website optimization for speed, SEO, and accessibility</li>
                </ul>
                <p>Using modern frameworks like React, Next.js, and Node.js, I build scalable, secure, and high-performance web solutions that look great on any device and help you achieve your business goals.</p>
              </div>
            }
          />
          
          <ServiceCard 
            title="UI/UX Design" 
            bgImage="/images/uiux.jpg"
            details={
              <div>
                <p>Create intuitive, engaging user interfaces and seamless user experiences that delight your customers and boost conversion rates.</p>
                <h4>What I Offer:</h4>
                <ul>
                  <li>User research and persona development</li>
                  <li>Wireframing and interactive prototyping</li>
                  <li>Visual design and branding</li>
                  <li>User journey mapping and information architecture</li>
                  <li>Usability testing and optimization</li>
                  <li>Design systems and component libraries</li>
                </ul>
                <p>I combine aesthetics with functionality to create designs that not only look beautiful but are also intuitive and accessible to all users. My user-centered approach ensures that every design decision is made with your users' needs in mind.</p>
              </div>
            }
          />
          
          <ServiceCard 
            title="Software Development" 
            bgImage="/images/software.jpg"
            details={
              <div>
                <p>Build robust, scalable software solutions that solve complex business problems and drive innovation.</p>
                <h4>What I Offer:</h4>
                <ul>
                  <li>Custom desktop and mobile application development</li>
                  <li>Cloud-based software solutions</li>
                  <li>Enterprise software integration</li>
                  <li>Database design and management</li>
                  <li>Legacy system modernization</li>
                  <li>DevOps implementation and CI/CD pipelines</li>
                </ul>
                <p>From concept to deployment, I create software solutions that are tailored to your specific business needs. Using agile methodologies and best practices in software development, I ensure that your software is reliable, maintainable, and scalable for future growth.</p>
              </div>
            }
          />
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

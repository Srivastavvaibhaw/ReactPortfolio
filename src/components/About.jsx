import React, { useEffect, useState } from 'react';
import { FaTrain, FaUserShield, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TbCertificate } from 'react-icons/tb';
import { BiCodeAlt, BiBookOpen } from 'react-icons/bi';
import { 
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram,
  FaUser, FaCode, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaBriefcase,
  FaHeart, FaCopyright
} from 'react-icons/fa';
import '../styles/About.css';

const profileImage = "/public/images/aboutprofile.png";

const About = ({ goBack, navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsVisible(true);
    
    // Create stars
    const starsContainer = document.getElementById('stars-about');
    if (starsContainer) {
      // Clear any existing stars
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

  return (
    <div className="about-page">
      <div className="stars" id="stars-about"></div>
      
      <div className={`about-container ${isVisible ? 'visible' : ''}`}>
        <section className="hero">
          <div className="hero-content">
            <div className="about-flex-container">
              <div className="about-text-content">
                <h1 className="hero-title">About Me</h1>
                <p className="hero-description">
                  A passionate full-stack developer dedicated to crafting innovative and user-friendly web applications.
                  I thrive on challenges and am always eager to learn new technologies and techniques to enhance my skills.
                </p>
                
                <div className="personal-info">
                  <div className="info-item">
                    <FaUser className="info-icon" />
                    <span>Vaibhaw Srivastav</span>
                  </div>
                  <div className="info-item">
                    <FaCode className="info-icon" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="info-item">
                    <FaMapMarkerAlt className="info-icon" />
                    <span>India</span>
                  </div>
                  <div className="info-item">
                    <FaEnvelope className="info-icon" />
                    <span>srivastavvaibhaw17@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="profile-image-container">
                <img 
                  src={profileImage} 
                  alt="Vaibhaw Srivastav" 
                  className="profile-image" 
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="sections skills-and-experience">
          <div className="section-title">Skills & Experience</div>
          <div className="skills-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Next.js</span>
          </div>
          
          <div className="experience-summary">
            <h2>Professional Journey</h2>
            <p>
              As a full-stack developer, I've contributed to diverse projects, from e-commerce platforms to AI-driven applications.
              I've designed scalable web architectures, built user-friendly interfaces, and optimized performance for seamless experiences.
            </p>
          </div>
        </section>
        
        <section className="certifications-education">
          <h2 className="section-heading">Certifications & Education</h2>
          <p className="section-intro">Continuous learning is fundamental to my growth as a developer. Here are some of my formal qualifications:</p>
          
          <div className="cards-container">
            <div className="qualification-card">
              <div className="card-header">
                <div className="icon-container">
                  <img src="/public/aws.svg" alt="AWS" className="qualification-icon" />
                </div>
                <div className="qualification-details">
                  <h3 className="qualification-title">AWS Certified Developer</h3>
                  <p className="qualification-subtitle">Amazon Web Services</p>
                </div>
                <span className="qualification-year">2025</span>
              </div>
            </div>

            <div className="qualification-card">
              <div className="card-header">
                <div className="icon-container">
                  <span className="code-icon">&lt;/&gt;</span>
                </div>
                <div className="qualification-details">
                  <h3 className="qualification-title">Full Stack Web Development</h3>
                  <p className="qualification-subtitle"></p>
                </div>
                <span className="qualification-year">2024</span>
              </div>
            </div>

            <div className="qualification-card">
              <div className="card-header">
                <div className="icon-container">
                  <img src="/public/react.svg" alt="React" className="qualification-icon" />
                </div>
                <div className="qualification-details">
                  <h3 className="qualification-title">React Advanced Patterns</h3>
                  <p className="qualification-subtitle">Frontend Masters</p>
                </div>
                <span className="qualification-year">2025</span>
              </div>
            </div>
          </div>
          
          <div className="education-container">
            <div className="education-item">
              <h3><FaGraduationCap className="education-icon" /> Bachelor of Technology in Computer Science</h3>
            </div>
          </div>
        </section>
        
        <section className="sections interests">
          <div className="section-title">Interests</div>
          <div className="interests-list">
            <span><FaHeart className="interests-icon"/> Artificial Intelligence</span>
            <span><FaHeart className="interests-icon"/> Web Development</span>
            <span><FaHeart className="interests-icon"/> UI/UX Design</span>
            <span><FaHeart className="interests-icon"/> Open Source Contributions</span>
          </div>
        </section>
        <section className="sections achievements">
  <div className="section-title">Hackathon Achievements</div>
  <div className="achievements-grid">
    <div className="achievement-card animate-fadeInUp">
      <div className="achievement-header">
        <div className="achievement-icon" style={{ background: 'rgba(37, 99, 235, 0.2)' }}>
          <FaTrain />
        </div>
        <h3 className="achievement-title">InnoCodethon</h3>
      </div>
      <div className="achievement-position">7th Rank</div>
      <div className="achievement-project">Railway Automation System</div>
      <div className="achievement-type" 
           style={{ background: 'rgba(37, 99, 235, 0.2)', color: '#2563EB' }}>
        Hardware Project
      </div>
      <p className="achievement-description">
        Developed an automated system for railway operations control and monitoring
      </p>
    </div>

    <div className="achievement-card animate-fadeInUp">
      <div className="achievement-header">
        <div className="achievement-icon" style={{ background: 'rgba(220, 38, 38, 0.2)' }}>
          <FaUserShield />
        </div>
        <h3 className="achievement-title">Smart India Hackathon</h3>
      </div>
      <div className="achievement-position">college Selection</div>
      <div className="achievement-project">Fake Social Media ID Analyzer</div>
      <div className="achievement-type" 
           style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#DC2626' }}>
        Software Project
      </div>
      <p className="achievement-description">
        AI-powered system to detect and analyze fake social media profiles
      </p>
    </div>

    <div className="achievement-card animate-fadeInUp">
      <div className="achievement-header">
        <div className="achievement-icon" style={{ background: 'rgba(5, 150, 105, 0.2)' }}>
          <FaChartBar />
        </div>
        <h3 className="achievement-title">IIT Kharagpur Hackathon</h3>
      </div>
      <div className="achievement-position"> Selection</div>
      <div className="achievement-project">Customer Feedback Analysis AI</div>
      <div className="achievement-type" 
           style={{ background: 'rgba(5, 150, 105, 0.2)', color: '#059669' }}>
        AI/ML Project
      </div>
      <p className="achievement-description">
        Machine learning system for automated customer feedback analysis and insights
      </p>
    </div>
  </div>
</section>

      </div>
      
      
      <footer className="about-footer">
        <div className="footer-content">
          <p>
            <FaCopyright className="copyright-icon" /> {currentYear} Vaibhaw Srivastav. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="http://github.com/Srivastavvaibhaw" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/vaibhaw-srivastav-2491b4282/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

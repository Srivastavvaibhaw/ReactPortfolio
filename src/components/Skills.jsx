import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TbCertificate } from 'react-icons/tb';
import { BiCodeAlt, BiBookOpen } from 'react-icons/bi';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaPython, FaJava, FaGitAlt, FaDocker, FaAws, FaFigma,
  FaArrowRight, FaDatabase, FaCode, FaBrain, FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, SiMongodb, SiExpress, SiNextdotjs, 
  SiTailwindcss, SiPostgresql, SiKubernetes, SiWeb3Dotjs
} from 'react-icons/si';
import '../styles/Skills.css';

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: <FaAws />,
    color: "#FF9900"
  },
  {
    name: "Full Stack Web Development",
    date: "2024",
    icon: <BiCodeAlt />,
    color: "#3178C6"
  },
  {
    name: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "2025",
    icon: <FaReact />,
    color: "#61DAFB"
  }
];

const Skills = ({ goBack, navigateTo }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef([]);

  const showAllSkills = () => setActiveCategory('all');
  const showFrontendSkills = () => setActiveCategory('frontend');
  const showBackendSkills = () => setActiveCategory('backend');
  const showLanguageSkills = () => setActiveCategory('language');
  const showToolSkills = () => setActiveCategory('tool');

  useEffect(() => {
    setIsVisible(true);
    
    const starsContainer = document.getElementById('stars-skills');
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
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log('Active category:', activeCategory);
  }, [activeCategory]);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, category: 'frontend', level: 95, color: '#E44D26', description: 'Semantic markup, accessibility, SEO optimization' },
    { name: 'CSS3', icon: <FaCss3Alt />, category: 'frontend', level: 90, color: '#264DE4', description: 'Flexbox, Grid, Animations, Responsive design' },
    { name: 'JavaScript', icon: <FaJs />, category: 'frontend', level: 92, color: '#F7DF1E', description: 'ES6+, DOM manipulation, Async/Await' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', level: 85, color: '#3178C6', description: 'Type safety, Interfaces, Generics' },
    { name: 'React', icon: <FaReact />, category: 'frontend', level: 90, color: '#61DAFB', description: 'Hooks, Context API, Custom hooks' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', level: 80, color: '#000000', description: 'SSR, SSG, API routes, Image optimization' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', level: 88, color: '#06B6D4', description: 'Utility-first CSS, Responsive design' },
    
    { name: 'Node.js', icon: <FaNodeJs />, category: 'backend', level: 88, color: '#339933', description: 'Event-driven architecture, Streams, Modules' },
    { name: 'Express', icon: <SiExpress />, category: 'backend', level: 85, color: '#000000', description: 'RESTful APIs, Middleware, Routing' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'backend', level: 82, color: '#47A248', description: 'Schema design, Aggregation, Indexing' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'backend', level: 80, color: '#336791', description: 'Relational DB, Transactions, Queries' },
    
    { name: 'Python', icon: <FaPython />, category: 'language', level: 85, color: '#3776AB', description: 'Data processing, Automation, Web scraping' },
    { name: 'Java', icon: <FaJava />, category: 'language', level: 80, color: '#007396', description: 'OOP, Multithreading, Collections' },
    
    { name: 'Git', icon: <FaGitAlt />, category: 'tool', level: 90, color: '#F05032', description: 'Version control, Branching strategies, CI/CD' },
    { name: 'Docker', icon: <FaDocker />, category: 'tool', level: 75, color: '#2496ED', description: 'Containerization, Docker Compose, Networks' },
    { name: 'AWS', icon: <FaAws />, category: 'tool', level: 70, color: '#FF9900', description: 'S3, EC2, Lambda, CloudFormation' },
    { name: 'Figma', icon: <FaFigma />, category: 'tool', level: 80, color: '#F24E1E', description: 'UI/UX design, Prototyping, Components' },
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FaCode />, action: showAllSkills },
    { id: 'frontend', name: 'Frontend', icon: <FaHtml5 />, action: showFrontendSkills },
    { id: 'backend', name: 'Backend', icon: <FaDatabase />, action: showBackendSkills },
    { id: 'language', name: 'Languages', icon: <FaBrain />, action: showLanguageSkills },
    { id: 'tool', name: 'Tools & DevOps', icon: <FaTools />, action: showToolSkills },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const learningItems = [
    { name: 'Kubernetes', icon: <SiKubernetes />, progress: 30, color: '#326CE5' },
    { name: 'Web3', icon: <SiWeb3Dotjs />, progress: 25, color: '#F16822' },
  ];
  
  return (
    <div className="skills-page">
      <div className="stars" id="stars-skills"></div>
      
      <div className={`skills-container ${isVisible ? 'visible' : ''}`}>
        <div className="skills-intro">
          <div className="skills-title-container">
            <h1 className="skills-title">Technical Expertise</h1>
            <div className="skills-subtitle">
              <span className="highlight">Building</span> exceptional digital experiences with <span className="highlight">modern</span> technologies
            </div>
          </div>
          
          <div className="skills-overview">
            <div className="overview-card">
              <div className="overview-icon"><FaCode /></div>
              <div className="overview-count">{skills.length}+</div>
              <div className="overview-label">Technologies</div>
            </div>
            <div className="overview-card">
              <div className="overview-icon"><FaBrain /></div>
              <div className="overview-count">3+</div>
              <div className="overview-label">Specializations</div>
            </div>
          </div>
        </div>
        
        <div className="skills-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={category.action}
              aria-label={`Show ${category.name}`}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => (
              <div 
                className="skill-card" 
                key={skill.name}
                ref={el => {
                  if (el) {
                    el.style.setProperty('--width', `${skill.level}%`);
                  }
                  skillsRef.current[index] = el;
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <div className="skill-info">
                  <div className="skill-description">{skill.description}</div>
                  <div className="skill-level-container">
                    <div 
                      className="skill-level-bar" 
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}90)`
                      }}
                    ></div>
                  </div>
                  <div className="skill-level-labels">
                    <span>Beginner</span>
                    <span className="skill-percentage">{skill.level}%</span>
                    <span>Expert</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-skills-message">No skills found in this category.</div>
          )}
        </div>
        
        <div className="skills-learning-section">
          <h2 className="learning-title">Currently Expanding My Expertise</h2>
          <p className="learning-description">
            Always on the journey of continuous improvement, I'm currently exploring these emerging technologies:
          </p>
          
          <div className="learning-grid">
            {learningItems.map((item) => (
              <div className="learning-card" key={item.name}>
                <div className="learning-icon" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <div className="learning-info">
                  <h3 className="learning-name">{item.name}</h3>
                  <div className="learning-progress-container">
                    <div 
                      className="learning-progress" 
                      style={{ 
                        '--width': `${item.progress}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}90)`
                      }}
                    ></div>
                  </div>
                  <div className="learning-progress-label">{item.progress}% Proficient</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications-section">
          <h2 className="section-title">Certifications & Education</h2>
          <p className="section-description">
            Continuous learning is fundamental to my growth as a developer. Here are some of my formal qualifications:
          </p>
  
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                className="certification-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="certification-icon" style={{ backgroundColor: `${cert.color}20`, color: cert.color }}>
                  {cert.icon}
                </div>
                <div className="certification-content">
                  <h3 className="certification-name">{cert.name}</h3>
                  <div className="certification-details">
                    <span className="certification-issuer">{cert.issuer}</span>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                </div>
                <div className="certification-badge">
                  <TbCertificate />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="skill-statistics-section">
          <h2 className="section-title">Development Metrics</h2>
          
          <div className="statistics-grid">
            <motion.div 
              className="statistic-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="statistic-icon">
                <BiCodeAlt />
              </div>
              <div className="statistic-value">20K+</div>
              <div className="statistic-label">Lines of Code Written</div>
            </motion.div>
            
            <motion.div 
              className="statistic-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="statistic-icon">
                <BiCodeAlt />
              </div>
              <div className="statistic-value">10+</div>
              <div className="statistic-label">GitHub Contributions</div>
            </motion.div>
            
            <motion.div 
              className="statistic-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="statistic-icon">
                <BiBookOpen />
              </div>
              <div className="statistic-value">5+</div>
              <div className="statistic-label">Technical Courses Completed</div>
            </motion.div>
          </div>
        </div>

        <div className="skills-timeline">
          <h2 className="section-title">My Learning Journey</h2>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2023</div>
                <h3 className="timeline-title">Started Web Development</h3>
                <p className="timeline-description">Began my journey with HTML, CSS, and JavaScript fundamentals</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h3 className="timeline-title">Mastered React Ecosystem</h3>
                <p className="timeline-description">Focused on modern frontend development with React, Redux, and related technologies</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h3 className="timeline-title">Full Stack Development</h3>
                <p className="timeline-description">Expanded skills to include Node.js, Express, and database technologies</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">Explore</div>
                <h3 className="timeline-title">DevOps & Cloud Technologies</h3>
                <p className="timeline-description">Embraced AWS, Docker, and modern deployment workflows</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">Explore</div>
                <h3 className="timeline-title">Exploring New Frontiers</h3>
                <p className="timeline-description">Currently focusing on Web3, AI integration, and advanced architecture patterns</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="skills-footer">
          <div className="skills-summary">
            <h2>My Development Philosophy</h2>
            <p>
              I believe in writing clean, maintainable code that follows best practices and industry standards.
              My approach combines technical excellence with creative problem-solving to build robust, 
              scalable applications that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="skills-cta">
              <h3>Ready to collaborate?</h3>
                 <a href="https://github.com/new"  className="connect-btn"onClick={() => window.location.href = 'https://github.com/new'}
                >
                  Let's Create Something Amazing <FaArrowRight />
                </a>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

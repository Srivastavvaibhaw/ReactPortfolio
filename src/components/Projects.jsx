import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaBars, FaTimes,
  FaExternalLinkAlt, FaCode, FaLaptopCode, FaRobot, FaLock, FaTrain,
  FaMicrophone, FaUtensils, FaShoppingCart, FaFilm, FaChartBar, FaCreditCard,
  FaShieldAlt, FaKey, FaWallet
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiSocketdotio, SiPython, SiTensorflow, SiArduino, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiRedux, SiBootstrap } from 'react-icons/si';
import '../styles/Projects.css';

const Projects = ({ goBack, navigateTo }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showFeatures, setShowFeatures] = useState({});
  const projectsRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    const starsContainer = document.getElementById('stars-projects');
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

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const recentProjects = [
    {
      id: "recent-1",
      title: "Chat App",
      description: "A secure real-time chat platform with end-to-end encryption, user authentication, and file sharing capabilities.",
      icon: <FaLock />,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" }
      ],
      color: "#6366F1"
    },
    {
      id: "recent-2", 
      title: "AI Interview Helper",
      description: "An AI-powered platform that helps users prepare for job interviews with personalized feedback and practice sessions.",
      icon: <FaRobot />,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" }
      ],
      color: "#10B981"
    },
    {
      id: "recent-3",
      title: "College Counselling Website", 
      description: "A comprehensive platform to help students with college applications, guidance, and scholarship information.",
      icon: <FaCode />,
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Express", icon: <SiExpress />, color: "#000000" }
      ],
      color: "#8B5CF6"
    },
    {
      id: "recent-4",
      title: "Automatic Railway Barricade System",
      description: "An IoT-based automated system that detects approaching trains and controls railway barricades for enhanced safety.",
      icon: <FaTrain />,
      techStack: [
        { name: "Arduino", icon: <SiArduino />, color: "#00979D" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" }
      ],
      color: "#EF4444"
    },
    
  ];

  const projects = [
    {
      id: 1,
      title: "Private Chat Application",
      description: "A secure real-time chat platform with end-to-end encryption, user authentication, and file sharing capabilities.",
      icon: <FaLock />,
      image: "/images/chatapp.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Express", icon: <SiExpress />, color: "#000000" },
        { name: "Socket.io", icon: <SiSocketdotio />, color: "#010101" }
      ],
      features: [
        "End-to-end encrypted messaging",
        "Real-time notifications",
        "User authentication & authorization", 
        "File and media sharing",
        "Message history and search",
        "Group chat functionality"
      ],
      color: "#6366F1",
      links: {
        github: "https://github.com/Srivastavvaibhaw/chat-application",
        live: "https://private-chat-app.example.com"
      },
      type: "Full Stack"
    },
    {
      id: 2,
      title: "AI Interview Helper",
      description: "An AI-powered platform that helps users prepare for job interviews with personalized feedback and practice sessions.",
      icon: <FaRobot />,
      image: "/images/ai-interview.jpg",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
        { name: "Python", icon: <SiPython />, color: "#3776AB" }
      ],
      features: [
        "AI-powered interview simulations",
        "Real-time feedback on answers",
        "Voice recognition and analysis",
        "Personalized question generation",
        "Progress tracking and analytics",
        "Industry-specific interview preparation"
      ],
      color: "#10B981",
      links: {
        github: "https://github.com/Srivastavvaibhaw/AI-Interview-Helper",
        live: "https://ai-interview.example.com"
      },
      type: "Full Stack"
    },
    {
      id: 3,
      title: "College Counselling Website",
      description: "A comprehensive platform to help students with college applications, guidance, and scholarship information.",
      icon: <FaCode />,
      image: "/images/college.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }
      ],
      features: [
        "Interactive college search",
        "Personalized guidance system",
        "Application tracking",
        "Scholarship database",
        "Virtual campus tours",
        "Counselor scheduling system"
      ],
      color: "#8B5CF6",
      links: {
        github: "https://github.com/yourusername/college-counselling",
        live: "https://campusscale.com/"
      },
      type: "Full Stack"
    },
    {
      id: 4,
      title: "Automatic Railway Barricade System",
      description: "An IoT-based automated system that detects approaching trains and controls railway barricades for enhanced safety.",
      icon: <FaTrain />,
      image: "/images/railwaysystem.jpg",
      techStack: [
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Arduino", icon: <SiArduino />, color: "#00979D" }
      ],
      features: [
        "Automated train detection using ultrasonic sensors",
        "Smart barricade control mechanism",
        "Emergency override system",
        "Power backup for continuous operation",
        "Real-time status monitoring",
        "Alert system for malfunctions"
      ],
      color: "#EF4444",
      links: {
        github: "https://github.com/yourusername/railway-barricade",
        live: null
      },
      type: "Hardware & IoT"
    },
    {
      id: 5,
      title: "Portfolio",
      description: "A personal portfolio website showcasing projects, skills, and professional experience.",
      icon: <FaCode />,
      image: "/images/portfolio.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" }
      ],
      features: [
        "Interactive UI/UX",
        "Project showcase",
        "Skills visualization",
        "Responsive design",
        "Contact form integration",
        "Downloadable resume"
      ],
      color: "#EC4899",
      links: {
        github: "https://github.com/yourusername/portfolio",
        live: "https://portfolio.example.com"
      },
      type: "Frontend"
    },
    {
      id: 6,
      title: "Password Secure App",
      description: "A comprehensive password management and security application that helps users create, store, and manage strong passwords.",
      icon: <FaShieldAlt />,
      image: "/images/passsecure.png",
      techStack: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" }
      ],
      features: [
        "Strong password generation",
        "Password strength analyzer",
        "Secure password storage with encryption",
        "Two-factor authentication",
        "Password breach detection",
        "Auto-fill functionality",
        "Cross-platform synchronization"
      ],
      color: "#0EA5E9",
      links: {
        github: "https://github.com/yourusername/password-secure",
        live: "https://password-secure.example.com"
      },
      type: "Frontend"
    },
    {
      id: 8,
      title: "JARVIS Voice Assistant",
      description: "An AI-powered voice assistant that recognizes speech commands and performs various tasks through voice interaction.",
      icon: <FaMicrophone />,
      image: "/images/jarvis.png",
      techStack: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Web Speech API", icon: <FaMicrophone />, color: "#0078D4" },
        { name: "Annyang.js", icon: <FaCode />, color: "#61DAFB" }
      ],
      "features": [
        "Voice command recognition",
        "Natural language processing",
        "Speech synthesis (text-to-speech)",
        "Task automation",
        "Dynamic command handling",
        "Custom voice responses",
        "System controls integration"
      ],
      "color": "#0EA5E9",
      "links": {
        "github": "https://github.com/yourusername/jarvis-assistant",
        "live": "https://jarvis-assistant.example.com"
      },
      "type": "Frontend"
    },
    {
      id: 8,
      title: "Wallet Secure",
      description: "A digital wallet security application that provides encryption and secure storage for financial information and digital assets.",
      icon: <FaWallet />,
      image: "/images/wallet.png",
      techStack: [
        { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" }
      ],
      features: [
        "End-to-end encryption for financial data",
        "Secure storage for credit card information",
        "Cryptocurrency wallet protection",
        "Transaction monitoring and alerts",
        "Backup and recovery options",
        "PIN and biometric locks",
        "Spending analysis and budgeting tools"
      ],
      color: "#8B5CF6",
      links: {
        github: "https://github.com/yourusername/wallet-secure",
        live: "https://wallet-secure.example.com"
      },
      type: "Frontend"
    },
    {
      id: 9,
      title: "Restaurant Website",
      description: "A modern, responsive website for a restaurant with online ordering, reservation system, and menu management.",
      icon: <FaUtensils />,
      image: "/images/restaurant.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
      ],
      features: [
        "Interactive menu with filtering options",
        "Online reservation system",
        "Food ordering and checkout",
        "Customer reviews and ratings",
        "Admin dashboard for menu management",
        "Responsive design for all devices"
      ],
      color: "#F59E0B",
      links: {
        github: "https://github.com/yourusername/restaurant-website",
        live: "https://restaurant.example.com"
      },
      type: "Frontend"
    },
    {
      id: 10,
      title: "Amazon Clone",
      description: "A full-featured e-commerce platform mimicking Amazon's core functionalities with user authentication and payment processing.",
      icon: <FaShoppingCart />,
      image: "/images/amazon.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
      ],
      features: [
        "User authentication and profiles",
        "Product search and filtering",
        "Shopping cart functionality",
        "Checkout process with payment integration",
        "Order history and tracking",
        "Responsive design"
      ],
      color: "#F97316",
      links: {
        github: "https://github.com/Srivastavvaibhaw/amazon-clone",
        live: "https://srivastavvaibhaw.github.io/amazon-clone/"
      },
      type: "Frontend"
    },
    {
      id: 11,
      title: "Netflix Clone",
      description: "A streaming platform clone with Netflix's UI, featuring movie browsing, trailers, and user profiles.",
      icon: <FaFilm />,
      image: "/images/netflix.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
      ],
      features: [
        "Movie and TV show browsing by category",
        "Trailer playback integration",
        "User authentication and profiles",
        "Watchlist and favorites",
        "Responsive Netflix-style UI",
        "Search functionality"
      ],
      color: "#DC2626",
      links: {
        github: "https://github.com/yourusername/netflix-clone",
        live: "https://netflix-clone.example.com"
      },
      type: "Frontend"
    },
    {
      id: 12,
      title: "Sorting Visualizer",
      description: "An interactive tool that visualizes various sorting algorithms, helping users understand how they work step-by-step.",
      icon: <FaChartBar />,
      image: "/images/sortingv.png",
      techStack: [
        { name: "React", icon: <SiReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" }
      ],
      features: [
        "Visualizations for multiple sorting algorithms",
        "Adjustable array size and sorting speed",
        "Step-by-step execution option",
        "Algorithm comparison mode",
        "Time and space complexity information",
        "Color-coded visualization"
      ],
      color: "#7C3AED",
      links: {
        github: "https://github.com/Srivastavvaibhaw/shorting-visualizer",
        live: "https://srivastavvaibhaw.github.io/shorting-visualizer/"
      },
      type: "Frontend"
    }
  ];

  const toggleProjectDetails = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const handleShowFeatures = (id) => {
    setShowFeatures(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="projects-page">
      <div className="stars" id="stars-projects"></div>
      
      <div className={`projects-container ${isVisible ? 'visible' : ''}`}>
        <div className="projects-intro">
          <h1 className="projects-title">My Projects</h1>
          <div className="projects-subtitle">
            Showcasing my <span className="highlight">creativity</span> and <span className="highlight">technical expertise</span> through real-world applications
          </div>
          
          <div className="project-types">
            <div className="project-type">
              <div className="type-icon fullstack">
                <FaLaptopCode />
              </div>
              <div className="type-count">3</div>
              <div className="type-name">Full Stack</div>
            </div>
            <div className="project-type">
              <div className="type-icon frontend">
                <FaCode />
              </div>
              <div className="type-count">8</div>
              <div className="type-name">Frontend</div>
            </div>
            <div className="project-type">
              <div className="type-icon hardware">
                <SiArduino />
              </div>
              <div className="type-count">1</div>
              <div className="type-name">Hardware</div>
            </div>
            <div className="project-type">
              <div className="type-icon ai">
                <FaRobot />
              </div>
              <div className="type-count">1</div>
              <div className="type-name">AI</div>
            </div>
          </div>
        </div>
        
        <section className="recent-projects-section">
          <h2 className="section-title">Recent Projects</h2>
          <div className="recent-projects-grid">
            {recentProjects.map((project) => (
              <div 
                className="recent-project-card"
                key={project.id}
                style={{ '--project-color': project.color }}
              >
                <div className="recent-project-header" style={{ backgroundColor: project.color }}>
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                
                <div className="recent-project-content">
                  <p className="recent-project-description">{project.description}</p>
                  <div className="recent-tech-stack">
                    {project.techStack.map((tech, index) => (
                      <div className="tech-badge" key={index} style={{ color: tech.color }}>
                        <span className="tech-icon">{tech.icon}</span>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="overall-projects-section">
          <h2 className="section-title">Overall Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                className={`project-card ${activeProject === project.id ? 'expanded' : ''}`}
                key={project.id}
                id={`project-${project.id}`}
                ref={el => projectsRef.current[project.id] = el}
                style={{ '--project-color': project.color }}
                onClick={() => toggleProjectDetails(project.id)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleProjectDetails(project.id);
                  }
                }}
                tabIndex="0"
                role="button"
                aria-expanded={activeProject === project.id}
              >
                <div className="project-header" style={{ backgroundColor: project.color }}>
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-type-badge">{project.type}</div>
                </div>
                
                <div className="project-content">
                  <div className="project-image-container">
                    <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <div className="project-links">
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link github" onClick={(e) => e.stopPropagation()}>
                          <FaGithub /> Code
                        </a>
                      )}
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="project-link live" onClick={(e) => e.stopPropagation()}>
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-description">
                    <p>{project.description}</p>
                  </div>
                  
                  <div className={`project-details ${activeProject === project.id ? 'visible' : ''}`}>
                    <div className="project-tech-stack">
                      <h4>Tech Stack</h4>
                      <div className="tech-icons">
                        {project.techStack.map((tech, index) => (
                          <div className="tech-item" key={index}>
                            <div className="tech-icon" style={{ color: tech.color }}>
                              {tech.icon}
                            </div>
                            <span className="tech-name">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      className="features-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShowFeatures(project.id);
                      }}
                    >
                      {showFeatures[project.id] ? 'Hide Features' : 'Show Features'}
                    </button>
                    
                    {showFeatures[project.id] && (
                      <div className="project-features">
                        <h4>Key Features</h4>
                        <ul className="features-list">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="project-expand">
                  {activeProject === project.id ? 'Show Less' : 'Show More'}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <div className="projects-footer">
          <div className="more-projects">
            <h3>Want to see more?</h3>
            <p>Check out my GitHub repository for additional projects and contributions.</p>
            <a href="https://github.com/Srivastavvaibhaw" target="_blank" rel="noreferrer" className="github-link">
              <FaGithub /> Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

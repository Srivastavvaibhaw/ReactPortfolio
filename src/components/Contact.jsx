import React, { useState, useEffect } from 'react';
import { 
  FaGithub, FaLinkedinIn, FaTwitter, FaInstagram,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane
} from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = ({ goBack, navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_email: 'srivastavvaibhaw17@gmail.com' // Your email address
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Create stars
    const starsContainer = document.getElementById('stars-contact');
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'daa2dd63-75c8-44e8-ab5f-06a28e45973b', // Replace with your Web3Forms access key
          ...formData
        })
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setFormData({
          ...formData,
          name: '',
          email: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }

    setTimeout(() => {
      setStatus(null);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="stars" id="stars-contact"></div>
      
      <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
        <section className="contact-info">
          <h2 className="section-title">Contact Information</h2>
          <p className="contact-description">
            Feel free to reach out for collaboration opportunities, project inquiries, or just to say hello!
          </p>
          
          <div className="info-list">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>India</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>srivastavvaibhaw17@gmail.com</span>
            </div>
          </div>
        </section>
        
        <section className="contact-form">
          <h2 className="section-title">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="form-wrapper">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input form-textarea"
                placeholder="Write your message here"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="submit-button"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <FaPaperPlane className="submit-icon" />
            </button>
          </form>
          
          {status === 'success' && (
            <div className="status-message success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error-message">
              Oops! There was an error submitting your message. Please try again.
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Contact;

// Footer.js
import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import linkdin from '../images/linkdinIcon.png'
import github from '../images/githublogo.png'
function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Me</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required></textarea>
            </div>
            <button className='footerbtn' type="submit">Send</button>
          </form>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/bhavesh-taparia-2790b5230/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"><i ><img src={linkdin}/></i></a>
            <a href="https://github.com/bhaveshtaparia?tab=repositories" target="_blank" rel="noopener noreferrer"><i ><img src={github}/></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bhavesh Taparia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

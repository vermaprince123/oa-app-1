import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-icon">A</div>
          <div className="footer-logo-text">Protecting what matters most to you</div>
        </div>
        <div className="footer-links">
          <div className="footer-links-column">
            <div className="footer-links-title">Quick Links</div>
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Plans & Services</a>
            <a href="#" className="footer-link">Claims & Support</a>
            <a href="#" className="footer-link">About Us</a>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">Contact Us</div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">&#9742;</span>
              <span className="footer-contact-text">1800-123-4567</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">&#9993;</span>
              <span className="footer-contact-text">support@oneassist.com</span>
            </div>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">Follow Us</div>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon">f</a>
              <a href="#" className="footer-social-icon">in</a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          &copy; 2025 OneAssist. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
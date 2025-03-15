import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/TokoDrink/tokodrinkLogoWhite.png" alt="Company Logo" />
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-divider"></div>
          <div className="footer-social">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.gojek.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-golang"></i>
            </a>
            <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-threads"></i>
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

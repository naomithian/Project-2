import React from 'react';
import './Footer.css';
import footerImage from '../assets/footerimage.png'; // Adjust the path if necessary

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <h1 className="footer_header">Ready to redefine <br /> your space?</h1>
        <img className="footer_image" src={footerImage} alt="chair and wheat" />
        <p id="footer_text"></p>
        <a><h2 id="footer_link"></h2></a>
        <div className="bottom_container">
          <div className="bottom_left">
            <h2 id="news"></h2>
            <p id="bot_p"></p>
            <p id="email"></p>
            <hr />
            <h2 id="subscribe">Contact Us Now</h2>
            <nav className="navbar">
              <div className="nav-column">
                <h3 id="quick"></h3>
                <ul>
                  <li><a href="#">Home page</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <h3 id="info"></h3>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Cookie Policy</a></li>
                </ul>
              </div>
              <div className="nav-column">
                <h3 id="contact"></h3>
                <ul>
                  <li>+1234 4567 890</li>
                  <li><a href="mailto:info@ndh.com">info@ndh.com</a></li>
                  <li>123 Anywhere St., Any City, 12345 Any State</li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

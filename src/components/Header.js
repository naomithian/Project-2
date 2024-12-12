import React from 'react';
import './Header.css';
import roomDesign1 from '../assets/nathan-van-egmond-0IwypLLbHiA-unsplash 1.png';
import roomDesign2 from '../assets/kam-idris-_HqHX3LBN18-unsplash 1.png';
import arrowLeft from '../assets/Left.png';
import arrowRight from '../assets/Right.png';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">NDH STUDIO</div>
        <ul className="nav-links">
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="#">PORTFOLIO</a></li>
          <li><a href="#">BLOGS</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </nav>
      <div className="hero">
        <div className="hero-content">
          <h1>Beyond Design:<br />It's a Lifestyle</h1>
          <p>With NDH Studio, every room becomes a statement, a reflection of elegance, personality, and the unique rhythm of your life.</p>
          <p id="lux"></p>
          <a href="#" className="cta">BEGIN YOUR DESIGN JOURNEY →</a>
        </div>
        <div className="image-gallery">
          <img src={roomDesign1} alt="Room design 1" />
          <img src={roomDesign2} alt="Room design 2" />
          <div className="arrow-navigation">
            <img src={arrowLeft} alt="Previous" className="arrow" />
            <img src={arrowRight} alt="Next" className="arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

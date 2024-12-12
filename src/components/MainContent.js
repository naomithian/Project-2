import React from 'react';
import './MainContent.css';
import whoWeAreImg from '../assets/WhoWeAre.png'; 
import elementImg from '../assets/Element.png'; 

const MainContent = () => {
  return (
    <div id="MainContent" className="new-layout">
      <div className="image-left">
        <img src={whoWeAreImg} alt="Left side image" />
      </div>
      <div className="image-center">
        <img src={elementImg} alt="Center image" />
      </div>
      <div className="text-right">
        <h1>Who We Are</h1>
        <p>NDH is more than design—it's emotion. Marrying luxury with meaning, we shape spaces that mirror individual narratives and foster connections. Each room becomes an echo of personal stories and dreams realized.</p>
        <p id="ndh"></p>
        <a href="#" className="read-more">READ MORE</a>
      </div>
    </div>
  );
};

export default MainContent;

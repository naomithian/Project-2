import React, { useState } from 'react';
import './MainContent.css';
import whoWeAreImg from '../assets/WhoWeAre.png';
import elementImg from '../assets/Element.png';

const MainContent = ({ initialText }) => {
  const [textVisible, setTextVisible] = useState(true);

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
        {textVisible && <p>{initialText}</p>}
        <button onClick={() => setTextVisible(!textVisible)}>
          Toggle Text
        </button>
        <p id="ndh"></p>
        <a href="#" className="read-more">READ MORE</a>
      </div>
    </div>
  );
};

export default MainContent;

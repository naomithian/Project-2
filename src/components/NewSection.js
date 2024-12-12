import React from 'react';
import './NewSection.css';
import arrowLeft from '../assets/Left.png'; 
import arrowRight from '../assets/Right.png'; 
import card1 from '../assets/Card1.png'; 
import card2 from '../assets/Card2.png'; 
import card3 from '../assets/Card3.png'; 
import card4 from '../assets/Card4.png'; 

const NewSection = () => {
  return (
    <section className="new-section">
      <div className="section-title">Design Principles, Life Values</div>
      <div className="section-arrows">
        <img src={arrowLeft} alt="Previous" className="arrow" />
        <img src={arrowRight} alt="Next" className="arrow" />
      </div>
      <div className="images-row">
        <img src={card1} alt="Principle 1" />
        <img src={card2} alt="Principle 2" />
        <img src={card3} alt="Principle 3" />
        <img src={card4} alt="Principle 4" />
      </div>
    </section>
  );
};

export default NewSection;

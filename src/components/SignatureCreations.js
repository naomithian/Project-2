import React from 'react';
import './SignatureCreations.css';
import oceanicImg from '../assets/Oceanic.png'; 
import urbanImg from '../assets/Urban.png'; 
import rusticImg from '../assets/Rustic.png'; 

const SignatureCreations = () => {
  return (
    <section className="signature-creations">
      <h2 className="section-title">Signature Creations</h2>
      <div className="creation">
        <img src={oceanicImg} alt="Oceanic Elegance" />
        <div className="creation-description">
          <h3>Oceanic Elegance</h3>
          <p>Embrace the tranquility of coastal living with oceanic elements.</p>
          <p id="embrace"></p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
      </div>
      <div className="creation">
        <img src={urbanImg} alt="Urban Sophistication" />
        <div className="creation-description">
          <h3>Urban Sophistication</h3>
          <p>Modern and minimalist design in a contemporary urban setting.</p>
          <p id="modern"></p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
      </div>
      <div className="creation">
        <img src={rusticImg} alt="Rustic Revival" />
        <div className="creation-description">
          <h3>Rustic Revival</h3>
          <p>The charm of a country house with raw, earthy aesthetics.</p>
          <p id="charm"></p>
          <a href="#" className="learn-more">LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};

export default SignatureCreations;

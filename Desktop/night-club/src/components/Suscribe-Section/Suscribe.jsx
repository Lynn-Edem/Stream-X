import React from 'react';
import './suscribe.css';

const Suscribe = () => {
  return (
    <section className="hero-section">
     
      <div className="hero-header">
        <div className="instagram-id">INSTAGRAM ID</div>
        <button className="follow-button">FOLLOW US</button>
      </div>


      <div className='suscribe-container'>
      <div className="image-section">
        <img 
          src="./assets/suscribe.png" 
          alt="Runway Nightclub" 
          className="club-image"
        />
      </div>

 
      <div className="subscription-section">
        <p>Subscribe/Sign up to receive Runway nightclub’s Newsletter.</p>
        <p>By subscribing you agree to our privacy policy.</p>
        <div className="subscription-form">
          <input 
            type="email" 
            placeholder="Enter email address" 
            className="email-input"
          />
          <button className="submit-button">SUBMIT</button>
        </div>
      </div>


      <div className="privacy-policy">
        <p>
          We will process your data in accordance with our privacy policy. 
          We use technology to help ensure we send you what you want and 
          stop sending you what you don’t want. 
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Click here to see our privacy policy and find out more.</a>
        </p>
      </div>
      </div>
    </section>
  );
};

export default Suscribe;

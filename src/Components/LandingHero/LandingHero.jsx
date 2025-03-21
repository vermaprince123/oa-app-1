import React from 'react';
import './LandingHero.css';

const LandingHero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Protect What Matters in <br /> Mumbai</h1>
        <p>Comprehensive protection plans for your devices and appliances. Get instant coverage and hassle-free service.</p>
        <div className="hero-buttons">
          <button className="explore-button">Explore Plans</button>
          <div className="trust-text">Trusted by 1M+ customers</div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
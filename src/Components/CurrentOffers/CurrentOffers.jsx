import React from 'react';
import './CurrentOffers.css';

const CurrentOffers = () => {
  return (
    <div className="current-offers-section">
      <div className="current-offers-title">Limited Time Offers</div>
      <div className="current-offers-cards">
        <div className="current-offers-card">
          <div className="current-offers-card-title">Flat ₹500 Off on Laptop Protection</div>
          <div className="current-offers-card-subtitle">Valid only for today!</div>
          <button className="current-offers-card-button">Claim Now</button>
        </div>
        <div className="current-offers-card">
          <div className="current-offers-card-title">15% Off on Multi-Appliance AMC</div>
          <div className="current-offers-card-subtitle">For Mumbai residents only</div>
          <button className="current-offers-card-button">Claim Now</button>
        </div>
      </div>
    </div>
  );
};

export default CurrentOffers;
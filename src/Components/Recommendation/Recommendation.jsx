import React from 'react';
import './Recommendation.css';

const Recommendation = () => {
  return (
    <div className="recommendation-section">
      <div className="recommendation-title">Recommended Plans for You</div>
      <div className="recommendation-cards">
        <div className="recommendation-card">
          <div className="card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
          <div className="card-title">Mobile Protection Plan</div>
          <div className="card-description">Complete protection for your smartphone against damage & theft</div>
          <div className="card-price">₹799 <span className="price-duration">/year</span></div>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="recommendation-card">
          <div className="card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
          <div className="card-title">Laptop Extended Warranty</div>
          <div className="card-description">Extended protection and repair coverage for your laptop</div>
          <div className="card-price">₹1,299 <span className="price-duration">/year</span></div>
          <button className="buy-button">Buy Now</button>
        </div>
        <div className="recommendation-card">
          <div className="card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
          <div className="card-title">AC Servicing & Repair</div>
          <div className="card-description">Professional AC service with parts replacement coverage</div>
          <div className="card-price">₹599</div>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
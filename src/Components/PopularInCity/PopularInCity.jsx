import React from 'react';
import './PopularInCity.css';

const PopularInCity = () => {
  return (
    <div className="popular-in-city-section">
      <div className="popular-in-city-title">Popular in Mumbai</div>
      <div className="popular-in-city-cards">
        <div className="popular-in-city-card">
          <div className="popular-in-city-card-header">
            <div className="popular-in-city-card-icon"></div>
            <div className="popular-in-city-card-main-title">Most Popular Choice</div>
          </div>
          <div className="popular-in-city-card-description">80% of users in Mumbai chose Mobile Protection Plan</div>
        </div>
        <div className="popular-in-city-card">
          <div className="popular-in-city-card-header">
            <div className="popular-in-city-card-icon"></div>
            <div className="popular-in-city-card-main-title">Customer Favorite</div>
          </div>
          <div className="popular-in-city-card-description">Home Appliance AMC Plan is trending in your area</div>
        </div>
      </div>
    </div>
  );
};

export default PopularInCity;
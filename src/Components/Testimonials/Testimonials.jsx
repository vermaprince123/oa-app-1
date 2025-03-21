import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-title">What People Say About Us</div>
      <div className="testimonials-cards">
        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image"></div>
            <div className="testimonials-card-content">
              <div className="testimonials-card-name">Rahul Sharma</div>
              <div className="testimonials-card-stars">
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
              </div>
            </div>
          </div>
          <div className="testimonials-card-text">"Quick & reliable service for my iPhone screen replacement!"</div>
        </div>
        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image"></div>
            <div className="testimonials-card-content">
              <div className="testimonials-card-name">Priya Patel</div>
              <div className="testimonials-card-stars">
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
              </div>
            </div>
          </div>
          <div className="testimonials-card-text">"OneAssist made my laptop repair so easy. Great experience!"</div>
        </div>
        <div className="testimonials-card">
          <div className="testimonials-card-header">
            <div className="testimonials-card-image"></div>
            <div className="testimonials-card-content">
              <div className="testimonials-card-name">Amit Kumar</div>
              <div className="testimonials-card-stars">
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
                <div className="testimonials-card-star"></div>
              </div>
            </div>
          </div>
          <div className="testimonials-card-text">"Professional AC service at a very reasonable price!"</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
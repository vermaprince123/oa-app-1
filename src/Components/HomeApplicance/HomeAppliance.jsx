import React from 'react';
import './HomeAppliance.css';

const HomeAppliance = () => {
    return (
        <div className="home-appliance-section">
            <div className="home-appliance-title">Home Appliance Protection</div>
            <div className="home-appliance-cards">
                <div className="home-appliance-card">
                    <div className="home-appliance-card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
                    <div className="home-appliance-card-content">
                        <div className="home-appliance-card-title">AC Servicing</div>
                        <div className="home-appliance-card-description">Professional service</div>
                        <div className="home-appliance-card-price">₹799</div>
                    </div>
                </div>
                <div className="home-appliance-card">
                    <div className="home-appliance-card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
                    <div className="home-appliance-card-content">
                        <div className="home-appliance-card-title">Washing Machine Repair</div>
                        <div className="home-appliance-card-description">Expert repairs</div>
                        <div className="home-appliance-card-price">₹499</div>
                    </div>
                </div>
                <div className="home-appliance-card">
                    <div className="home-appliance-card-icon"></div>  {/* TODO: NEED TO ADD ICON HERE */}
                    <div className="home-appliance-card-content">
                        <div className="home-appliance-card-title">Refrigerator Protection</div>
                        <div className="home-appliance-card-description">Complete coverage</div>
                        <div className="home-appliance-card-price">₹599</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAppliance;
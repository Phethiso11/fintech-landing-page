import React from "react";
import "./App.css";
import phoneImage from "./phone_card.png"; // Placeholder for the phone image
import visaCardImage from "./card.png"; // Placeholder for the card image

const App = () => {
    return (
        <div className="landing-page">
            <section className="content-wrapper">
                {/* Left Phone Section */}
                <div className="left-section">
                    <div className="phone-mockup">
                        <img src={phoneImage} alt="Phone with Form" />
                    </div>
                </div>

                {/* Right Content Section */}
                <div className="right-section">
                    <div className="badge">🔥 TRUSTWORTHINESS</div>
                    <h1>WE VALUE YOUR TRUST AND SECURITY</h1>
                    <p>
                        Our Mission Is To Make Finance More Accessible, Transparent, And Secure
                        For Everyone. With Cutting.
                    </p>
                    <button className="cta-button">
                        Get Started <span className="arrow">→</span>
                    </button>
                </div>

                {/* Visa Card Image */}
                <div className="visa-card">
                    <img src={visaCardImage} alt="Visa Cash Rewards Card" />
                </div>
            </section>
        </div>
    );
};

export default App;

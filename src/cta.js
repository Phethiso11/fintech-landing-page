import React from "react";
import './cta.css';
import phones from './phones.png';
import ctabutton from './cta-button.png';


const App = () => {
    return (

        <div className="landing-page">

            <div className="featured-tag">
                <span>🔥 FEATURED</span>
            </div>
            <section className="app-preview">
                <div className="text-content">
                    <h1>ALL THE FEATURES IN ONE APP</h1>
                    <ul>
                        <li>Get 3% Cash Back On Everyday Purchases, 2% On Everything Else</li>
                        <li>Extra Spending Power When You Have Rewards Checking Through Upgrade</li>
                    </ul>
                    <img src={ctabutton} alt="" />
                </div>
                <div className="phone-mockup">
                    <img src={phones} alt="Phone with Card Settings" />
                </div>
            </section>

        </div>
    );
};

export default App;

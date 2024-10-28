import React from "react";
import phone from './Group 469294.png';
import sph from './Logo wrap.png';
import sam from './Frame 469274.png';
import visa from './visa.png';
import ama from './ama.png';
import pay from './Paypal.png';
import ali from './ali.png';
import ChartSection from './chart.js';
import CtaSection from './cta.js';
import sec from './sec.png';
import sec2 from './sec2.png';
import sec3 from './sec3.png';
export default function App() {
  return (
    <><div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>Upgrade</div>
        <ul style={styles.navLinks}>
          <li>Personal Loan</li>
          <li>One Card</li>
          <li>Savings</li>
          <li>Checking</li>
          <li>Help</li>
        </ul>
        <button style={styles.signInButton}>Sign In</button>
      </nav>

      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.textContent}>
          <span style={styles.trustedBadge}>🔥 100% TRUSTED PLATFORM</span>
          <h1 style={styles.heroHeading}>
            FINANCE WITH SECURITY AND <span style={styles.highlightText}>FLEXIBILITY</span>
          </h1>
          <p style={styles.heroSubheading}>
            No-Fee Checking Account With Cash Back Rewards. Enjoy Fee-Free Spending And Earn Cash Back On Your Everyday
            Purchases.
          </p>
          <button style={styles.openAccountButton}>Open Account →</button>
        </div>

        <div style={styles.imageSection}>
          <img
            src={phone}
            alt="Mobile showing transaction"
            style={styles.heroImage} />
        </div>
      </div>

      {/* Footer Section with Logos */}
      <div style={styles.footer}>
        <img src={sph} alt="Spherule" style={styles.footerLogo} />
        <img src={sam} alt="Samsung Pay" style={styles.footerLogo} />
        <img src={visa} alt="Visa" style={styles.footerLogo} />
        <img src={ama} alt="Amazon Pay" style={styles.footerLogo} />
        <img src={pay} alt="Paypal" style={styles.footerLogo} />
        <img src={ali} alt="Alipay" style={styles.footerLogo} />
      </div>
    </div>
      <ChartSection />
      <CtaSection />
      <img style={{
        width: "80%",
      }} src={sec} alt="" />
      <img style={{
        width: "80%",
      }} src={sec2} alt="" />
      <img style={{
        width: "80%",
        alignItems: "center",
      }} src={sec3} alt="" />
    </>
  );
}

const styles = {
  body: {
    backgroundColor: "white",
  },
  container: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#000000",
    color: "white",
    padding: 0,
    margin: 0,
    overflowX: "hidden",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00FF00", // Upgrade green
  },
  navLinks: {
    display: "flex",
    listStyleType: "none",
    gap: "20px",
  },
  signInButton: {
    backgroundColor: "transparent",
    border: "1px solid white",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
  heroSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "80px 100px",
  },
  textContent: {
    flex: 1,
    paddingRight: "50px",
  },
  trustedBadge: {
    fontSize: "14px",
    color: "#FFB800", // Orange trusted badge color
    marginBottom: "20px",
    display: "inline-block",
  },
  heroHeading: {
    fontSize: "60px",
    fontWeight: "bold",
    lineHeight: "70px",
  },
  highlightText: {
    color: "#C8FF00", // Highlighted text color
  },
  heroSubheading: {
    fontSize: "18px",
    marginTop: "20px",
    color: "#D1D1D1",
  },
  openAccountButton: {
    marginTop: "30px",
    backgroundColor: "#00FF00",
    border: "none",
    padding: "15px 30px",
    borderRadius: "30px",
    fontSize: "18px",
    color: "black",
    cursor: "pointer",
  },
  imageSection: {
    flex: 1,
  },
  heroImage: {
    width: "400px",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    marginTop: "50px",
    backgroundColor: "#04684C",
  },
  footerLogo: {
    margin: "0 20px",
    height: "40px",
  },
};

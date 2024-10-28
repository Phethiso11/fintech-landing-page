import React from "react";
import chart from './chart.png';

export default function App() {
    return (
        <div style={styles.container}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <div style={styles.aboutUs}>
                    <span style={styles.fireIcon}>🔥</span> ABOUT US
                </div>
            </nav>

            {/* Main Content */}
            <div style={styles.mainContent}>
                {/* Chart Section */}
                <div style={styles.chartSection}>
                    <div style={styles.chartCard}>
                        <h3 style={styles.cardTitle}>Saving Month</h3>
                        <h1 style={styles.amount}>$ 1852,00</h1>
                        <p style={styles.increaseText}>Increase of <span style={styles.increasePercentage}>12%</span> from last month</p>
                        {/* Image of chart */}
                        <img
                            src={chart} // Replace with the correct path
                            alt="Savings Chart"
                            style={styles.chartImage}
                        />
                    </div>
                </div>

                {/* Tracker and Info Section */}
                <div style={styles.infoSection}>
                    <h1>ALL YOUR MONEY <br /> NEEDS IN ONE APP</h1>
                    <div style={styles.expensesTrackerCard}>
                        <h3 style={styles.trackerTitle}>Expenses Tracker</h3>
                        <p style={styles.trackerDescription}>
                            Our comprehensive selection of medications, supplements, and healthcare products.
                        </p>
                    </div>

                    <div style={styles.cryptoConnectionCard}>
                        <h3 style={styles.cryptoTitle}>Crypto Connection</h3>
                        <p style={styles.cryptoDescription}>
                            From advanced imaging technology such as MRI and CT scanners to precision surgical tools.
                        </p>
                    </div>

                    <div style={styles.invoicingCard}>
                        <h3 style={styles.invoicingTitle}>Automated Invoicing</h3>
                        <p style={styles.invoicingDescription}>
                            We're committed to leveraging the latest innovations in medical technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#000000", // Black background
        color: "white", // White text
        padding: 0,
        margin: 0,
        height: "100vh",
    },
    navbar: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 40px",
        backgroundColor: "#000000",
    },
    aboutUs: {
        backgroundColor: "white",
        color: "#000000",
        padding: "10px 20px",
        borderRadius: "30px",
        fontSize: "14px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "5px",
    },
    fireIcon: {
        color: "#FF6B00", // Fire emoji color (orange)
    },
    mainContent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
    },
    chartSection: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    chartCard: {
        backgroundColor: "#034B57",
        borderRadius: "20px",
        padding: "30px",
        width: "400px",
        height: "450px",
        position: "relative",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cardTitle: {
        fontSize: "18px",
        color: "#FFFFFF",
        opacity: "0.8",
    },
    amount: {
        fontSize: "38px",
        fontWeight: "bold",
        color: "#FFFFFF",
        marginTop: "10px",
    },
    increaseText: {
        fontSize: "16px",
        color: "#C8FF00",
        marginTop: "10px",
    },
    increasePercentage: {
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    chartImage: {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
    },
    infoSection: {
        flex: 1,
        padding: "0 40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },
    expensesTrackerCard: {
        backgroundColor: "#E6FAD1",
        borderRadius: "15px",
        padding: "20px",
        color: "#000000",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    trackerTitle: {
        fontSize: "20px",
        fontWeight: "bold",
    },
    trackerDescription: {
        fontSize: "16px",
        marginTop: "10px",
    },
    cryptoConnectionCard: {
        backgroundColor: "#000000",
        borderRadius: "15px",
        padding: "20px",
        color: "#7B8B95",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cryptoTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#8CC63F",
    },
    cryptoDescription: {
        fontSize: "16px",
        marginTop: "10px",
    },
    invoicingCard: {
        backgroundColor: "#000000",
        borderRadius: "15px",
        padding: "20px",
        color: "#7B8B95",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    invoicingTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#347B83",
    },
    invoicingDescription: {
        fontSize: "16px",
        marginTop: "10px",
    },
};

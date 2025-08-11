import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    hero: {
      textAlign: 'center',
      padding: '4rem 1rem',
      background: 'linear-gradient(to right, #0d6efd, #0b5ed7)',
      color: 'white'
    },
    heroBtns: {
      marginTop: '1rem'
    },
    btn: {
      background: 'white',
      color: '#0d6efd',
      padding: '0.5rem 1.2rem',
      borderRadius: '5px',
      textDecoration: 'none',
      margin: '0 0.5rem',
      display: 'inline-block'
    },
    btnOutline: {
      background: 'transparent',
      border: '1px solid white',
      color: 'white'
    },
    features: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '3rem 0',
      flexWrap: 'wrap'
    },
    featureBox: {
      maxWidth: '200px',
      textAlign: 'center',
      margin: '1rem'
    }
  };

  return (
    <div>
      <section style={styles.hero}>
        <h1>Welcome to RapidReach Courier Service</h1>
        <p>Fast, Reliable, and Secure Delivery at Your Fingertips.</p>
        <div style={styles.heroBtns}>
          <Link to="/register" style={styles.btn}>Get Started</Link>
          <Link to="/login" style={{...styles.btn, ...styles.btnOutline}}>Login</Link>
        </div>
      </section>

      <section style={styles.features}>
        <div style={styles.featureBox}>
          <h3>🚚 Fast Delivery</h3>
          <p>Your parcel reaches in record time.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>🔐 Secure Shipping</h3>
          <p>We ensure safe handling of your packages.</p>
        </div>
        <div style={styles.featureBox}>
          <h3>📍 Live Tracking</h3>
          <p>Track your shipment in real-time.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;

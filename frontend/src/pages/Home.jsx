import React from 'react';
import './Home.css'; // Add custom CSS for specific page styles
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <img src="/path-to-your-image.jpg" alt="Church community" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to the Orthodox Church of Fargo</h1>
          <p>Join us in our spiritual journey, where faith, community, and tradition meet.</p>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
      <div className="container mt-5">
        <h2>Latest Announcements</h2>
        <ul>
          <li>Sunday Service - 10 AM</li>
          <li>Wednesday Evening Bible Study - 7 PM</li>
          <li>Annual Church Picnic - September 24th</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

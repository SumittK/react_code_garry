// src/HomePage.js
import React from 'react';
import './HomePage.css'; // Optional CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to Our Demo Home Page</h1>
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <h2>About Us</h2>
        <p>
          This is a simple demo home page built with React. Explore our services
          and learn more about what we do!
        </p>

        <h2>Our Services</h2>
        <ul>
          <li>Service One</li>
          <li>Service Two</li>
          <li>Service Three</li>
        </ul>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Demo Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

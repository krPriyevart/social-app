import React from 'react';
import './stylesheet/Home.css';
import boy1 from '../assets/boy1.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">SOCIALAPP</div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="#" className="nav-link">Features</Link>
          <Link to="#" className="nav-link">Contact Us</Link>
          <Link to="#" className="nav-link">Profile</Link>
        </nav>
        <div className="hamburger">

        </div>
      </header>

      <main className="main">
        <div className="content">
          <h1>Track Your Youtube Playlist<br />
            SMARTER.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="buttons">
          <Link to="/Register"><button className="button">Sign Up</button></Link>
          <Link to="/Login"><button className="button">Log In</button></Link>
          </div>
        </div>

        <div className="image">
          <img src={boy1} alt="Boy with backpack" />
        </div>
      </main>

      <footer className="footer">
      <p>Molitube.com</p>
        <div className="footer-content">
        
          <div className="social-links">
            <a href="#" className="social-link">FACEBOOK</a>
            <a href="#" className="social-link">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
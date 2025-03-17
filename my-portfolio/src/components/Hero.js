import React from 'react';
import Container from 'react-bootstrap/Container';
import './Hero.css';
import profileImage from './profile.jpg'; 

function Hero() {
  return (
    <section id="hero" className="hero">
      <Container>
        <div className="hero-content">
          <div className="profile-image" style={{ marginRight: '20px' }}>
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="text-content">
            <h1>Hi, I'm <span className="highlight">Suparin Srikhloi</span> <span className="wave">👋</span></h1>
            <p className="subtitle">I'm a student.</p>
            <div className="info">
              <p><i className="fas fa-mug-hot"></i> Recharge with cocoa</p>
              <p><i className="fas fa-globe"></i> I live in Chanthaburi Province</p>
              <p><i className="fas fa-university"></i> Studying at KMUTNB</p>
              <p><i className="fas fa-laptop-code"></i> Electronics Computer Technology</p>
              <p><i className="fas fa-envelope"></i> suparin0282k@gmail.com</p>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100009148273019" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/riinnn.at/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://github.com/suparin13" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;


import React from 'react';
import Container from 'react-bootstrap/Container';
import './Aboutme.css';

function Aboutme() {
  return (
    <section id="about" className="py-5">
      <Container>
        <div className="terminal-container">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-body">
              <p>Hi 🙂</p>
              <p>
                Hello! I'm Suparin Srikhloi, a student at KMUTNB majoring in Electronics Computer. I strongly believe that your organization needs someone like me because I am determined to outperform AI in every way possible! 
              </p>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-body">
              <p>Hobbies 🙂</p>
              <div className="hobbies-list">
                <div className="hobby-item">
                  <i className="fas fa-book"></i> Reading
                </div>
                <div className="hobby-item">
                  <i className="fas fa-dumbbell"></i> Badminton
                </div>
                <div className="hobby-item">
                  <i className="fas fa-headphones"></i> Listening to Music
                </div>
                <div className="hobby-item">
                  <i className="fas fa-tv"></i> Watching Series
                </div>
                <div className="hobby-item">
                  <i className="fas fa-film"></i> Movies
                </div>
                <div className="hobby-item">
                  <i className="fas fa-utensils"></i> Cooking
                </div>
              </div>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-button red"></div>
              <div className="terminal-button yellow"></div>
              <div className="terminal-button green"></div>
            </div>
            <div className="terminal-body">
              <p>Future 🙂</p>
              <p>             
                In the future, I just want to enjoy what I do and live a life that makes me happy. I believe that true success comes from being content with myself and the journey I take. 💫
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Aboutme;
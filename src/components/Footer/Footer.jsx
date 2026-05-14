import React from 'react';
import { FaHeart, FaReact } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3><FaReact className="footer-icon"/> ReactVerse Academy</h3>
            <p>Master React.js with interactive lessons, hands-on labs, and a comprehensive syllabus tailored for your B.Tech term submission.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/modules">Syllabus</a></li>
              <li><a href="/labs">Practice Labs</a></li>
              <li><a href="/playground">Playground</a></li>
              <li><a href="/quiz">Quiz</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Built with <FaHeart className="heart-icon" /> using React + Vite. 
            &copy; {new Date().getFullYear()} ReactVerse Academy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

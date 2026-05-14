import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCode, FaCheckCircle } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Master React with <br />
              <span className="gradient-text">ReactVerse Academy</span>
            </h1>
            <p className="hero-subtitle">
              Interactive lessons, hands-on labs, and a comprehensive syllabus tailored for your B.Tech term submission. Start building modern web applications today.
            </p>
            <div className="hero-actions">
              <Link to="/modules" className="btn btn-primary">Start Learning</Link>
              <Link to="/playground" className="btn btn-outline">Try Playground</Link>
            </div>
          </div>
          <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card main-card">
              <div className="code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre>
                <code>
{`import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, ReactVerse!</h1>
      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why ReactVerse?</h2>
            <p>Everything you need to master React in one place.</p>
          </div>
          <div className="grid-cards">
            <div className="feature-card glass">
              <FaRocket className="feature-icon" />
              <h3>Modern Curriculum</h3>
              <p>Learn the latest React features including Hooks, Context API, and React Router.</p>
            </div>
            <div className="feature-card glass">
              <FaCode className="feature-icon" />
              <h3>Interactive Labs</h3>
              <p>Practice what you learn with hands-on coding exercises and mini-projects.</p>
            </div>
            <div className="feature-card glass">
              <FaCheckCircle className="feature-icon" />
              <h3>Quizzes & Tests</h3>
              <p>Test your knowledge and track your progress with interactive quizzes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

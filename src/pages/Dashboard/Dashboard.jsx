import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { FaGraduationCap, FaTrophy, FaFire } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page animate-fade-in">
      <header className="page-header">
        <div className="container">
          <h1 className="gradient-text">Student Dashboard</h1>
          <p>Welcome back, {user?.name}! Here's your progress.</p>
        </div>
      </header>

      <div className="container">
        <div className="dashboard-stats">
          <div className="stat-card glass">
            <div className="stat-icon-wrapper" style={{ background: 'var(--primary-color)' }}>
              <FaGraduationCap className="stat-icon" />
            </div>
            <div className="stat-content">
              <h3>Modules Completed</h3>
              <p className="stat-value">4 / 9</p>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon-wrapper" style={{ background: 'var(--secondary-color)' }}>
              <FaTrophy className="stat-icon" />
            </div>
            <div className="stat-content">
              <h3>Quiz Average</h3>
              <p className="stat-value">85%</p>
            </div>
          </div>
          <div className="stat-card glass">
            <div className="stat-icon-wrapper" style={{ background: 'var(--accent-color)' }}>
              <FaFire className="stat-icon" />
            </div>
            <div className="stat-content">
              <h3>Current Streak</h3>
              <p className="stat-value">5 Days</p>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-section glass">
            <h2>Recent Activity</h2>
            <ul className="activity-list">
              <li>
                <span className="activity-dot"></span>
                <div className="activity-details">
                  <h4>Completed Module: State & Events</h4>
                  <span className="activity-time">2 hours ago</span>
                </div>
              </li>
              <li>
                <span className="activity-dot"></span>
                <div className="activity-details">
                  <h4>Passed Quiz: React Basics</h4>
                  <span className="activity-time">Yesterday</span>
                </div>
              </li>
              <li>
                <span className="activity-dot"></span>
                <div className="activity-details">
                  <h4>Started Lab: Task Manager</h4>
                  <span className="activity-time">3 days ago</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

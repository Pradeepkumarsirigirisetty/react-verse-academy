import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <FaGraduationCap className="logo-icon" />
          <span className="gradient-text">ReactVerse</span>
        </Link>

        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/modules" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Syllabus</NavLink>
          <NavLink to="/labs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Labs</NavLink>
          <NavLink to="/playground" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Playground</NavLink>
          <NavLink to="/quiz" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Quiz</NavLink>
          <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Resources</NavLink>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />

          {isAuthenticated ? (
            <div className="user-menu">
              <Link to="/dashboard" className="nav-link dashboard-link">
                <FaUserCircle /> {user?.name}
              </Link>
              <button onClick={logout} className="btn btn-outline btn-sm">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

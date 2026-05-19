import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home/Home';
import Modules from './pages/Modules';
import ModuleDetail from './pages/ModuleDetail/ModuleDetail';
import LabDetail from './pages/LabDetail/LabDetail';
import Labs from './pages/Labs/Labs';
import Playground from './pages/Playground/Playground';
import Quiz from './pages/Quiz/Quiz';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Resources from './pages/Resources';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/modules/:id" element={<ModuleDetail />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/labs/:id" element={<LabDetail />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            {/* 404 Route */}
            <Route path="*" element={
              <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

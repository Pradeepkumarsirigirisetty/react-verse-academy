import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for mock token in localStorage on initial load
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'student@reactverse.edu' && password === 'react123') {
          const mockUser = { id: 1, name: 'Student', email, role: 'student' };
          const mockToken = 'mock_jwt_token_header.payload.signature';
          
          localStorage.setItem('token', mockToken);
          localStorage.setItem('user', JSON.stringify(mockUser));
          
          setUser(mockUser);
          resolve({ success: true });
        } else {
          reject({ success: false, message: 'Invalid credentials' });
        }
      }, 1000); // Simulate network delay
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

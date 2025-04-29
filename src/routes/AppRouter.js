import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import PortfolioPage from '../pages/PortfolioPage';

// Function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

function AppRouter() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Update body class when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <Routes>
          <Route
            path="/"
            element={isAuthenticated() ? <Navigate to="/portfolio" replace /> : <Navigate to="/signup" replace />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/portfolio"
            element={isAuthenticated() ? <PortfolioPage /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;

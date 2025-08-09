// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme} className="theme-toggle-btn">
        <span className={`theme-toggle-icon ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '🌙' : '☀️'}
        </span>
        <span className="theme-toggle-label">
          {isDarkMode ? 'Dark' : 'Light'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
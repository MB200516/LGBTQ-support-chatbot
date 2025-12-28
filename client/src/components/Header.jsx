import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import './Header.css';

function Header({ theme, setTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Heart className="logo-icon" />
          <h1 className="logo-text">
            <span className="logo-pride">Pride</span>
            <span className="logo-chat">Chat</span>
          </h1>
          <Sparkles className="sparkle-icon" />
        </div>
        <p className="tagline">Your safe space for LGBTQ+ support & awareness</p>
        
        <div className="theme-toggle">
          <button 
            className={`theme-btn ${theme === 'pride' ? 'active' : ''}`}
            onClick={() => setTheme('pride')}
            aria-label="Pride theme"
          >
            <span className="theme-label">Pride</span>
          </button>
          <button 
            className={`theme-btn ${theme === 'trans' ? 'active' : ''}`}
            onClick={() => setTheme('trans')}
            aria-label="Trans theme"
          >
            <span className="theme-label">Trans</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

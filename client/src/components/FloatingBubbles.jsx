import React from 'react';
import './FloatingBubbles.css';

function FloatingBubbles() {
  return (
    <div className="floating-bubbles">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i} 
          className="bubble-decoration"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
}

export default FloatingBubbles;

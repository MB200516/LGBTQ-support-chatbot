import React from 'react';
import { Bot } from 'lucide-react';
import './TypingIndicator.css';

function TypingIndicator({ theme }) {
  return (
    <div className="message-bubble bot">
      <div className="avatar bot">
        <Bot size={20} />
      </div>
      <div className={`bubble bot ${theme} typing-bubble`}>
        <div className="typing-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default TypingIndicator;

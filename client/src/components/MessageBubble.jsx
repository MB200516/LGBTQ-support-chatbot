import React, { useState, useEffect } from 'react';
import { Bot, User } from 'lucide-react';
import './MessageBubble.css';

function MessageBubble({ message, theme }) {
  const { text, sender, timestamp } = message;
  const isBot = sender === 'bot';
  
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(isBot);

  useEffect(() => {
    if (isBot && text) {
      setDisplayedText('');
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 20); // Speed of typing (lower = faster)

      return () => clearInterval(typingInterval);
    } else {
      setDisplayedText(text);
      setIsTyping(false);
    }
  }, [text, isBot]);

  return (
    <div className={`message-bubble ${sender}`}>
      <div className={`avatar ${sender}`}>
        {isBot ? <Bot size={20} /> : <User size={20} />}
      </div>
      <div className={`bubble ${sender} ${theme}`}>
        <p className="bubble-text">{displayedText}</p>
        {!isTyping && (
          <span className="timestamp">
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        )}
      </div>
    </div>
  );
}

export default MessageBubble;
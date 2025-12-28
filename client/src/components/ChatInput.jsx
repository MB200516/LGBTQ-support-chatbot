import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';
import './ChatInput.css';

function ChatInput({ onSend, disabled }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSend(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <Smile className="emoji-icon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about LGBTQ+ topics..."
          disabled={disabled}
          className="message-input"
        />
        <button 
          type="submit" 
          disabled={!input.trim() || disabled}
          className="send-button"
          aria-label="Send message"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
}

export default ChatInput;

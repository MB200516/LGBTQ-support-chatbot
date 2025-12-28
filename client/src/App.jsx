import React, { useState } from 'react';
import ChatContainer from './components/ChatContainer';
import Header from './components/Header';
import FloatingBubbles from './components/FloatingBubbles';
import './App.css';

function App() {
  const [theme, setTheme] = useState('pride');

  return (
    <div className="app">
      <FloatingBubbles />
      <Header theme={theme} setTheme={setTheme} />
      <ChatContainer theme={theme} />
    </div>
  );
}

export default App;

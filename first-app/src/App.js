import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
      <div className="clock">
        <Clock />
      </div>

      
    </div>
  );
}

export default App;

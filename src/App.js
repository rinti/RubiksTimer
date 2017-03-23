import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>RubiksTimer</h2>
        </header>
        <div className="Rubiks-timer">
          <div className="Rubiks-timer-text">00:00:00</div>
          <button>Press space to start</button>
        </div>
        <div className="Rubiks-history">
          lorem ipsum
        </div>
      </div>
    );
  }
}

export default App;

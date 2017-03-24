import React, { Component } from 'react';
import './App.css';
import RubikTimer from './RubikTimer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-name">RubiksTimer</h2>
        </header>
        <RubikTimer />
      </div>
    );
  }
}

export default App;

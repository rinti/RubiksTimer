import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

window.onkeydown = function(e) { 
  return !(e.keyCode === 32 && e.target === document.body);
} 

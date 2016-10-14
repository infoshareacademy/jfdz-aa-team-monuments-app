import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MonumentsList from './monuments-list/MonumentsList';

class App extends Component {
  render() {
    return (
      < div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          
          <MonumentsList />
      </div>
    );
  }
}

export default App;

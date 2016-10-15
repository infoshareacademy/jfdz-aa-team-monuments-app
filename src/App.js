import React from 'react';
import logo from './logo.svg';
import './App.css';

import MonumentsIntro from './monuments-list/MonumentsIntro';

class App extends React.Component {
  render() {
    return (
      < div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          
        <MonumentsIntro />
        {this.props.children}
      </div>
    );
  }
}

export default App;

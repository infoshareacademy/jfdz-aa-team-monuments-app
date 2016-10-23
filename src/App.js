import React from 'react';
import logo from './logo.svg';
import './App.css';

import MonumentsIntro from './monuments-intro/MonumentsIntro';
import Footer from './footer/Footer';
import Map from './google-map-component/Map.js';

class App extends React.Component {
  render() {
    return (
      < div className="App">
        <div className="App-header">
        </div>

          <MonumentsIntro />
          {this.props.children}
          <Map />

          <Footer />

      </div>
    );
  }
}

export default App;

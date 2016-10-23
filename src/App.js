import React from 'react';
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import './App.css';

import MonumentsIntro from './monuments-intro/MonumentsIntro';
import Footer from './footer/Footer';
import Map from './google-map-component/Map.js';
import Login from './login/Login';

class App extends React.Component {
  render() {
    return (
      < div className="App">
        <div className="App-header">
          <Link to='map' ><Button> Mapa </Button></Link>
          <Link to='list' ><Button> Lista </Button></Link>
          <Link to='login' ><Button> Login </Button></Link>

        </div>

          {this.props.children}
          <Footer />

      </div>
    );
  }
}

export default App;

import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import './App.css';

import Footer from './footer/Footer'

class App extends React.Component {
  render() {
    return (
      < div className="App">
        <div className="App-header">
          <Link to='/' ><Button> #Home </Button></Link>
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

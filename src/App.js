import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { logOut } from './login/actionCreators';
import { browserHistory } from 'react-router'

import './App.css';

import Footer from './footer/Footer'

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.logOut();
    browserHistory.push('/')
  }

  renderLoggedInLinks() {
    if (!this.props.loggedIn) {
      return null;
    }

    return (<span>
      <Link to='map' ><Button> Mapa </Button></Link>
      <Link to='list' ><Button> Lista </Button></Link>
      <Link to='user-monuments' ><Button> Moje </Button></Link>
    </span>);
  }

  renderLoginButton() {
    if (this.props.loggedIn) {
      return <Button onClick={this.logOut.bind(this)}>Log out</Button>;
    }
    return <Link to='login' ><Button> Login </Button></Link>;
  }

  render() {
    return (
      < div className="App">
        <div className="App-header">
          <Link to='/' ><Button> #Home </Button></Link>
          {this.renderLoggedInLinks()}
          {this.renderLoginButton()}
        </div>

          {this.props.children}
          <Footer />

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

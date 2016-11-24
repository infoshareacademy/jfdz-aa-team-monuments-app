import React from 'react'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { logOut } from './login/actionCreators'
import { browserHistory } from 'react-router'
import logo from './logo.svg'
import './App.css'

import Login from './login/Login'
import Footer from './footer/Footer'

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn
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
      return (
        <Nav className="nav-elements">
            <NavItem><Link className="nav-element" to='list' > Znajdź zabytek </Link></NavItem>
            <NavItem><Link className="nav-element" to='user-monuments'> Moje zabytki </Link></NavItem>
        </Nav> )
  }

  renderLoginButton() {
    if (this.props.loggedIn) {
      return <Button bsStyle="danger" className="login-button" onClick={this.logOut.bind(this)}>Log out</Button>;
    }
    return <Login />;
  }

  render() {
      return (
          < div className="App">
              <Navbar  id="App-navigation" inverse>
                  <Navbar.Header >
                      <Link to='/' >
                          <img src={logo} className="App-logo" alt="logo" />
                      </Link>
                      <Navbar.Toggle />
                  </Navbar.Header>

                  <Navbar.Collapse>
                      {this.renderLoggedInLinks()}
                      
                      <Nav className="login-button" pullRight>
                          <NavItem>{this.renderLoginButton()}</NavItem>
                      </Nav>

                  </Navbar.Collapse>
              </Navbar>

              {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react'
import { connect } from 'react-redux' 
import './Login.css'
import GoogleLogin from 'react-google-login'
import { loginSuccess, loginFailure, logOut, persistUserData } from './actionCreators'

import {Glyphicon} from 'react-bootstrap'

const mapStateToProps = (state) => ({
    userData: state.login.userData,
    loggedIn: state.login.loggedIn,
    loginSuccess: {}
})

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (userData) => {
        dispatch(persistUserData(userData.profileObj));
    },
    loginFailure: () => dispatch(loginFailure()),
    logOut: () => dispatch(logOut())
})

const Login = ({ userData, loggedIn, loginSuccess }) => (
              <GoogleLogin
                  className="btn btn-success btn-md"
                  clientId="125511495520-i1vk2u8c4f9nk6bmtb5i8evculbqfvur.apps.googleusercontent.com"
                  onSuccess={(x) => loginSuccess(x)}
                  onFailure={(x) => alert(x)}>
                  <Glyphicon glyph="user" />
                  <span className="login-btn-text">Zaloguj się - Google</span>
              </GoogleLogin>
)

export default connect(mapStateToProps,mapDispatchToProps)(Login)
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
                  className="btn btn-success google-login-button"
                  // clientId="125511495520-i1vk2u8c4f9nk6bmtb5i8evculbqfvur.apps.googleusercontent.com"
                  clientId="807165920059-m7p04n03op9ai52k1cv49lsju9oesbsj.apps.googleusercontent.com"
                  onSuccess={(x) => loginSuccess(x)}
                  onFailure={(x) => alert(x)}>
                  <Glyphicon glyph="user" />
                  <span className="login-btn-text">Zaloguj się - Google</span>
              </GoogleLogin>
)

export default connect(mapStateToProps,mapDispatchToProps)(Login)
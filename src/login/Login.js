import React from 'react'
import { connect } from 'react-redux' 
import './Login.css'
import GoogleLogin from 'react-google-login'
import { loginSuccess, loginFailure, logOut, persistUserData } from './actionCreators';

const mapStateToProps = (state) => ({
    userData: state.login.userData,
    loggedIn: state.login.loggedIn,
    loginSuccess: {}
})

const mapDispatchToProps = (dispatch) => ({
    loginSuccess: (userData) => {
        dispatch(loginSuccess(userData.profileObj));
        dispatch(persistUserData(userData.profileObj));
    },
    loginFailure: () => dispatch(loginFailure()),
    logOut: () => dispatch(logOut())
})

const Login = ({ userData, loggedIn, loginSuccess }) => (
     <div>
         <h1>Login</h1>
              <GoogleLogin
                   clientId="125511495520-i1vk2u8c4f9nk6bmtb5i8evculbqfvur.apps.googleusercontent.com"
                   buttonText="Log in"
                   onSuccess={(x) => loginSuccess(x)}
                   onFailure={(x) => alert(x)}
              />
     </div>
)
export default connect(mapStateToProps,mapDispatchToProps)(Login)
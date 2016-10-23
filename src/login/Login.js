import React from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           buttonText: "login"
        }
    }

    render() {
        return(
            <div className="Login-container">
                <h3>Login</h3>
                <p>Welcome</p>
                <Button text={this.state.buttonText}>{this.state.buttonText}</Button>
            </div>
        )
    }
}

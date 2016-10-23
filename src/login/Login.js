import React from 'react'
import './Login.css'
import {Button} from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.onClickChangeButtonText = this.onClickChangeButtonText.bind(this);

        this.state = {
           buttonText: "login"
        }
    }

    onClickChangeButtonText() {
        this.state.buttonText === "login"
        ? this.setState({buttonText:"logout"})
        : this.setState({buttonText:"login"})

    }


    render() {
        return(
            <div className="Login-container">
                <h3>Login</h3>
                <p>Welcome</p>
                <Button onClick={this.onClickChangeButtonText}>{this.state.buttonText}</Button>
            </div>
        )
    }
}

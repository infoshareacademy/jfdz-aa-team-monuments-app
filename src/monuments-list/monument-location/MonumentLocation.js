import React from 'react'
import { Button } from 'react-bootstrap'
import './MonumentLocation.css'

export default class MonumentLocation extends React.Component {
    constructor(props) {
        super(props);
        this.onClickToggleLocation=this.onClickToggleLocation.bind(this);

        this.state = {
            displayLocation: false
        }
    }
    onClickToggleLocation() {
        this.state.displayLocation ? this.setState({displayLocation: false}) : this.setState({displayLocation:true});
    }

    render() {
        return (
            <div>
                <Button className="monument-location-button" bsStyle ="warning" onClick={this.onClickToggleLocation} > {this.state.displayLocation ? 'usuń z mapy' : 'dodaj do mapy'} </Button>
            </div>
        )
    }
}
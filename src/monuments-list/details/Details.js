import React from 'react'
import { Button , Glyphicon , Modal} from 'react-bootstrap'
import './Details.css'

import MonumentLocation from '../monument-location/MonumentLocation'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onClickToggleDescription=this.onClickToggleDescription.bind(this);

        this.state = {
            showDescription: false
        }
    }
    onClickToggleDescription() {
        this.state.showDescription ? this.setState({showDescription: false}) : this.setState({showDescription:true})
    }
    render() {
        return (
            <div className="details-column">
                <Button bsStyle ="info" className="details-button" onClick={this.onClickToggleDescription}><Glyphicon glyph="blackboard"/> opis </Button>
                <MonumentLocation currentMonumentLat={this.props.lat} currentMonumentLon={this.props.lon} currentMonumentName={this.props.name}/>

                <Modal show={this.state.showDescription} onHide={this.onClickToggleDescription} container={this} aria-labelledby="contained-modal-title" >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" onClick={this.onClickToggleDescription}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
import React from 'react'
import { Button , Glyphicon , Modal} from 'react-bootstrap'
import './Details.css'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onClickToogleDescription=this.onClickToogleDescription.bind(this);

        this.state = {
            showDescription: false
        }
    }
    onClickToogleDescription() {
        this.state.showDescription ? this.setState({showDescription: false}) : this.setState({showDescription:true})
    }

    render() {
        return (
            <div className="details-column">
                <Button bsStyle ="info" className="details-button" onClick={this.onClickToogleDescription}><Glyphicon glyph="blackboard"/> opis </Button>

                <Modal show={this.state.showDescription} onHide={this.onClickToogleDescription} container={this} aria-labelledby="contained-modal-title" >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="info" onClick={this.onClickToogleDescription}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
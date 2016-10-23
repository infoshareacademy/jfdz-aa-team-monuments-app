import React from 'react'
import { Button , Modal} from 'react-bootstrap'

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
            <div>
                <Button bsStyle ="info" onClick={this.onClickToogleDescription.bind(this)} > Pokaż opis </Button>

                <Modal show={this.state.showDescription} onHide={this.onClickToogleDescription.bind(this)} container={this} aria-labelledby="contained-modal-title" >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClickToogleDescription.bind(this)}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
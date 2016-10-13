import React from 'react'
import { Button , Modal} from 'react-bootstrap'

export default class List extends React.Component {
    
    constructor(props) {
        super(props);
        this.onClickShowDescription = this.onClickShowDescription.bind(this);
        this.onClickHideDescription = this.onClickHideDescription.bind(this);

        this.state = {
            showDescription: false
        }
    }

    onClickShowDescription() {
                this.setState({ showDescription: true})
    }

    onClickHideDescription() {
                this.setState({ showDescription: false})
    }

    render() {

        return (
            <div>
                <Button bsStyle ="info" onClick={this.onClickShowDescription.bind(this)} block> Pokaż opis </Button>

                <Modal show={this.state.showDescription} onHide={this.onClickHideDescription.bind(this)} container={this} aria-labelledby="contained-modal-title" >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{this.props.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.onClickHideDescription.bind(this)}>Zamknij</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
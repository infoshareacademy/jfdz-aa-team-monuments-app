import React from 'react'
import {Grid , Row , Col, Button} from 'react-bootstrap';
import { Link } from 'react-router'
import './MonumentsIntro.css'

export default class MonumentsIntro extends React.Component {
    constructor(props) {
        super(props);
        this.onClickShowList = this.onClickShowList.bind(this);

        this.state = {
            displayList: true,
            title: "Lista Zabytków Gdańska",
            paragraph: "Chcesz zobaczyć listę gdańskich zabytków?",
            buttonText: "Pokaż Listę",
            buttonUrl:"show-list"
        }
    }

    onClickShowList() {
        if (this.state.displayList) {
            this.setState({
                displayList: false,
                buttonText: "Pokaż Listę",
                buttonUrl:"show-list"
            })
        }
        else {
            this.setState({
                displayList: true,
                buttonText: "Ukryj Listę",
                buttonUrl:"/"
            })
        }
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} className="monuments-list-header">
                        <h3> {this.state.title} </h3>
                        <p> {this.state.paragraph} </p>
                        <Link to={this.state.buttonUrl}>
                            <p><Button onClick={this.onClickShowList.bind(this)}> {this.state.buttonText}</Button></p>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
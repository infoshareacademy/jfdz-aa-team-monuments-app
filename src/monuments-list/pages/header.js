import React from 'react'
import {Row , Col, Button} from 'react-bootstrap'

export default class Header extends React.Component {
    handleClick(){
        this.props.onClickShowList();
    }
    
    render() {
        return (
            <Row className="show-grid">
                <Col xs={12} className="monuments-list-header">
                    <h3> {this.props.title} </h3>
                    <p> {this.props.paragraph} </p>
                    <p><Button onClick={this.handleClick.bind(this)}> Zobacz Listę Zabytków </Button></p>
                </Col>
            </Row>
        )
    }
}
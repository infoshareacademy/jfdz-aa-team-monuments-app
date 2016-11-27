import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Info.css'

export default class Info extends React.Component {
    
    render(){
        return (
            <Row className="user-info-row">
                <Col xs={6} sm={2} lg={2}>
                    <img id="user-photo" src={this.props.userImage} alt="user photo" />
                </Col>
                <Col className="user-info-details-col" xs={6} sm={3} lg={3}>
                    <p><strong>imię:</strong> {this.props.firstName} </p>
                    <p><strong>nazwisko:</strong> {this.props.lastName} </p>
                    <p><strong>e-mail:</strong> {this.props.userId} </p>
                </Col>
            </Row>
        )
    }
}
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './UserMonumentsInfo.css'

export default class UserMonumentsInfo extends React.Component {
    
    render(){
        return (
            <Row className="user-info-row">
                <Col className="user-info-details-col" xs={12} sm={12} lg={12}>
                    <p>Odwiedziłeś już następujące zabytki: </p>
                        <ul>
                            {this.props.monuments.map(monument => this.props.visitedMonuments.indexOf(monument.id.toString()) !== -1
                                ? <li key={monument.id}><strong>{monument.name} </strong> </li> : null)}
                        </ul>
                </Col>
            </Row>
        )
    }
}
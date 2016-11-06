import React from 'react'
import { Row , Col , Image, Thumbnail } from 'react-bootstrap'
import './List.css'

import Details from '../details/Details'
import MonumentLocation from '../monument-location/MonumentLocation'

export default ({
    displayingList,
    monuments
}) => (
    <Row className="show-grid list-monuments">
        {displayingList ? monuments.map(
                monument =>
                    <Col key={monument.id} xs={12} sm={6} lg={3} className="monuments-list-container">
                        <Thumbnail>
                            <h4>{monument.name}</h4>
                            <Image src={monument.imageUrl} alt={monument.name} className="monuments-list-img center-block" thumbnail rounded />

                            <Details description={monument.description} name={monument.name} />
                            <MonumentLocation currentMonumentLat={monument.lat} currentMonumentLon={monument.lon}/>

                        </Thumbnail>
                    </Col>
                )
        : null }
    </Row>
)




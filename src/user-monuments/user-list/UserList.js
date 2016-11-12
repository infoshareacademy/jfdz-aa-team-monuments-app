import React from 'react'
import { Row , Col , Image, Thumbnail } from 'react-bootstrap'
import './UserList.css'

import UserButtons from '../user-buttons/UserButtons'

export default ({
    currentList
}) => (
    <Row className="show-grid list-monuments">
        {currentList.map(
            monument =>
                <Col key={monument.id} xs={12} sm={6} lg={3} className="monuments-list-container">
                    <Thumbnail>

                        <h4>{monument.name}</h4>
                        <Image src={monument.imageUrl} alt={monument.name} className="monuments-list-img center-block" thumbnail rounded />

                        <UserButtons currentMonumentId={monument.id} />

                    </Thumbnail>
                </Col>
        )
             }
    </Row>
)




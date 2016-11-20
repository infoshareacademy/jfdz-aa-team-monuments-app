import React from 'react'
import { Row , Col , Image, Thumbnail } from 'react-bootstrap'
import userFilters from './utilities'
import './UserList.css'

import UserButtons from '../user-buttons/UserButtons'

export default ({
    monuments,
    userMonuments,
    currentFilter,
    visitedMonuments,
}) => (
    <Row className="show-grid list-monuments">
        {
            monuments.filter(
                currentFilter === 'user monuments' ? item => userFilters.userOnly(item, userMonuments)   :
                currentFilter === 'visited' ?  item => userFilters.visitedOnly(item, visitedMonuments) :
                userFilters.all
            )
            .map(monument =>
                <Col key={monument.id} xs={12} sm={6} lg={3} className='monuments-list-container' >
                    <Thumbnail className={(userMonuments.indexOf(monument.id.toString()) === -1 ) ? 'user-monument': 'user-monument-active'}>
                        <h4>{monument.name}</h4>
                        <Image src={monument.imageUrl} alt={monument.name} className="monuments-list-img center-block" thumbnail rounded />
                        <UserButtons currentMonumentId={monument.id} />
                    </Thumbnail>
                </Col>
            )
        }
    </Row>
)



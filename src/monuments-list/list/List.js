import React from 'react'
import { connect } from 'react-redux'

import { Row , Col , Image, Button , Thumbnail } from 'react-bootstrap'

import Details from '../details/Details'

const mapStateToProps = (state) => ({
    displayingList: state.toggleMonumentsList.displayingList,
    monuments: state.monumentsListData.monuments
})

const List = ({displayingList, monuments}) => (

    <Row className="show-grid">
        {displayingList ? monuments.map(
                monument =>
                    <Col key={monument.id} xs={12} sm={6} lg={4} className="monuments-list-container">
                        <Thumbnail>
                            <h4>{monument.name}</h4>
                            <Image src={monument.imageUrl} alt={monument.name} className="monuments-list-img" thumbnail rounded/>
                            <Details description={monument.description} name={monument.name} />
                        </Thumbnail>
                    </Col>
                )
        : console.log('yellow')}
    </Row>

)

export default connect(mapStateToProps)(List)




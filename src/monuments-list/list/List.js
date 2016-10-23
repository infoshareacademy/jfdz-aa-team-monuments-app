import React from 'react'
import { Row , Col , Image, Button , Thumbnail } from 'react-bootstrap'

import Details from '../details/Details'

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.onClickAddToMap = this.onClickAddToMap.bind(this);
    }

    onClickAddToMap(lon, lat) {
        alert("Lokalizacja zabytku: " + lon + " | "+ lat )
    }

    render() {
        return (
            <Row className="show-grid">
                {this.props.monumentsData.map(
                monument =>
                    <Col key={monument.id} xs={12} sm={6} lg={4} className="monuments-list-container">
                        <Thumbnail>
                            <h4>{monument.name}</h4>
                            <Image src={monument.imageUrl} alt={monument.name} className="monuments-list-img" thumbnail rounded/>
                            <p>
                                <Button bsStyle="warning" onClick={this.onClickAddToMap.bind(this, monument.lon, monument.lat )} > Dodaj do mapy </Button>
                            </p>
                            <Details description={monument.description} name={monument.name} />
                        </Thumbnail>
                    </Col>
                )}
            </Row>
        )
    }
}



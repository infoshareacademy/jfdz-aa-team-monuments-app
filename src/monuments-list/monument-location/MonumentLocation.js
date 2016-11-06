import React from 'react'
import { connect}  from 'react-redux'
import { displayMonumentLocation , hideMonumentLocation } from './actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './MonumentLocation.css'

const mapStateToProps = (state) => ({
    lat: state.monumentLocationData.lat ,
    lon: state.monumentLocationData.lon
})

const mapDispatchToProps = (dispatch) => ({
    displayMonumentLocation: (lat, lon) => dispatch (displayMonumentLocation(lat,lon) ) ,
    hideMonumentLocation: () => dispatch(hideMonumentLocation())
})

const MonumentLocation = ({
    currentMonumentLat,
    currentMonumentLon,
    displayMonumentLocation , 
    hideMonumentLocation 
}) => (
    <div className="monument-location-column">
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => displayMonumentLocation(currentMonumentLat , currentMonumentLon) } >
            <Glyphicon glyph="map-marker" />
        </Button>
        <Button className="monument-location-button" bsStyle ="danger" onClick={() => hideMonumentLocation() }>
            <Glyphicon glyph="trash" />
        </Button>
    </div>
)

export default connect (mapStateToProps , mapDispatchToProps)(MonumentLocation)
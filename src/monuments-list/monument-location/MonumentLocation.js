import React from 'react'
import { connect}  from 'react-redux'
import { displayMonumentLocation } from './actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './MonumentLocation.css'

const mapStateToProps = (state) => ({
    lat: state.monumentLocationData.lat ,
    lon: state.monumentLocationData.lon
})

const mapDispatchToProps = (dispatch) => ({
    displayMonumentLocation: (lat, lon) => dispatch (displayMonumentLocation(lat,lon) ) 
})

const MonumentLocation = ({
    currentMonumentLat,
    currentMonumentLon,
    displayMonumentLocation ,
}) => (
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => displayMonumentLocation(currentMonumentLat , currentMonumentLon) } >
            <Glyphicon glyph="map-marker" />
        </Button>
)

export default connect (mapStateToProps , mapDispatchToProps)(MonumentLocation)
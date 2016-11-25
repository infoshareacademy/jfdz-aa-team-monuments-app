import React from 'react'
import { connect}  from 'react-redux'
import $ from 'jquery'
import { displayMonumentLocation } from './actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './MonumentLocation.css'

const mapStateToProps = (state) => ({
    lat: state.monumentLocationData.lat ,
    lon: state.monumentLocationData.lon
})

const mapDispatchToProps = (dispatch) => ({
    displayMonumentLocation: (lat, lon, name) => {
        // $('button', this).off('click').click(function(){
        //     $('.caption').removeClass('active');
        //     $(this).parents('.caption').addClass('active');
        // });
        // $('#current-target').html('Twój aktualny cel to  <strong>' + name + '</strong>' );
        dispatch (displayMonumentLocation(lat, lon, name) )
    }
})

const MonumentLocation = ({
    currentMonumentLat,
    currentMonumentLon,
    currentMonumentName,
    displayMonumentLocation ,
}) => (
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => displayMonumentLocation(currentMonumentLat , currentMonumentLon, currentMonumentName ) } >
            <Glyphicon glyph="map-marker" />
        </Button>
)

export default connect (mapStateToProps , mapDispatchToProps)(MonumentLocation)
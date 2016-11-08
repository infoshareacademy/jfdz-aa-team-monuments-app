import React from 'react'
import { connect}  from 'react-redux'
import { displayMonumentLocation , hideMonumentLocation } from './actionCreators'
import { updateUserData } from '../../login/actionCreators'
import { Button , Glyphicon } from 'react-bootstrap'
import './MonumentLocation.css'

const mapStateToProps = (state) => ({
    lat: state.monumentLocationData.lat ,
    lon: state.monumentLocationData.lon,
    userMonuments: state.login.userData.userMonuments,
    email: state.login.userData.userId,
})

const mapDispatchToProps = (dispatch) => ({
    displayMonumentLocation: (lat, lon) => {
        dispatch (displayMonumentLocation(lat,lon) )
    },
    hideMonumentLocation: () => dispatch(hideMonumentLocation()),
    addMonument: (userEmail, monumentId, monuments) => {
        console.log('addMonument', userEmail, monumentId, monuments);
        let newMonuments = monuments.concat([monumentId]);
        let userData = {
            userMonuments: newMonuments,
        };
        dispatch(updateUserData(userEmail, userData));
    }
})

const MonumentLocation = ({
    userMonuments,
    email,
    currentMonumentId,
    currentMonumentLat,
    currentMonumentLon,
    displayMonumentLocation , 
    hideMonumentLocation,
    addMonument,
}) => (
    <div className="monument-location-column">
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => displayMonumentLocation(currentMonumentLat, currentMonumentLon) } >
            <Glyphicon glyph="map-marker" />
        </Button>
        <Button className="monument-location-button" bsStyle ="danger" onClick={() => hideMonumentLocation() }>
            <Glyphicon glyph="trash" />
        </Button>
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => addMonument(email, currentMonumentId, userMonuments) } >
            <Glyphicon glyph="save" />
        </Button>
    </div>
)

export default connect (mapStateToProps , mapDispatchToProps)(MonumentLocation)
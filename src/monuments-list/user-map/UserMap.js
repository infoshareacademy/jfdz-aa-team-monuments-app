import React from 'react'
import './UserMap.css'
import { getUserLocation } from '../monument-location/actionCreators'
import { connect } from 'react-redux'
import createMap from './utilities'

const mapStateToProps = (state) => ({
    monumentLocation: state.monumentLocationData.monumentLocation ,
    monumentLat: state.monumentLocationData.monumentLocation.lat ,
    monumentLon: state.monumentLocationData.monumentLocation.lon,
    userLat: state.monumentLocationData.userLocation.lat,
    userLon: state.monumentLocationData.userLocation.lon
})

const mapDispatchToProps = (dispatch) => ({
    getUserLocation: (userLat, userLon) => dispatch(getUserLocation(userLat,userLon))
})

class MonumentMap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const that = this.props;
        getLocation();
        function getLocation() {
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(showYourPosition) : showDefaultPosition()
        }

        function showYourPosition(position) {
            let lat = position.coords.latitude.toString();
            let lon = position.coords.longitude.toString();
            that.getUserLocation(lat,lon);

            that.monumentLocation.hasOwnProperty('lat')
                ? createMap.createMonumentMap(that.monumentLat, that.monumentLon, that.userLat, that.userLon )
                : createMap.createUserMap(lon,lat)
        }

        function showDefaultPosition() {
            that.monumentLocation.hasOwnProperty('lat')
                ? createMap.createMonumentMap(that.monumentLat, that.monumentLon, that.userLat, that.userLon )
                : createMap.createUserMap(that.userLon, that.userLat)
        }
    }

    componentWillReceiveProps(newProps) {
        createMap.createMonumentMap(newProps.monumentLat, newProps.monumentLon, newProps.userLat, newProps.userLon )
    }

    render() {
        return (
            <div>
                <div id="monument-map" className="mapContainer"> </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonumentMap)
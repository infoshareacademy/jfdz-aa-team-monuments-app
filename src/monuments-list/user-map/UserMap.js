import React from 'react'
import './UserMap.css'
import { getUserLocation } from '../monument-location/actionCreators'
import { connect } from 'react-redux'
import createMap from './utilities'

const mapStateToProps = (state) => ({
    monumentLocation: state.monumentLocationData.monumentLocation ,
    monumentLat: state.monumentLocationData.monumentLocation.lat ,
    monumentLon: state.monumentLocationData.monumentLocation.lon,
    monumentName: state.monumentLocationData.monumentLocation.name,
    userLat: state.monumentLocationData.userLocation.lat,
    userLon: state.monumentLocationData.userLocation.lon
})

const mapDispatchToProps = (dispatch) => ({
    getUserLocation: (userLat, userLon) => dispatch(getUserLocation(userLat,userLon))
})

class MonumentMap extends React.Component {
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

            showDefaultPosition(lon, lat);
        }

        function showDefaultPosition(lon = that.userLon, lat = that.userLat) {
            that.monumentLocation.hasOwnProperty('lat')
                ? createMap.createMonumentMap(that.monumentLat, that.monumentLon, that.userLat, that.userLon )
                : createMap.createUserMap(lon, lat)
        }
    }

    componentWillReceiveProps(newProps) {
        createMap.createMonumentMap(newProps.monumentLat, newProps.monumentLon, newProps.userLat, newProps.userLon )
    }

    render() {
        return (
            <div>
                <div id="monument-map" className="mapContainer"></div>
                <h4 id="current-target">{ this.props.monumentName === ""
                    ? "Jaki jest Twój aktualny cel?" : "Twój aktualny cel to - "}
                    <strong> {this.props.monumentName} </strong>
                </h4>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonumentMap)
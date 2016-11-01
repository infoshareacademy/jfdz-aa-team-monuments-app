import React from 'react'
import './UserMap.css'
import { connect } from 'react-redux'
import createMap from './utilities'

const mapStateToProps = (state) => ({
    monumentLat: state.monumentLocationData.monumentLocation.lat ,
    monumentLon: state.monumentLocationData.monumentLocation.lon,
    userLat: state.monumentLocationData.userLocation.lat,
    userLon: state.monumentLocationData.userLocation.lon
})

class UserMap extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        createMap.createUserMap(this.props.userLon, this.props.userLat )
    }
    
    render() {
        return (
            <div id="user-map" className="mapContainer">

            </div>
        )
    }
}
export default connect(mapStateToProps)(UserMap)
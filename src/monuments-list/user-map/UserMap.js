import React from 'react'
import './UserMap.css'
import { connect } from 'react-redux'
import createMap from './utilities'

const mapStateToProps = (state) => ({
    monumentLocation: state.monumentLocationData.monumentLocation ,
    monumentLat: state.monumentLocationData.monumentLocation.lat ,
    monumentLon: state.monumentLocationData.monumentLocation.lon,
    userLat: state.monumentLocationData.userLocation.lat,
    userLon: state.monumentLocationData.userLocation.lon
})

class MonumentMap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.monumentLocation.hasOwnProperty('lat')
            ? createMap.createMonumentMap(this.props.monumentLat, this.props.monumentLon, this.props.userLat, this.props.userLon )
            : createMap.createUserMap(this.props.userLon, this.props.userLat)
    }

    componentWillReceiveProps(newProps) {
        createMap.createMonumentMap(newProps.monumentLat, newProps.monumentLon, this.props.userLat, this.props.userLon )
    }

    render() {
        return (
            <div>
                <div id="monument-map" className="mapContainer"> </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(MonumentMap)
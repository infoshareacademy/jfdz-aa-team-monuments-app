import React from 'react'
import './UserMap.css'

export default class UserMap extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
            const google = window.google;
            const map = new google.maps.Map(document.getElementById('user-map'), {
                zoom: 16,
                center: new google.maps.LatLng(54.351372, 18.653138),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        }
    
    render() {
        return (
            <div id="user-map" className="mapContainer">
            </div>
        )
    }
}
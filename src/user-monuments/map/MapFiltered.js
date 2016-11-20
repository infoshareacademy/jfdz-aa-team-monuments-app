import React from 'react';
import filteredMap from './utilities'
import userFilters from '../user-list/utilities'
import './MapFiltered.css';

export default class MapFiltered extends React.Component {
    componentDidMount() {
        filteredMap.createFilteredMap(this.props.monuments)
    }

    componentWillReceiveProps(newProps) {
        let currentMarkers = newProps.monuments.filter(
            newProps.currentFilter === 'user monuments' ? item => userFilters.userOnly(item, newProps.userMonuments) :
            newProps.currentFilter === 'visited' ? item => userFilters.visitedOnly(item, newProps.visitedMonuments) :
            userFilters.all
        )
        filteredMap.createFilteredMap(currentMarkers)
    }

    render() {
        return (
            <div id="map-filtered" className="mapContainer"> </div>
        )
    }
}
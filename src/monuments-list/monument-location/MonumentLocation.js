import React from 'react'
import { Button } from 'react-bootstrap'
import './MonumentLocation.css'

const toggleLocationDisplay = {
    displayMonumentLocation: (lat, lon) => alert('display location' + lat + '/' +  lon),
    hideMonumentLocation: () => alert('hiding location')
}

export default ( {lat, lon}) => (
    <div>
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => toggleLocationDisplay.displayMonumentLocation(lat, lon)}>Dodaj do mapy</Button>
    </div>
)
import React from 'react'
import { Button } from 'react-bootstrap'
import './MonumentLocation.css'

import toggleLocationDisplay from './utilities'

let { displayMonumentLocation , hideMonumentLocation } = toggleLocationDisplay


export default ( {lat, lon} ) => (
    <div>
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => displayMonumentLocation(lat, lon)}>Dodaj do mapy</Button>
        <Button className="monument-location-button" bsStyle ="warning" onClick={() => hideMonumentLocation()}>Usuń mapy</Button>
    </div>
)
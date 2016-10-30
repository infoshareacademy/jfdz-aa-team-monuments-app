import { DISPLAY_MONUMENT_LOCATION } from './actionTypes'
import { HIDE_MONUMENT_LOCATION } from './actionTypes'


export function displayMonumentLocation(lat , lon) {
    return {
        type: DISPLAY_MONUMENT_LOCATION,
        lat: lat,
        lon: lon
    }
}

export function hideMonumentLocation() {
    return {
        type: HIDE_MONUMENT_LOCATION
    }
}
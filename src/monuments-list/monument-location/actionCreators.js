import { DISPLAY_MONUMENT_LOCATION } from './actionTypes'
import { HIDE_MONUMENT_LOCATION } from './actionTypes'

export function displayMonumentLocation(monumentLat , monumentLon) {
    return {
        type: DISPLAY_MONUMENT_LOCATION,
        monumentLat: monumentLat,
        monumentLon: monumentLon
    }
}

export function hideMonumentLocation() {
    return {
        type: HIDE_MONUMENT_LOCATION
    }
}
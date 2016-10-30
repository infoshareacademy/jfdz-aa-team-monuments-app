import { DISPLAY_MONUMENT_LOCATION } from './actionTypes'
import { HIDE_MONUMENT_LOCATION } from './actionTypes'


export function displayMonumentLocation(monumentLocation) {
    return {
        type: DISPLAY_MONUMENT_LOCATION,
        monumentLocation: monumentLocation
    }
}

export function hideMonumentLocation() {
    return {
        type: HIDE_MONUMENT_LOCATION
    }
}
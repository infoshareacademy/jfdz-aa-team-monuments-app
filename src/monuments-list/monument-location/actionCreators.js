import { DISPLAY_MONUMENT_LOCATION } from './actionTypes'
import { HIDE_MONUMENT_LOCATION } from './actionTypes'
import { GET_USER_LOCATION } from './actionTypes'

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

export function getUserLocation(userLat, userLon) {
    return {
        type: GET_USER_LOCATION,
        userLat: userLat,
        userLon: userLon
    }
}
import {
    DISPLAY_MONUMENT_LOCATION , 
    HIDE_MONUMENT_LOCATION 
} from './actionTypes'

const initialState = {
    lat: null ,
    lon: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case DISPLAY_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                lat: action.lat,
                lon: action.lon
            })

        case HIDE_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                lat: null,
                lon: null
            })
        
        default:
            return state;
    }
}

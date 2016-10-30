import {
    DISPLAY_MONUMENT_LOCATION , 
    HIDE_MONUMENT_LOCATION } from './actionTypes'

const initialState = {
    displayLocationState: false
}

export default (state = initialState, action) => {
    switch (action.type) {

        case DISPLAY_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                displayLocationState: true
            })

        case HIDE_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                displayLocationState: false
            })
        
        default:
            return state;
    }
}

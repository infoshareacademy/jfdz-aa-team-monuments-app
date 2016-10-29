import { 
    REQUEST_MONUMENTS_LIST ,
    RECEIVE_MONUMENTS_LIST ,
    DISPLAY_MONUMENT_LOCATION , 
    HIDE_MONUMENT_LOCATION } from './actionTypes'

const initialState = {
    monuments: [],
    isLoading: false,
    displayLocationState: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_MONUMENTS_LIST:
            return Object.assign({}, state, {
                isLoading: true
            })
        
        case RECEIVE_MONUMENTS_LIST:
            return Object.assign({}, state, {
                isLoading: false,
                monuments: action.monuments
            })

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

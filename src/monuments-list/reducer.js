import { 
    REQUEST_MONUMENTS_LIST ,
    RECEIVE_MONUMENTS_LIST 
 } from './actionTypes'

const initialState = {
    monuments: [],
    isLoading: false
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
        
        default:
            return state;
    }
}

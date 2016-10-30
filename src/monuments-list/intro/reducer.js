import { SHOW_MONUMENTS_LIST , HIDE_MONUMENTS_LIST } from './actionTypes'

const initialState = {
    displayingList: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MONUMENTS_LIST:
            return Object.assign({}, state, {
                displayingList: true
            });
        
        case HIDE_MONUMENTS_LIST:
            return Object.assign({}, state, {
                displayingList: false
            });
        
        default:
            return state
    }
}



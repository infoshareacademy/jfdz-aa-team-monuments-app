import {SHOW_ALL_MONUMENTS , SHOW_USER_MONUMENTS , SHOW_VISITED_MONUMENTS } from './actionTypes'

const initialState = {
    currentFilter: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALL_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'all'
            });

        case SHOW_USER_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'user monuments'
            });

        case SHOW_VISITED_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'visited'
            });

        default:
            return state
    }
}
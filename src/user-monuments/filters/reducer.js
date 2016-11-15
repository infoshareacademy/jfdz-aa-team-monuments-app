import {SHOW_ALL_MONUMENTS , SHOW_USER_MONUMENTS , SHOW_VISITED_MONUMENTS } from './actionTypes'

const initialState = {
    currentFilter: 'all',
    currentList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ALL_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'all',
                currentList: action.monuments
            });

        case SHOW_USER_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'user monuments',
                currentList: action.monuments
            });

        case SHOW_VISITED_MONUMENTS:
            return Object.assign({}, state, {
                currentFilter: 'visited',
                currentList: action.monuments
            });

        default:
            return state
    }
}
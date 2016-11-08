import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAILURE,
    UPDATE_USER_DATA
} from './actionTypes'

const initialState = {
    userData: {
        email: '',
        userMonuments: [],
    },
    loggedIn: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                userData: action.userData,
                loggedIn: true
            })
        case UPDATE_USER_DATA:
            return Object.assign({}, state, {
                userData: action.userData
            })
        case LOG_OUT:
            return Object.assign({}, state, {
                userData: {},
                loggedIn: false

            })
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                userData: {},
                loggedIn: false

            })

        default:
            return state
    }
}
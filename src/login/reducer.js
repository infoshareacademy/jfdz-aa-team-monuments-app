const initialState = {
    userData: {},
    loggedIn: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {
                userData: action.userData,
                loggedIn: true

            })
        case 'LOG_OUT':
            return Object.assign({}, state, {
                userData: {},
                loggedIn: false

            })
        case 'LOGIN_FAILURE':
            return Object.assign({}, state, {
                userData: {},
                loggedIn: false

            })
        default:
            return state
    }
}
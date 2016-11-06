import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAILURE
} from './actionTypes'

import fetch from 'isomorphic-fetch'

export function loginSuccess (userData) {
    return {
        type: LOGIN_SUCCESS,
        userData: userData
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    }
}


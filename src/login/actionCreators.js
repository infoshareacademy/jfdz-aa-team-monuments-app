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


export function persistUserData(userData) {
    return dispatch => {
        console.log('PROFILE OBJECT', userData);
        dispatch({type: 'PERSISTING_START'});
        return fetch('https://monuments-data.herokuapp.com/api/userData', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                firstName: userData.givenName,
                lastName: userData.familyName,
                userId: userData.email
            })
        }).then(response => {
            console.log('request succeeded with JSON response', response.json());
            dispatch({type: 'PERSISTING_DONE'});
        }).catch(err => {
            console.log('request failed', err);
            dispatch({type: 'PERSISTING_FAIL'});
        });
    }
}

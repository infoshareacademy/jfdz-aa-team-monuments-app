import {
    LOGIN_SUCCESS,
    LOG_OUT,
    LOGIN_FAILURE,
    UPDATE_USER_DATA
} from './actionTypes'

import fetch from 'isomorphic-fetch'

export function loginSuccess (userData) {
    return {
        type: LOGIN_SUCCESS,
        userData: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            userId: userData.userId,
            userMonuments: userData.userMonuments || [],
            visitedMonuments: userData.visitedMonuments || []
        }
    }
}

export function updateData (userData) {
    return {
        type: UPDATE_USER_DATA,
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

export function updateUserData(userEmail, newData) {
    console.log('zapisuje to gowno', newData);
    return dispatch => {
        dispatch({type: 'UPDATING_DATA_START'});
        return fetch('https://monuments-data.herokuapp.com/api/userData/' + userEmail, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(newData),
        })
            .then(function(res) {
                dispatch({type: 'UPDATING_DATA_DONE'});
                return res.json();
            })
            .then(function(userData) {
                dispatch(updateData(userData))
            });

    }
}

export function persistUserData(userData) {
    function getUserData(email) {
        return fetch('https://monuments-data.herokuapp.com/api/userData/' + email, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(function(response) {
            return response.json();
        });
    }

    return dispatch => {
        console.log('PROFILE OBJECT', userData);
        dispatch({type: 'PERSISTING_START'});

        getUserData(userData.email)
            .then(function(fetchedData) {
            if (fetchedData && fetchedData.userId === userData.email) {
                return;
            }
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
                    userId: userData.email,
                    userMonuments: userData.userMonuments || [],
                    visitedMonuments: userData.visitedMonuments || []
                })
            }).then(response => {
                console.log('request succeeded with JSON response', response.json());
                dispatch({type: 'PERSISTING_DONE'});
            }).catch(err => {
                console.log('request failed', err);
                dispatch({type: 'PERSISTING_FAIL'});
            });
        }).then(function() {
            getUserData(userData.email)
                .then(function(userData) {
                    dispatch(loginSuccess(userData));
                })
        })
    }
}

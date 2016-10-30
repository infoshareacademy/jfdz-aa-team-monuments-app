import { REQUEST_MONUMENTS_LIST } from './actionTypes'
import { RECEIVE_MONUMENTS_LIST } from './actionTypes'
import fetch from 'isomorphic-fetch'

function requestMonumentsList() {
    return {
        type: REQUEST_MONUMENTS_LIST
    }
}

function receiveMonumentsList(monuments) {
    return {
        type: RECEIVE_MONUMENTS_LIST,
        monuments: monuments
    }
}

export function fetchMonuments() {
    return function (dispatch) {
        dispatch(requestMonumentsList())
        return fetch(`https://monuments-data.herokuapp.com/api/monuments`)
            .then(response => response.json())
            .then(monuments => dispatch(receiveMonumentsList(monuments)))
    }
}

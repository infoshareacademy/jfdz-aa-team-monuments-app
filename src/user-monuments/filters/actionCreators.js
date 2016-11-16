import {SHOW_ALL_MONUMENTS , SHOW_USER_MONUMENTS , SHOW_VISITED_MONUMENTS } from './actionTypes'

export function showAllMonuments(monuments) {
    return {
        type: SHOW_ALL_MONUMENTS,
        monuments: monuments.map(monument => monument.id.toString() )
    }
}

export function showUserMonuments(userMonuments) {
    return {
        type: SHOW_USER_MONUMENTS,
        monuments: userMonuments
    }
}

export function showVisitedMonuments(visitedMonuments) {
    return {
        type: SHOW_VISITED_MONUMENTS,
        monuments: visitedMonuments
    }
}
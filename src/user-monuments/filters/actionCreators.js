import {SHOW_ALL_MONUMENTS , SHOW_USER_MONUMENTS , SHOW_VISITED_MONUMENTS } from './actionTypes'

export function showAllMonuments(monuments) {
    return {
        type: SHOW_ALL_MONUMENTS,
        monuments: monuments
    }
}

export function showUserMonuments(monuments, userMonuments) {
    return {
        type: SHOW_USER_MONUMENTS,
        monuments: monuments.filter(( monument )=> userMonuments.indexOf(monument.id.toString()) !== -1)
    }
}

export function showVisitedMonuments(monuments, visitedMonuments) {
    return {
        type: SHOW_VISITED_MONUMENTS,
        monuments: monuments.filter(( monument )=> visitedMonuments.indexOf(monument.id.toString()) !== -1)
    }
}
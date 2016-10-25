import { SHOW_MONUMENTS_LIST } from './actionTypes'
import { HIDE_MONUMENTS_LIST } from './actionTypes'

export function showMonumentsList() {
    return {
        type: SHOW_MONUMENTS_LIST
    }
}

export function hideMonumentsList() {
    return {
        type: HIDE_MONUMENTS_LIST
    }
}
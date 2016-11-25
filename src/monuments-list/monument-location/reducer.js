import {
    DISPLAY_MONUMENT_LOCATION , 
    HIDE_MONUMENT_LOCATION ,
    GET_USER_LOCATION
} from './actionTypes'

const initialState = {
    userLocation: {
        lat: '54.351372',
        lon: '18.653138'
    },
    monumentLocation: { }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case DISPLAY_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                monumentLocation: {
                    lat: action.monumentLat,
                    lon: action.monumentLon,
                    name: action.monumentName
                }
            })

        case HIDE_MONUMENT_LOCATION:
            return Object.assign({}, state, {
                monumentLocation: {

                }
            })

        case GET_USER_LOCATION:
            return Object.assign({}, state, {
                userLocation: {
                    lat: action.userLat,
                    lon: action.userLon
                }
            })
        
        default:
            return state;
    }
}

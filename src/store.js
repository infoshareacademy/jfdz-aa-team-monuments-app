import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loginReducer from './login/reducer'

import monumentsIntroReducer from './monuments-list/intro/reducer'
import monumentsListReducer from './monuments-list/reducer'
import monumentLocationReducer from './monuments-list/monument-location/reducer'

const reducer = combineReducers ({
    login: loginReducer,
    toggleMonumentsList: monumentsIntroReducer,
    monumentsListData: monumentsListReducer,
    monumentLocationData: monumentLocationReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
)

export default store
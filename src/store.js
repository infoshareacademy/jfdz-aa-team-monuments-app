import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loginReducer from './login/reducer'

const reducer = combineReducers({
    login: loginReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware
    )
)

export default store
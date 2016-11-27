import React from 'react'
import ReactDOM from 'react-dom'
import { Router , Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'

import App from './App'
import MonumentsList from './monuments-list/MonumentsList'
import Map from './google-map-component/Map'
import UserProfile from './user-profile/UserProfile'
import Login from './login/Login'
import UserMonuments from './user-monuments/UserMonuments'

import { fetchMonuments } from './monuments-list/actionCreators'

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Map} />
                <Route path="list" component={MonumentsList} onEnter={() => store.dispatch(fetchMonuments())}> </Route>
                <Route path="user-monuments" component={UserMonuments} onEnter={() => store.dispatch(fetchMonuments())}> </Route>
                <Route path="user" component={UserProfile} onEnter={() => store.dispatch(fetchMonuments())}> </Route>
                <Route path="login" component={Login}> </Route>
            </Route>
        </Router>
    </Provider>,root
);
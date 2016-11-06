import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import MonumentsList from './monuments-list/MonumentsList'
import Map from './google-map-component/Map'
import Login from './login/Login'
import MonumentsIntro from './monuments-intro/MonumentsIntro'

import './index.css';

import { Provider } from 'react-redux'
import store from './store'

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
         <Route path="/" component={App}>
             <IndexRoute component={Map} />
             <Route path="map" component={Map}> </Route>
             <Route path="list" component={MonumentsIntro}>              
                 <Route path="/show-list" component={MonumentsList}> </Route>
             </Route>
             <Route path="/login" component={Login}> </Route>
         </Route>
        </Router>
    </Provider>,root
);
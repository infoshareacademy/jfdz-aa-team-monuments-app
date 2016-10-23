import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import MonumentsList from './monuments-list/MonumentsList'

import './index.css';

import { Provider } from 'react-redux'
import store from './store'

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
         <Route path="/" component={App} >
             <Route path="show-list" component={MonumentsList}> </Route>
         </Route>
        </Router>
    </Provider>,root
);
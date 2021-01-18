import React from 'react';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import reducer from '../reducers';

import initialState from '../initialState';

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
const history = createBrowserHistory();

const ProviderMock = props => (
    <Provider store={store}>
        <Router history={history}>
            { props.children }
        </Router>
    </Provider>
);

module.exports = ProviderMock;

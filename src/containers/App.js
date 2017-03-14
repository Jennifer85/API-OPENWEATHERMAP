import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

import SPACLIMA from './SPACLIMA/SPACLIMA';

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <SPACLIMA />
                </Provider>
            </div>
        );
    }
}
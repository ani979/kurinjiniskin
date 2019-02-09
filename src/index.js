import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routes from './components/RouteComponent/Routes'
import {initialState} from './stock/InitialState'
import {rootReducers} from './reducers'

const store = createStore(rootReducers, initialState)
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



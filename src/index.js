import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routes from './components/RouteComponent/Routes'
import {initialState} from './stock/InitialState'
import {rootReducers} from './reducers'
import translations from './constants/translations'
import {IntlProvider } from 'react-redux-multilingual'

class Root extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        const store = createStore(rootReducers, initialState)
        return (
            <Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
                    <Routes/>
                </IntlProvider>    
            </Provider>
        );

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA
        serviceWorker.unregister();
    }
}    




ReactDOM.render(<Root />, document.getElementById('root'));



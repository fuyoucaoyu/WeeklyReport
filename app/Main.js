/**
 * @file
 */

 import React from 'react';
 import {Provider} from 'react-redux';
 import Store from './stores/store';
 import App from './container/App';

export default class Main extends React.Component {
    render () {
        return (
                <Provider store = {Store}>
                    <App />
                </Provider>
            );
    }
}
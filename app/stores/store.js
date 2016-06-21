/**
 * @file
 */

 import {createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
 import Reducer from '../reducers/reducer';

 let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
 let store = createStoreWithMiddleware(Reducer);

 export default store;
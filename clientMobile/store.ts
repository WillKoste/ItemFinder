import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const inititalState = {};

const middleware = [thunk];

const store = createStore(rootReducer, inititalState, applyMiddleware(...middleware));

export default store;

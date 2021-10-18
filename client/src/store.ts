import {createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const inititalState = {};

const middleware: any[] = [thunk];

const store: Store = createStore(rootReducer, inititalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

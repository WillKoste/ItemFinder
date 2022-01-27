import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];

export const createTheStore = (passedState) => {
	return createStore(rootReducer, passedState, applyMiddleware(...middleware));
};

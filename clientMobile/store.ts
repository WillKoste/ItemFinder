import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const inititalState = {};

const middleware = [thunk];

// const persistConfig = {
// 	key: 'root',
// 	storage: AsyncStorage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer, inititalState, applyMiddleware(...middleware));
const store = createStore(rootReducer, inititalState, applyMiddleware(...middleware));

// export const persistor = persistStore(store as any);

export default store;

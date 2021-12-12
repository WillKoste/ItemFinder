import {combineReducers} from 'redux';
import auth from './auth';
import locations from './locations';
import products from './products';

export default combineReducers({
	authRed: auth,
	productsRed: products,
	locationsRed: locations
});

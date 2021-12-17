import {combineReducers} from 'redux';
import auth from './auth';
import contacts from './contacts';
import locations from './locations';
import partners from './partners';
import products from './products';
import reviews from './reviews';

export default combineReducers({
	authRed: auth,
	productsRed: products,
	locationsRed: locations,
	partnersRed: partners,
	reviewsRed: reviews,
	contactsRed: contacts
});

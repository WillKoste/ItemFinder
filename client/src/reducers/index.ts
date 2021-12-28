import {combineReducers} from 'redux';
import auth from './auth';
import cartItems from './cartItems';
import contacts from './contacts';
import locations from './locations';
import partners from './partners';
import productCategories from './productCategories';
import products from './products';
import productsHistory from './productsHistory';
import reviews from './reviews';

export default combineReducers({
	authRed: auth,
	productsRed: products,
	locationsRed: locations,
	partnersRed: partners,
	reviewsRed: reviews,
	contactsRed: contacts,
	productsHistoryRed: productsHistory,
	productCategoriesRed: productCategories,
	cartItemsRed: cartItems
});

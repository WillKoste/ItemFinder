import {Product} from '../types/general';
import {ADD_CART, REMOVE_CART} from './types';

export const addItemToCart = (item: Product, cartItems: Product[], qty: number) => async (dispatch: any) => {
	console.log({cartItems});
	if (cartItems) {
		const newArr = [...cartItems, {...item, qty}];
		console.log({newArr});
		// localStorage.setItem('cart', JSON.stringify(newArr));
		dispatch({
			type: ADD_CART,
			payload: newArr
		});
	}
};

export const removeItemFromCart = (productId: number) => async (dispatch: any) => {
	const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') as string);
	const filteredCart = cartItems.filter((a) => a.id !== productId);
	localStorage.setItem('cart', JSON.stringify(filteredCart));
	dispatch({
		type: REMOVE_CART,
		payload: filteredCart
	});
};

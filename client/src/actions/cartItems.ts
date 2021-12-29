import {CartProduct, Product} from '../types/general';
import {ADD_CART, CLEAR_CART, REMOVE_CART, SET_CART} from './types';

export const addItemToCart = (item: Product, cartItems: CartProduct[], qty: number) => async (dispatch: any) => {
	console.log({cartItems});
	if (cartItems) {
		const newArr = [...cartItems, {...item, cart_qty: qty, cart_subtotal: +((item.price ? item.price : 0) * qty).toFixed(2)}];
		console.log({newArr});
		localStorage.setItem('cart', JSON.stringify(newArr));
		let totalPrice = 0;
		newArr.forEach((z) => {
			totalPrice += z.cart_subtotal;
		});
		console.log({totalPrice});
		localStorage.setItem('cartTotal', JSON.stringify(totalPrice));
		dispatch({
			type: ADD_CART,
			payload: newArr,
			total: totalPrice
		});
	}
};

export const removeItemFromCart = (productId: number) => async (dispatch: any) => {
	const cartItems: CartProduct[] = JSON.parse(localStorage.getItem('cart') as string);
	const filteredCart = cartItems.filter((a) => a.id !== productId);
	localStorage.setItem('cart', JSON.stringify(filteredCart));
	let priceTotal = 0;
	filteredCart.forEach((c) => {
		priceTotal += c.cart_subtotal;
	});
	localStorage.setItem('cartTotal', JSON.stringify(priceTotal));

	console.log({filteredCart, priceTotal});
	dispatch({
		type: REMOVE_CART,
		payload: filteredCart,
		total: priceTotal
	});
};

export const clearCartItems = () => async (dispatch: any) => {
	dispatch({
		type: CLEAR_CART
	});
};

export const setCartItems = (cartItemz: Product[]) => async (dispatch: any) => {
	localStorage.setItem('cart', JSON.stringify(cartItemz));
	const cartTotal = localStorage.getItem('cartTotal');
	console.log({YAYAYA: cartTotal});
	dispatch({
		type: SET_CART,
		payload: cartItemz,
		total: +JSON.parse(cartTotal ? cartTotal : '0')
	});
};

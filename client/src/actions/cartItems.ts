import {CartProduct, Product} from '../types/general';
import {ADD_CART, CLEAR_CART, REMOVE_CART, SET_CART, UPDATE_CART_QTY} from './types';

export const addItemToCart = (item: Product, cartItems: CartProduct[], qty: number) => async (dispatch: any) => {
	console.log({cartItems, item, qty});
	const parsedCart: CartProduct[] = JSON.parse(localStorage.getItem('cart') as any);
	const indexIWant = parsedCart.findIndex((f) => f.id === item.id);
	console.log({indexIWant});
	if (indexIWant === -1) {
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
	} else {
		const itemToUpdate = parsedCart[indexIWant];
		itemToUpdate.cart_qty = qty;
		itemToUpdate.cart_subtotal = +(itemToUpdate.cart_qty * (itemToUpdate.price as any)).toFixed(2);
		console.log({YEEEEEE: itemToUpdate, parsedCart});
		localStorage.setItem('cart', JSON.stringify(parsedCart));
		let total = 0;
		parsedCart.forEach((p) => {
			total += p.cart_subtotal;
		});
		localStorage.setItem('cartTotal', JSON.stringify(total));
		dispatch({
			type: UPDATE_CART_QTY,
			payload: parsedCart,
			total
		});
	}
};

export const updateCartQty = (itemId: number, newQty: number) => async (dispatch: any) => {
	const parsedCart: CartProduct[] = JSON.parse(localStorage.getItem('cart') as string);
	let desiredItemIndex = parsedCart.findIndex((a) => a.id === itemId);
	const itemToUpdate = parsedCart[desiredItemIndex];
	itemToUpdate.cart_qty = newQty;
	itemToUpdate.cart_subtotal = +(itemToUpdate.cart_qty * (itemToUpdate.price as any)).toFixed(2);

	localStorage.setItem('cart', JSON.stringify(parsedCart));
	console.log({AFTER: parsedCart, desiredItemIndex});

	let total = 0;
	parsedCart.forEach((p) => {
		total += p.cart_subtotal;
	});
	localStorage.setItem('cartTotal', JSON.stringify(total));
	console.log({total});

	dispatch({
		type: UPDATE_CART_QTY,
		payload: parsedCart,
		total
	});
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

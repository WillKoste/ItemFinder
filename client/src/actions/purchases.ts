import {PURCHASES_ERROR, ADD_PURCHASE, GET_PURCHASE, GET_PURCHASES, CLEAR_PURCHASE, REMOVE_PURCHASE} from './types';
import {customAxios} from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {CartProduct, Product, Purchase} from '../types/general';
import {CheckoutForm} from '../types/forms';
import {PurchasesOptions} from '../types/redux';

export const getPurchases = (options?: PurchasesOptions) => async (dispatch: any) => {
	const hasUserId = options && options.userId ? `?user_id=${options.userId}` : ``;

	try {
		const res: AxiosResponse<{purchases: Purchase[]}> = await customAxios.get(`/api/v1/purchases${hasUserId}`);
		dispatch({
			type: GET_PURCHASES,
			payload: res.data.purchases
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PURCHASES_ERROR,
			payload: err
		});
	}
};

export const createPurchase = (formData: CheckoutForm, products: CartProduct[], userId: number) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const {
		billingAddress,
		billingCity,
		billingSameAsShipping,
		billingState,
		billingZipcode,
		shippingAddress,
		shippingCity,
		shippingNotes,
		shippingOption,
		shippingState,
		shippingZipcode,
		cardFirstName,
		cardLastName,
		cardNumber,
		expirationDate,
		securityCode,
		gift
	} = formData;
	const cartTotal = localStorage.getItem('cartTotal');

	const shapedData = {
		items: JSON.stringify(products),
		shippingAddress: `${shippingAddress}, ${shippingCity}, ${shippingState}, ${shippingZipcode}`,
		billingAddress: billingSameAsShipping ? `${shippingAddress}, ${shippingCity}, ${shippingState}, ${shippingZipcode}` : `${billingAddress}, ${billingCity}, ${billingState}, ${billingZipcode}`,
		ccDig: cardNumber,
		gift,
		customerStatus: 'Guest',
		shippingMethod: shippingOption,
		userId,
		cartTotal
	};

	const body = JSON.stringify(shapedData);
	try {
		const res: AxiosResponse<{purchase: Purchase}> = await customAxios.post(`/api/v1/purchases`, body, config);
		dispatch({
			type: ADD_PURCHASE,
			payload: res.data.purchase
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: PURCHASES_ERROR,
			payload: err
		});
	}
};

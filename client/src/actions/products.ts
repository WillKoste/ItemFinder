import {AxiosResponse} from 'axios';
import {Product} from '../types/general';
import {customAxios} from '../utils/customAxios';
import {PRODUCTS_ERROR, GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './types';

export const getProducts =
	(limit: number = 5, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{products: Product[]}> = await customAxios.get(`/api/v1/products?limit=${limit}&offset=${offset}`);
			console.log({res});
			dispatch({
				type: GET_PRODUCTS,
				payload: res.data.products
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: PRODUCTS_ERROR,
				payload: err
			});
		}
	};

export const getProduct = (productId: string) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{product: Product}> = await customAxios.get(`/api/v1/products/${productId}`);
		dispatch({
			type: GET_PRODUCT,
			payload: res.data.product
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PRODUCTS_ERROR,
			payload: err
		});
	}
};

export const createProduct = (formData: any) => async (dispatch: any) => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const body = JSON.stringify(formData);

	try {
		const res: AxiosResponse<{product: Product}> = await customAxios.post(`/api/v1/products`, body, config);
		console.log({res});
		dispatch({
			type: CREATE_PRODUCT,
			payload: res.data.product
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PRODUCTS_ERROR,
			payload: err
		});
	}
};

export const updateContact = () => async (dispatch: any) => {
	console.log('hey');
};

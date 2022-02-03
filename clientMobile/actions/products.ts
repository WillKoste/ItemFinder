import {CREATE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, PRODUCTS_ERROR, PRODUCT_CLEAR} from './types';
import customAxios from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {ProductsOptions, Product, Action} from '../types/redux';
import {clientQueryOptions} from '../utils/clientQueryOptions';

export const getProducts = (options: ProductsOptions) => async (dispatch: any) => {
	const {category, limit, offset} = options;
	const categoryExists = category ? `&category=${category} ` : '';
	try {
		const res: AxiosResponse<{products: Product[]}> = await customAxios.get(`/api/v1/products${options && clientQueryOptions(options)}`);
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

export const getProduct = (productId: number) => async (dispatch: any) => {
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

export const clearProduct = () => async (dispatch: any) => {
	dispatch({
		type: PRODUCT_CLEAR
	});
};

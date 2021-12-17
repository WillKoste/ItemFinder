import {AxiosResponse} from 'axios';
import {Product} from '../types/general';
import {customAxios} from '../utils/customAxios';
import {PRODUCTS_ERROR, GET_PRODUCTS, GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './types';

export const getProducts = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{products: Product[]}> = await customAxios.get('/api/v1/products');
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

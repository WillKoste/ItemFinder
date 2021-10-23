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
	}
};

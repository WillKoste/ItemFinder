import {PRODUCTS_HISTORY_CLEAR, GET_ALL_PRODUCTS_HISTORY, GET_SINGLE_PRODUCTS_HISTORY, GET_PRODUCTS_HISTORY_ERROR} from './types';
import {AxiosResponse} from 'axios';
import {ProductHistory} from '../types/general';
import {customAxios} from '../utils/customAxios';

export const getProductsHistory = (productId: number) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{productHistory: ProductHistory[]}> = await customAxios.get(`/api/v1/productHistory/all/${productId}`);
		console.log({AXIOS: res.data});
		dispatch({
			type: GET_ALL_PRODUCTS_HISTORY,
			payload: res.data.productHistory
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: GET_PRODUCTS_HISTORY_ERROR,
			payload: err
		});
	}
};

export const getProductHistorySingle = (productId: number, productHistoryId: number) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{productHistory: ProductHistory}> = await customAxios.get(`/api/v1/productHistory/single/${productId}/${productHistoryId}`);
		dispatch({
			type: GET_SINGLE_PRODUCTS_HISTORY,
			payload: res.data.productHistory
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: GET_PRODUCTS_HISTORY_ERROR,
			payload: err
		});
	}
};

import {AxiosResponse} from 'axios';
import {ProductHistory} from '../types/general';
import {customAxios} from '../utils/customAxios';

export const getProductsHistory = (productId: number) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{productHistory: ProductHistory[]}> = await customAxios.get(`/api/v1/productHistory/all/${productId}`);
		dispatch({
			payload: res.data.productHistory
		});
	} catch (err) {
		console.error(err);
		dispatch({
			payload: err
		});
	}
};

export const getProductHistorySingle = (productId: number, productHistoryId: number) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{productHistory: ProductHistory}> = await customAxios.get(`/api/v1/productsHistory/single/${productId}/${productHistoryId}`);
		dispatch({
			payload: res.data.productHistory
		});
	} catch (err) {
		console.error(err);
		dispatch({
			payload: err
		});
	}
};

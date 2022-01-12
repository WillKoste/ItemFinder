import {CLEAR_CART} from './types';
import customAxios from '../utils/customAxios';

export const clearCartItems = () => async (dispatch: any) => {
	dispatch({
		type: CLEAR_CART
	});
};

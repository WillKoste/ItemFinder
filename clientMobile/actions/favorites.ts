import {GET_FAVORITES, GET_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITE, FAVORITES_ERROR} from './types';
import {AxiosResponse} from 'axios';
import {Favorite} from '../types/redux';
import customAxios from '../utils/customAxios';

export const getFavorites =
	(userId: number, productId?: number, limit: number = 5, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const productIdQuery = `&productId=${productId}`;
			const res: AxiosResponse<{favorites: Favorite[]}> = await customAxios.get(`/api/v1/favorites?userID=${userId}${productId ? productIdQuery : ''}&limit=${limit}&offset=${offset}`);
			dispatch({
				type: GET_FAVORITES,
				payload: res.data.favorites
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: FAVORITES_ERROR,
				payload: err
			});
		}
	};

export const addFavorite = (userId: number, productId: number) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{favorite: Favorite}> = await customAxios.post(`/api/v1/favorites?userId=${userId}&productId=${productId}`);
		console.log({ADDED_FAV: res.data.favorite});
		dispatch({
			type: ADD_FAVORITE,
			payload: res.data.favorite
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: FAVORITES_ERROR,
			payload: err
		});
	}
};

export const removeFavorite = (favoriteId: number) => async (dispatch: any) => {
	try {
		await customAxios.delete(`/api/v1/favorites/${favoriteId}`);
		dispatch({
			type: REMOVE_FAVORITE
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: FAVORITES_ERROR,
			payload: err
		});
	}
};

export const clearFavorites = () => async (dispatch: any) => {
	dispatch({
		type: CLEAR_FAVORITE
	});
};

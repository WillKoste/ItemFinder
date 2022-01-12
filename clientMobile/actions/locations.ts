import {GET_LOCATIONS, LOCATIONS_ERROR} from './types';
import customAxios from '../utils/customAxios';

export const getLocations = () => async (dispatch: any) => {
	try {
		const res = await customAxios.get(`/api/v1/locations`);
		dispatch({
			type: GET_LOCATIONS,
			payload: res.data
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: LOCATIONS_ERROR,
			payload: err
		});
	}
};

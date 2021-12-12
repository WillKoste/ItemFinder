import {GET_LOCATIONS, GET_LOCATION, CREATE_LOCATION, UPDATE_LOCATION, DELETE_LOCATION, LOCATIONS_ERROR, LOCATIONS_CLEAR} from './types';
import {customAxios} from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {Location} from '../types/general';

export const getLocations = () => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{locations: Location[]}> = await customAxios.get(`/api/v1/locations`);
		dispatch({
			type: GET_LOCATIONS,
			payload: res.data.locations
		});
	} catch (err: any) {
		console.error(err);
		dispatch({
			type: LOCATIONS_ERROR,
			payload: err.response
		});
	}
};

export const getLocation = (locationId: number | string) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{location: Location}> = await customAxios.get(`/api/v1/locations/${locationId}`);
		dispatch({
			type: GET_LOCATION,
			payload: res.data.location
		});
	} catch (err: any) {
		console.error(err);
		dispatch({
			type: LOCATIONS_ERROR,
			payload: err.response
		});
	}
};

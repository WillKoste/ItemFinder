import {PARTNERS_ERROR, GET_PARTNERS, GET_PARTNER, CREATE_PARTNER, UPDATE_PARTNER, DELETE_PARTNER} from './types';
import {customAxios} from '../utils/customAxios';
import {AxiosResponse} from 'axios';
import {Partner} from '../types/general';

export const getPartners =
	(limit: number = 10, offset: number = 0) =>
	async (dispatch: any) => {
		try {
			const res: AxiosResponse<{partners: Partner[]}> = await customAxios.get(`/api/v1/partners?limit=${limit}&offset=${offset}`);

			dispatch({
				type: GET_PARTNERS,
				payload: res.data.partners
			});
		} catch (err) {
			console.error(err);
			dispatch({
				type: PARTNERS_ERROR,
				payload: err
			});
		}
	};

export const getPartner = (partnerId: string) => async (dispatch: any) => {
	try {
		const res: AxiosResponse<{partner: Partner}> = await customAxios.get(`/api/v1/partners/${partnerId}`);

		dispatch({
			type: GET_PARTNER,
			payload: res.data.partner
		});
	} catch (err) {
		console.error(err);
		dispatch({
			type: PARTNERS_ERROR,
			payload: err
		});
	}
};

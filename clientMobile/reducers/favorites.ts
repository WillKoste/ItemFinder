import {GET_FAVORITES} from '../actions/types';
import {Action} from '../types/redux';

const initialState = {};

export default function (state = initialState, action: Action) {
	const {payload, type} = action;
	switch (type) {
		default:
			return state;
	}
}

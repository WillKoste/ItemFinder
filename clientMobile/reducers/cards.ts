import {GET_CARDS, GET_CARD, ADD_CARD, REMOVE_CARD, CARDS_ERROR, CLEAR_CARDS, UPDATE_DEFAULT_CARD} from '../actions/types';
import {Action, CreditCardsReducer} from '../types/redux';

const initialState: CreditCardsReducer = {
	cards: [],
	card: null,
	loadingCards: true,
	loadingCard: true,
	error: null,
	success: null
};

export default function (state = initialState, action: Action) {
	const {type, payload, cardId} = action;
	switch (type) {
		case GET_CARDS:
			return {
				...state,
				cards: payload,
				loadingCards: false,
				error: null,
				success: true
			};
		case GET_CARD:
			return {
				...state,
				card: payload,
				loadingCard: false,
				error: null,
				success: true
			};
		case ADD_CARD:
			return {
				...state,
				loadingCards: false,
				loadingCard: false,
				success: true,
				error: null,
				cards: [payload, ...state.cards]
			};
		case REMOVE_CARD:
			return {
				...state,
				loadingCards: false,
				loadingCard: false,
				success: true,
				error: null,
				cards: state.cards.filter((c) => c.id !== cardId)
			};
		case UPDATE_DEFAULT_CARD:
			const originDefaultCard = state.cards.find((a) => a.use_as_default === true);
			const newDefaultCard = state.cards.find((b) => b.id === cardId);

			console.log({originDefaultCard});
			if (originDefaultCard) {
				return {
					...state,
					cards: [...state.cards, ((originDefaultCard as any).use_as_default = false), ((newDefaultCard as any).use_as_default = true)]
				};
			} else {
				return {
					...state,
					cards: [...state.cards, ((newDefaultCard as any).use_as_default = true)]
				};
			}
		case CARDS_ERROR:
			return {
				...state,
				cards: [],
				card: null,
				loadingCards: false,
				loadingCard: false,
				error: payload,
				success: false
			};
		case CLEAR_CARDS:
			return {
				...state,
				cards: [],
				card: null
			};
		default:
			return state;
	}
}

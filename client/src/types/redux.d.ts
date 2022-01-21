export interface Dispatch {
	type: string;
	payload?: any;
}
export interface Action {
	type: string;
	payload?: any;
	total?: number;
	revId?: number;
	cardId?: string;
	newRating?: number;
	voteTypeVal?: number;
}

export interface ProductsOptions {
	limit: number;
	offset?: number;
	category?: string;
}

export interface CreditCardsOptions {
	limit?: number;
	offset?: number;
	order_by?: 'asc' | 'desc';
}

export interface PurchasesOptions {
	user_id?: number;
	order_by?: 'asc' | 'desc';
	limit?: number;
}

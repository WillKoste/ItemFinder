export interface Dispatch {
	type: string;
	payload?: any;
}
export interface Action {
	type: string;
	payload?: any;
	total?: number;
	revId?: number;
	newRating?: number;
	voteTypeVal?: number;
}

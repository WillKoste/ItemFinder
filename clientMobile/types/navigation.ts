import {AuthParamList, HomeParamList, AccountParamList, CartParamList, TrendsParamList} from './paramList';

export type RootStackParamList = {
	Home: {hey: string} | undefined;
	Product: undefined;
	Account: undefined;
	Favorites: undefined;
	Trends: undefined;
	Splash: undefined;
	LoginComponent: undefined;
	RegisterComponent: undefined;
};

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AuthParamList {}
		interface RootParamList extends HomeParamList {}
		interface RootParamList extends AccountParamList {}
		interface RootParamList extends CartParamList {}
		interface RootParamList extends TrendsParamList {}
	}
}

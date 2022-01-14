import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
	Home: undefined;
	Account: undefined;
	Favorites: undefined;
	Trends: undefined;
	Splash: undefined;
	LoginComponent: undefined;
	RegisterComponent: undefined;
};

export type splashNavProps = StackNavigationProp<RootStackParamList, 'Splash'>;
export type loginNavProps = StackNavigationProp<RootStackParamList, 'LoginComponent'>;
export type registerNavProps = StackNavigationProp<RootStackParamList, 'RegisterComponent'>;
export type homeNavProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type accountNavProps = StackNavigationProp<RootStackParamList, 'Account'>;
export type favoritesNavProps = StackNavigationProp<RootStackParamList, 'Favorites'>;
export type trendsNavProps = StackNavigationProp<RootStackParamList, 'Trends'>;

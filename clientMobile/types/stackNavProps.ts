import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import {HomeParamList, AccountParamList, AuthParamList, CartParamList, TrendsParamList} from './paramList';

export type HomeStackNavProps<T extends keyof HomeParamList> = {
	navigation: StackNavigationProp<HomeParamList, T>;
	route: RouteProp<HomeParamList, T>;
};

export type TrendsStackNavProps<T extends keyof TrendsParamList> = {
	navigation: StackNavigationProp<TrendsParamList, T>;
	route: RouteProp<TrendsParamList, T>;
};

export type CartStackNavProps<T extends keyof CartParamList> = {
	navigation: StackNavigationProp<CartParamList, T>;
	route: RouteProp<CartParamList, T>;
};

export type AccountStackNavProps<T extends keyof AccountParamList> = {
	navigation: StackNavigationProp<AccountParamList, T>;
	route: RouteProp<AccountParamList, T>;
};

export type AuthStackNavProps<T extends keyof AuthParamList> = {
	navigation: StackNavigationProp<AuthParamList, T>;
	route: RouteProp<AuthParamList, T>;
};

import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkAuthToken} from './setAuthToken';

export const saveSession = async (key: string, value: string) => {
	try {
		console.log({key, value});
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.log(err);
	}
};

export const getSessionToken = async (key: string) => {
	try {
		const result = await AsyncStorage.getItem(key);
		console.log({result});
		checkAuthToken(result);
	} catch (err) {
		console.log(err);
	}
};

export const getAllTokens = async () => {
	try {
		const results = await AsyncStorage.getAllKeys();
		if (results) {
			console.log({results2: results});
		} else {
			console.log('noope');
		}
	} catch (err) {
		console.log(err);
	}
};

export const deleteToken = async (key: string) => {
	await AsyncStorage.removeItem(key);
};

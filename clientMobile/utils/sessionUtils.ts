import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSession = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (err) {
		console.log(err);
	}
};

export const getSessionToken = async (key: string) => {
	try {
		const result = await AsyncStorage.getItem(key);

		if (result) {
			console.log({result});
		} else {
			console.log('Didnt work :C');
		}
	} catch (err) {
		console.log(err);
	}
};

export const getAllTokens = async () => {
	try {
		const results = await AsyncStorage.getAllKeys();
		await AsyncStorage.removeItem('token');

		if (results) {
			console.log({results2: results});
		} else {
			console.log('noope');
		}
	} catch (err) {
		console.log(err);
	}
};

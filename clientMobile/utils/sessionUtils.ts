// import SecureStore from 'expo-secure-store';
// import SInfo from 'react-native-sensitive-info';
import {v4 as uuidv4} from 'uuid';

// export const saveSession = async (key: string, session: string) => {
// 	try {
// 		const sessionSecId = uuidv4();
// 		const saveSessionString = `s:${session}:${sessionSecId}`;
// 		await SInfo.setItem(key, encodeURIComponent(saveSessionString), {});
// 		console.log('It went through c:');
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// export const getValueFor = async (key: string) => {
// 	const result = await SInfo.getAllItems({});
// };

// export const saveSession = async (key: string, session: string) => {
// 	console.log('running');
// 	const sessionSecId = Math.floor(Math.random() * 1000000000);
// 	const saveSessionString = `s:${session}:${sessionSecId}`;

// 	try {
// 		console.log({key, encoded: encodeURIComponent(saveSessionString)});
// 		await SecureStore.setItemAsync(key, encodeURIComponent(saveSessionString));
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// export const getValueFor = async (key: string) => {
// 	try {
// 		let result = await SecureStore.getItemAsync(key);
// 		if (result) {
// 			console.log({clientSessionThingy: result});
// 		} else {
// 			return false;
// 		}
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

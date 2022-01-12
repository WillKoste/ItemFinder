import {StyleSheet} from 'react-native';
import {borderRadius, darkColor} from './config';

export const formStyles = StyleSheet.create({
	form: {
		width: '100%'
	},
	formGroup: {
		marginBottom: 10
	},
	formLabel: {
		fontSize: 16,
		paddingVertical: 4
	},
	formControl: {
		borderStyle: 'solid',
		borderColor: darkColor,
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderRadius,
		fontSize: 16
	}
});

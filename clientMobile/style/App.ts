import {StyleSheet} from 'react-native';
import {aCenter, borderRadius, jCenter, lightColor, primaryColor} from './fragments/config';

export const styles = StyleSheet.create({
	authHeader: {
		fontSize: 46,
		marginBottom: 165,
		marginTop: 100,
		paddingVertical: 10,
		paddingTop: 48,
		paddingHorizontal: 6,
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%',
		color: lightColor,
		flex: 4,
		backgroundColor: primaryColor,
		borderRadius
	},
	splashHeader: {
		fontSize: 52,
		marginBottom: 200,
		paddingVertical: 10,
		alignSelf: 'center',
		justifyContent: jCenter,
		color: lightColor
	},
	splashImage: {
		width: '100%',
		height: '100%',
		justifyContent: jCenter,
		alignItems: aCenter
	}
});

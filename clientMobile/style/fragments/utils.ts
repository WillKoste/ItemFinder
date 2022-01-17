import {StyleSheet} from 'react-native';
import {aCenter, jCenter, innerWidth, borderRadius, lightColor, darkColor, primaryColor, secondaryColor, highlightColor, successColor, dangerColor} from './config';

export const utils = StyleSheet.create({
	outerContainer: {
		// flex: 1,
		alignItems: aCenter,
		justifyContent: jCenter,
		backgroundColor: '#f4f4f4'
	},
	innerContainer: {
		width: innerWidth,
		alignItems: aCenter
	},
	textLight: {color: lightColor},
	textDark: {color: darkColor},
	textPrimary: {color: primaryColor},
	textSecondary: {color: secondaryColor},
	textHighlight: {color: highlightColor},
	textSuccess: {color: successColor},
	textDanger: {color: dangerColor},
	btnLight: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: lightColor,
		alignItems: aCenter,
		justifyContent: 'center',
		borderColor: '#cecece',
		borderWidth: 1,
		borderStyle: 'solid'
	},
	btnDark: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: darkColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnPrimary: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: primaryColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnSecondary: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: secondaryColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnHighlight: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: highlightColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnSuccess: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: successColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnDanger: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 16,
		borderRadius,
		backgroundColor: dangerColor,
		alignItems: aCenter,
		justifyContent: 'center'
	},
	btnTextLight: {
		color: lightColor,
		fontSize: 18
	},
	btnTextDark: {
		color: darkColor,
		fontSize: 18
	},
	contentContainer: {
		alignItems: aCenter,
		justifyContent: 'center'
	},
	scrollOuterContainer: {
		flex: 1,
		backgroundColor: '#f4f4f4'
	},
	searchContainer: {
		width: '100%',
		paddingHorizontal: 3,
		height: 40,
		backgroundColor: '#fff',
		color: darkColor,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#888',
		borderStyle: 'solid',
		textDecorationStyle: 'none',
		marginVertical: 14
	},
	moduleScrollOuterContainer: {
		backgroundColor: '#fff',
		width: '100%'
	}
});

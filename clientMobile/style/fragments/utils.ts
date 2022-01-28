import {StyleSheet} from 'react-native';
import {aCenter, jCenter, innerWidth, borderRadius, lightColor, darkColor, primaryColor, secondaryColor, highlightColor, successColor, dangerColor, marginV, padding1, padding2, padding3, margin1, margin2, margin3, noPaddingOrMargin} from './config';

export const utils = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10
	},
	fullWidth: {
		width: innerWidth,
		alignItems: aCenter
	},
	image: {
		width: '100%',
		height: '100%'
	},
	textLight: {color: lightColor},
	textDark: {color: darkColor},
	textPrimary: {color: primaryColor},
	textSecondary: {color: secondaryColor},
	textHighlight: {color: highlightColor},
	textSuccess: {color: successColor},
	textDanger: {color: dangerColor},
	headerSm: {
		fontSize: 16,
		marginVertical: marginV
	},
	headerMd: {
		fontSize: 28,
		marginVertical: marginV
	},
	headerLg: {
		fontSize: 38,
		marginVertical: marginV
	},
	headerXl: {
		fontSize: 46,
		marginVertical: marginV
	},
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
	bgPrimary: {
		backgroundColor: primaryColor
	},
	bgSecondary: {
		backgroundColor: secondaryColor
	},
	bgHighlight: {
		backgroundColor: highlightColor
	},
	bgDark: {
		backgroundColor: darkColor
	},
	bgLight: {
		backgroundColor: lightColor
	},
	bgDanger: {
		backgroundColor: dangerColor
	},
	bgSuccess: {
		backgroundColor: successColor
	},
	contentContainer: {
		alignItems: aCenter,
		justifyContent: 'center'
	},
	scrollcontainer: {
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
	moduleScrollcontainer: {
		backgroundColor: '#fff',
		width: '100%'
	},

	gridView: {
		marginTop: 10,
		flex: 1
	},
	itemContainer: {
		justifyContent: 'flex-end',
		borderRadius: 5,
		padding: 10,
		backgroundColor: 'purple',
		height: 150
	},
	itemName: {
		fontSize: 16,
		color: 'red',
		fontWeight: '600'
	},
	itemCode: {
		fontWeight: '600',
		fontSize: 12,
		color: '#fff'
	},
	// PADDING & MARGIN
	p1: {padding: padding1},
	p2: {padding: padding2},
	p3: {padding: padding3},
	py1: {paddingVertical: padding1},
	py2: {paddingVertical: padding2},
	py3: {paddingVertical: padding3},
	px1: {paddingHorizontal: padding1},
	px2: {paddingHorizontal: padding2},
	px3: {paddingHorizontal: padding3},
	m1: {margin: margin1},
	m2: {margin: margin2},
	m3: {margin: margin3},
	my1: {marginVertical: margin1},
	my2: {marginVertical: margin2},
	my3: {marginVertical: margin3},
	mx1: {marginHorizontal: margin1},
	mx2: {marginHorizontal: margin2},
	mx3: {marginHorizontal: margin3},
	noP: {padding: noPaddingOrMargin},
	noPy: {paddingVertical: noPaddingOrMargin},
	noPx: {paddingHorizontal: noPaddingOrMargin},
	noM: {margin: noPaddingOrMargin},
	noMy: {marginVertical: noPaddingOrMargin},
	noMx: {marginHorizontal: noPaddingOrMargin}
});

import {StyleSheet} from 'react-native';

const borderRadius = 10;

export const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f4f4f4'
	},
	innerContainer: {
		width: '96%',
		alignItems: 'center'
	},
	textWhite: {color: '#fff', fontSize: 15},
	textDark: {color: '#fff'},
	btn: {
		marginVertical: 6,
		width: '100%',
		paddingVertical: 12,
		borderRadius: 15,
		backgroundColor: 'purple',
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnTextWhite: {
		color: '#fff',
		fontSize: 18
	},
	contentContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	scrollOuterContainer: {
		flex: 1,
		backgroundColor: '#f4f4f4'
	},
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
		borderColor: '#444',
		borderWidth: 1,
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderRadius,
		fontSize: 16
	},
	authHeader: {
		fontSize: 46,
		marginBottom: 45,
		marginTop: 100,
		paddingVertical: 10,
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
		width: '100%',
		color: '#000',
		flex: 4
	},
	splashHeader: {
		fontSize: 40,
		marginBottom: 100,
		paddingVertical: 10,
		alignSelf: 'center',
		justifyContent: 'center',
		color: '#000'
	}
});

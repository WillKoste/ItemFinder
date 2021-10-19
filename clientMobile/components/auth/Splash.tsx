import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {splashNavProps} from '../../types/navigation';
import {styles} from '../../style/App';
// import {getValueFor} from '../../utils/sessionUtils';
const {textWhite, btn, innerContainer, outerContainer, splashHeader} = styles;

interface SplashProps {}

const Splash: React.FC<SplashProps> = ({}) => {
	const navigation = useNavigation<splashNavProps>();

	navigation.navigate('Splash');

	return (
		<View style={outerContainer}>
			<View style={innerContainer}>
				<Text style={splashHeader}>Splash Page</Text>
				<View style={{width: '100%', paddingBottom: 100}}>
					<TouchableOpacity style={btn} activeOpacity={0.9} onPress={() => navigation.navigate('Register')}>
						{/* <TouchableOpacity style={btn} activeOpacity={0.9} onPress={async () => await getValueFor('w7id')}> */}
						<Text style={textWhite}>Register</Text>
					</TouchableOpacity>
					<TouchableOpacity style={btn} activeOpacity={0.9} onPress={() => navigation.navigate('Login')}>
						<Text style={textWhite}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default Splash;

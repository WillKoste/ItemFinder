import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {getAllTokens} from '../../../utils/sessionUtils';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	useEffect(() => {
		getAllTokens();
	});

	return (
		<View>
			<Text>Home Page</Text>
		</View>
	);
};

export default Home;

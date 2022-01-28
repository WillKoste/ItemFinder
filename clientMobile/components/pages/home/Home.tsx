import React, {Fragment, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getAllTokens} from '../../../utils/sessionUtils';
import Block2 from './Block2';
import {utils} from '../../../style/fragments/utils';
import {styles} from '../../../style/App';
// const {} = styles
const {headerMd, container, bgPrimary, textLight, p1, py3} = utils;

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	useEffect(() => {
		getAllTokens();
	});

	return (
		<ScrollView style={{flex: 1}}>
			<View style={{paddingHorizontal: 10, ...bgPrimary}}>
				<Text style={[headerMd, textLight, py3]}>Things to check out</Text>
			</View>
			<Block2 />
		</ScrollView>
	);
};

export default Home;

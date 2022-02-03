import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {utils} from '../../../../style/fragments/utils';
const {mx2, my2, m2} = utils;
const ProfPic = require('../../../../images/Nathan-pic.jpg');

interface SettingsTopProps {}

const SettingsTop: React.FC<SettingsTopProps> = () => {
	const buttons = [
		{
			id: 1,
			label: 'View Orders',
			background: '#111d4a',
			text: '#fff8f0'
		},
		{
			id: 2,
			label: 'Membership',
			background: '#a997df',
			text: '#000'
		},
		{
			id: 3,
			label: 'Returns',
			background: '#ffcf99',
			text: '#000'
		},
		{
			id: 4,
			label: 'Logout',
			background: '#1e1e24',
			text: '#fff8f0'
		}
	];

	return (
		<View style={{marginVertical: 24, marginHorizontal: 36, alignItems: 'center'}}>
			<View style={{borderRadius: 2000, width: 300, height: 300, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
				<Image source={ProfPic} style={{borderRadius: 15000, width: 275, height: 275}} />
			</View>
			<FlatGrid
				renderItem={({item}) => (
					<TouchableOpacity key={item.id} style={[{backgroundColor: item.background}]}>
						<Text style={[{color: item.text, textAlign: 'center'}]}>{item.label}</Text>
					</TouchableOpacity>
				)}
				data={buttons}
			/>
			<Text>FUKKKKKK</Text>
		</View>
	);
};

export default SettingsTop;

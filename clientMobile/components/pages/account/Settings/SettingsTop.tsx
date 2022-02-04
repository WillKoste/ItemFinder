import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {utils} from '../../../../style/fragments/utils';
import {ButtonVarient} from '../../../../utils/determineBtnStyling';
import Button from '../../../reusable/buttons/Button';
const {mx2, my2, m2} = utils;
const ProfPic = require('../../../../images/Nathan-pic.jpg');

interface SettingsTopProps {}

const SettingsTop: React.FC<SettingsTopProps> = () => {
	const buttons: {
		id: number;
		label: string;
		background: string;
		variant: ButtonVarient;
		text: string;
	}[] = [
		{
			id: 1,
			label: 'View Orders',
			background: '#111d4a',
			variant: 'primary',
			text: '#fff8f0'
		},
		{
			id: 2,
			label: 'Membership',
			background: '#a997df',
			variant: 'secondary',
			text: '#000'
		},
		{
			id: 3,
			label: 'Returns',
			background: '#ffcf99',
			variant: 'highlight',
			text: '#000'
		},
		{
			id: 4,
			label: 'Logout',
			background: '#1e1e24',
			variant: 'dark',
			text: '#fff8f0'
		}
	];

	return (
		<View style={{marginVertical: 24, marginHorizontal: 36, alignItems: 'center'}}>
			<View style={{borderRadius: 2000, width: 300, height: 300, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
				<Image source={ProfPic} style={{borderRadius: 15000, width: 275, height: 275}} />
			</View>
			<FlatGrid renderItem={({item}) => <Button key={item.id} btnText={item.label} btnVariant={item.variant} btnFont={18} />} data={buttons} />
		</View>
	);
};

export default SettingsTop;

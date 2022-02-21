import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';
import {utils} from '../../../../style/fragments/utils';
import {ButtonVarient} from '../../../../utils/determineBtnStyling';
import Button from '../../../reusable/buttons/Button';
import {UserReducer} from '../../../../types/redux';
import {logout} from '../../../../actions/auth';
const {headerMd} = utils;
const ProfPic = require('../../../../images/Nathan-pic.jpg');

interface SettingsTopProps {
	authRed: UserReducer;
	logout: () => void;
}

const SettingsTop: React.FC<SettingsTopProps> = ({authRed: {token}, logout}) => {
	const buttons: {
		id: number;
		label: string;
		background: string;
		variant: ButtonVarient;
		text: string;
		onClick?: any;
	}[] = [
		{
			id: 1,
			label: 'View Orders',
			background: '#111d4a',
			variant: 'primary',
			text: '#fff8f0',
			onClick: () => console.log('View da orders')
		},
		{
			id: 2,
			label: 'Membership',
			background: '#a997df',
			variant: 'secondary',
			text: '#000',
			onClick: () => console.log('clicked')
		},
		{
			id: 3,
			label: 'Returns',
			background: '#ffcf99',
			variant: 'highlight',
			text: '#000',
			onClick: () => console.log('clicked')
		},
		{
			id: 4,
			label: 'Logout',
			background: '#1e1e24',
			variant: 'dark',
			text: '#fff8f0',
			onClick: () => logout()
		}
	];

	return (
		<View style={{marginVertical: 24, marginHorizontal: 36, alignItems: 'center'}}>
			<View style={{borderRadius: 2000, width: 300, height: 300, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
				<Image source={ProfPic} style={{borderRadius: 15000, width: 275, height: 275}} />
			</View>
			<Text style={[headerMd]}>{token?.email2}</Text>
			<FlatGrid renderItem={({item}) => <Button iconProps={{}} onPress={item.onClick} key={item.id} btnText={item.label} btnVariant={item.variant} btnFont={18} />} data={buttons} />
		</View>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {logout})(SettingsTop);

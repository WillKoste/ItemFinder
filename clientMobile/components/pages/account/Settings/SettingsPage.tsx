import React from 'react';
import {View, Text} from 'react-native';
import ScrollableContainer from '../../../reusable/hoc/ScrollableContainer';
import SettingsTop from './SettingsTop';

interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = () => {
	return (
		<View style={{flex: 1}}>
			<SettingsTop />
		</View>
	);
};

export default SettingsPage;

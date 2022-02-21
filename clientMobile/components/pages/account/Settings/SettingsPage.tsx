import React from 'react';
import {ScrollView} from 'react-native';
import SettingsChangePassword from './SettingsChangePassword';
import SettingsMyInfo from './SettingsMyInfo';
import SettingsTop from './SettingsTop';

interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = () => {
	return (
		<ScrollView style={{flex: 1}}>
			<SettingsTop />
			<SettingsMyInfo />
			<SettingsChangePassword />
		</ScrollView>
	);
};

export default SettingsPage;

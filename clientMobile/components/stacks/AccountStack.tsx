import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../pages/account/Account';
const Stack = createStackNavigator();

interface AccountStackProps {}

const AccountStack: React.FC<AccountStackProps> = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Account' component={Account} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default AccountStack;

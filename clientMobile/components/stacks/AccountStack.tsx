import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../pages/account/Account';
import {getCurrentUser} from '../../actions/auth';
const Stack = createStackNavigator();

interface AccountStackProps {}

const AccountStack: React.FC<AccountStackProps> = () => {
	useEffect(() => {
		getCurrentUser();
	}, []);

	return (
		<Stack.Navigator>
			<Stack.Screen name='Account' component={Account} options={{headerTransparent: true, headerTitle: ''}} />
		</Stack.Navigator>
	);
};

export default connect(null, {})(AccountStack);

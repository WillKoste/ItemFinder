import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import AccountStack from '../stacks/AccountStack';
import HomeStack from '../stacks/HomeStack';
import TrendsStack from '../stacks/TrendsStack';
import {secondaryColor} from '../../style/fragments/config';
import CartStack from '../stacks/CartStack';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<Tab.Navigator
			screenOptions={({route}) => ({
				tabBarHideOnKeyboard: true,
				tabBarStyle: {},
				tabBarIcon: ({color, focused, size}) => {
					if (route.name === 'HomeStack') {
						return <Icon name='user' color={focused ? secondaryColor : color} size={size} />;
					} else if (route.name === 'AccountStack') {
						return <Icon name='user-circle' color={focused ? secondaryColor : color} size={size} />;
					} else if (route.name === 'TrendsStack') {
						return <Icon name='chart-line' color={focused ? secondaryColor : color} size={size} />;
					} else if (route.name === 'CartStack') {
						return <Icon name='shopping-cart' color={focused ? secondaryColor : color} size={size} />;
					}
				}
			})}
		>
			<Tab.Screen name='HomeStack' component={HomeStack} options={{headerShown: false, tabBarActiveTintColor: secondaryColor, tabBarLabel: 'Home'}} />
			<Tab.Screen name='TrendsStack' component={TrendsStack} options={{headerShown: false, tabBarActiveTintColor: secondaryColor, tabBarLabel: 'Trends'}} />
			<Tab.Screen name='CartStack' component={CartStack} options={{headerShown: false, tabBarActiveTintColor: secondaryColor, tabBarLabel: 'Cart'}} />
			<Tab.Screen name='AccountStack' component={AccountStack} options={{headerShown: false, tabBarActiveTintColor: secondaryColor, tabBarLabel: 'Account'}} />
		</Tab.Navigator>
	);
};

export default Navbar;

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {ContactsReducer, ProductsReducer, UserReducer} from '../../types/redux';
import Navbar from '../layout/Navbar';
import AuthStack from '../stacks/AuthStack';
import {getCurrentUser} from '../../actions/auth';
import store from '../../store';
import {getSessionToken} from '../../utils/sessionUtils';
import {SESSION_NAME} from '../../utils/constants';

interface RoutesProps {
	authRed: UserReducer;
	productsRed: ProductsReducer;
	contactsRed: ContactsReducer;
	getCurrentUser: () => void;
}

getSessionToken(SESSION_NAME);

const Routes: React.FC<RoutesProps> = ({authRed, productsRed, getCurrentUser, contactsRed}) => {
	useEffect(() => {
		if (!authRed.user) {
			getCurrentUser();
		}
	}, [authRed.user]);

	useEffect(() => {
		console.log({REDUX_STORE: store.getState(), contactsRed});
	}, [authRed, productsRed, contactsRed]);

	return <NavigationContainer>{authRed.loading ? <Text>Loading...</Text> : authRed.isAuthenticated ? <Navbar /> : <AuthStack />}</NavigationContainer>;
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed,
	productsRed: state.productsRed,
	contactsRed: state.contactsRed
});

export default connect(mapStateToProps, {getCurrentUser})(Routes);

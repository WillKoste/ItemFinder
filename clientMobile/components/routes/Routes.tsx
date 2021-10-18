import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Store} from 'redux';
import {UserReducer} from '../../types/redux';
import Navbar from '../layout/Navbar';
import AuthStack from '../stacks/AuthStack';
import {getCurrentUser} from '../../actions/auth';

interface RoutesProps {
	store: Store;
	authRed: UserReducer;
	getCurrentUser: () => void;
}

const Routes: React.FC<RoutesProps> = ({store, authRed, getCurrentUser}) => {
	useEffect(() => {
		getCurrentUser();
	}, []);

	useEffect(() => {
		console.log({REDUX_STORE: store.getState()});
	}, [authRed]);

	return <NavigationContainer>{authRed.loading ? <Text>Loading...</Text> : authRed.isAuthenticated ? <Navbar /> : <AuthStack />}</NavigationContainer>;
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {getCurrentUser})(Routes);

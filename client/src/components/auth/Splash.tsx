import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {RootRedTypes, UserReducer} from '../../types/general';

interface SplashProps {
	authRed: UserReducer;
}

const Splash: React.FC<SplashProps> = ({authRed: {isAuthenticated}}) => {
	return isAuthenticated ? (
		<Redirect to='/home' />
	) : (
		<div className='splash'>
			<div className='container'>
				<h1>Splash Page</h1>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {})(Splash);

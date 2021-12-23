import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {RootRedTypes, UserReducer} from '../../types/general';

interface SplashProps {
	authRed: UserReducer;
}

const Splash: React.FC<SplashProps> = ({authRed: {isAuthenticated}}) => {
	return isAuthenticated ? (
		<Redirect to='/home' />
	) : (
		<div className='splash'>
			<div className='dark-overlay'>
				<div className='container'>
					<h1>Item Finder</h1>
					<p className='lead'>Find today's most popular products and learn more about availability and price.</p>
					<div className='splash-btns'>
						<Link className='btn btn-highlight' to='/login'>
							Login
						</Link>
						<Link className='btn btn-light' to='/register'>
							Register
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {})(Splash);

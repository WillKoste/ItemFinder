import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import {UserReducer} from '../../types/general';

interface NavbarProps {
	logout: () => void;
	authRed: UserReducer;
}

const Navbar: React.FC<NavbarProps> = ({logout, authRed: {isAuthenticated}}) => {
	return (
		<div className='navbar bg-primary'>
			<div className='navbar-brand'>
				<h1>ItemFinder</h1>
			</div>
			<ul className='navbar-links'>
				{!isAuthenticated ? (
					<Fragment>
						<li>
							<NavLink to='/' exact activeClassName='current'>
								Splash
							</NavLink>
						</li>
						<li>
							<NavLink to='/login' exact activeClassName='current'>
								Login
							</NavLink>
						</li>
						<li>
							<NavLink to='/register' exact activeClassName='current'>
								Register
							</NavLink>
						</li>
					</Fragment>
				) : (
					<Fragment>
						<li>
							<NavLink to='/home' exact activeClassName='current'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/trends' exact activeClassName='current'>
								Trends
							</NavLink>
						</li>
						<li>
							<NavLink to='/favorites' exact activeClassName='current'>
								Favorites
							</NavLink>
						</li>
						<li>
							<NavLink to='/account' exact activeClassName='current'>
								Account
							</NavLink>
						</li>
						<li>
							<NavLink to='/login' exact onClick={logout}>
								Logout
							</NavLink>
						</li>
					</Fragment>
				)}
			</ul>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed
});

export default connect(mapStateToProps, {logout})(Navbar);

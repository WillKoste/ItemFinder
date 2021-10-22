import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

interface NavbarProps {
	logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({logout}) => {
	return (
		<div className='navbar bg-primary'>
			<div className='navbar-brand'>
				<button className='btn btn-dark' onClick={logout}>
					Logout
				</button>
			</div>
			<ul className='navbar-links'>
				<li>
					<NavLink to='/' exact activeClassName='current' onClick={logout}>
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
					<NavLink to='/' exact activeClassName='current'>
						Logout
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default connect(null, {logout})(Navbar);

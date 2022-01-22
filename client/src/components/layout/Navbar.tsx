import React, {Fragment} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import {CartReducer, UserReducer} from '../../types/general';
import NavbarSearch from './NavbarSearch';
import NavbarDropdown from './NavbarDropdown';
import {Tabs} from '../../types/table';

interface NavbarProps {
	logout: () => void;
	authRed: UserReducer;
	cartItemsRed: CartReducer;
}

const Navbar: React.FC<NavbarProps> = ({logout, authRed: {isAuthenticated}, cartItemsRed: {items}}) => {
	const dropdownTabs: Tabs[] = [
		{
			id: 4,
			title: 'Account',
			path: '/account'
		},
		{
			id: 1,
			title: 'Account Settings',
			path: '/account/settings'
		},
		{
			id: 2,
			title: 'Favorites',
			path: '/favorites'
		},
		{
			id: 3,
			title: 'Logout',
			path: '/login',
			action: () => logout()
		}
	];

	return (
		<div className='navbar bg-primary'>
			<div className='navbar-brand'>
				<Link to='/home'>
					<h1>ItemFinder</h1>
				</Link>
			</div>
			<NavbarSearch />
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
							<NavLink to='/cart' activeClassName='current'>
								<i className='fas fa-shopping-cart'></i> Cart {items.length > 0 ? `(${items.length})` : null}
							</NavLink>
						</li>
						<NavbarDropdown tabs={dropdownTabs} title='Account' dropdownWidth={150} left={-25} />
						{/* <li>
							<NavLink to='/login' exact onClick={logout}>
								Logout
							</NavLink>
						</li> */}
					</Fragment>
				)}
			</ul>
		</div>
	);
};

const mapStateToProps = (state: any) => ({
	authRed: state.authRed,
	cartItemsRed: state.cartItemsRed
});

export default connect(mapStateToProps, {logout})(Navbar);

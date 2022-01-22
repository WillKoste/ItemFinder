import React, {useState, useRef, forwardRef} from 'react';
import {Link} from 'react-router-dom';
import {Tabs} from '../../types/table';

interface NavbarDropdownProps {
	title: string;
	dropdownWidth?: number;
	left?: number;
	tabs: Tabs[];
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({title, dropdownWidth = 150, left = -20, tabs}) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef();

	return (
		<li className='dropdown-li'>
			<a
				ref={dropdownRef as any}
				onBlur={(e) => {
					// setDropdownOpen(false)
					// console.log({hi: e.currentTarget});
					// if (!e.currentTarget.hasChildNodes()) {
					// 	console.log('Do it now');
					// }

					if (!dropdownRef) {
						console.log('HEY DUDE');
					}
				}}
				onClick={() => setDropdownOpen(!dropdownOpen)}
				href='#'
				className='dropdown-toggle'
			>
				{title}
				<i className='fas fa-chevron-down ml-1'></i>
			</a>
			{dropdownOpen ? (
				<ul className='dropdown-ul' style={{width: `${dropdownWidth}px`, left: `${left}px`}}>
					{tabs.length > 0
						? tabs.map((tab) => (
								<li key={tab.id}>
									<Link
										onClick={() => {
											if (tab.action) {
												tab.action();
											}
											setDropdownOpen(false);
										}}
										to={tab.path}
									>
										{tab.title}
									</Link>
								</li>
						  ))
						: null}
					{/* <li>
						<Link to='/hey'>Account Settings</Link>
					</li>
					<li>
						<Link to='/hi'>Favorites</Link>
					</li>
					<li>
						<Link to='/login'>Logout</Link>
					</li> */}
				</ul>
			) : null}
		</li>
	);
};

export default NavbarDropdown;

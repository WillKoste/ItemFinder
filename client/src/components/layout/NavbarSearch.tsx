import React, {ChangeEvent, useState} from 'react';

interface NavbarSearchProps {}

const NavbarSearch: React.FC<NavbarSearchProps> = () => {
	const [searchVal, setSearchVal] = useState('');

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchVal(e.target.value);
	};

	const onSearchSubmit = (e: any) => {
		e.preventDefault();
		console.log(searchVal);
	};

	console.log({searchVal});

	return (
		<form className='navbar-search' onSubmit={onSearchSubmit}>
			<input type='text' className='form-control' value={searchVal} onChange={onChange} />
			<button type='submit' className='search-submit'>
				<i className='fas fa-search'></i>
			</button>
		</form>
	);
};

export default NavbarSearch;

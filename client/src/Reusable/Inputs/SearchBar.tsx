import React from 'react';

interface SearchBarProps {
	placeHolder?: string;
	onSearch?: (e: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeHolder, onSearch}) => {
	return (
		<form className='form search-bar' onSubmit={onSearch}>
			<div className='form-group'>
				<input type='text' className='form-control' placeholder={placeHolder} />
			</div>
			<div className='search-submit'>
				<i className='fas fa-search'></i>
			</div>
		</form>
	);
};

export default SearchBar;

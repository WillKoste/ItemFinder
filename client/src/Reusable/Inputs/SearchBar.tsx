import React from 'react';

interface SearchBarProps {
	placeHolder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({placeHolder}) => {
	const onSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<form className='form search-bar' onSubmit={onSubmit}>
			<div className='form-group'>
				<input type='text' className='form-control' placeholder={placeHolder} />
			</div>
		</form>
	);
};

export default SearchBar;
